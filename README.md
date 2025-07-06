# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Inspired by [Leo's portfolio](https://www.thleo.co/).

## Features

- 🎨 Modern, clean design with dark/light mode toggle
- 📱 Fully responsive across all devices
- ⚡ Built with Next.js 15 and TypeScript
- 🎭 Smooth animations with Framer Motion
- 🌙 Dark mode support
- 📊 Skills and projects showcase
- 📧 Contact section
- 🔍 SEO optimized

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd personal-website
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

## Customization

### Personal Information

Update the following in `src/app/page.tsx`:

1. **Name**: Replace "Your Name" with your actual name
2. **Description**: Update the hero section description
3. **Projects**: Modify the `projects` array with your own projects
4. **Skills**: Update the `skills` object with your skills
5. **Contact**: Update email and social media links

### Styling

- **Colors**: Modify the gradient colors in `src/app/globals.css`
- **Fonts**: Change fonts in `src/app/layout.tsx`
- **Layout**: Adjust spacing and layout in the component files

### Projects

Each project in the `projects` array should have:

```typescript
{
  title: "Project Name",
  description: "Project description",
  tech: ["Technology 1", "Technology 2"],
  github: "GitHub URL",
  demo: "Live demo URL (optional)",
  image: "Image path (optional)"
}
```

### Skills

Update the skills object with your expertise:

```typescript
const skills = {
  languages: ["Your", "Programming", "Languages"],
  ml: ["Your", "ML", "Tools"],
  tools: ["Your", "Development", "Tools"]
};
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Next.js and deploy
5. Your site will be live at `https://your-project.vercel.app`

### Environment Variables

No environment variables are required for basic functionality.

### Custom Domain

1. In your Vercel dashboard, go to your project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/              # Reusable components (if any)
└── lib/                     # Utility functions (if any)
```

## Performance

- ✅ Optimized images with Next.js Image component
- ✅ Code splitting with Next.js
- ✅ CSS purging with Tailwind
- ✅ Lazy loading for animations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Design inspired by [Leo's portfolio](https://www.thleo.co/)
- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide React](https://lucide.dev/)

## Support

If you have any questions or need help customizing your portfolio, feel free to open an issue or reach out!
