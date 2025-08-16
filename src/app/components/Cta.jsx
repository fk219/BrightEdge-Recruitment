'use client';

import React, { useEffect, useRef } from 'react';
import { Users, Briefcase, UserCheck, ArrowRight, Calendar, Phone, Star, CheckCircle } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Simple fade-in animation for hero content
      gsap.fromTo(contentRef.current,
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          ease: "power2.out",
          stagger: 0.1
        }
      );

      // Simple card animations on scroll
      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(card,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: index * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              once: true
            }
          }
        );
      });

      // Subtle floating animation for background elements
      const floatingElements = heroRef.current.querySelectorAll('.floating-element');
      floatingElements.forEach((el, index) => {
        gsap.to(el, {
          y: index % 2 === 0 ? -10 : 10,
          duration: 3 + index,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true
        });
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative pt-16 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="floating-element absolute top-20 right-10 w-72 h-72 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
          <div className="floating-element absolute bottom-20 left-10 w-96 h-96 bg-indigo-100 rounded-full opacity-20 blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div ref={contentRef} className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 sm:p-12 lg:p-16 text-center text-white shadow-2xl">
            {/* Decorative Pattern */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              <div className="absolute -top-4 -right-4 w-40 h-40 bg-white/10 rounded-full"></div>
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-white/5 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
                <div className="w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/30">
                <Star className="w-4 h-4" />
                <span>For Forward-Thinking Companies</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Ready to Build Your
                <span className="block mt-2 bg-gradient-to-r from-yellow-200 to-orange-200 bg-clip-text text-transparent">
                  Dream Team?
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed text-white/90">
                Partner with us to access pre-screened talent and streamline your 
                recruitment process. Let's discuss your hiring needs today.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="group flex items-center gap-3 px-6 sm:px-8 py-4 bg-white text-blue-600 font-semibold rounded-2xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto justify-center">
                  <UserCheck className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Become a Client</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="group flex items-center gap-3 px-6 sm:px-8 py-4 border-2 border-white/80 text-white font-semibold rounded-2xl hover:bg-white hover:text-blue-600 transition-all duration-300 backdrop-blur-sm w-full sm:w-auto justify-center">
                  <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Schedule a Call</span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2 text-white/80">
                  <CheckCircle className="w-4 h-4" />
                  <span>No upfront costs</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <CheckCircle className="w-4 h-4" />
                  <span>Quality guaranteed</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <CheckCircle className="w-4 h-4" />
                  <span>Fast turnaround</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Job Seekers Card */}
            <div 
              ref={el => cardsRef.current[0] = el}
              className="group relative bg-white rounded-2xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              {/* Background Gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full -mr-16 -mt-16 opacity-50"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Briefcase className="w-7 h-7 text-emerald-600" />
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Launch Your Career
                </h3>
                
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
                  Join thousands of professionals who've found their dream jobs 
                  through our platform. Your next opportunity is waiting.
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>Access exclusive job opportunities</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>Get personalized career guidance</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>Connect with top employers</span>
                  </li>
                </ul>
                
                <button className="group/btn flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-md hover:shadow-lg w-full justify-center">
                  <Briefcase className="w-5 h-5" />
                  <span>Get Started Now</span>
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Employers Card */}
            <div 
              ref={el => cardsRef.current[1] = el}
              className="group relative bg-white rounded-2xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              {/* Background Gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-100 to-rose-100 rounded-full -mr-16 -mt-16 opacity-50"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-rose-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-7 h-7 text-orange-600" />
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Find Top Talent
                </h3>
                
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
                  Connect with qualified professionals who can drive your business 
                  forward. Streamline your hiring process today.
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span>Pre-screened candidates</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span>Reduce time-to-hire by 50%</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span>Dedicated account manager</span>
                  </li>
                </ul>
                
                <button className="group/btn flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-orange-500 to-rose-500 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-rose-600 transition-all duration-300 shadow-md hover:shadow-lg w-full justify-center">
                  <Users className="w-5 h-5" />
                  <span>Start Hiring</span>
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Contact Bar */}
          <div className="mt-12 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-6 sm:p-8 text-center">
            <p className="text-gray-700 mb-4">
              Need immediate assistance? Our team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:+1234567890" className="flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                <Phone className="w-5 h-5" />
                <span>Call us: (123) 456-7890</span>
              </a>
              <span className="text-gray-400 hidden sm:inline">|</span>
              <span className="text-gray-600">Mon-Fri, 9AM-6PM EST</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CTA;