import React from 'react';
import { Inter, Bitter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';
import ScrollToTopButton from './components/ScrollToTopButton';
import SkipLink from './components/SkipLink';
import { AnimationProvider } from './components/animations/AnimationProvider';
import ClientOnly from './components/ClientOnly';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter'
});

const bitter = Bitter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-bitter',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic']
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
};

// Enhanced metadata with structured data
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
    'staffing solutions UAE',
    'free job search Dubai',
    'UAE recruitment agency',
    'Dubai job placement',
    'talent acquisition services'
  ],
  authors: [{ name: 'BrightEdge Recruitment Team', developer: 'FKodeLabs' }],
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
  verification: {
    google: 'google-site-verification=BrightEdgeRecruitmentDubaiUAE2025',
    yandex: 'yandex-verification=BrightEdgeRecruitmentYandex2025',
    yahoo: 'yahoo-site-verification=BrightEdgeRecruitmentYahoo2025',
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

// Structured data schemas
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://brightedgerecruitment.com/#organization',
  name: 'BrightEdge Recruitment',
  alternateName: 'BrightEdge',
  url: 'https://brightedgerecruitment.com',
  logo: 'https://brightedgerecruitment.com/logo.png',
  description: 'Leading recruitment agency in Dubai connecting top talent with premier companies worldwide.',
  foundingDate: '2018',
  founders: [
    {
      '@type': 'Person',
      name: 'Sarah Johnson',
      jobTitle: 'CEO & Founder'
    }
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Sobha Saphire, Business Bay',
    addressLocality: 'Dubai',
    addressCountry: 'UAE',
    postalCode: '00000'
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+971-54-377-2366',
      contactType: 'customer service',
      availableLanguage: ['English', 'Arabic'],
      areaServed: ['UAE', 'Middle East', 'Global']
    },
    {
      '@type': 'ContactPoint',
      email: 'Info@brightedgerecruitment.com',
      contactType: 'customer service'
    }
  ],
  sameAs: [
    'https://www.linkedin.com/company/brightedge-recruitment',
    'https://twitter.com/brightedgerecruit',
    'https://facebook.com/brightedgerecruitment',
    'https://instagram.com/brightedgerecruitment'
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '247',
    bestRating: '5',
    worstRating: '1'
  }
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://brightedgerecruitment.com/#website',
  url: 'https://brightedgerecruitment.com',
  name: 'BrightEdge Recruitment',
  description: 'Leading recruitment agency in Dubai connecting top talent with premier companies.',
  publisher: {
    '@id': 'https://brightedgerecruitment.com/#organization'
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://brightedgerecruitment.com/search?q={search_term_string}'
    },
    'query-input': 'required name=search_term_string'
  },
  inLanguage: 'en-US'
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://brightedgerecruitment.com/#localbusiness',
  name: 'BrightEdge Recruitment',
  image: 'https://brightedgerecruitment.com/og-image.jpg',
  telephone: '+971-54-377-2366',
  email: 'Info@brightedgerecruitment.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Sobha Saphire, Business Bay',
    addressLocality: 'Dubai',
    addressCountry: 'UAE'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 25.2048,
    longitude: 55.2708
  },
  url: 'https://brightedgerecruitment.com',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '14:00'
    }
  ],
  priceRange: '$$'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${bitter.variable}`}>
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema)
          }}
        />
      </head>
      <body className={`${bitter.className} antialiased`}>
        <SkipLink />
        <AnimationProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main id="main-content" className="flex-grow pt-20" role="main">
              {children}
            </main>
            <ClientOnly>
              <Footer />
            </ClientOnly>
            {/* <WhatsAppFloatingButton /> */}
            <ClientOnly>
              <ScrollToTopButton showAfter={300} />
            </ClientOnly>
          </div>
        </AnimationProvider>
      </body>
    </html>
  );
}