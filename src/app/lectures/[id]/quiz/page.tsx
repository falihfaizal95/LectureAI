'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Clock, 
  CheckCircle, 
  XCircle,
  Brain,
  Target,
  RefreshCw
} from 'lucide-react';

// Mock quiz data
const mockQuiz = {
  id: 1,
  title: "Introduction to Machine Learning",
  course: "CS 229",
  questions: [
    {
      id: 1,
      type: 'mcq',
      question: "What is the primary goal of machine learning?",
      options: [
        "To write explicit rules for every possible scenario",
        "To enable computers to learn patterns from data without explicit programming",
        "To replace human intelligence entirely",
        "To create perfect algorithms that never make mistakes"
      ],
      correctAnswer: 1,
      explanation: "Machine learning enables computers to learn patterns from data without being explicitly programmed for every scenario.",
      evidence: "From minute 2:15: 'Machine learning represents a paradigm shift where instead of writing explicit rules, we let algorithms discover patterns in data.'"
    },
    {
      id: 2,
      type: 'mcq',
      question: "Which of the following is NOT a main type of machine learning?",
      options: [
        "Supervised Learning",
        "Unsupervised Learning",
        "Reinforcement Learning",
        "Deterministic Learning"
      ],
      correctAnswer: 3,
      explanation: "Deterministic Learning is not a recognized type of machine learning. The three main types are supervised, unsupervised, and reinforcement learning.",
      evidence: "From minute 8:30: 'We'll cover three main types: supervised learning, unsupervised learning, and reinforcement learning.'"
    },
    {
      id: 3,
      type: 'mcq',
      question: "What is overfitting in machine learning?",
      options: [
        "When a model is too simple to capture the data patterns",
        "When a model performs well on training data but poorly on new data",
        "When a model takes too long to train",
        "When a model uses too much memory"
      ],
      correctAnswer: 1,
      explanation: "Overfitting occurs when a model memorizes the training data instead of learning generalizable patterns, leading to poor performance on new, unseen data.",
      evidence: "From minute 42:15: 'Overfitting is when your model performs excellently on training data but fails to generalize to new examples.'"
    },
    {
      id: 4,
      type: 'short',
      question: "Explain why data quality is important in machine learning.",
      correctAnswer: "Data quality is crucial because ML models learn from data, so poor quality data leads to poor model performance and unreliable results.",
      explanation: "High-quality data ensures that the patterns the model learns are meaningful and representative of the real-world problem.",
      evidence: "From minute 25:30: 'The quality of your data directly determines the quality of your model. Garbage in, garbage out.'"
    }
  ]
};

