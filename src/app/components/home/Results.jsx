"use client";

import { useRef, useEffect } from 'react';
import { Briefcase, TrendingUp, Clock, Users, ArrowUp, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Results = () => {
  const sectionRef = useRef(null);
  const statsRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Simple fade in animations
      gsap.fromTo([titleRef.current, subtitleRef.current],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
            once: true
          }
        }
      );

      // Animate stat cards
      const statCards = gsap.utils.toArray('.stat-card');
      gsap.fromTo(statCards,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 80%',
            once: true
          }
        }
      );

      // Animate numbers
      statCards.forEach((card) => {
        const numberElement = card.querySelector('.stat-number');
        if (!numberElement) return;
        
        const finalValue = numberElement.textContent;
        const isPercentage = finalValue.includes('%');
        const numericValue = parseFloat(finalValue.replace(/[^0-9.-]+/g, ''));

        gsap.fromTo(numberElement,
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

      // Simple floating animation for particles
      particlesRef.current.forEach((particle, i) => {
        if (particle) {
          gsap.to(particle, {
            y: -30,
            x: 'random(-30, 30)',
            duration: 'random(3, 5)',
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: i * 0.5
          });
        }
      });

      // Background gradient animation
      gsap.to('.gradient-bg', {
        opacity: 0.1,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

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

  // Fixed positions for particles to avoid hydration mismatch
  const particlePositions = [
    { left: '15%', top: '20%' },
    { left: '85%', top: '15%' },
    { left: '25%', top: '75%' },
    { left: '75%', top: '80%' },
    { left: '45%', top: '35%' },
    { left: '65%', top: '60%' }
  ];

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Animated background */}
      <div className="gradient-bg absolute inset-0 bg-gradient-to-br from-blue-100/20 via-transparent to-purple-100/20" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particlePositions.map((position, i) => (
          <div
            key={i}
            ref={el => particlesRef.current[i] = el}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-30"
            style={{
              left: position.left,
              top: position.top,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium text-blue-700 bg-blue-100 rounded-full">
            <Sparkles className="w-4 h-4" />
            <span>Trusted by 500+ Companies</span>
          </div>
          
          <h2 ref={titleRef} className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
            Proven Results That{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Speak Volumes
            </span>
          </h2>
          
          <p ref={subtitleRef} className="max-w-2xl mx-auto mt-6 text-lg text-gray-600 sm:text-xl">
            Our intelligent matching technology and dedicated support team deliver exceptional outcomes for both talent and organizations.
          </p>
        </div>

        <div ref={statsRef} className="grid gap-6 mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="stat-card group relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                {/* Hover effect background */}
                <div className={`absolute inset-0 ${stat.bgColor} rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />
                
                <div className="relative">
                  <div className={`inline-flex p-3 rounded-xl ${stat.iconBg} mb-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
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
                  
                  {/* Progress bar */}
                  <div className="mt-4 h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${stat.gradientFrom} ${stat.gradientTo} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Ready to see what we can do for you?</p>
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl">
            Get Started Today
            <ArrowUp className="w-4 h-4 rotate-90" />
          </button>
        </div>
      </div>
    </section>
  );
};