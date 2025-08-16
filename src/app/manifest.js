export default function manifest() {
  return {
    name: 'BrightEdge Recruitment',
    short_name: 'BrightEdge',
    description: 'Leading recruitment agency in Dubai connecting top talent with premier companies. Connect • Grow • Succeed',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2563eb',
    orientation: 'portrait-primary',
    categories: ['business', 'productivity', 'recruitment'],
    lang: 'en',
    dir: 'ltr',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/icon-256x256.png',
        sizes: '256x256',
        type: 'image/png'
      },
      {
        src: '/icon-384x384.png',
        sizes: '384x384',
        type: 'image/png'
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable'
      }
    ],
    screenshots: [
      {
        src: '/screenshot-wide.png',
        sizes: '1280x720',
        type: 'image/png',
        form_factor: 'wide',
        label: 'BrightEdge Recruitment Homepage'
      },
      {
        src: '/screenshot-narrow.png',
        sizes: '750x1334',
        type: 'image/png',
        form_factor: 'narrow',
        label: 'BrightEdge Mobile View'
      }
    ],
    shortcuts: [
      {
        name: 'Find Jobs',
        short_name: 'Jobs',
        description: 'Browse available job opportunities',
        url: '/find-jobs',
        icons: [{ src: '/shortcut-jobs.png', sizes: '96x96' }]
      },
      {
        name: 'Hire Talent',
        short_name: 'Hire',
        description: 'Post jobs and find candidates',
        url: '/hire-talent',
        icons: [{ src: '/shortcut-hire.png', sizes: '96x96' }]
      },
      {
        name: 'Contact Us',
        short_name: 'Contact',
        description: 'Get in touch with our team',
        url: '/contact',
        icons: [{ src: '/shortcut-contact.png', sizes: '96x96' }]
      }
    ],
    related_applications: [],
    prefer_related_applications: false,
    edge_side_panel: {
      preferred_width: 400
    }
  };
}