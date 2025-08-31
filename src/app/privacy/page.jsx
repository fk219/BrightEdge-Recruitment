import PrivacyPolicyClient from './PrivacyPolicyClient';

export const metadata = {
  title: 'Privacy Policy | BrightEdge Recruitment',
  description: 'Learn how BrightEdge Recruitment protects your privacy and handles your personal information. Read our comprehensive privacy policy.',
  keywords: ['privacy policy', 'data protection', 'GDPR', 'personal information', 'BrightEdge Recruitment'],
  openGraph: {
    title: 'Privacy Policy | BrightEdge Recruitment',
    description: 'Your privacy matters. Learn how we protect your personal information.',
  },
};

export default function PrivacyPolicy() {
  return <PrivacyPolicyClient />;
}