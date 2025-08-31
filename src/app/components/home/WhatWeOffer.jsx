"use client";

import { useState, useEffect, useRef } from 'react';
import { Users, Award, Network, Building2, Target, Zap, Headphones, ArrowRight, Sparkles } from 'lucide-react';

const WhatWeOffer = () => {
  const [activeTab, setActiveTab] = useState('clients'); // Changed default to clients
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const loadGSAP = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      
      gsap.registerPlugin(ScrollTrigger);

      // Header animation
      gsap.fromTo(sectionRef.current.querySelector('.header-content'), 
        { opacity: 0, y: 80, scale: 0.9 }, 
        { 
          opacity: 1, 
          y: 0, 
          scale: 1, 
          duration: 1.2, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Tab navigation animation
      gsap.fromTo(sectionRef.current.querySelector('.tab-navigation'), 
        { opacity: 0, y: 50 }, 
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          delay: 0.3,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            toggleActions: "play none none reverse"
          }
        }
      );
    };

    loadGSAP();
  }, []);

  useEffect(() => {
    // Animate cards when tab changes
    const loadGSAP = async () => {
      const { gsap } = await import('gsap');
      
      gsap.fromTo(cardsRef.current, 
        { opacity: 0, y: 60, scale: 0.8, rotationX: 45 }, 
        { 
          opacity: 1, 
          y: 0, 
          scale: 1, 
          rotationX: 0,
          duration: 0.8, 
          stagger: 0.15,
          ease: "power3.out"
        }
      );
    };

    loadGSAP();
    cardsRef.current = [];
  }, [activeTab]);

  const addToCardsRef = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  const clientFeatures = [
    {
      icon: Users,
      title: "Premium Talent Access",
      description: "Tap into our carefully curated pool of pre-screened, highly qualified professionals across various industries and specializations.",
      color: "from-blue-600 to-indigo-600",
      highlight: "90% Success Rate"
    },
    {
      icon: Zap,
      title: "Efficient Process",
      description: "Streamlined recruitment process with faster turnaround times, reduced hiring costs, and guaranteed quality matches.",
      color: "from-orange-500 to-red-500",
      highlight: "50% Faster Hiring"
    },
    {
      icon: Headphones,
      title: "Dedicated Support",
      description: "Personal account management, ongoing support throughout the hiring process, and post-placement assistance for long-term success.",
      color: "from-emerald-500 to-teal-500",
      highlight: "24/7 Support"
    }
  ];

  const jobSeekerFeatures = [
    {
      icon: Target,
      title: "Career Growth Support",
      description: "Personalized career guidance, skill development programs, and mentorship opportunities to accelerate your professional journey.",
      color: "from-purple-500 to-pink-500",
      highlight: "Career Coaching"
    },
    {
      icon: Award,
      title: "Quality Opportunities",
      description: "Access to exclusive job openings with top-tier companies, competitive compensation packages, and comprehensive benefits.",
      color: "from-blue-500 to-cyan-500",
      highlight: "Exclusive Jobs"
    },
    {
      icon: Network,
      title: "Professional Network",
      description: "Connect with industry professionals, expand your network, and discover hidden job markets through our extensive connections.",
      color: "from-emerald-500 to-teal-500",
      highlight: "Network Growth"
    }
  ];

  const FeatureCard = ({ feature, index }) => {
    const Icon = feature.icon;
    
    return (
      <div
        ref={addToCardsRef}
        className={`relative group cursor-pointer transition-all duration-700 transform-gpu ${
          hoveredCard === index ? 'scale-105 -translate-y-4' : 'scale-100'
        }`}
        onMouseEnter={() => setHoveredCard(index)}
        onMouseLeave={() => setHoveredCard(null)}
      >
        {/* Card Background with Enhanced Effects */}
        <div className="relative p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500 border border-gray-200/50 overflow-hidden">
          {/* Gradient Border Effect */}
          <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}></div>
          
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
            <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-br from-current to-transparent rounded-full animate-pulse"></div>
            <div className="absolute bottom-4 left-4 w-24 h-24 bg-gradient-to-tl from-current to-transparent rounded-full animate-pulse delay-1000"></div>
          </div>
          
          {/* Highlight Badge */}
          <div className={`absolute top-4 right-4 px-3 py-1 bg-gradient-to-r ${feature.color} text-white text-xs font-bold rounded-full shadow-lg transform rotate-3 group-hover:rotate-0 transition-transform duration-300`}>
            {feature.highlight}
          </div>
          
          {/* Icon Container with Enhanced Animation */}
          <div className={`relative inline-flex items-center justify-center w-20 h-20 mb-6 rounded-2xl bg-gradient-to-r ${feature.color} shadow-xl group-hover:shadow-2xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
            <Icon className="w-10 h-10 text-white transform group-hover:scale-110 transition-transform duration-300" />
            
            {/* Pulsing Ring Effect */}
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.color} animate-ping opacity-20 group-hover:opacity-40`}></div>
          </div>

          {/* Content */}
          <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors duration-300">
            {feature.title}
          </h3>
          
          <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 mb-6">
            {feature.description}
          </p>

          {/* Learn More Link */}
          <div className="flex items-center text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <span className={`bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>Learn More</span>
            <ArrowRight className={`w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300 text-gray-400`} />
          </div>

          {/* Enhanced Hover Accent Line */}
          <div className={`absolute bottom-0 left-0 h-2 bg-gradient-to-r ${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-3xl`}></div>
          
          {/* Side Accent */}
          <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${feature.color} transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 rounded-l-3xl`}></div>
        </div>
      </div>
    );
  };

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Enhanced Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-emerald-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
      
      {/* Floating Sparkles */}
      <div className="absolute top-20 right-20 text-blue-300 animate-bounce">
        <Sparkles className="w-6 h-6" />
      </div>
      <div className="absolute bottom-32 left-16 text-purple-300 animate-bounce delay-1000">
        <Sparkles className="w-4 h-4" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Header Section */}
        <div className="header-content text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-blue-100/50 backdrop-blur-sm rounded-full text-blue-600 font-semibold mb-6 border border-blue-200/30">
            <Sparkles className="w-4 h-4 mr-2" />
            Comprehensive Solutions
          </div>
          
          <h2 className="text-6xl md:text-7xl font-bold text-gray-800 mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 leading-tight">
            What We Offer
          </h2>
          
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Comprehensive solutions for both employers and job seekers, designed to create perfect matches and lasting partnerships.
          </p>
          
          {/* Enhanced Decorative Elements */}
          <div className="flex items-center justify-center space-x-4">
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full"></div>
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-300"></div>
              <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse delay-600"></div>
            </div>
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-emerald-500 to-transparent rounded-full"></div>
          </div>
        </div>

        {/* Enhanced Tab Navigation */}
        <div className="tab-navigation flex justify-center mb-16">
          <div className="bg-white/70 backdrop-blur-md rounded-3xl p-3 shadow-2xl border border-gray-200/50">
            <button
              onClick={() => setActiveTab('clients')}
              className={`relative px-10 py-5 rounded-2xl font-bold transition-all duration-500 transform ${
                activeTab === 'clients'
                  ? 'text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-xl scale-105'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50/50 hover:scale-102'
              }`}
            >
              <Building2 className="w-6 h-6 inline-block mr-3" />
              For Clients
              <span className={`ml-3 text-xs px-3 py-1 rounded-full font-semibold ${
                activeTab === 'clients' 
                  ? 'bg-white/20 text-white border border-white/30' 
                  : 'bg-blue-100 text-blue-800'
              }`}>
                Hiring Partners
              </span>
            </button>
            
            <button
              onClick={() => setActiveTab('seekers')}
              className={`relative px-10 py-5 rounded-2xl font-bold transition-all duration-500 transform ${
                activeTab === 'seekers'
                  ? 'text-white bg-gradient-to-r from-emerald-500 to-teal-500 shadow-xl scale-105'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50/50 hover:scale-102'
              }`}
            >
              <Users className="w-6 h-6 inline-block mr-3" />
              For Job Seekers
              <span className={`ml-3 text-xs px-3 py-1 rounded-full font-semibold ${
                activeTab === 'seekers' 
                  ? 'bg-white/20 text-white border border-white/30' 
                  : 'bg-emerald-100 text-emerald-800'
              }`}>
                Talent Pool
              </span>
            </button>
          </div>
        </div>

        {/* Enhanced Content Cards */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
          {(activeTab === 'clients' ? clientFeatures : jobSeekerFeatures).map((feature, index) => (
            <FeatureCard key={`${activeTab}-${index}`} feature={feature} index={index} />
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center mt-20">
          <div className="inline-flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="group px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-500 relative overflow-hidden">
              <span className="relative z-10 flex items-center">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </button>
            
            <button className="px-10 py-5 border-2 border-gray-300 text-gray-700 font-bold text-lg rounded-2xl hover:border-gray-400 hover:bg-gray-50 hover:scale-105 transition-all duration-300 backdrop-blur-sm">
              Learn More
            </button>
          </div>
          
          <p className="text-gray-500 mt-6 text-sm">
            Join thousands of satisfied clients and job seekers
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;