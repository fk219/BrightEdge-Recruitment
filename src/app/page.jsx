// app/page.jsx

import Hero from './components/home/Hero'
import Cta from './components/Cta';
import OurClients from './components/home/OurClients';
import { Results } from './components/home/Results';
import WhatWeOffer from './components/home/WhatWeOffer';
import WhyChooseUs from './components/home/WhyChooseUs';

export default function Home() {
  return (
    <main>
      <Hero />
      <Results />
      <WhatWeOffer />
      <WhyChooseUs />
      <OurClients />
      <Cta />
    </main>
  );
}