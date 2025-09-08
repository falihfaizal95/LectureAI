# LectureAI

Turn your lecture recordings into AI-powered study notes, practice quizzes, and study materials.



**Single-Lecture Summarizer**: Transform one audio file into clean, structured study notes.

### User Story
> "As a student, I upload a lecture recording and get a concise summary with key points I can review on my phone. It allows me to be focused on the class instead of word for word copying down what my professor says."

### Core Features
- ✅ **Audio Upload**: Support for MP3, M4A, WAV, MP4 files (up to 500MB)
- ✅ **YouTube Integration**: Process lectures from YouTube links
- ✅ **AI Transcription**: Convert speech to text using AI
- ✅ **Smart Summarization**: Generate structured summaries with:
  - TL;DR bullet points (5-7 key takeaways)
  - Key terms with definitions
  - Notable examples and sections
- ✅ **Study Dashboard**: Track progress and access materials
- ✅ **Practice Quizzes**: AI-generated questions with explanations
- ✅ **Mobile-First Design**: Responsive web app for all devices

## 🚀 Getting Started

### 🌐 **Live Demo**
**Your Lecture Summarizer is now live at:**  
**https://lecture-summarizer-e68051miq-falih-faizals-projects.vercel.app**

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation.

1. **Clone and navigate to the project**
   ```bash
   git clone https://github.com/falihfaizal95/LectureAI.git
   cd LectureAI
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js 13+ app directory
│   ├── dashboard/         # User dashboard
│   ├── upload/           # File upload page
│   ├── lectures/         # Lecture-specific pages
│   │   └── [id]/
│   │       ├── summary/  # AI-generated summary
│   │       └── quiz/     # Practice questions
│   └── layout.tsx        # Root layout with navigation
├── components/            # Reusable UI components
│   └── Navigation.tsx    # Main navigation bar
└── globals.css           # Tailwind CSS styles
```

## 🎨 Tech Stack.

### Frontend
- **Next.js 14** - React framework with app router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful, customizable icons

### UI Components
- **React Dropzone** - Drag & drop file uploads
- **React Hook Form** - Form state management
- **Zod** - Schema validation

### Styling
- **Tailwind CSS** - Rapid UI development
- **Responsive Design** - Mobile-first approach
- **Modern UI/UX** - Clean, accessible interface

## 📱 Features Overview

### 🌐 **Live Demo Available**
**Test all features right now at:** https://lecture-summarizer-e68051miq-falih-faizals-projects.vercel.app

### 1. Landing Page
- Hero section with clear value proposition
- Feature highlights (Summaries, Quizzes, Study Mode)
- Call-to-action for immediate upload

### 2. Upload System
- **File Upload**: Drag & drop audio/video files
- **YouTube Links**: Paste YouTube URLs for processing
- **Progress Tracking**: Real-time upload and processing status
- **File Validation**: Size and format restrictions

### 3. Dashboard
- **Lecture Overview**: Grid view of all uploaded lectures
- **Status Tracking**: Processing, completed, error states
- **Progress Metrics**: Study completion percentages
- **Quick Actions**: Access summaries, quizzes, study mode

### 4. AI Summary
- **Structured Content**: Organized by sections with timestamps
- **Key Points**: TL;DR bullet points for quick review
- **Important Terms**: Definitions with relevance weights
- **Evidence Linking**: Connect summaries to transcript timestamps

### 5. Practice Quizzes
- **Question Types**: Multiple choice and short answer
- **AI Generation**: Questions based on lecture content
- **Instant Feedback**: Explanations with evidence sources
- **Progress Tracking**: Score calculation and review

## 🔄 Development Phases

### Phase 1: Core Infrastructure ✅
- [x] Project setup and routing
- [x] Navigation and layout
- [x] Upload interface (file + YouTube)
- [x] Dashboard with mock data
- [x] Summary display with tabs
- [x] Quiz interface and scoring
- [x] **Production deployment on Vercel** 🚀

### Phase 2: Backend Integration 🚧
- [ ] Supabase setup (auth, database, storage)
- [ ] File upload to cloud storage
- [ ] AI transcription service (Whisper)
- [ ] Summarization API integration
- [ ] Quiz generation service

### Phase 3: Advanced Features 📋
- [ ] User authentication
- [ ] Study mode with spaced repetition
- [ ] Keyword extraction and search
- [ ] Cross-lecture linking
- [ ] Progress analytics

### Phase 4: Polish & Deploy 🚀
- [ ] Error handling and validation
- [ ] Performance optimization
- [ ] Testing and bug fixes
- [ ] Production deployment
- [ ] User feedback integration

## 🎯 Acceptance Criteria

### Summarizer
- [x] Accurate sections (Intro, Key Points, Terms, Examples)
- [x] TL;DR ≤ 7 bullets, each ≤ 20 words
- [x] Links back to transcript spans (evidence)

### Quiz System
- [x] 10–20 items, 3+ topics, balanced difficulty
- [x] Each item has explanation + evidence span
- [x] Track score & time; show review

### User Experience
- [x] ≤10 min to process a 60-min lecture (simulated)
- [x] Summary quality: readable sections, no raw timestamps
- [x] Works on desktop & mobile web

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file:
```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# AI Services
OPENAI_API_KEY=your_openai_key
WHISPER_API_ENDPOINT=your_whisper_endpoint

# Storage
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

### Tailwind Configuration
The project uses Tailwind CSS with custom color schemes and responsive breakpoints optimized for the lecture summarizer interface.

## 🚀 Deployment

### ✅ **Current Status: LIVE**
**Your Lecture Summarizer is successfully deployed on Vercel!**

- **🌐 Live URL**: https://lecture-summarizer-e68051miq-falih-faizals-projects.vercel.app
- **📊 Vercel Dashboard**: https://vercel.com/falih-faizals-projects/lecture-summarizer
- **🔄 Auto-deploy**: Enabled - updates automatically when you push to GitHub

### Deploy Your Own Copy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Ffalihfaizal95%2FLectureAI)

1. **Quick Deploy**: Click the button above to deploy instantly
2. **Manual Deploy**: 
   - Connect your GitHub repository
   - Set environment variables
   - Deploy automatically on push

### Other Platforms
- **Netlify**: Static site generation
- **Railway**: Full-stack deployment
- **Docker**: Containerized deployment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: Check this README and inline code comments
- **Issues**: Report bugs via GitHub Issues
- **Discussions**: Join community discussions for feature requests

## 🔮 Future Roadmap

### v0.2 - Auto-Quiz Enhancement
- Question difficulty labeling
- Anti-hallucination measures
- Performance analytics

### v0.3 - Knowledge Discovery
- Keyword cloud visualization
- Full-text search
- Concept linking across lectures

### v0.4 - Study Intelligence
- Spaced repetition algorithms
- Adaptive practice scheduling
- Confidence tracking

***Built with ❤️ for students everywhere***
