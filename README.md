# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js 14, showcasing machine learning and software development projects.

## Features

- **Modern Design**: Clean, responsive layout with dark mode support
- **Project Showcase**: Grid-based project display with filtering and search
- **Admin Dashboard**: Full CRUD operations for project management
- **Contact Form**: Functional contact form with validation
- **Blog Section**: Markdown-based blog for sharing insights
- **SEO Optimized**: Meta tags, structured data, and performance optimized

## Tech Stack

- **Frontend**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **UI Components**: shadcn/ui
- **Database**: PostgreSQL with Prisma ORM
- **Styling**: Tailwind CSS with dark mode support
- **Icons**: Lucide React
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- PostgreSQL database
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Set up environment variables:
\`\`\`bash
cp .env.example .env.local
\`\`\`

Add your database URL and other required environment variables:
\`\`\`
DATABASE_URL="postgresql://username:password@localhost:5432/portfolio"
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"
\`\`\`

4. Set up the database:
\`\`\`bash
# Run the database initialization script
psql -d your_database_name -f scripts/init-database.sql

# Seed with sample data
psql -d your_database_name -f scripts/seed-data.sql
\`\`\`

5. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

\`\`\`
├── app/
│   ├── admin/              # Admin dashboard
│   ├── api/                # API routes
│   ├── blog/               # Blog pages
│   ├── contact/            # Contact page
│   ├── projects/           # Projects pages
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/
│   ├── layout/             # Layout components
│   └── ui/                 # shadcn/ui components
├── scripts/
│   ├── init-database.sql   # Database schema
│   └── seed-data.sql       # Sample data
└── lib/
    └── utils.ts            # Utility functions
\`\`\`

## Key Features

### 🏠 Landing Page
- Hero section with personal introduction
- Tech stack showcase with badges
- Featured projects grid
- Call-to-action sections

### 📁 Projects Page
- Grid layout with project cards
- Search and filter functionality
- Category-based filtering
- Responsive design for all devices

### 👨‍💼 Admin Dashboard
- Add, edit, and delete projects
- Form validation and error handling
- Featured project management
- Image URL management

### 📧 Contact Form
- Form validation with error messages
- Email integration ready
- Responsive design
- Success/error feedback

### 🌙 Dark Mode
- System preference detection
- Manual toggle option
- Consistent theming across all pages

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on push

### Environment Variables for Production

\`\`\`
DATABASE_URL="your-production-database-url"
NEXTAUTH_SECRET="your-production-secret"
NEXTAUTH_URL="https://your-domain.com"
\`\`\`

## Database Schema

The application uses PostgreSQL with the following main tables:

- **projects**: Store project information
- **contact_messages**: Store contact form submissions
- **blog_posts**: Store blog articles (optional)

## Customization

### Adding New Projects
1. Use the admin dashboard at `/admin`
2. Fill in project details including:
   - Name and description
   - Technologies used
   - GitHub and live demo URLs
   - Category and featured status

### Styling
- Modify `tailwind.config.ts` for theme customization
- Update `app/globals.css` for global styles
- Use shadcn/ui components for consistent design

### Content
- Update personal information in `app/page.tsx`
- Modify navigation in `components/layout/header.tsx`
- Customize footer in `components/layout/footer.tsx`

## Performance Optimizations

- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic code splitting with App Router
- **SEO**: Meta tags, structured data, and semantic HTML
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

If you have any questions or need help with setup, please:
- Open an issue on GitHub
- Contact me at alex.chen@example.com
- Check the documentation in the `/docs` folder

## Roadmap

- [ ] Blog functionality with markdown support
- [ ] Project detail pages
- [ ] Analytics integration
- [ ] Newsletter subscription
- [ ] Search functionality
- [ ] Comments system for blog posts
- [ ] Multi-language support

---

Built with ❤️ by Alex Chen
