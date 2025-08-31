'use client';

import { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Users, Briefcase, Target, Zap, Award, 
  CheckCircle2, Sparkles, Building2, Shield, Star
} from 'lucide-react';

// Remove duplicate registration - it's already done in AnimationProvider
// gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function HowItWorks() {
  const [selectedPath, setSelectedPath] = useState('talent');
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const pathSelectorRef = useRef(null);
  const journeyGridRef = useRef(null);
  const trustIndicatorsRef = useRef(null);

  // Background Overlay Refs
  const overlay1Ref = useRef(null);
  const overlay2Ref = useRef(null);
  const overlay3Ref = useRef(null);

  // Journey Steps Configuration
  const journeySteps = {
    talent: [
      { 
        icon: Users, 
        title: 'Create Profile', 
        desc: 'Sign up in 2 minutes',
        stat: '2 min',
        color: 'from-blue-400 to-blue-600'
      },
      { 
        icon: Zap, 
        title: 'AI Matching', 
        desc: 'Get matched instantly',
        stat: 'Instant',
        color: 'from-blue-500 to-indigo-600'
      },
      { 
        icon: Target, 
        title: 'Interview', 
        desc: 'Meet top companies',
        stat: '3-5 days',
        color: 'from-indigo-500 to-blue-600'
      },
      { 
        icon: Award, 
        title: 'Get Hired', 
        desc: 'Start your journey',
        stat: '95% success',
        color: 'from-blue-600 to-indigo-700'
      }
    ],
    company: [
      { 
        icon: Briefcase, 
        title: 'Post Job', 
        desc: 'Define requirements',
        stat: '5 min',
        color: 'from-blue-400 to-blue-600'
      },
      { 
        icon: Shield, 
        title: 'AI Screen', 
        desc: 'Auto-filter candidates',
        stat: '24/7',
        color: 'from-blue-500 to-indigo-600'
      },
      { 
        icon: Users, 
        title: 'Interview', 
        desc: 'Meet qualified talent',
        stat: 'Top 5%',
        color: 'from-indigo-500 to-blue-600'
      },
      { 
        icon: CheckCircle2, 
        title: 'Hire', 
        desc: 'Build your team',
        stat: '14 days avg',
        color: 'from-blue-600 to-indigo-700'
      }
    ]
  };

  // GSAP Animations
  useGSAP(() => {
    try {
      // Background Overlay Animations
      const overlayTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1
        }
      });

      // Overlay Animations
      [overlay1Ref, overlay2Ref, overlay3Ref].forEach((ref, index) => {
        if (ref.current) {
          overlayTimeline.fromTo(ref.current, 
            { 
              x: index % 2 === 0 ? '-10%' : '10%', 
              y: `${-15 + index * 10}%`, 
              scale: 0.8, 
              opacity: 0.4 
            },
            { 
              x: '0%', 
              y: `${-15 + index * 10}%`, 
              scale: 1, 
              opacity: 0.7,
              duration: 2,
              ease: "power1.inOut"
            }
          );
        }
      });

      // Header Animation
      if (headerRef.current) {
        gsap.fromTo(headerRef.current, 
          { opacity: 0, y: 50 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 1, 
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%"
            }
          }
        );
      }

      // Path Selector Animation
      if (pathSelectorRef.current) {
        gsap.fromTo(pathSelectorRef.current, 
          { opacity: 0, scale: 0.9 },
          { 
            opacity: 1, 
            scale: 1, 
            duration: 0.8, 
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%"
            }
          }
        );
      }

      // Journey Steps Animation
      gsap.fromTo('.journey-card', 
        { opacity: 0, y: 30, scale: 0.95 }, 
        { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          duration: 0.8, 
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: journeyGridRef.current,
            start: "top 80%"
          }
        }
      );

      // Trust Indicators Animation
      if (trustIndicatorsRef.current) {
        gsap.fromTo(trustIndicatorsRef.current, 
          { opacity: 0, y: 50 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 1, 
            ease: "power3.out",
            scrollTrigger: {
              trigger: trustIndicatorsRef.current,
              start: "top 80%"
            }
          }
        );
      }
    } catch (error) {
      console.error("HowItWorks animation error:", error);
      // Fallback: make all elements visible if animation fails
      gsap.set([headerRef.current, pathSelectorRef.current, '.journey-card', trustIndicatorsRef.current], { opacity: 1, y: 0, scale: 1 });
    }
  }, { scope: sectionRef });

  return (
    <section 
      ref={sectionRef} 
      className="bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background Overlay Decorations */}
      <div 
        ref={overlay1Ref}
        className="absolute top-[-15%] right-[-10%] w-[80%] h-[70%] 
        bg-gradient-to-br from-blue-500/30 via-indigo-600/25 to-indigo-700/20 
        rounded-full blur-[140px] opacity-70"
      ></div>

      <div 
        ref={overlay2Ref}
        className="absolute bottom-[-10%] left-[-5%] w-[60%] h-[60%] 
        bg-gradient-to-tr from-indigo-600/25 via-blue-700/20 to-blue-800/15 
        rounded-full blur-[120px] opacity-60"
      ></div>

      <div 
        ref={overlay3Ref}
        className="absolute top-[30%] left-[40%] w-[30%] h-[40%] 
        bg-gradient-to-r from-purple-600/20 via-blue-700/15 to-indigo-500/20 
        rounded-full blur-[100px] opacity-50"
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div ref={headerRef} className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-blue-100/70 backdrop-blur-sm rounded-full text-blue-700 font-semibold mb-6 border border-blue-200/50">
            <Sparkles className="w-4 h-4 mr-2" />
            Platform Overview
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            How It Works
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of recruitment with our AI-powered platform that connects talent and opportunities seamlessly.
          </p>
        </div>

        {/* Path Selector */}
        <div ref={pathSelectorRef} className="flex justify-center mb-16">
          <div className="bg-white/80 backdrop-blur-sm p-1 rounded-full inline-flex shadow-lg border border-gray-100">
            <button
              onClick={() => setSelectedPath('talent')}
              className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                selectedPath === 'talent' 
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg transform scale-105' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Users className="w-4 h-4 inline mr-2" />
              For Talent
            </button>
            <button
              onClick={() => setSelectedPath('company')}
              className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                selectedPath === 'company' 
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg transform scale-105' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Building2 className="w-4 h-4 inline mr-2" />
              For Companies
            </button>
          </div>
        </div>

        {/* Journey Steps */}
        <div 
          ref={journeyGridRef} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {journeySteps[selectedPath].map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="journey-card group relative"
              >
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  {/* Step number */}
                  <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="relative inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-blue-600 group-hover:rotate-6 transition-transform duration-300" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {step.desc}
                  </p>

                  {/* Stat badge */}
                  <div className="inline-flex items-center px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold">
                    <Zap className="w-3 h-3 mr-1" />
                    {step.stat}
                  </div>

                  {/* Hover accent line */}
                  <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${step.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-3xl`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <div 
          ref={trustIndicatorsRef}
          className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 rounded-3xl p-8 text-white relative overflow-hidden w-[70%] mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-center mb-8">Trusted by Industry Leaders</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { icon: Shield, label: 'Secure', value: '100%', desc: 'Data Protection' },
                { icon: Star, label: 'Rated', value: '4.9/5', desc: 'User Satisfaction' },
                { icon: Users, label: 'Active', value: '50K+', desc: 'Monthly Users' },
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-full mb-3 group-hover:bg-white/20 transition-colors">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-blue-300 font-semibold">{stat.label}</div>
                    <div className="text-xs text-gray-400">{stat.desc}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}