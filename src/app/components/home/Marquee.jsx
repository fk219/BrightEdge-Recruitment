'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import glgLogo from '../../../../public/images/GLG.jpg'

export default function RedesignedMarquee() {
  const marqueeRef = useRef(null);

  const logos = [
    { 
      name: 'NewtonX', 
      logo: 'https://www.newtonx.com/wp-content/uploads/2023/10/NewtonX_Wordmark_RGB_White-registered.svg', 
      needsDarkBg: true,
      bgColor: 'bg-neutral-900'
    },
    { 
      name: 'GLG',
      logo: '/images/GLG.jpg',
      isLocal: true,
      needsDarkBg: false 
    },
    { 
      name: 'BTCaas', 
      logo: 'https://btcaasc.com/wp-content/uploads/2024/08/cropped-WhatsApp-Image-2024-08-27-at-5.20.39-PM-177x59.jpeg', 
      needsDarkBg: false 
    },
    { 
      name: 'AlphaSense', 
      logo: 'https://cdn.sanity.io/images/ewv2vq7j/production/33be7939d26d9ad17d653bfbbadfdd0736539333-133x23.svg?fit=max&auto=format', 
      needsDarkBg: false 
    },
  ];

  // Register GSAP plugin
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    const track = marqueeRef.current.querySelector('.marquee-track');
    if (!track) return;

    const totalWidth = track.scrollWidth / 2;

    gsap.to(track, {
      x: `-=${totalWidth}`,
      duration: 30,
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
      },
    });
  }, { scope: marqueeRef });

  return (
    <div className="relative overflow-hidden py-20 bg-white">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white/70 to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white/70 to-transparent z-10"></div>

      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3">Trusted Partners</p>
        <h3 className="text-2xl md:text-3xl font-light text-gray-900">
          <span className="font-medium">100+</span> companies choose us
        </h3>
        <div className="mt-3 w-16 mx-auto h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      </div>

      {/* Marquee */}
      <div ref={marqueeRef} className="whitespace-nowrap">
        <div className="marquee-track flex items-center gap-20 md:gap-28">
          {[...logos, ...logos].map((logo, index) => (
            <div key={`${logo.name}-${index}`} className={`flex-shrink-0 px-6 md:px-10 flex items-center justify-center ${logo.needsDarkBg ? 'bg-neutral-900 p-2 rounded-lg' : ''}`}>
              {logo.isLocal ? (
                <div className="relative h-8 w-24 md:h-10 md:w-32">
                  <Image 
                    src={logo.logo} 
                    alt={logo.name}
                    fill
                    className={`object-contain ${logo.needsDarkBg ? 'invert' : ''} transition-transform duration-300 hover:scale-110`}
                    loading="lazy"
                  />
                </div>
              ) : (
                <img 
                  src={logo.logo} 
                  alt={logo.name} 
                  className={`h-6 md:h-8 w-auto ${logo.needsDarkBg ? 'invert' : ''} transition-transform duration-300 hover:scale-110`}
                  loading="lazy"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Footer text */}
      <div className="mt-12 text-center">
        <p className="text-sm text-gray-500 font-light">
          Connecting talent with opportunity since 2020
        </p>
      </div>

      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      </div>
    </div>
  );
}