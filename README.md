# LegalEase AI

> AI-powered legal document analyzer for Indian citizens - Making legal knowledge simple and accessible.

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com)
[![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js%2014-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![Powered by Gemini](https://img.shields.io/badge/Powered%20by-Gemini%20AI-blue?style=for-the-badge&logo=google)](https://ai.google.dev)

---

## Overview

LegalEase AI helps Indian citizens understand complex legal documents like FIRs, challans, legal notices, and charge sheets. Upload any legal document and get instant, AI-powered analysis with plain-English explanations, risk assessment, and actionable next steps.

---

## Features

| Feature | Description |
|---------|-------------|
| **Document Analysis** | Upload PDF/images, get AI-extracted details, IPC sections, penalties, and risk score |
| **AI Legal Assistant** | Gemini-powered chatbot for legal Q&A accessible from any page |
| **Compare States** | Side-by-side comparison of how laws differ across Indian states |
| **Legal Quiz** | Gamified learning with state-wise questions, badges, and explanations |
| **Law of the Day** | Daily curated law with plain-English explanation and bookmarking |
| **Find Lawyers** | Verified lawyer directory with filters and consent-based contact |
| **Multi-language** | Full support for English, Hindi, and Marathi |

---

## How It Works

1. **Upload** - User uploads FIR/challan/legal notice (image or PDF)
2. **Extract** - Gemini Vision performs OCR and extracts text
3. **Analyze** - AI detects legal sections (IPC, BNS, CrPC, MV Act)
4. **Match** - System looks up state-specific laws from curated database
5. **Explain** - Generates plain-English summaries with risk assessment
6. **Output** - User receives clean report with timeline and next steps

---

## Architecture

\`\`\`
┌─────────────────────────────────────────────────────────┐
│                      FRONTEND                            │
│            Next.js 14 + React + TypeScript              │
│          Tailwind CSS + shadcn/ui + Framer Motion       │
└─────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────┐
│                     API ROUTES                           │
│      /api/analyze    /api/chat    /api/compare          │
└─────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────┐
│                  GEMINI 2.5 FLASH                        │
│           Vision (OCR) + NLP + Text Generation          │
└─────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────┐
│                   DATA STORES                            │
│    Curated Law DB (static)  |  localStorage (user)      │
└─────────────────────────────────────────────────────────┘
\`\`\`

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + shadcn/ui |
| Animations | Framer Motion |
| AI Engine | Google Gemini 2.5 Flash |
| OCR | Gemini Vision (multimodal) |
| Storage | localStorage (client-side) |
| Deployment | Vercel |

---

## Project Structure

\`\`\`
app/
├── page.tsx                 # Landing page
├── analyze/                 # Document upload & analysis
├── chat/                    # AI legal assistant
├── compare/                 # State law comparison
├── quiz/                    # Legal knowledge quizzes
├── law-of-the-day/          # Daily curated law
├── lawyers/                 # Lawyer directory
├── saved-cases/             # User's saved analyses
├── demo/                    # Demo with sample data
└── api/
    ├── analyze/route.ts     # Document analysis API
    ├── chat/route.ts        # Chat assistant API
    └── compare/route.ts     # State comparison API

lib/
├── language-context.tsx     # i18n provider
├── translations.ts          # UI strings (EN/HI/MR)
├── laws-database.ts         # Curated law entries
├── lawyers-database.ts      # Lawyer directory data
├── quiz-data.ts             # Quiz questions
└── types.ts                 # TypeScript interfaces

components/
├── analyze/                 # Analysis UI components
├── landing/                 # Landing page sections
├── lawyers/                 # Lawyer components
├── layout/                  # Navigation components
├── floating-chat-button.tsx # Global chat trigger
├── language-switcher.tsx    # Language dropdown
└── mobile-nav.tsx           # Mobile bottom nav
\`\`\`

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Gemini API Key

### Installation

\`\`\`bash
# Clone the repository
git clone https://github.com/your-username/legalease-ai.git
cd legalease-ai

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Add your GEMINI_API_KEY to .env.local

# Run development server
npm run dev
\`\`\`

### Environment Variables

\`\`\`env
GEMINI_API_KEY=your_gemini_api_key_here
\`\`\`

---

## Key Modules

### Document Analysis
- Supports PDF and images (JPG, PNG)
- Gemini Vision handles OCR for scanned documents
- Extracts: case type, sections, parties, dates, penalties
- Generates risk score and legal timeline

### AI Chat Assistant
- Floating button accessible from any page
- Gemini-powered legal advisor responses
- Covers: traffic laws, IPC, consumer rights, property, cybercrime
- Suggested questions based on context

### State Comparison
- Select legal section (e.g., Section 184 - Dangerous Driving)
- Compare penalties between two Indian states
- Shows key differences with formatted explanations

### Legal Quiz
- State-wise question packs (Maharashtra, Delhi)
- Three levels: Beginner, Intermediate, Scenario-based
- Features: 50:50 lifeline, timer, badges, explanations

### Law of the Day
- Daily rotating featured law from curated database
- Categories: Traffic, IPC, Consumer, Cybercrime, Civil, Property
- Bookmark to personal library

### Find Lawyers
- Filter by state, practice area, fee type, language
- Verified badges and availability status
- Contact form with explicit privacy consent

---

## Privacy & Security

- **No server storage** - All user data stays in browser localStorage
- **No account required** - Works immediately without signup
- **Verified sources** - Laws from curated legal database only
- **Explicit consent** - Privacy modal before sharing data with lawyers

---

## Disclaimer

LegalEase AI provides general legal information for educational purposes only. It does not constitute legal advice. Always consult a qualified lawyer for specific legal matters.

---

## License

MIT License - see [LICENSE](LICENSE) for details.

---

## Contributing

Contributions are welcome! Please read our contributing guidelines before submitting PRs.

---

## Support

For issues and feature requests, please open a GitHub issue or contact support.
