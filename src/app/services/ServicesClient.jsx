'use client';

import { useEffect, useRef } from 'react';
import { 
  Users, Search, TrendingUp, Target, Briefcase, UserCheck, 
  Building2, Zap, Award, ArrowRight, CheckCircle, Star,
  Clock, Shield, Globe, Sparkles
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export default function ServicesClient() {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const processRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(heroRef.current.children,
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          stagger: 0.2,
          ease: 'power2.out'
        }
      );

      // Services cards animation
      gsap.fromTo('.service-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          scrollTrigger: {
            trigger: servicesRef.current,
            start: 'top 80%',
            once: true
          }
        }
      );

      // Process steps animation
      gsap.fromTo('.process-step',
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.2,
          scrollTrigger: {
            trigger: processRef.current,
            start: 'top 80%',
            once: true
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const services = [
    {
      icon: Users,
      title: "Talent Acquisition",
      description: "End-to-end recruitment solutions for businesses of all sizes, from startups to enterprises.",
      features: [
        "Full-cycle recruitment process",
        "Candidate sourcing & screening",
        "Skills assessment & testing",
        "Interview coordination",
        "Offer negotiation support"
      ],
      color: "from-blue-500 to-indigo-600",
      link: "/services/talent-acquisition"
    },
    {
      icon: Search,
      title: "Executive Search",
      description: "Specialized recruitment for senior-level positions and C-suite executives.",
      features: [
        "Senior leadership recruitment",
        "Board-level appointments",
        "Succession planning",
        "Executive assessment",
        "Confidential search services"
      ],
      color: "from-purple-500 to-pink-600",
      link: "/services/executive-search"
    },
    {
      icon: TrendingUp,
      title: "HR Consulting",
      description: "Strategic human resources consulting to optimize your workforce and processes.",
      features: [
        "HR strategy development",
        "Organizational design",
        "Performance management",
        "Compensation benchmarking",
        "Employee engagement surveys"
      ],
      color: "from-emerald-500 to-teal-600",
      link: "/services/consulting"
    },
    {
      icon: Target,
      title: "Contract Staffing",
      description: "Flexible staffing solutions for temporary, contract, and project-based roles.",
      features: [
        "Temporary staffing",
        "Contract-to-hire",
        "Project-based teams",
        "Seasonal workforce",
        "Specialized skill sets"
      ],
      color: "from-orange-500 to-red-600",
      link: "/services/contract-staffing"
    },
    {
      icon: Building2,
      title: "Industry Specialization",
      description: "Deep expertise across key industries with specialized recruitment teams.",
      features: [
        "Technology & IT",
        "Finance & Banking",
        "Healthcare & Life Sciences",
        "Engineering & Manufacturing",
        "Marketing & Creative"
      ],
      color: "from-cyan-500 to-blue-600",
      link: "/services/industries"
    },
    {
      icon: Globe,
      title: "Global Recruitment",
      description: "International talent acquisition and cross-border recruitment services.",
      features: [
        "International candidate sourcing",
        "Visa & relocation support",
        "Cultural integration",
        "Global compliance",
        "Multi-language support"
      ],
      color: "from-violet-500 to-purple-600",
      link: "/services/global"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We understand your needs, culture, and requirements to create a tailored recruitment strategy.",
      icon: Target
    },
    {
      step: "02", 
      title: "Sourcing & Screening",
      description: "Our team identifies and screens candidates using advanced tools and proven methodologies.",
      icon: Search
    },
    {
      step: "03",
      title: "Assessment & Interviews",
      description: "Comprehensive evaluation including skills testing, cultural fit, and structured interviews.",
      icon: UserCheck
    },
    {
      step: "04",
      title: "Placement & Support",
      description: "We facilitate the hiring process and provide ongoing support for successful integration.",
      icon: CheckCircle
    }
  ];

  const stats = [
    { number: "15K+", label: "Successful Placements", icon: Award },
    { number: "2.5K+", label: "Partner Companies", icon: Building2 },
    { number: "18", label: "Days Avg. Hire Time", icon: Clock },
    { number: "95%", label: "Client Retention", icon: Star }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl" />
        
        <div ref={heroRef} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Comprehensive Solutions
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Services</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            From talent acquisition to executive search, we provide comprehensive recruitment 
            solutions tailored to your unique needs and industry requirements.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100">
                  <Icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={servicesRef} className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Specialized recruitment services designed to meet the diverse needs of modern businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="service-card group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    href={service.link}
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group-hover:gap-3 duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures successful placements and long-term satisfaction
            </p>
          </div>

          <div className="space-y-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="process-step flex items-start gap-8 p-8 bg-gray-50 rounded-2xl">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-sm font-bold text-blue-600">{step.step}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Hiring?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how our services can help you build exceptional teams
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              <Briefcase className="w-5 h-5" />
              Get Started Today
            </Link>
            <Link 
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all"
            >
              <Users className="w-5 h-5" />
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}