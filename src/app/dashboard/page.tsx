'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  BookOpen, 
  Clock, 
  Calendar, 
  Search, 
  Plus,
  FileText,
  Brain,
  Target
} from 'lucide-react';

// Mock data for demonstration
const mockLectures = [
  {
    id: 1,
    title: "Introduction to Machine Learning",
    course: "CS 229",
    term: "Fall 2024",
    duration: "75 min",
    uploadedAt: "2024-01-15",
    status: "completed",
    hasSummary: true,
    hasQuiz: true,
    progress: 85
  },
  {
    id: 2,
    title: "Neural Networks and Deep Learning",
    course: "CS 229",
    term: "Fall 2024",
    duration: "82 min",
    uploadedAt: "2024-01-12",
    status: "completed",
    hasSummary: true,
    hasQuiz: true,
    progress: 92
  },
  {
    id: 3,
    title: "Linear Algebra Review",
    course: "CS 229",
    term: "Fall 2024",
    duration: "45 min",
    uploadedAt: "2024-01-10",
    status: "completed",
    hasSummary: true,
    hasQuiz: false,
    progress: 78
  },
  {
    id: 4,
    title: "Probability and Statistics",
    course: "CS 229",
    term: "Fall 2024",
    duration: "68 min",
    uploadedAt: "2024-01-08",
    status: "processing",
    hasSummary: false,
    hasQuiz: false,
    progress: 0
  }
];

export default function DashboardPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'completed' | 'processing'>('all');

  const filteredLectures = mockLectures.filter(lecture => {
    const matchesSearch = lecture.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         lecture.course.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === 'all' || lecture.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'processing':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4" />;
      case 'processing':
        return <Clock className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600">Manage your lectures and study materials</p>
            </div>
            <Link
              href="/upload"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              <Plus className="w-4 h-4 mr-2" />
              Upload Lecture
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <BookOpen className="h-6 w-6 text-gray-400" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Total Lectures</dt>
                    <dd className="text-lg font-medium text-gray-900">{mockLectures.length}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <FileText className="h-6 w-6 text-gray-400" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Summaries Ready</dt>
                    <dd className="text-lg font-medium text-gray-900">
                      {mockLectures.filter(l => l.hasSummary).length}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Brain className="h-6 w-6 text-gray-400" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Quizzes Available</dt>
                    <dd className="text-lg font-medium text-gray-900">
                      {mockLectures.filter(l => l.hasQuiz).length}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Target className="h-6 w-6 text-gray-400" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Avg Progress</dt>
                    <dd className="text-lg font-medium text-gray-900">
                      {Math.round(mockLectures.reduce((acc, l) => acc + l.progress, 0) / mockLectures.length)}%
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Chart */}
        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Weekly Progress</h3>
          <div className="grid grid-cols-7 gap-2">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
              <div key={day} className="text-center">
                <div className="text-xs text-gray-500 mb-2">{day}</div>
                <div className="bg-gray-200 rounded h-20 flex items-end justify-center p-1">
                  <div 
                    className="bg-blue-600 rounded w-full transition-all duration-300" 
                    style={{ height: `${Math.random() * 60 + 40}%` }}
                  ></div>
                </div>
                <div className="text-xs text-gray-600 mt-1">
                  {Math.round(Math.random() * 60 + 40)}%
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search lectures by title or course..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex gap-2">
                              <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value as 'all' | 'completed' | 'processing')}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                <option value="all">All Status</option>
                <option value="completed">Completed</option>
                <option value="processing">Processing</option>
              </select>
            </div>
          </div>
        </div>

        {/* Lectures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLectures.map((lecture) => (
            <div key={lecture.id} className="bg-white shadow rounded-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {lecture.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">{lecture.course} • {lecture.term}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {lecture.duration}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {lecture.uploadedAt}
                      </span>
                    </div>
                  </div>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(lecture.status)}`}>
                    {getStatusIcon(lecture.status)}
                    <span className="ml-1 capitalize">{lecture.status}</span>
                  </span>
                </div>

                {/* Progress Bar */}
                {lecture.status === 'completed' && (
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Study Progress</span>
                      <span>{lecture.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                        style={{ width: `${lecture.progress}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-2">
                  {lecture.hasSummary && (
                    <Link
                      href={`/lectures/${lecture.id}/summary`}
                      className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200"
                    >
                      <FileText className="w-4 h-4 mr-1" />
                      View Summary
                    </Link>
                  )}
                  {lecture.hasQuiz && (
                    <Link
                      href={`/lectures/${lecture.id}/quiz`}
                      className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200"
                    >
                      <Brain className="w-4 h-4 mr-1" />
                      Take Quiz
                    </Link>
                  )}
                  {lecture.status === 'completed' && (
                    <Link
                      href={`/lectures/${lecture.id}/study`}
                      className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-purple-700 bg-purple-100 hover:bg-purple-200"
                    >
                      <Target className="w-4 h-4 mr-1" />
                      Study Mode
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredLectures.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">No lectures found</h3>
            <p className="mt-1 text-sm text-gray-500">
              {searchQuery || filterStatus !== 'all' 
                ? 'Try adjusting your search or filters.'
                : 'Get started by uploading your first lecture.'
              }
            </p>
            {!searchQuery && filterStatus === 'all' && (
              <div className="mt-6">
                <Link
                  href="/upload"
                  className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Upload Lecture
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// Add missing CheckCircle icon component
const CheckCircle = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);
