# Premium Portfolio Website

A modern, dark-first portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion. Designed to impress business owners, startup founders, and decision-makers.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (body) + Space Grotesk (display)
- **Theme**: next-themes (Dark mode default)

## Features

- Premium dark-first design with light mode toggle
- Glassmorphism cards with subtle hover effects
- Smooth scroll and section reveal animations
- Fully responsive across all devices
- SEO optimized with Next.js Metadata API
- Accessible (semantic HTML, keyboard-friendly)
- Case study modals for detailed client work
- Contact form ready for integration

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Clone or navigate to the project:
```bash
cd suraj_portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles & CSS variables
│   ├── layout.tsx       # Root layout with fonts & theme
│   └── page.tsx         # Homepage
├── components/
│   ├── layout/          # Navigation, Footer, ThemeProvider
│   ├── sections/        # Hero, Clients, CaseStudies, etc.
│   └── ui/              # Reusable components (Button, Card, etc.)
├── constants/
│   ├── site.ts          # Site configuration & nav links
│   └── data.ts          # Placeholder data for all sections
├── lib/
│   └── utils.ts         # Utility functions (cn for classnames)
└── types/
    └── index.ts         # TypeScript interfaces
```

## Customization

### Update Personal Information

Edit `src/constants/site.ts`:
```typescript
export const siteConfig: SiteConfig = {
  name: "Your Name",
  title: "Your Name | Full-Stack Engineer",
  description: "Your description...",
  url: "https://yourwebsite.com",
  links: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    email: "hello@yourwebsite.com",
  },
};
```

### Update Content Data

Edit `src/constants/data.ts` to update:
- `clients` - Your client logos and info
- `caseStudies` - Detailed client work
- `projects` - Personal projects
- `skillCategories` - Your skills and tools
- `processSteps` - Your work process

### Adding Client Logos

1. Add logo SVG/PNG files to `public/clients/`
2. Update the `clients` array in `data.ts`
3. Replace the placeholder logo component in `Clients.tsx` with `next/image`

### Contact Form Integration

The contact form is ready for integration. Options:
- **Formspree**: Add form action URL
- **Resend**: Use API route with Resend
- **EmailJS**: Client-side email sending

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import to Vercel
3. Deploy automatically

Or use the CLI:
```bash
npm i -g vercel
vercel
```

### Other Platforms

Build for production:
```bash
npm run build
```

The output will be in `.next/` folder.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Performance

Target: Lighthouse score 90+

Optimizations included:
- Static page generation
- Font optimization with next/font
- Image optimization ready with next/image
- CSS purging with Tailwind
- Smooth animations with Framer Motion

## License

MIT License - feel free to use for your own portfolio.
