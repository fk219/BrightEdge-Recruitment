// app/page.jsx

import Hero from './components/home/Hero'
import ClientMarquee from './components/home/Marquee';
import HowItWorks from './components/home/HowItWorks';
import { Results } from './components/home/Results';
import WhyChooseUs from './components/home/WhyChooseUs';
import Cta from './components/Cta';
// import WhatWeOffer from './components/home/WhatWeOffer';
import ClientOnly from './components/ClientOnly';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <ClientOnly fallback={
        <div className="relative min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading...</p>
          </div>
        </div>
      }>
        <Hero />
      </ClientOnly>
      <ClientMarquee />
      {/* <WhatWeOffer /> */}
      <HowItWorks />
      <Results />
      <WhyChooseUs />
      <Cta />
    </main>
  );
}