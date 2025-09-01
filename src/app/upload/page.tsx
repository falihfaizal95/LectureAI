'use client';

import { useState } from 'react';
import { Upload, Youtube, FileAudio, AlertCircle, CheckCircle } from 'lucide-react';
import { useDropzone } from 'react-dropzone';

export default function UploadPage() {
  const [uploadType, setUploadType] = useState<'file' | 'youtube'>('file');
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'processing' | 'completed' | 'error'>('idle');
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'audio/*': ['.mp3', '.m4a', '.wav', '.flac'],
      'video/*': ['.mp4', '.mov', '.avi']
    },
    maxSize: 500 * 1024 * 1024, // 500MB
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        setUploadedFile(acceptedFiles[0]);
        setUploadStatus('uploading');
        // Simulate upload process
        setTimeout(() => {
          setUploadStatus('processing');
          setTimeout(() => {
            setUploadStatus('completed');
          }, 3000);
        }, 2000);
      }
    },
    onDropRejected: (fileRejections) => {
      setErrorMessage('File type not supported or file too large. Please use MP3, M4A, WAV, or MP4 files under 500MB.');
    }
  });

  const handleYoutubeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!youtubeUrl.trim()) return;

    setUploadStatus('uploading');
    setErrorMessage('');

    try {
      // Simulate YouTube processing
      setTimeout(() => {
        setUploadStatus('processing');
        setTimeout(() => {
          setUploadStatus('completed');
        }, 3000);
      }, 2000);
    } catch (error) {
      setUploadStatus('error');
      setErrorMessage('Failed to process YouTube URL. Please check the link and try again.');
    }
  };

  const resetUpload = () => {
    setUploadStatus('idle');
    setUploadedFile(null);
    setYoutubeUrl('');
    setErrorMessage('');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Upload Your Lecture
          </h1>
          <p className="text-lg text-gray-600">
            Upload an audio file or paste a YouTube link to get started
          </p>
        </div>

        {/* Upload Type Selector */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex space-x-4 mb-6">
            <button
              onClick={() => setUploadType('file')}
              className={`flex-1 py-3 px-4 rounded-lg border-2 transition-colors ${
                uploadType === 'file'
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <FileAudio className="w-5 h-5 mx-auto mb-2" />
              Audio File
            </button>
            <button
              onClick={() => setUploadType('youtube')}
              className={`flex-1 py-3 px-4 rounded-lg border-2 transition-colors ${
                uploadType === 'youtube'
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <Youtube className="w-5 h-5 mx-auto mb-2" />
              YouTube Link
            </button>
          </div>

          {/* File Upload */}
          {uploadType === 'file' && (
            <div
              {...getRootProps()}
              className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
                isDragActive
                  ? 'border-blue-400 bg-blue-50'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
            >
              <input {...getInputProps()} />
              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              {uploadedFile ? (
                <div>
                  <p className="text-lg font-medium text-gray-900 mb-2">
                    {uploadedFile.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {(uploadedFile.size / (1024 * 1024)).toFixed(2)} MB
                  </p>
                </div>
              ) : (
                <div>
                  <p className="text-lg font-medium text-gray-900 mb-2">
                    Drop your audio file here
                  </p>
                  <p className="text-sm text-gray-500">
                    or click to browse files
                  </p>
                  <p className="text-xs text-gray-400 mt-2">
                    Supports MP3, M4A, WAV, MP4 • Max 500MB
                  </p>
                </div>
              )}
            </div>
          )}

          {/* YouTube Upload */}
          {uploadType === 'youtube' && (
            <form onSubmit={handleYoutubeSubmit} className="space-y-4">
              <div>
                <label htmlFor="youtube-url" className="block text-sm font-medium text-gray-700 mb-2">
                  YouTube URL
                </label>
                <input
                  type="url"
                  id="youtube-url"
                  value={youtubeUrl}
                  onChange={(e) => setYoutubeUrl(e.target.value)}
                  placeholder="https://www.youtube.com/watch?v=..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={!youtubeUrl.trim() || uploadStatus === 'uploading' || uploadStatus === 'processing'}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Process YouTube Video
              </button>
            </form>
          )}
        </div>

        {/* Upload Status */}
        {uploadStatus !== 'idle' && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
            <div className="flex items-center space-x-3 mb-4">
              {uploadStatus === 'uploading' && (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
                  <span className="text-lg font-medium text-gray-900">Uploading...</span>
                </>
              )}
              {uploadStatus === 'processing' && (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
                  <span className="text-lg font-medium text-gray-900">Processing your lecture...</span>
                </>
              )}
              {uploadStatus === 'completed' && (
                <>
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-lg font-medium text-green-900">Upload complete!</span>
                </>
              )}
              {uploadStatus === 'error' && (
                <>
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  <span className="text-lg font-medium text-red-900">Upload failed</span>
                </>
              )}
            </div>

            {uploadStatus === 'processing' && (
              <div className="space-y-3">
                <div className="bg-gray-100 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full animate-pulse" style={{ width: '60%' }}></div>
                </div>
                <p className="text-sm text-gray-600">
                  This may take a few minutes depending on the length of your lecture
                </p>
              </div>
            )}

            {uploadStatus === 'completed' && (
              <div className="space-y-4">
                <p className="text-gray-600">
                  Your lecture has been successfully uploaded and is being processed. 
                  You'll receive a notification when your summary is ready.
                </p>
                <div className="flex space-x-3">
                  <button
                    onClick={() => window.location.href = '/dashboard'}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                  >
                    Go to Dashboard
                  </button>
                  <button
                    onClick={resetUpload}
                    className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
                  >
                    Upload Another
                  </button>
                </div>
              </div>
            )}

            {uploadStatus === 'error' && (
              <div className="space-y-4">
                <p className="text-red-600">{errorMessage}</p>
                <button
                  onClick={resetUpload}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  Try Again
                </button>
              </div>
            )}
          </div>
        )}

        {/* Info Section */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-medium text-blue-900 mb-3">What happens next?</h3>
          <div className="space-y-3 text-sm text-blue-800">
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <p>Your audio will be transcribed using AI speech recognition</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <p>Key points and important terms will be extracted</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <p>A concise summary will be generated for easy review</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <p>Practice questions will be created to test your understanding</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
