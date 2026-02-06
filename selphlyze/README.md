# Selphlyze - AI-Powered Psychological Analysis Platform

A modern, minimalistic website for psychological self-discovery using Next.js, React, and AI-powered analysis.

![Selphlyze Banner](https://via.placeholder.com/1200x400/008080/ffffff?text=Selphlyze+-+Discover+Your+True+Self)

## 🚀 Features

### Core Functionality
- **Interactive Homepage** with clean, minimalist design
- **Demographic Collection** through beautiful modal with dropdowns for Age, Gender, and Country
- **Psychological Assessment** with 10 scientifically-crafted questions
- **AI-Powered Analysis** using OpenAI GPT-4 for personalized insights
- **Unique SelfCode Generation** for each personality profile
- **Results Visualization** with detailed psychological insights
- **Response Time Tracking** for advanced behavioral analysis

### Technical Features
- **Full-Stack Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for responsive, modern styling
- **Prisma ORM** with PostgreSQL for data storage
- **OpenAI Integration** for psychological analysis
- **Analytics Tracking** for user behavior insights
- **SEO Optimized** with comprehensive meta tags
- **Mobile Responsive** design
- **Progressive Web App** capabilities

## 🎨 Design System

### Color Scheme
- **Primary**: `#008080` (Teal) - Main brand color
- **Secondary**: `#5E17EB` (Deep Purple) - Accent color  
- **Accent**: `#00A3A3` (Light Teal) - Highlight color

### Typography
- **Font**: Inter (Google Fonts)
- **Weight Range**: 300-700
- **Optimized loading** with font-display: swap

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **React 18** - Component library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Modern icon library
- **Framer Motion** - Animation library

### Backend
- **Next.js API Routes** - Serverless functions
- **Prisma ORM** - Database toolkit
- **PostgreSQL** - Primary database
- **OpenAI API** - AI-powered analysis

### Analytics & Monitoring
- **Custom analytics** - User behavior tracking
- **Response time monitoring** - Performance insights
- **Demographics analysis** - User segmentation

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- PostgreSQL database
- OpenAI API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/selphlyze.git
   cd selphlyze
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Update `.env.local` with your configuration:
   ```env
   # OpenAI Configuration
   OPENAI_API_KEY=your_openai_api_key_here
   
   # Database Configuration
   DATABASE_URL="postgresql://username:password@localhost:5432/selphlyze?schema=public"
   ```

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma migrate dev --name init
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Visit `http://localhost:3000` to see the application.

## 📁 Project Structure

```
selphlyze/
├── src/
│   ├── app/                    # Next.js 14 App Router
│   │   ├── api/               # API routes
│   │   │   ├── analyze/       # OpenAI analysis endpoint
│   │   │   ├── analytics/     # Analytics tracking
│   │   │   └── save-results/  # Results storage
│   │   ├── test/              # Test flow pages
│   │   │   ├── start/         # Question interface
│   │   │   └── results/       # Results display
│   │   ├── about/             # About page
│   │   ├── contact/           # Contact page
│   │   ├── tests/             # Test selection page
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Homepage
│   │   └── globals.css        # Global styles
│   ├── components/            # Reusable components
│   │   ├── Header.tsx         # Navigation header
│   │   ├── SearchBox.tsx      # Central search component
│   │   └── TestModal.tsx      # Demographics modal
│   └── lib/                   # Utility libraries
│       └── prisma.ts          # Database client
├── prisma/                    # Database schema
│   └── schema.prisma         # Prisma schema definition
├── tailwind.config.ts        # Tailwind configuration
├── next.config.js            # Next.js configuration
└── package.json              # Dependencies
```

## 🔧 Configuration

### Database Schema

The application uses three main models:

1. **TestSession** - Stores complete test results
2. **Analytics** - Tracks user behavior events  
3. **UserFeedback** - Collects user feedback

### OpenAI Integration

The application uses GPT-4 to analyze user responses and generate:
- Unique SelfCode (6-character identifier)
- Personality summary
- Core strengths analysis
- Detailed trait breakdown
- Growth recommendations
- Career insights
- Relationship dynamics

### Analytics Events

Tracked events include:
- `test_started` - User begins assessment
- `test_completed` - User finishes assessment
- `modal_opened` - Demographics modal displayed
- `question_viewed` - Individual question interactions

## 🌍 Deployment

### Vercel (Recommended)

1. **Connect to Vercel**
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Set environment variables** in Vercel dashboard
   - `OPENAI_API_KEY`
   - `DATABASE_URL`

3. **Deploy database**
   Use Vercel Postgres or connect external PostgreSQL

### Other Platforms

The application can be deployed on:
- **Netlify** (with serverless functions)
- **Railway** (with built-in PostgreSQL)
- **DigitalOcean App Platform**
- **AWS Amplify**

## 🧪 Testing

### Run Tests
```bash
npm test
```

### Type Checking
```bash
npm run type-check
```

### Linting
```bash
npm run lint
```

## 📊 Analytics Dashboard

Access analytics at `/api/analytics` with query parameters:
- `?days=30` - Filter by date range
- `?event=test_completed` - Filter by event type

Example response:
```json
{
  "summary": {
    "totalEvents": 1250,
    "uniqueEvents": ["test_started", "test_completed"],
    "demographics": {
      "countries": { "United States": 450, "Canada": 200 },
      "ageRanges": { "25-34": 380, "35-44": 290 }
    }
  }
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **OpenAI** for GPT-4 API
- **Vercel** for hosting platform
- **Tailwind CSS** for styling system
- **Prisma** for database toolkit
- **Lucide** for beautiful icons

## 📞 Support

For support and questions:
- **Email**: support@selphlyze.com
- **Documentation**: [docs.selphlyze.com](https://docs.selphlyze.com)
- **Issues**: [GitHub Issues](https://github.com/yourusername/selphlyze/issues)

---

**Built with ❤️ for self-discovery and personal growth.**
