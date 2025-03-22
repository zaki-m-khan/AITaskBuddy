import React, { useState, useRef } from 'react';

export function DocumentUploadButton({ onDocumentProcessed }) {
  const [isUploading, setIsUploading] = useState(false);
  const [fileName, setFileName] = useState('');
  const fileInputRef = useRef(null);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    
    setFileName(file.name);
    setIsUploading(true);
    
    try {
      // Pass the file to the parent component for processing
      if (onDocumentProcessed) {
        await onDocumentProcessed(file);
      }
    } catch (error) {
      console.error("Failed to process document:", error);
      alert("Failed to process document. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept=".pdf,.doc,.docx,.txt"
        className="hidden"
      />
      
      <button
        onClick={triggerFileInput}
        disabled={isUploading}
        className={`relative w-16 h-16 rounded-full flex items-center justify-center ${
          isUploading 
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
            : 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200'
        } transition-all duration-200`}
      >
        {isUploading ? (
          <svg className="animate-spin h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 18H20V20H4V18Z" fill="currentColor" />
            <path d="M12 15L7 10L8.4 8.6L11 11.2V4H13V11.2L15.6 8.6L17 10L12 15Z" fill="currentColor" />
          </svg>
        )}
      </button>
      <p className="mt-2 text-sm text-gray-500">
        {isUploading ? 'Processing...' : fileName || 'Upload document'}
      </p>
    </div>
  );
} 