import ServicesClient from './ServicesClient';
import StructuredData from '../components/seo/StructuredData';

export const metadata = {
  title: 'Our Services',
  description: 'Comprehensive recruitment services including talent acquisition, executive search, and HR consulting. Connecting top talent with leading companies.',
  openGraph: {
    title: 'Our Services | BrightEdge Recruitment',
    description: 'Comprehensive recruitment services including talent acquisition, executive search, and HR consulting.',
  },
};

export default function ServicesPage() {
  return (
    <>
      <StructuredData 
        type="service" 
        data={{
          '@type': 'Service',
          name: 'Recruitment Services',
          description: 'Comprehensive recruitment and talent acquisition services',
          provider: {
            '@type': 'Organization',
            name: 'BrightEdge Recruitment'
          },
          serviceType: 'Recruitment and Staffing',
          areaServed: 'UAE'
        }} 
      />
      <ServicesClient />
    </>
  );
}