export default function QuizPage({ params }: { params: { id: string } }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState<{[key: number]: any}>({});
  const [showResults, setShowResults] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(600); // 10 minutes

  const startQuiz = () => {
    setQuizStarted(true);
    // Start timer
    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          submitQuiz();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleAnswer = (questionId: number, answer: any) => {
    setUserAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const nextQuestion = () => {
    if (currentQuestion < mockQuiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const submitQuiz = () => {
    setShowResults(true);
  };

  const calculateScore = () => {
    let correct = 0;
    mockQuiz.questions.forEach(question => {
      const userAnswer = userAnswers[question.id];
      if (question.type === 'mcq') {
        if (userAnswer === question.correctAnswer) correct++;
      } else if (question.type === 'short') {
        // For short answer, we'll consider it correct if answered
        if (userAnswer && userAnswer.trim().length > 0) correct++;
      }
    });
    return Math.round((correct / mockQuiz.questions.length) * 100);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (!quizStarted) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <Brain className="mx-auto h-16 w-16 text-blue-600 mb-6" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Practice Quiz: {mockQuiz.title}
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Test your understanding of the lecture material with {mockQuiz.questions.length} questions.
            </p>
            
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8 max-w-md mx-auto">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quiz Details</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Questions:</span>
                  <span>{mockQuiz.questions.length}</span>
                </div>
                <div className="flex justify-between">
                  <span>Time Limit:</span>
                  <span>10 minutes</span>
                </div>
                <div className="flex justify-between">
                  <span>Question Types:</span>
                  <span>Multiple Choice & Short Answer</span>
                </div>
              </div>
            </div>

            <button
              onClick={startQuiz}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium text-lg hover:bg-blue-700 transition-colors"
            >
              Start Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (showResults) {
    const score = calculateScore();
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className={`mx-auto h-16 w-16 rounded-full flex items-center justify-center mb-6 ${
              score >= 80 ? 'bg-green-100 text-green-600' : 
              score >= 60 ? 'bg-yellow-100 text-yellow-600' : 'bg-red-100 text-red-600'
            }`}>
              {score >= 80 ? <CheckCircle className="h-12 w-12" /> : 
               score >= 60 ? <Target className="h-12 w-12" /> : <XCircle className="h-12 w-12" />}
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Quiz Complete!
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Your score: <span className="font-semibold text-2xl">{score}%</span>
            </p>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8 max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Question Review</h3>
              <div className="space-y-4">
                {mockQuiz.questions.map((question, index) => {
                  const userAnswer = userAnswers[question.id];
                  const isCorrect = question.type === 'mcq' 
                    ? userAnswer === question.correctAnswer
                    : userAnswer && userAnswer.trim().length > 0;
                  
                  return (
                    <div key={question.id} className={`p-4 rounded-lg border ${
                      isCorrect ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'
                    }`}>
                      <div className="flex items-start space-x-3">
                        <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium ${
                          isCorrect ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
                        }`}>
                          {isCorrect ? '✓' : '✗'}
                        </span>
                        <div className="flex-1">
                          <p className="font-medium text-gray-900 mb-2">
                            {index + 1}. {question.question}
                          </p>
                          
                          {question.type === 'mcq' && (
                            <div className="space-y-2">
                              {question.options.map((option, optIndex) => (
                                <div key={optIndex} className={`text-sm ${
                                  optIndex === question.correctAnswer ? 'text-green-700 font-medium' :
                                  optIndex === userAnswer ? 'text-red-700 font-medium' : 'text-gray-600'
                                }`}>
                                  {optIndex === question.correctAnswer && '✓ '}
                                  {optIndex === userAnswer && optIndex !== question.correctAnswer && '✗ '}
                                  {option}
                                </div>
                              ))}
                            </div>
                          )}
                          
                          {question.type === 'short' && (
                            <div className="space-y-2">
                              <p className="text-sm text-gray-600">
                                <span className="font-medium">Your answer:</span> {userAnswer || 'No answer provided'}
                              </p>
                              <p className="text-sm text-green-700">
                                <span className="font-medium">Sample answer:</span> {question.correctAnswer}
                              </p>
                            </div>
                          )}
                          
                          <div className="mt-3 p-3 bg-white rounded border">
                            <p className="text-sm text-gray-700">
                              <span className="font-medium">Explanation:</span> {question.explanation}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              <span className="font-medium">Evidence:</span> {question.evidence}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/lectures/${params.id}/summary`}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Review Summary
              </Link>
              <button
                onClick={() => {
                  setShowResults(false);
                  setCurrentQuestion(0);
                  setUserAnswers({});
                  setTimeRemaining(600);
                  setQuizStarted(false);
                }}
                className="bg-gray-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors"
              >
                <RefreshCw className="w-4 h-4 inline mr-2" />
                Retake Quiz
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = mockQuiz.questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <Link
              href={`/lectures/${params.id}/summary`}
              className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Summary
            </Link>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Clock className="w-4 h-4" />
                <span>{formatTime(timeRemaining)}</span>
              </div>
              <div className="text-sm text-gray-600">
                Question {currentQuestion + 1} of {mockQuiz.questions.length}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Question */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <div className="mb-6">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-3">
              {currentQ.type === 'mcq' ? 'Multiple Choice' : 'Short Answer'}
            </span>
            <h2 className="text-xl font-semibold text-gray-900">
              {currentQ.question}
            </h2>
          </div>

          {currentQ.type === 'mcq' && (
            <div className="space-y-3">
              {currentQ.options.map((option, index) => (
                <label key={index} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <input
                    type="radio"
                    name={`question-${currentQ.id}`}
                    value={index}
                    checked={userAnswers[currentQ.id] === index}
                    onChange={() => handleAnswer(currentQ.id, index)}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span className="text-gray-700">{option}</span>
                </label>
              ))}
            </div>
          )}

          {currentQ.type === 'short' && (
            <div>
              <textarea
                value={userAnswers[currentQ.id] || ''}
                onChange={(e) => handleAnswer(currentQ.id, e.target.value)}
                placeholder="Type your answer here..."
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <button
            onClick={previousQuestion}
            disabled={currentQuestion === 0}
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          
          {currentQuestion === mockQuiz.questions.length - 1 ? (
            <button
              onClick={submitQuiz}
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
            >
              Submit Quiz
            </button>
          ) : (
            <button
              onClick={nextQuestion}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Next Question
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
