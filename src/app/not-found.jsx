'use client';

import { useEffect, useRef, useState } from 'react';
import { Home, Search, ArrowLeft, Mail, Phone, MapPin, Sparkles, RefreshCw, FileText, HelpCircle } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import gsap from 'gsap';
import Image from 'next/image';

export default function NotFound() {
  const containerRef = useRef(null);
  const numbersRef = useRef(null);
  const contentRef = useRef(null);
  const particlesRef = useRef([]);
  const [countdown, setCountdown] = useState(10);
  const router = useRouter();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate 404 numbers with glitch effect
      gsap.fromTo(numbersRef.current,
        { 
          opacity: 0, 
          scale: 0.5,
          rotationX: -90
        },
        { 
          opacity: 1, 
          scale: 1,
          rotationX: 0,
          duration: 1,
          ease: 'back.out(1.7)'
        }
      );

      // Glitch animation for 404
      gsap.to(numbersRef.current, {
        x: 'random(-5, 5)',
        y: 'random(-3, 3)',
        duration: 0.1,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
        delay: 2
      });

      // Content animation
      gsap.fromTo(contentRef.current.children,
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          stagger: 0.2,
          delay: 0.5,
          ease: 'power2.out'
        }
      );

      // Floating particles animation
      particlesRef.current.forEach((particle, i) => {
        if (particle) {
          gsap.to(particle, {
            y: 'random(-50, 50)',
            x: 'random(-30, 30)',
            rotation: 'random(-180, 180)',
            duration: 'random(3, 6)',
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: i * 0.2
          });
        }
      });

      // Background gradient animation
      gsap.to('.gradient-bg', {
        backgroundPosition: '200% center',
        duration: 8,
        repeat: -1,
        ease: 'none'
      });

    }, containerRef);

    // Countdown timer
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          router.push('/');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      ctx.revert();
      clearInterval(timer);
    };
  }, [router]);

  // Quick links for the 404 page
  const quickLinks = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/blog', label: 'Blog', icon: FileText },
    { href: '/faq', label: 'FAQ', icon: HelpCircle },
    { href: '/contact', label: 'Contact Us', icon: Mail },
  ];

  const suggestions = [
    "Check the URL for typos",
    "Use the search function",
    "Browse our main sections",
    "Contact our support team"
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Animated background */}
      <div className="gradient-bg absolute inset-0 bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-teal-400/10 bg-[length:200%_100%]" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            ref={el => particlesRef.current[i] = el}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* 404 Numbers */}
          <div ref={numbersRef} className="mb-8 flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              <Image 
                src="/images/404.png" 
                alt="404 Not Found"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-[12rem] sm:text-[16rem] lg:text-[20rem] font-black text-blue-600/10 blur-sm">
                404
              </div>
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              Page Not Found
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Oops! This page seems to have{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">
                  wandered off
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
                The page you're looking for doesn't exist or has been moved. 
                Don't worry, even the best explorers sometimes take a wrong turn!
              </p>
              <Link 
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <Home className="w-5 h-5" />
                Back to Home
              </Link>
              <button 
                onClick={() => router.back()}
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
              >
                <ArrowLeft className="w-5 h-5" />
                Go Back
              </button>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
                {quickLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <Link
                      key={index}
                      href={link.href}
                      className="group flex flex-col items-center gap-2 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                        {link.label}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Helpful Suggestions */}
            <div className="bg-gray-50 rounded-2xl p-6 max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">What you can do:</h3>
              <ul className="space-y-2 text-left">
                {suggestions.map((suggestion, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                    <span>{suggestion}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold mb-4">Need Help?</h3>
              <div className="grid sm:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-200" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-blue-200">info@brightedgerecruitment.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-200" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-blue-200">+971 54 377 2366</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-200" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-blue-200">Dubai, UAE</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Fun fact */}
            <div className="text-sm text-gray-500 italic">
              "The best way to find yourself is to lose yourself in the service of others." - Gandhi
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200/20 rounded-full blur-xl" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-200/20 rounded-full blur-xl" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-teal-200/20 rounded-full blur-xl" />
    </div>
  );
}