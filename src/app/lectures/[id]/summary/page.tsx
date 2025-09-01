'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Play, 
  Clock, 
  Calendar, 
  BookOpen,
  Brain,
  Target,
  Share2,
  Download,
  Bookmark
} from 'lucide-react';

// Mock data for demonstration
const mockSummary = {
  id: 1,
  title: "Introduction to Machine Learning",
  course: "CS 229",
  term: "Fall 2024",
  duration: "75 min",
  uploadedAt: "2024-01-15",
  transcript: "Machine learning is a subset of artificial intelligence that enables computers to learn and make decisions without being explicitly programmed...",
  summary: {
    tldr: [
      "Machine learning enables computers to learn patterns from data without explicit programming",
      "Three main types: supervised, unsupervised, and reinforcement learning",
      "Key applications include image recognition, natural language processing, and recommendation systems",
      "Data quality and quantity are crucial for successful ML models",
      "Overfitting occurs when models memorize training data instead of learning generalizable patterns"
    ],
    keyTerms: [
      { term: "Machine Learning", definition: "A subset of AI that enables computers to learn from data", weight: 10 },
      { term: "Supervised Learning", definition: "Learning from labeled training data", weight: 9 },
      { term: "Unsupervised Learning", definition: "Finding patterns in unlabeled data", weight: 8 },
      { term: "Overfitting", definition: "When a model performs well on training data but poorly on new data", weight: 7 },
      { term: "Feature Engineering", definition: "Process of selecting and transforming input variables", weight: 7 },
      { term: "Cross-validation", definition: "Technique to assess model performance on unseen data", weight: 6 },
      { term: "Bias-Variance Tradeoff", definition: "Balance between model complexity and generalization", weight: 6 }
    ],
    sections: [
      {
        heading: "Introduction to ML",
        content: "Machine learning represents a paradigm shift in how we approach problem-solving. Instead of writing explicit rules, we let algorithms discover patterns in data.",
        timestamp: "00:00-05:30"
      },
      {
        heading: "Types of Machine Learning",
        content: "Supervised learning uses labeled data to train models, unsupervised learning finds hidden patterns, and reinforcement learning learns through trial and error.",
        timestamp: "05:30-18:45"
      },
      {
        heading: "Real-world Applications",
        content: "From Netflix recommendations to medical diagnosis, machine learning is transforming industries by automating complex decision-making processes.",
        timestamp: "18:45-35:20"
      },
      {
        heading: "Challenges and Considerations",
        content: "Data quality, overfitting, and ethical considerations are key challenges that must be addressed when implementing ML systems.",
        timestamp: "35:20-60:15"
      },
      {
        heading: "Future Directions",
        content: "The field is moving towards more interpretable models, automated machine learning, and integration with edge computing devices.",
        timestamp: "60:15-75:00"
      }
    ]
  }
};

export default function LectureSummaryPage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState<'summary' | 'transcript' | 'keywords'>('summary');
  const [isBookmarked, setIsBookmarked] = useState(false);

  const tabs = [
    { id: 'summary', name: 'Summary', icon: BookOpen },
    { id: 'transcript', name: 'Transcript', icon: FileText },
    { id: 'keywords', name: 'Key Terms', icon: Brain },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-6">
            <div className="flex items-center space-x-4">
              <Link
                href="/dashboard"
                className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Link>
              <div className="h-6 w-px bg-gray-300" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{mockSummary.title}</h1>
                <p className="text-gray-600">{mockSummary.course} • {mockSummary.term}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`p-2 rounded-md ${
                  isBookmarked 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <Bookmark className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600 rounded-md">
                <Share2 className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600 rounded-md">
                <Download className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Lecture Info Card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Clock className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm font-medium text-gray-500">Duration</p>
                <p className="text-lg font-semibold text-gray-900">{mockSummary.duration}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Calendar className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm font-medium text-gray-500">Uploaded</p>
                <p className="text-lg font-semibold text-gray-900">{mockSummary.uploadedAt}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Play className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm font-medium text-gray-500">Status</p>
                <p className="text-lg font-semibold text-green-600">Ready to Study</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8 px-6">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm ${
                      isActive
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <tab.icon className="w-4 h-4 inline mr-2" />
                    {tab.name}
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="p-6">
            {/* Summary Tab */}
            {activeTab === 'summary' && (
              <div className="space-y-8">
                {/* TL;DR Section */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">TL;DR - Key Points</h3>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <ul className="space-y-2">
                      {mockSummary.summary.tldr.map((point, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <span className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                          <span className="text-gray-700">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Sections */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Lecture Sections</h3>
                  <div className="space-y-4">
                    {mockSummary.summary.sections.map((section, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-medium text-gray-900">{section.heading}</h4>
                          <span className="text-sm text-gray-500 bg-white px-2 py-1 rounded">
                            {section.timestamp}
                          </span>
                        </div>
                        <p className="text-gray-700">{section.content}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Transcript Tab */}
            {activeTab === 'transcript' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Full Transcript</h3>
                <div className="bg-gray-50 rounded-lg p-4 max-h-96 overflow-y-auto">
                  <p className="text-gray-700 leading-relaxed">{mockSummary.transcript}</p>
                </div>
              </div>
            )}

            {/* Keywords Tab */}
            {activeTab === 'keywords' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Terms & Definitions</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {mockSummary.summary.keyTerms.map((term, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-gray-900">{term.term}</h4>
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                          Weight: {term.weight}
                        </span>
                      </div>
                      <p className="text-gray-700 text-sm">{term.definition}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href={`/lectures/${params.id}/quiz`}
            className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-medium text-center hover:bg-green-700 transition-colors"
          >
            <Brain className="w-5 h-5 inline mr-2" />
            Take Practice Quiz
          </Link>
          <Link
            href={`/lectures/${params.id}/study`}
            className="flex-1 bg-purple-600 text-white px-6 py-3 rounded-lg font-medium text-center hover:bg-purple-700 transition-colors"
          >
            <Target className="w-5 h-5 inline mr-2" />
            Start Study Mode
          </Link>
        </div>
      </div>
    </div>
  );
}

// Add missing FileText icon component
const FileText = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);
