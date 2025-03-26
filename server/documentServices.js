const { DocumentAnalysisClient, AzureKeyCredential } = require("@azure/ai-form-recognizer");
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const os = require('os');
const path = require('path');

// Azure Document Intelligence configuration
const endpoint = process.env.AZURE_DOCUMENT_ENDPOINT;
const apiKey = process.env.AZURE_DOCUMENT_KEY;

/**
 * Processes a document using Azure Document Intelligence
 * @param {Buffer} documentBuffer - The document file buffer
 * @param {string} mimeType - The MIME type of the document
 * @returns {Promise<string>} - The extracted text content
 */
async function processDocumentWithAzure(documentBuffer, mimeType) {
  // Create a temporary file to store the document
  const tempFilePath = path.join(os.tmpdir(), `document-${uuidv4()}`);
  try {
    // Write the buffer to a temporary file
    fs.writeFileSync(tempFilePath, documentBuffer);

    // For text files, read directly instead of using Azure services
    if (mimeType === 'text/plain') {
      const textContent = documentBuffer.toString('utf8');
      return textContent;
    }

    try {
      // Create the Document Analysis client
      const client = new DocumentAnalysisClient(
        endpoint,
        new AzureKeyCredential(apiKey)
      );

      // Start the document analysis
      const poller = await client.beginAnalyzeDocument("prebuilt-document", fs.createReadStream(tempFilePath));
      
      // Wait for the analysis to complete
      const result = await poller.pollUntilDone();
      
      // Extract text content from the document
      let documentContent = "";
      
      if (result && result.content) {
        documentContent = result.content;
      } else if (result && result.pages) {
        // If content isn't directly available, extract from pages
        for (const page of result.pages) {
          for (const line of page.lines || []) {
            documentContent += line.content + " ";
          }
          documentContent += "\n\n";
        }
      }

      return documentContent.trim();
    } catch (azureError) {
      console.error("Azure processing failed, using fallback extraction:", azureError);
      
      // Simple text extraction fallback for PDFs
      if (mimeType === 'application/pdf') {
        // Add simple PDF text extraction logic here
        return "PDF content extraction fallback (Azure service unavailable)";
      }
      
      throw azureError;
    }
  } catch (error) {
    console.error("Error processing document:", error);
    throw new Error(`Document analysis failed: ${error.message}`);
  } finally {
    // Clean up the temporary file
    try {
      if (fs.existsSync(tempFilePath)) {
        fs.unlinkSync(tempFilePath);
      }
    } catch (err) {
      console.error("Error removing temporary file:", err);
    }
  }
}

module.exports = { processDocumentWithAzure }; 