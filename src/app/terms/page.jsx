import TermsOfServiceClient from './TermsOfServiceClient';

export const metadata = {
  title: 'Terms of Service | BrightEdge Recruitment',
  description: 'Read our terms of service to understand the conditions and agreements for using BrightEdge Recruitment services.',
  keywords: ['terms of service', 'terms and conditions', 'user agreement', 'BrightEdge Recruitment'],
  openGraph: {
    title: 'Terms of Service | BrightEdge Recruitment',
    description: 'Understand our terms and conditions for using BrightEdge Recruitment services.',
  },
};

export default function TermsOfService() {
  return <TermsOfServiceClient />;
}