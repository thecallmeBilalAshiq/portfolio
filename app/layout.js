import '@/styles/globals.css';
import Script from 'next/script';

export const metadata = {
  title: 'Muhammad Bilal Ashiq | AI & Software Engineer Portfolio',
  description: 'Official Portfolio of Muhammad Bilal Ashiq - Computer Science Graduate from FAST-NUCES Lahore, specializing in AI, Machine Learning, Next.js, and Full-Stack Engineering.',
  keywords: [
    'Muhammad Bilal Ashiq',
    'AI Engineer',
    'Machine Learning Engineer',
    'Full Stack Developer',
    'FAST NUCES',
    'Next.js',
    'React',
    'PyTorch',
    'Lahore Pakistan'
  ],
  authors: [{ name: 'Muhammad Bilal Ashiq' }],
  openGraph: {
    title: 'Muhammad Bilal Ashiq | AI & Software Engineer Portfolio',
    description: 'Explore projects, research, technical skills, and experience of Muhammad Bilal Ashiq.',
    url: 'https://thecallmebilalashiq.github.io',
    siteName: 'Muhammad Bilal Ashiq Portfolio',
    images: [
      {
        url: '/photos/photo_1.jpeg',
        width: 1200,
        height: 630,
        alt: 'Muhammad Bilal Ashiq'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  icons: {
    icon: '/favicon.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500&family=Inter:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Sora:wght@400;600;700;800&family=Space+Grotesk:wght@500;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        <link rel="stylesheet" href="https://unpkg.com/lenis@1.1.18/dist/lenis.css" />
      </head>
      <body>
        {children}
        <Script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js" strategy="beforeInteractive" />
        <Script src="https://unpkg.com/aos@next/dist/aos.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
