import ServicesClient from './ServicesClient';

export const metadata = {
  title: 'Our Services',
  description: 'Comprehensive recruitment services including talent acquisition, executive search, and HR consulting. Connecting top talent with leading companies.',
  openGraph: {
    title: 'Our Services | BrightEdge Recruitment',
    description: 'Comprehensive recruitment services including talent acquisition, executive search, and HR consulting.',
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}