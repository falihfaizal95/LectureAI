'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Brain, 
  Clock, 
  CheckCircle, 
  Play,
  Target,
  TrendingUp,
  Calendar,
  BookOpen
} from 'lucide-react';

// Mock quiz data
const mockQuizzes = [
  {
    id: 1,
    title: "Introduction to Machine Learning",
    course: "CS 229",
    questionCount: 15,
    difficulty: 'medium',
    estimatedTime: '20 min',
    lastTaken: '2 days ago',
    bestScore: 85,
    attempts: 3,
    status: 'available'
  },
  {
    id: 2,
    title: "Neural Networks and Deep Learning",
    course: "CS 229",
    questionCount: 18,
    difficulty: 'hard',
    estimatedTime: '25 min',
    lastTaken: '5 days ago',
    bestScore: 72,
    attempts: 2,
    status: 'available'
  },
  {
    id: 3,
    title: "Linear Algebra Review",
    course: "CS 229",
    questionCount: 12,
    difficulty: 'easy',
    estimatedTime: '15 min',
    lastTaken: '1 week ago',
    bestScore: 95,
    attempts: 1,
    status: 'completed'
  },
  {
    id: 4,
    title: "Probability and Statistics",
    course: "CS 229",
    questionCount: 20,
    difficulty: 'medium',
    estimatedTime: '30 min',
    lastTaken: null,
    bestScore: null,
    attempts: 0,
    status: 'new'
  }
];

export default function QuizzesPage() {
  const [filterDifficulty, setFilterDifficulty] = useState<'all' | 'easy' | 'medium' | 'hard'>('all');
  const [filterStatus, setFilterStatus] = useState<'all' | 'new' | 'available' | 'completed'>('all');

  const filteredQuizzes = mockQuizzes.filter(quiz => {
    const matchesDifficulty = filterDifficulty === 'all' || quiz.difficulty === filterDifficulty;
    const matchesStatus = filterStatus === 'all' || quiz.status === filterStatus;
    return matchesDifficulty && matchesStatus;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return 'bg-green-100 text-green-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'hard':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new':
        return 'bg-blue-100 text-blue-800';
      case 'available':
        return 'bg-orange-100 text-orange-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'new':
        return <Play className="w-4 h-4" />;
      case 'available':
        return <Target className="w-4 h-4" />;
      case 'completed':
        return <CheckCircle className="w-4 h-4" />;
      default:
        return <BookOpen className="w-4 h-4" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'new':
        return 'New Quiz';
      case 'available':
        return 'Available';
      case 'completed':
        return 'Completed';
      default:
        return 'Unknown';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <h1 className="text-2xl font-bold text-gray-900">Practice Quizzes</h1>
            <p className="text-gray-600">Test your knowledge with AI-generated questions</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Brain className="h-6 w-6 text-purple-600" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Total Quizzes</dt>
                    <dd className="text-lg font-medium text-gray-900">{mockQuizzes.length}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Completed</dt>
                    <dd className="text-lg font-medium text-gray-900">
                      {mockQuizzes.filter(q => q.status === 'completed').length}
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
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Avg Score</dt>
                    <dd className="text-lg font-medium text-gray-900">
                      {Math.round(mockQuizzes.filter(q => q.bestScore).reduce((acc, q) => acc + (q.bestScore || 0), 0) / mockQuizzes.filter(q => q.bestScore).length)}%
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
                  <Clock className="h-6 w-6 text-orange-600" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Total Time</dt>
                    <dd className="text-lg font-medium text-gray-900">2h 15m</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label htmlFor="difficulty-filter" className="block text-sm font-medium text-gray-700 mb-2">
                Difficulty
              </label>
              <select
                id="difficulty-filter"
                value={filterDifficulty}
                onChange={(e) => setFilterDifficulty(e.target.value as any)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Difficulties</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>
            <div className="flex-1">
              <label htmlFor="status-filter" className="block text-sm font-medium text-gray-700 mb-2">
                Status
              </label>
              <select
                id="status-filter"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value as any)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Status</option>
                <option value="new">New</option>
                <option value="available">Available</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          </div>
        </div>

        {/* Quizzes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredQuizzes.map((quiz) => (
            <div key={quiz.id} className="bg-white shadow rounded-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {quiz.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">{quiz.course}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <Brain className="w-4 h-4 mr-1" />
                        {quiz.questionCount} questions
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {quiz.estimatedTime}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getDifficultyColor(quiz.difficulty)}`}>
                      {quiz.difficulty}
                    </span>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(quiz.status)}`}>
                      {getStatusIcon(quiz.status)}
                      <span className="ml-1">{getStatusText(quiz.status)}</span>
                    </span>
                  </div>
                </div>

                {/* Progress and Stats */}
                {quiz.bestScore && (
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Best Score</span>
                      <span>{quiz.bestScore}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                        style={{ width: `${quiz.bestScore}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>Attempts: {quiz.attempts}</span>
                  {quiz.lastTaken && (
                    <span>Last: {quiz.lastTaken}</span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  {quiz.status === 'new' && (
                    <Link
                      href={`/lectures/${quiz.id}/quiz`}
                      className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md text-center text-sm font-medium hover:bg-blue-700 transition-colors"
                    >
                      <Play className="w-4 h-4 inline mr-2" />
                      Start Quiz
                    </Link>
                  )}
                  {quiz.status === 'available' && (
                    <Link
                      href={`/lectures/${quiz.id}/quiz`}
                      className="flex-1 bg-orange-600 text-white px-4 py-2 rounded-md text-center text-sm font-medium hover:bg-orange-700 transition-colors"
                    >
                      <Target className="w-4 h-4 inline mr-2" />
                      Retake Quiz
                    </Link>
                  )}
                  {quiz.status === 'completed' && (
                    <div className="flex space-x-2 w-full">
                      <Link
                        href={`/lectures/${quiz.id}/quiz`}
                        className="flex-1 bg-green-600 text-white px-4 py-2 rounded-md text-center text-sm font-medium hover:bg-green-700 transition-colors"
                      >
                        <CheckCircle className="w-4 h-4 inline mr-2" />
                        Review
                      </Link>
                      <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors">
                        Retake
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredQuizzes.length === 0 && (
          <div className="text-center py-12">
            <Brain className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">No quizzes found</h3>
            <p className="mt-1 text-sm text-gray-500">
              Try adjusting your filters or upload a new lecture to generate quizzes.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
