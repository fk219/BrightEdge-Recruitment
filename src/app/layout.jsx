import React from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';
import ScrollbarStyles from './components/ScrollbarStyles'
import ScrollToTopButton from './components/ScrollToTopButton';
import StructuredData from './components/seo/StructuredData';
import SmoothScroll from './components/SmoothScroll';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter'
});

export const metadata = {
  metadataBase: new URL('https://brightedgerecruitment.com'),
  title: {
    default: 'BrightEdge Recruitment | Top Talent Acquisition Dubai UAE',
    template: '%s | BrightEdge Recruitment'
  },
  description: 'Leading recruitment agency in Dubai connecting top talent with premier companies. 15K+ successful placements, 95% retention rate. Connect • Grow • Succeed',
  keywords: [
    'recruitment Dubai',
    'talent acquisition UAE',
    'job placement Dubai',
    'hiring services UAE',
    'executive search Dubai',
    'HR consulting UAE',
    'career opportunities Dubai',
    'employment agency UAE',
    'headhunting Dubai',
    'staffing solutions UAE'
  ],
  authors: [{ name: 'BrightEdge Recruitment Team' }],
  creator: 'BrightEdge Recruitment',
  publisher: 'BrightEdge Recruitment',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://brightedgerecruitment.com',
    siteName: 'BrightEdge Recruitment',
    title: 'BrightEdge Recruitment | Top Talent Acquisition Dubai UAE',
    description: 'Leading recruitment agency in Dubai connecting top talent with premier companies. 15K+ successful placements, 95% retention rate.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BrightEdge Recruitment - Connect, Grow, Succeed',
        type: 'image/jpeg',
      },
      {
        url: '/og-image-square.jpg',
        width: 1200,
        height: 1200,
        alt: 'BrightEdge Recruitment Logo',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@brightedgerecruit',
    creator: '@brightedgerecruit',
    title: 'BrightEdge Recruitment | Top Talent Acquisition Dubai UAE',
    description: 'Leading recruitment agency in Dubai connecting top talent with premier companies. 15K+ successful placements, 95% retention rate.',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#2563eb',
      },
    ],
  },
  manifest: '/manifest.json',
  category: 'business',
  classification: 'Recruitment and Staffing Services',
  referrer: 'origin-when-cross-origin',
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  alternates: {
    canonical: 'https://brightedgerecruitment.com',
    languages: {
      'en-US': 'https://brightedgerecruitment.com',
      'ar-AE': 'https://brightedgerecruitment.com/ar',
    },
  },
  other: {
    'msapplication-TileColor': '#2563eb',
    'msapplication-config': '/browserconfig.xml',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <StructuredData type="organization" />
        <StructuredData type="website" />
        <StructuredData type="localbusiness" />
        <StructuredData type="breadcrumb" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <SmoothScroll />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <ScrollbarStyles />
          
          <main className="flex-grow pt-20">
            {children}
          </main>
          
          <Footer />
          {/* <WhatsAppFloatingButton /> */}
          <ScrollToTopButton showAfter={300} />
        </div>
      </body>
    </html>
  );
}
