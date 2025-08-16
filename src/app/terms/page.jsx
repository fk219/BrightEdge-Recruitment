import TermsOfServiceClient from './TermsOfServiceClient';
import StructuredData from '../components/seo/StructuredData';

export const metadata = {
  title: 'Terms of Service',
  description: 'Read the terms and conditions for using BrightEdge Recruitment services and website.',
  openGraph: {
    title: 'Terms of Service | BrightEdge Recruitment',
    description: 'Read the terms and conditions for using BrightEdge Recruitment services and website.',
  },
};

export default function TermsOfServicePage() {
  return (
    <>
      <StructuredData 
        type="webpage" 
        data={{
          '@type': 'WebPage',
          name: 'Terms of Service',
          description: 'BrightEdge Recruitment Terms of Service - Legal terms and conditions',
          url: 'https://brightedgerecruitment.com/terms'
        }} 
      />
      <TermsOfServiceClient />
    </>
  );
}