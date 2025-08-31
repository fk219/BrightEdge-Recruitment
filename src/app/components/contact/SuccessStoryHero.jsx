'use client';

import { useEffect, useRef } from 'react';
import { Phone, MessageCircle, Clock, Gift, Users, Sparkles, ArrowRight, CheckCircle, Star, Zap, TrendingUp, Award } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SuccessStoryHero() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);
  const badgesRef = useRef(null);
  const floatingElementsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Simple fade in animations only
      gsap.fromTo([titleRef.current, subtitleRef.current],
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true
          }
        }
      );

      // Animate buttons
      gsap.fromTo(buttonsRef.current.children,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          delay: 0.3,
          ease: 'power2.out'
        }
      );

      // Animate badges
      gsap.fromTo(badgesRef.current.children,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.05,
          delay: 0.5,
          ease: 'power2.out'
        }
      );

      // Simple float animation for icons
      floatingElementsRef.current.forEach((el, index) => {
        if (el) {
          gsap.fromTo(el,
            { opacity: 0 },
            { 
              opacity: 0.3, 
              duration: 1, 
              delay: index * 0.1,
              ease: 'power2.out'
            }
          );
          
          // Gentle floating effect
          gsap.to(el, {
            y: -15,
            duration: 3 + index,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
          });
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleCallClick = () => {
    window.location.href = 'tel:5551234567';
  };

  const handleChatClick = () => {
    console.log('Opening chat...');
  };

  return (
    <section ref={sectionRef} className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-blue-50/20 to-white overflow-hidden">
      {/* Simple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 via-transparent to-teal-100/20" />
      
      {/* Floating background elements - simplified */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          ref={el => floatingElementsRef.current[0] = el}
          className="absolute top-20 left-10 text-blue-200 opacity-0"
        >
          <Sparkles size={32} />
        </div>
        <div
          ref={el => floatingElementsRef.current[1] = el}
          className="absolute top-40 right-20 text-teal-200 opacity-0"
        >
          <Star size={36} />
        </div>
        <div
          ref={el => floatingElementsRef.current[2] = el}
          className="absolute bottom-20 left-1/4 text-orange-200 opacity-0"
        >
          <Zap size={30} />
        </div>
        <div
          ref={el => floatingElementsRef.current[3] = el}
          className="absolute bottom-40 right-1/3 text-green-200 opacity-0"
        >
          <Award size={34} />
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <h1 
          ref={titleRef} 
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight opacity-0"
        >
          Let's Start Your{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
            Success Story
          </span>
        </h1>
        
        <p 
          ref={subtitleRef} 
          className="text-lg sm:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed opacity-0"
        >
          Whether you're seeking career advancement or looking to hire exceptional
          talent, our expert team is ready to provide personalized guidance and strategic
          solutions tailored to your unique needs.
        </p>
        
        <div 
          ref={buttonsRef} 
          className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
        >
          <a
            href="tel:+971543772366"
            className="group relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 sm:px-8 py-4 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Phone className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
            <span className="font-semibold">Call Now +971 54 377 2366</span>
            <ArrowRight className="w-4 h-4 ml-2 opacity-70 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          
          <div className="relative group">
            <button
              disabled
              className="relative bg-gradient-to-r from-gray-400 to-gray-500 text-white px-6 sm:px-8 py-4 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 cursor-not-allowed"
            >
              <MessageCircle className="w-5 h-5 mr-3" />
              <span className="font-semibold">Live Chat (Coming Soon)</span>
            </button>
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Available Soon
            </div>
          </div>
        </div>
        
        <div 
          ref={badgesRef} 
          className="flex flex-wrap justify-center gap-3"
        >
          <span className="group bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 px-5 py-2.5 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300 flex items-center border border-green-200/50">
            <Clock className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
            24hr Response
          </span>
          <span className="group bg-gradient-to-r from-orange-50 to-amber-50 text-orange-700 px-5 py-2.5 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300 flex items-center border border-orange-200/50">
            <Gift className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
            Free Consultation
          </span>
          <span className="group bg-gradient-to-r from-teal-50 to-cyan-50 text-teal-700 px-5 py-2.5 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300 flex items-center border border-teal-200/50">
            <Users className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
            Expert Guidance
          </span>
          <span className="group bg-gradient-to-r from-purple-50 to-indigo-50 text-purple-700 px-5 py-2.5 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300 flex items-center border border-purple-200/50">
            <CheckCircle className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
            Proven Results
          </span>
        </div>

        {/* Additional trust indicators */}
        <div className="mt-12 pt-12 border-t border-gray-200">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">15K+</div>
              <div className="text-sm text-gray-600 mt-1">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">98%</div>
              <div className="text-sm text-gray-600 mt-1">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">24/7</div>
              <div className="text-sm text-gray-600 mt-1">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}