'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Briefcase, TrendingUp, Clock, Users, ArrowUp, Sparkles 
} from 'lucide-react';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export const Results = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const statsRef = useRef(null);

  // Stats Configuration
  const stats = [
    {
      icon: Briefcase,
      number: '2847',
      label: 'Successful Placements',
      description: 'Connecting talent with opportunity since 2020',
      trend: '+23%',
      color: 'blue',
      gradientFrom: 'from-blue-500',
      gradientTo: 'to-indigo-600',
      bgColor: 'bg-blue-50',
      iconBg: 'bg-gradient-to-r from-blue-500 to-indigo-600'
    },
    {
      icon: TrendingUp,
      number: '35%',
      label: 'Average Salary Increase',
      description: 'Career advancement that makes a difference',
      trend: '+5%',
      color: 'emerald',
      gradientFrom: 'from-emerald-500',
      gradientTo: 'to-teal-600',
      bgColor: 'bg-emerald-50',
      iconBg: 'bg-gradient-to-r from-emerald-500 to-teal-600'
    },
    {
      icon: Clock,
      number: '18',
      label: 'Days Average Hire Time',
      description: 'Faster hiring without compromising quality',
      trend: '-12%',
      color: 'purple',
      gradientFrom: 'from-purple-500',
      gradientTo: 'to-pink-600',
      bgColor: 'bg-purple-50',
      iconBg: 'bg-gradient-to-r from-purple-500 to-pink-600'
    },
    {
      icon: Users,
      number: '94%',
      label: 'Client Retention Rate',
      description: 'Long-term partnerships built on trust',
      trend: '+8%',
      color: 'orange',
      gradientFrom: 'from-orange-500',
      gradientTo: 'to-red-600',
      bgColor: 'bg-orange-50',
      iconBg: 'bg-gradient-to-r from-orange-500 to-red-600'
    },
  ];

  // GSAP Animations with useGSAP
  useGSAP(() => {
    // Title and Subtitle Animation
    gsap.fromTo(
      [titleRef.current, subtitleRef.current],
      { 
        opacity: 0, 
        y: 50 
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true
        }
      }
    );

    // Stats Cards Animation
    const statCards = gsap.utils.toArray('.stat-card');
    gsap.fromTo(
      statCards,
      { 
        opacity: 0, 
        y: 50 
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: statsRef.current,
          start: 'top 80%',
          once: true
        }
      }
    );

    // Number Counting Animation
    statCards.forEach((card) => {
      const numberElement = card.querySelector('.stat-number');
      if (!numberElement) return;
      
      const finalValue = numberElement.textContent;
      const isPercentage = finalValue.includes('%');
      const numericValue = parseFloat(finalValue.replace(/[^0-9.-]+/g, ''));

      gsap.fromTo(
        numberElement,
        { textContent: 0 },
        {
          textContent: numericValue,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            once: true
          },
          snap: { textContent: 1 },
          onUpdate: function() {
            const current = Math.floor(this.targets()[0].textContent);
            numberElement.textContent = isPercentage ? `${current}%` : current;
          }
        }
      );
    });
  }, { scope: sectionRef });

  return (
    <section 
      ref={sectionRef} 
      className="relative py-24 bg-white"
    >
      <div className="container relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium text-blue-700 bg-blue-100 rounded-full">
            <Sparkles className="w-4 h-4" />
            <span>Trusted by 500+ Companies</span>
          </div>
          
          <h2 
            ref={titleRef} 
            className="font-bitter text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl"
          >
            Proven Results That{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Speak Volumes
            </span>
          </h2>
          
          <p 
            ref={subtitleRef} 
            className="max-w-2xl mx-auto mt-6 text-lg text-gray-600 sm:text-xl"
          >
            Our intelligent matching technology and dedicated support team deliver exceptional outcomes for both talent and organizations.
          </p>
        </div>

        <div 
          ref={statsRef} 
          className="grid gap-6 mt-16 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="stat-card group relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="relative">
                  <div className={`inline-flex p-3 rounded-xl ${stat.iconBg} mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex items-baseline gap-2 mb-2">
                    <h3 className={`stat-number text-4xl font-bold bg-gradient-to-r ${stat.gradientFrom} ${stat.gradientTo} bg-clip-text text-transparent`}>
                      {stat.number}
                    </h3>
                    {stat.trend && (
                      <span className={`flex items-center gap-1 text-sm font-medium ${
                        stat.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'
                      }`}>
                        <ArrowUp className={`w-3 h-3 ${stat.trend.startsWith('-') ? 'rotate-180' : ''}`} />
                        {stat.trend}
                      </span>
                    )}
                  </div>
                  
                  <h4 className="mb-2 text-lg font-semibold text-gray-900">
                    {stat.label}
                  </h4>
                  
                  <p className="text-sm text-gray-600">
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};