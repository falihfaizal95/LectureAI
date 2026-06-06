import Link from 'next/link';
import { Upload, Brain, Target } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 min-h-screen flex items-center">
        <div className="relative isolate w-full px-6 py-24 lg:px-8">
          {/* Background blobs */}
          <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
            <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-500 to-indigo-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
          </div>

          <div className="mx-auto max-w-4xl text-center">
            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-700 ring-1 ring-blue-200">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              AI-Powered Study Assistant
            </div>

            <h1 className="text-6xl font-extrabold tracking-tight text-gray-900 sm:text-7xl lg:text-8xl leading-none">
              Turn Lectures into
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mt-2">
                Study Notes
              </span>
            </h1>

            <p className="mt-8 text-xl leading-9 text-gray-600 max-w-2xl mx-auto sm:text-2xl">
              Upload your lecture recordings and get AI-powered summaries, key terms,
              and practice quizzes. Study smarter, not harder.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/upload"
                className="w-full sm:w-auto rounded-xl bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-200 hover:bg-blue-500 hover:shadow-blue-300 hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Upload Lecture
              </Link>
              <a
                href="https://lecture-summarizer-e68051miq-falih-faizals-projects.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto rounded-xl border border-gray-300 bg-white px-8 py-4 text-base font-semibold text-gray-700 shadow-sm hover:border-blue-400 hover:text-blue-600 hover:-translate-y-0.5 transition-all duration-200"
              >
                See Demo →
              </a>
            </div>

            {/* Social proof */}
            <p className="mt-8 text-sm text-gray-500">
              Trusted by <span className="font-semibold text-gray-700">10,000+</span> students worldwide
            </p>
          </div>

          {/* Bottom blur effect */}
          <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
            <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-blue-600 to-indigo-600 opacity-15 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-600 ring-1 ring-blue-100 mb-4">Learn Faster</span>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Everything you need to master your lectures
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="relative rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 p-8 ring-1 ring-blue-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 shadow-md shadow-blue-200">
                <Upload className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Summaries</h3>
              <p className="text-base leading-7 text-gray-600">
                Get concise summaries with key points, important terms, and notable examples
                from your lecture recordings.
              </p>
            </div>
            <div className="relative rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 p-8 ring-1 ring-purple-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-purple-600 shadow-md shadow-purple-200">
                <Brain className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Practice Quizzes</h3>
              <p className="text-base leading-7 text-gray-600">
                Test your understanding with AI-generated questions based on the lecture content.
                Get instant feedback and explanations.
              </p>
            </div>
            <div className="relative rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 p-8 ring-1 ring-emerald-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-600 shadow-md shadow-emerald-200">
                <Target className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Study Mode</h3>
              <p className="text-base leading-7 text-gray-600">
                Master concepts with spaced repetition and personalized study schedules.
                Track your progress and build study streaks.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
            <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to transform your study habits?
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">
              Join thousands of students who are already studying smarter with AI-powered lecture summaries.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/upload"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get Started
              </Link>
              <a 
                href="https://lecture-summarizer-e68051miq-falih-faizals-projects.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm font-semibold leading-6 text-white hover:text-blue-200 transition-colors"
              >
                See Demo <span aria-hidden="true">→</span>
              </a>
            </div>
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
              aria-hidden="true"
            >
              <circle cx={512} cy={512} r={512} fill="url(#gradient)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="gradient">
                  <stop stopColor="#3B82F6" />
                  <stop offset={1} stopColor="#1E40AF" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
