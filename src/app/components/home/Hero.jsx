'use client';

import { useRef, useState, useEffect } from 'react';
import { ArrowRight, Users, Briefcase, Star, TrendingUp, Building2, Target, Sparkles, CheckCircle, Globe, Zap, Award, Heart, Rocket, BarChart3, Clock, DollarSign, Layers, ChevronUp, ChevronDown, ArrowUpRight, Percent, Timer, UserCheck, FileText, Calendar, MapPin, CreditCard, PieChart, Activity, Banknote, Coins, TrendingDown } from 'lucide-react';
import gsap from 'gsap';

export default function DualAudienceHero() {
  const heroRef = useRef(null);
  const leftContentRef = useRef(null);
  const rightContentRef = useRef(null);
  const marqueeRef = useRef(null);
  const [activeStep, setActiveStep] = useState(1);
  const [selectedPath, setSelectedPath] = useState('talent');
  const [progressValue, setProgressValue] = useState(0);
  const [hoveredStat, setHoveredStat] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(leftContentRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
      );

      gsap.fromTo(rightContentRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.6, delay: 0.2, ease: 'power2.out' }
      );

      if (marqueeRef.current) {
        const marqueeWidth = marqueeRef.current.scrollWidth / 2;
        gsap.to(marqueeRef.current, {
          x: `-${marqueeWidth}px`,
          duration: 30,
          ease: 'none',
          repeat: -1
        });
      }
    }, heroRef);

    // Animate progress
    const progressInterval = setInterval(() => {
      setProgressValue(prev => (prev >= 100 ? 0 : prev + 1));
    }, 50);

    return () => {
      ctx.revert();
      clearInterval(progressInterval);
    };
  }, []);

  const clientLogos = [
    { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png' },
    { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png' },
    { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png' },
    { name: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/488px-Apple_logo_black.svg.png' },
    { name: 'Meta', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/2560px-Meta_Platforms_Inc._logo.svg.png' },
    { name: 'Netflix', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png' }
  ];

  const stats = [
    { value: '15K+', label: 'Placements', icon: Rocket },
    { value: '2.5K+', label: 'Companies', icon: Building2 },
    { value: '95%', label: 'Success Rate', icon: Award }
  ];

  const trustBadges = [
    { icon: CheckCircle, text: 'Verified Professionals', color: 'text-green-500' },
    { icon: Globe, text: 'Global Network', color: 'text-blue-500' },
    { icon: Zap, text: 'Instant Matching', color: 'text-yellow-500' },
    { icon: Heart, text: '24/7 Support', color: 'text-red-500' }
  ];

  // Infographic Data
  const journeySteps = {
    talent: [
      { id: 1, title: 'Sign Up', duration: '2 min', icon: UserCheck, description: 'Create your profile' },
      { id: 2, title: 'AI Analysis', duration: '30 sec', icon: Zap, description: 'Skills assessment' },
      { id: 3, title: 'Matching', duration: '24 hrs', icon: Target, description: 'Find perfect fits' },
      { id: 4, title: 'Interview', duration: '3-5 days', icon: Users, description: 'Meet companies' },
      { id: 5, title: 'Offer', duration: '1 week', icon: FileText, description: 'Receive offers' },
      { id: 6, title: 'Success', duration: 'Done!', icon: Award, description: 'Start your journey' }
    ],
    company: [
      { id: 1, title: 'Post Job', duration: '5 min', icon: Briefcase, description: 'Define requirements' },
      { id: 2, title: 'AI Screen', duration: 'Instant', icon: Zap, description: 'Auto-filter candidates' },
      { id: 3, title: 'Shortlist', duration: '2 days', icon: UserCheck, description: 'Review top matches' },
      { id: 4, title: 'Interview', duration: '1 week', icon: Users, description: 'Meet candidates' },
      { id: 5, title: 'Hire', duration: '2 weeks', icon: Rocket, description: 'Make offer' },
      { id: 6, title: 'Onboard', duration: 'Complete', icon: Award, description: 'Welcome talent' }
    ]
  };

  const marketStats = [
    { label: 'Tech', value: 45, color: 'from-blue-400 to-blue-600', icon: Zap },
    { label: 'Finance', value: 25, color: 'from-green-400 to-emerald-600', icon: DollarSign },
    { label: 'Healthcare', value: 20, color: 'from-purple-400 to-purple-600', icon: Heart },
    { label: 'Others', value: 10, color: 'from-gray-400 to-gray-600', icon: Layers }
  ];

  const successMetrics = [
    { metric: 'Avg. Salary Increase', value: '+32%', trend: 'up', color: 'text-green-600' },
    { metric: 'Time to Hire', value: '-60%', trend: 'down', color: 'text-blue-600' },
    { metric: 'Retention Rate', value: '94%', trend: 'up', color: 'text-purple-600' },
    { metric: 'Client Satisfaction', value: '4.9/5', trend: 'up', color: 'text-orange-600' }
  ];

  const costComparison = [
    { method: 'Traditional', cost: '$25,000', time: '45 days', success: '60%' },
    { method: 'Our Platform', cost: '$5,000', time: '18 days', success: '95%', highlighted: true }
  ];

  return (
    <div ref={heroRef} className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content - Keep as is */}
          <div ref={leftContentRef} className="opacity-0">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100/80 backdrop-blur-sm border border-blue-200 text-blue-700 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 animate-spin" />
              <span className="font-semibold">#1 Talent Marketplace</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Where <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Talent</span> Meets{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">Opportunity</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Connect with top-tier professionals or find your dream career. 
              We&apos;re the bridge between ambitious talent and innovative companies.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-10">
              {stats.map((stat, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg p-4 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <stat.icon className="w-5 h-5 text-blue-600 mb-2" />
                    <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group relative overflow-hidden inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white py-4 px-8 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                <Briefcase className="w-5 h-5" />
                <span>I&apos;m Looking for a Job</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group inline-flex items-center justify-center gap-3 bg-white/80 backdrop-blur-sm border-2 border-gray-200 hover:border-purple-300 text-gray-900 py-4 px-8 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300">
                <Users className="w-5 h-5" />
                <span>I&apos;m Hiring Talent</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-6 mt-8">
              {trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center gap-2 group cursor-pointer">
                  <badge.icon className={`w-5 h-5 ${badge.color} group-hover:scale-110 transition-transform`} />
                  <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - PREMIUM INFOGRAPHIC DESIGN */}
          <div ref={rightContentRef} className="relative lg:pl-8 opacity-0">
            <div className="relative w-full h-[700px] bg-white rounded-3xl shadow-2xl p-6 overflow-hidden">
              
              {/* Tab Switcher */}
              <div className="flex items-center justify-center mb-6">
                <div className="bg-gray-100 p-1 rounded-2xl inline-flex">
                  <button
                    onClick={() => setSelectedPath('talent')}
                    className={`px-6 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                      selectedPath === 'talent' 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    For Talent
                  </button>
                  <button
                    onClick={() => setSelectedPath('company')}
                    className={`px-6 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                      selectedPath === 'company' 
                        ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    For Companies
                  </button>
                </div>
              </div>

              {/* Journey Timeline */}
              <div className="mb-8">
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 text-center">Your Journey to Success</h3>
                <div className="relative">
                  {/* Progress Line */}
                  <div className="absolute top-8 left-8 right-8 h-1 bg-gray-200 rounded-full">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000"
                      style={{ width: `${(activeStep - 1) * 20}%` }}
                    />
                  </div>
                  
                  {/* Steps */}
                  <div className="relative flex justify-between px-4">
                    {journeySteps[selectedPath].map((step) => {
                      const Icon = step.icon;
                      const isActive = step.id <= activeStep;
                      const isCurrent = step.id === activeStep;
                      
                      return (
                        <div
                          key={step.id}
                          onClick={() => setActiveStep(step.id)}
                          className="relative flex flex-col items-center cursor-pointer group"
                        >
                          <div className={`relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                            isCurrent 
                              ? 'bg-gradient-to-br from-blue-500 to-purple-500 shadow-xl scale-110' 
                              : isActive 
                                ? 'bg-gradient-to-br from-blue-400 to-purple-400' 
                                : 'bg-gray-200'
                          } group-hover:scale-110`}>
                            <Icon className={`w-6 h-6 ${isActive ? 'text-white' : 'text-gray-500'}`} />
                            {isCurrent && (
                              <div className="absolute inset-0 rounded-2xl bg-white/20 animate-ping" />
                            )}
                          </div>
                          <div className="mt-2 text-center">
                            <p className={`text-xs font-semibold ${isActive ? 'text-gray-900' : 'text-gray-400'}`}>
                              {step.title}
                            </p>
                            <p className={`text-xs ${isActive ? 'text-blue-600' : 'text-gray-400'}`}>
                              {step.duration}
                            </p>
                          </div>
                          {isCurrent && (
                            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1 rounded-lg whitespace-nowrap">
                              {step.description}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Market Distribution */}
              <div className="grid grid-cols-2 gap-4 mb-6 mt-16">
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-4 border border-gray-100">
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Industry Distribution</h4>
                  <div className="space-y-2">
                    {marketStats.map((stat, index) => {
                      const Icon = stat.icon;
                      return (
                        <div key={index} className="relative">
                          <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center gap-2">
                              <Icon className="w-3 h-3 text-gray-600" />
                              <span className="text-xs font-medium text-gray-700">{stat.label}</span>
                            </div>
                            <span className="text-xs font-bold text-gray-900">{stat.value}%</span>
                          </div>
                          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                              className={`h-full bg-gradient-to-r ${stat.color} rounded-full transition-all duration-1000`}
                              style={{ width: `${stat.value}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Success Metrics */}
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-4 border border-blue-100">
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Success Metrics</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {successMetrics.map((metric, index) => (
                      <div 
                        key={index}
                        className="bg-white rounded-xl p-2 cursor-pointer hover:shadow-md transition-all duration-300"
                        onMouseEnter={() => setHoveredStat(index)}
                        onMouseLeave={() => setHoveredStat(null)}
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <p className={`text-lg font-bold ${metric.color}`}>
                              {metric.value}
                            </p>
                            <p className="text-xs text-gray-600">{metric.metric}</p>
                          </div>
                          {metric.trend === 'up' ? (
                            <TrendingUp className="w-4 h-4 text-green-500" />
                          ) : (
                            <TrendingDown className="w-4 h-4 text-blue-500" />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Cost Comparison */}
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-4 text-white">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Cost & Efficiency Comparison</h4>
                <div className="grid grid-cols-2 gap-3">
                  {costComparison.map((item, index) => (
                    <div 
                      key={index}
                      className={`rounded-xl p-3 transition-all duration-300 ${
                        item.highlighted 
                          ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-2 border-blue-400/50' 
                          : 'bg-white/5 border border-white/10'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h5 className={`text-sm font-semibold ${item.highlighted ? 'text-blue-400' : 'text-gray-300'}`}>
                          {item.method}
                        </h5>
                        {item.highlighted && (
                          <span className="px-2 py-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-xs font-bold">
                            BEST
                          </span>
                        )}
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-400">Cost</span>
                          <span className={`text-sm font-bold ${item.highlighted ? 'text-green-400' : 'text-gray-300'}`}>
                            {item.cost}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-400">Time</span>
                          <span className={`text-sm font-bold ${item.highlighted ? 'text-blue-400' : 'text-gray-300'}`}>
                            {item.time}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-400">Success</span>
                          <span className={`text-sm font-bold ${item.highlighted ? 'text-purple-400' : 'text-gray-300'}`}>
                            {item.success}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Live Counter */}
              <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-3 border border-green-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-green-600 animate-pulse" />
                    <span className="text-xs font-semibold text-gray-700">Live Now</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3 text-blue-600" />
                      <span className="text-xs font-bold text-gray-900">2,847</span>
                      <span className="text-xs text-gray-500">Active Users</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Briefcase className="w-3 h-3 text-purple-600" />
                      <span className="text-xs font-bold text-gray-900">423</span>
                      <span className="text-xs text-gray-500">Open Positions</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Client Logos - Keep as is */}
      <div className="relative bg-gray-50/50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-center text-sm font-medium text-gray-500 mb-8 flex items-center justify-center gap-2">
            <Award className="w-4 h-4 text-yellow-500" />
            TRUSTED BY LEADING COMPANIES WORLDWIDE
            <Award className="w-4 h-4 text-yellow-500" />
          </p>
          
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10" />
            
            <div ref={marqueeRef} className="flex items-center gap-16 whitespace-nowrap">
              {[...clientLogos, ...clientLogos].map((client, index) => (
                <div key={`${client.name}-${index}`} className="flex items-center justify-center min-w-[150px]">
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="h-8 object-contain opacity-40 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}