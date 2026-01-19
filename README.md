# Vidvatta Academy Website

A modern, elegant, responsive educational website for Vidvatta Academy, specializing in Abacus and Vedic Mathematics training for students from Class 1 to Class 10.

## 🌟 Features

- **Modern Design**: Elegant Vedic-themed design with earthy tones and premium aesthetics
- **Fully Responsive**: Mobile-first design that works seamlessly on all devices
- **Multiple Pages**: Home, About, Courses, Classes, Summer Camps, Grade Coverage, Testimonials, and Contact
- **Contact Form**: Fully functional email contact form with automatic email notifications
- **Google Maps Integration**: Embedded map showing academy location
- **WhatsApp Integration**: Floating WhatsApp button for quick communication
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Smooth Animations**: Subtle fade-in and hover effects

## 🎨 Design System

### Color Palette
- **Saffron**: Primary accent color (#FFC107 variants)
- **Sandalwood Beige**: Secondary color (#F5F1E8 variants)
- **Vedic Green**: #2D5016
- **Vedic Maroon**: #8B0000
- **Vedic Gold**: #D4AF37

### Typography
- **Headings**: Playfair Display (Serif, Sanskrit-inspired)
- **Body**: Inter (Modern sans-serif)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Gmail account with App Password (for contact form)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.local.example .env.local
```

Then edit `.env.local` and add your Gmail credentials:
```
SMTP_EMAIL=Vidvatta.academy@gmail.com
SMTP_PASSWORD=your_gmail_app_password_here
```

**To get a Gmail App Password:**
1. Go to your Google Account settings
2. Enable 2-Factor Authentication if not already enabled
3. Go to https://myaccount.google.com/apppasswords
4. Generate a new App Password for "Mail"
5. Use that 16-character password in `.env.local`

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
vidvatta-academy/
├── app/
│   ├── about/          # About Us page
│   ├── api/
│   │   └── contact/    # Contact form API endpoint
│   ├── classes/        # Online & Offline Classes page
│   ├── contact/        # Contact page with form
│   ├── courses/        # Courses page (Abacus & Vedic Math)
│   ├── grades/         # Grade Coverage page
│   ├── summer-camps/   # Summer Camps page
│   ├── testimonials/   # Testimonials page
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Footer component
│   └── WhatsAppButton.tsx  # Floating WhatsApp button
├── public/             # Static assets
├── .env.local          # Environment variables (not in git)
└── package.json
```

## 📝 Pages Overview

### Home Page
- Hero section with main CTA
- Highlights showcase
- Benefits section
- Call-to-action

### About Us
- Academy story
- Mission, Vision, Philosophy
- Core values
- What makes us different

### Courses
- Abacus Program details (Class 1-5)
- Vedic Mathematics details (Class 4-10)
- Key benefits for each course

### Classes
- Online classes features
- Offline classes features
- Flexible timings information

### Summer Camps
- "Happy Trails Summer Camp" details
- Activities and highlights
- Schedule information

### Grade Coverage
- Structured learning path visualization
- Detailed breakdown for each grade level
- Benefits at every stage

### Testimonials
- Parent testimonials (placeholders)
- Student success stories

### Contact
- Contact information cards
- **Working contact form** that sends emails to Vidvatta.academy@gmail.com
- Google Maps embed
- Quick action CTAs

## 📧 Contact Form Setup

The contact form is fully functional and sends emails in two ways:

1. **To Academy**: Sends inquiry details to `Vidvatta.academy@gmail.com`
2. **To User**: Sends confirmation email to the person who submitted the form

Make sure to:
- Set up `.env.local` with your Gmail credentials
- Use a Gmail App Password (not your regular password)
- Test the form after deployment

## 🔧 Customization

### Updating Contact Information
Edit `app/contact/page.tsx` and `components/Footer.tsx` with new contact details.

### Updating Colors
Modify `tailwind.config.ts` to change the color palette.

### Adding Content
Update respective page files in the `app/` directory.

### Email Configuration
The contact form sends emails to `Vidvatta.academy@gmail.com` by default. To change this, edit `app/api/contact/route.ts`.

## 📱 Features to Enhance (Future)

- [ ] CMS integration for easy content management
- [ ] Newsletter signup functionality
- [ ] Admin dashboard
- [ ] Blog section
- [ ] Student portal
- [ ] Payment gateway integration

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Email**: Nodemailer with Gmail SMTP
- **Deployment**: Ready for Vercel/Netlify

## 🔒 Security Notes

- Never commit `.env.local` to version control
- Use App Passwords, not regular passwords for SMTP
- Consider using a dedicated email service (SendGrid, Resend) for production

## 📄 License

© Vidvatta Academy. All Rights Reserved.

## 📞 Support

For questions or support, contact:
- Email: Vidvatta.academy@gmail.com
- Phone: +91 78925 05452, +91 98869 31521
- Location: Arehalli, Uttarahalli, Bangalore
