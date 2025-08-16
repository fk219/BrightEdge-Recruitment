// app/contact/page.jsx
import SuccessStoryHero from '../components/contact/SuccessStoryHero';
import ConnectWays from '../components/contact/ConnectWays';
import PersonalizedAssistanceForm from '../components/contact/PersonalizedAssistanceForm';

export default function ContactPage() {
  return (
    <main className="bg-white">
      <SuccessStoryHero />
      <PersonalizedAssistanceForm />
      <ConnectWays />
    </main>
  );
}