import React, { useState, useRef, useEffect } from 'react';
import { speechToText } from '../../services/speechService';

export function AudioButton({ onTranscriptReady }) {
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [transcript, setTranscript] = useState('');
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const recognitionRef = useRef(null);

  // Initialize the Web Speech API
  useEffect(() => {
    // Check if browser supports SpeechRecognition
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (!window.SpeechRecognition) {
      console.warn('Speech recognition not supported in this browser. Will fall back to server processing.');
    }
    
    return () => {
      // Clean up recognition on unmount
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  const startRecording = async () => {
    try {
      // Reset state
      setTranscript('');
      audioChunksRef.current = [];
      
      // Get microphone access
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      
      // Set up MediaRecorder for backup server-side processing
      const mediaRecorder = new MediaRecorder(stream);
      
      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };
      
      mediaRecorder.onstop = async () => {
        setIsRecording(false);
        setIsProcessing(true);
        
        if (window.SpeechRecognition) {
          // Already handled by SpeechRecognition
          setIsProcessing(false);
        } else {
          // Fall back to server processing
          const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
          
          try {
            // Send to backend for processing
            const text = await speechToText(audioBlob);
            setTranscript(text);
            if (onTranscriptReady) onTranscriptReady(text);
          } catch (error) {
            console.error("Failed to process speech:", error);
            alert("Failed to process speech. Please try again.");
          } finally {
            setIsProcessing(false);
          }
        }
        
        // Stop all tracks
        stream.getTracks().forEach(track => track.stop());
      };
      
      // Start MediaRecorder
      mediaRecorder.start();
      mediaRecorderRef.current = mediaRecorder;
      
      // Use Web Speech API for real-time transcription if available
      if (window.SpeechRecognition) {
        const recognition = new window.SpeechRecognition();
        recognitionRef.current = recognition;
        
        // Configure recognition
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = 'en-US';
        
        // Handle results
        recognition.onresult = (event) => {
          let interimTranscript = '';
          let finalTranscript = '';
          
          for (let i = event.resultIndex; i < event.results.length; i++) {
            const transcript = event.results[i][0].transcript;
            if (event.results[i].isFinal) {
              finalTranscript += transcript;
            } else {
              interimTranscript += transcript;
            }
          }
          
          // Update the transcript in real-time
          const currentTranscript = finalTranscript || interimTranscript;
          setTranscript(currentTranscript);
          
          // Send the transcript to the parent component
          if (onTranscriptReady) onTranscriptReady(currentTranscript);
        };
        
        recognition.onerror = (event) => {
          console.error('Speech recognition error:', event.error);
        };
        
        // Start recognition
        recognition.start();
      }
      
      setIsRecording(true);
    } catch (error) {
      console.error("Error accessing microphone:", error);
      alert("Could not access microphone. Please check permissions.");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
    }
    
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <button
        onClick={isRecording ? stopRecording : startRecording}
        disabled={isProcessing}
        className={`relative w-16 h-16 rounded-full flex items-center justify-center ${
          isRecording 
            ? 'bg-red-100 text-red-600' 
            : isProcessing 
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
              : 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200'
        } transition-all duration-200`}
      >
        {isRecording ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="6" y="6" width="12" height="12" fill="currentColor" />
          </svg>
        ) : isProcessing ? (
          <svg className="animate-spin h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 14C13.66 14 15 12.66 15 11V5C15 3.34 13.66 2 12 2C10.34 2 9 3.34 9 5V11C9 12.66 10.34 14 12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M19 11V12C19 15.87 15.87 19 12 19C8.13 19 5 15.87 5 12V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 19V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 22H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </button>
      <p className="mt-2 text-sm text-gray-500">
        {isRecording ? 'Recording...' : isProcessing ? 'Processing...' : 'Tap to record'}
      </p>
    </div>
  );
}