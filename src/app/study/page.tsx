'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Brain, 
  Target, 
  Clock, 
  CheckCircle, 
  XCircle,
  TrendingUp,
  Calendar,
  BookOpen,
  Zap
} from 'lucide-react';

// Mock study data
const mockStudyData = {
  todayDue: [
    {
      id: 1,
      type: 'quiz',
      title: "Introduction to Machine Learning",
      course: "CS 229",
      difficulty: 'medium',
      lastStudied: '3 days ago',
      nextReview: 'Today',
      progress: 75
    },
    {
      id: 2,
      type: 'summary',
      title: "Neural Networks and Deep Learning",
      course: "CS 229",
      difficulty: 'hard',
      lastStudied: '5 days ago',
      nextReview: 'Today',
      progress: 60
    }
  ],
  upcoming: [
    {
      id: 3,
      type: 'quiz',
      title: "Linear Algebra Review",
      course: "CS 229",
      difficulty: 'easy',
      lastStudied: '1 day ago',
      nextReview: 'Tomorrow',
      progress: 90
    }
  ],
  stats: {
    totalLectures: 4,
    completedToday: 1,
    streak: 7,
    totalStudyTime: '12h 30m',
    accuracy: 85
  }
};

export default function StudyPage() {
  const [activeTab, setActiveTab] = useState<'today' | 'upcoming' | 'stats'>('today');

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

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'quiz':
        return <Brain className="w-5 h-5" />;
      case 'summary':
        return <BookOpen className="w-5 h-5" />;
      default:
        return <Target className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <h1 className="text-2xl font-bold text-gray-900">Study Mode</h1>
            <p className="text-gray-600">Master your lectures with spaced repetition</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Zap className="h-6 w-6 text-yellow-600" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Study Streak</dt>
                    <dd className="text-lg font-medium text-gray-900">{mockStudyData.stats.streak} days</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Total Study Time</dt>
                    <dd className="text-lg font-medium text-gray-900">{mockStudyData.stats.totalStudyTime}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Accuracy</dt>
                    <dd className="text-lg font-medium text-gray-900">{mockStudyData.stats.accuracy}%</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <BookOpen className="h-6 w-6 text-purple-600" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Total Lectures</dt>
                    <dd className="text-lg font-medium text-gray-900">{mockStudyData.stats.totalLectures}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white shadow rounded-lg">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('today')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'today'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Today's Due ({mockStudyData.todayDue.length})
              </button>
              <button
                onClick={() => setActiveTab('upcoming')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'upcoming'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Upcoming ({mockStudyData.upcoming.length})
              </button>
              <button
                onClick={() => setActiveTab('stats')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'stats'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Progress Stats
              </button>
            </nav>
          </div>

          <div className="p-6">
            {/* Today's Due Tab */}
            {activeTab === 'today' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Today's Study Session</h3>
                {mockStudyData.todayDue.length === 0 ? (
                  <div className="text-center py-12">
                    <CheckCircle className="mx-auto h-12 w-12 text-green-600 mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">All caught up!</h3>
                    <p className="text-gray-600">No lectures due for review today.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {mockStudyData.todayDue.map((item) => (
                      <div key={item.id} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            {getTypeIcon(item.type)}
                            <div>
                              <h4 className="font-medium text-gray-900">{item.title}</h4>
                              <p className="text-sm text-gray-600">{item.course}</p>
                            </div>
                          </div>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getDifficultyColor(item.difficulty)}`}>
                            {item.difficulty}
                          </span>
                        </div>
                        
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                          <span>Last studied: {item.lastStudied}</span>
                          <span>Next review: {item.nextReview}</span>
                        </div>
                        
                        <div className="mb-3">
                          <div className="flex justify-between text-sm text-gray-600 mb-1">
                            <span>Progress</span>
                            <span>{item.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                              style={{ width: `${item.progress}%` }}
                            ></div>
                          </div>
                        </div>
                        
                        <div className="flex space-x-3">
                          <Link
                            href={`/lectures/${item.id}/${item.type === 'quiz' ? 'quiz' : 'summary'}`}
                            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md text-center text-sm font-medium hover:bg-blue-700 transition-colors"
                          >
                            {item.type === 'quiz' ? 'Take Quiz' : 'Review Summary'}
                          </Link>
                          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors">
                            Mark Complete
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Upcoming Tab */}
            {activeTab === 'upcoming' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Reviews</h3>
                <div className="space-y-4">
                  {mockStudyData.upcoming.map((item) => (
                    <div key={item.id} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          {getTypeIcon(item.type)}
                          <div>
                            <h4 className="font-medium text-gray-900">{item.title}</h4>
                            <p className="text-sm text-gray-600">{item.course}</p>
                          </div>
                        </div>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getDifficultyColor(item.difficulty)}`}>
                          {item.difficulty}
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                        <span>Last studied: {item.lastStudied}</span>
                        <span>Next review: {item.nextReview}</span>
                      </div>
                      
                      <div className="mb-3">
                        <div className="flex justify-between text-sm text-gray-600 mb-1">
                          <span>Progress</span>
                          <span>{item.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-green-600 h-2 rounded-full transition-all duration-300" 
                            style={{ width: `${item.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <div className="flex space-x-3">
                        <Link
                          href={`/lectures/${item.id}/${item.type === 'quiz' ? 'quiz' : 'summary'}`}
                          className="flex-1 bg-green-600 text-white px-4 py-2 rounded-md text-center text-sm font-medium hover:bg-green-700 transition-colors"
                        >
                          {item.type === 'quiz' ? 'Take Quiz' : 'Review Summary'}
                        </Link>
                        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors">
                          Study Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Stats Tab */}
            {activeTab === 'stats' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Study Progress</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h4 className="text-lg font-medium text-blue-900 mb-4">Weekly Progress</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-blue-700">Monday</span>
                        <span className="text-blue-900 font-medium">85%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-blue-700">Tuesday</span>
                        <span className="text-blue-900 font-medium">92%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-blue-700">Wednesday</span>
                        <span className="text-blue-900 font-medium">78%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-blue-700">Thursday</span>
                        <span className="text-blue-900 font-medium">95%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-blue-700">Friday</span>
                        <span className="text-blue-900 font-medium">88%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-6">
                    <h4 className="text-lg font-medium text-green-900 mb-4">Study Streaks</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-green-700">Current Streak</span>
                        <span className="text-green-900 font-medium">7 days</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-green-700">Longest Streak</span>
                        <span className="text-green-900 font-medium">14 days</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-green-700">Total Study Days</span>
                        <span className="text-green-900 font-medium">45 days</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-green-700">Average Daily</span>
                        <span className="text-green-900 font-medium">45 min</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
