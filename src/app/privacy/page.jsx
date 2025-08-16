import PrivacyPolicyClient from './PrivacyPolicyClient';
import StructuredData from '../components/seo/StructuredData';

export const metadata = {
  title: 'Privacy Policy',
  description: 'Learn how BrightEdge Recruitment protects your personal information and respects your privacy rights.',
  openGraph: {
    title: 'Privacy Policy | BrightEdge Recruitment',
    description: 'Learn how BrightEdge Recruitment protects your personal information and respects your privacy rights.',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <StructuredData 
        type="webpage" 
        data={{
          '@type': 'WebPage',
          name: 'Privacy Policy',
          description: 'BrightEdge Recruitment Privacy Policy - How we protect your personal information',
          url: 'https://brightedgerecruitment.com/privacy'
        }} 
      />
      <PrivacyPolicyClient />
    </>
  );
}