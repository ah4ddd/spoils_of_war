# Spoils of War

> A minimalist, professional digital resource collection platform

## Overview

Spoils of War is a curated collection of digital resources organized across multiple categories including streaming platforms, gaming, academic resources, software tools, and mobile applications. Built with modern web technologies for optimal performance and user experience.

## Features

- **Dark/Light Theme Toggle** - Seamless theme switching
- **Responsive Design** - Optimized for all devices
- **Organized Categories** - Clean categorization of resources
- **Modern UI/UX** - Minimalist, professional interface
- **Fast Performance** - Built with Vite and React

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **Icons**: Lucide React
- **Theme Management**: next-themes

## Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone <your-repo-url>

# Navigate to project directory
cd spoils-of-war

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:8080`

## Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── ResourceSection.tsx
│   └── ThemeToggle.tsx
├── pages/              # Route components
│   ├── Index.tsx
│   └── NotFound.tsx
├── lib/                # Utility functions
├── hooks/              # Custom React hooks
└── index.css          # Global styles & design tokens
```

## Deployment

### Render Deployment

1. Push your code to GitHub
2. Connect your GitHub repository to Render
3. Configure build settings:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
4. Deploy automatically on every push to main branch

### Other Platforms

- **Vercel**: `vercel --prod`
- **Netlify**: Drag & drop `dist` folder
- **GitHub Pages**: Use GitHub Actions workflow

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

---

**Made with ⚡ by [ahad](https://github.com/ah4ddd)**