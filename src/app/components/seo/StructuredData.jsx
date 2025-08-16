'use client';

import { usePathname } from 'next/navigation';

const StructuredData = ({ type = 'organization', data = {} }) => {
  const pathname = usePathname();
  const baseUrl = 'https://brightedgerecruitment.com';

  const getOrganizationSchema = () => ({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'BrightEdge Recruitment',
    alternateName: 'BrightEdge',
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
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
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 25.2048,
        longitude: 55.2708
      },
      geoRadius: '50000'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Recruitment Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Talent Acquisition',
            description: 'End-to-end recruitment solutions for businesses'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Executive Search',
            description: 'Senior-level executive recruitment services'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'HR Consulting',
            description: 'Strategic human resources consulting'
          }
        }
      ]
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '247',
      bestRating: '5',
      worstRating: '1'
    },
    ...data
  });

  const getLocalBusinessSchema = () => ({
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${baseUrl}#localbusiness`,
    name: 'BrightEdge Recruitment',
    image: `${baseUrl}/og-image.jpg`,
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
    url: baseUrl,
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
    priceRange: '$$',
    ...data
  });

  const getBreadcrumbSchema = () => {
    const pathSegments = pathname.split('/').filter(Boolean);
    const breadcrumbList = [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl
      }
    ];

    let currentPath = baseUrl;
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      breadcrumbList.push({
        '@type': 'ListItem',
        position: index + 2,
        name: segment.charAt(0).toUpperCase() + segment.slice(1).replace('-', ' '),
        item: currentPath
      });
    });

    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbList,
      ...data
    };
  };

  const getWebsiteSchema = () => ({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}#website`,
    url: baseUrl,
    name: 'BrightEdge Recruitment',
    description: 'Leading recruitment agency in Dubai connecting top talent with premier companies.',
    publisher: {
      '@id': `${baseUrl}#organization`
    },
    potentialAction: [
      {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${baseUrl}/search?q={search_term_string}`
        },
        'query-input': 'required name=search_term_string'
      }
    ],
    ...data
  });

  const getFAQSchema = () => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What services does BrightEdge Recruitment offer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'BrightEdge offers comprehensive recruitment services including talent acquisition, executive search, HR consulting, and career placement services for both job seekers and employers.'
        }
      },
      {
        '@type': 'Question',
        name: 'How long does the recruitment process take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our average hire time is 18 days, though this can vary depending on the role complexity and specific requirements. We prioritize quality matches over speed.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do you charge fees to job seekers?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No, our services are completely free for job seekers. We are paid by employers when we successfully place candidates in positions.'
        }
      },
      {
        '@type': 'Question',
        name: 'What industries do you specialize in?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We specialize in technology, finance, healthcare, engineering, marketing, and executive roles across various industries in the UAE and internationally.'
        }
      }
    ],
    ...data
  });

  const getJobPostingSchema = (jobData) => ({
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: jobData.title || 'Career Opportunities',
    description: jobData.description || 'Explore exciting career opportunities with top companies through BrightEdge Recruitment.',
    identifier: {
      '@type': 'PropertyValue',
      name: 'BrightEdge Job ID',
      value: jobData.id || 'GENERAL'
    },
    datePosted: jobData.datePosted || new Date().toISOString(),
    validThrough: jobData.validThrough || new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    employmentType: jobData.employmentType || ['FULL_TIME', 'PART_TIME', 'CONTRACT'],
    hiringOrganization: {
      '@type': 'Organization',
      name: 'BrightEdge Recruitment',
      sameAs: baseUrl,
      logo: `${baseUrl}/logo.png`
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Dubai',
        addressCountry: 'UAE'
      }
    },
    baseSalary: {
      '@type': 'MonetaryAmount',
      currency: 'AED',
      value: {
        '@type': 'QuantitativeValue',
        minValue: jobData.minSalary || 5000,
        maxValue: jobData.maxSalary || 50000,
        unitText: 'MONTH'
      }
    },
    ...data
  });

  const getSchema = () => {
    switch (type) {
      case 'organization':
        return getOrganizationSchema();
      case 'localbusiness':
        return getLocalBusinessSchema();
      case 'breadcrumb':
        return getBreadcrumbSchema();
      case 'website':
        return getWebsiteSchema();
      case 'faq':
        return getFAQSchema();
      case 'jobposting':
        return getJobPostingSchema(data);
      default:
        return getOrganizationSchema();
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getSchema())
      }}
    />
  );
};

export default StructuredData;