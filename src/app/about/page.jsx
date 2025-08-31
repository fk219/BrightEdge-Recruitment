'use client';

import { useEffect, useRef } from 'react';
import { 
  Users, Target, Award, Briefcase, Heart, Globe, 
  CheckCircle, Star, TrendingUp, Lightbulb, Shield, 
  HandshakeIcon, ArrowRight, Building2, Clock, Zap,
  Sparkles  // Add this import
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Rest of your component code remains the same...

gsap.registerPlugin(ScrollTrigger);

export default function AboutUsPage() {
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const valuesRef = useRef(null);
  const statsRef = useRef(null);
  const teamRef = useRef(null);
  const timelineRef = useRef(null);

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

      // Story section animation
      gsap.fromTo(storyRef.current,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: storyRef.current,
            start: 'top 80%',
            once: true
          }
        }
      );

      // Values cards animation
      gsap.fromTo('.value-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: valuesRef.current,
            start: 'top 80%',
            once: true
          }
        }
      );

      // Stats animation
      gsap.fromTo('.stat-item',
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 80%',
            once: true
          }
        }
      );

      // Timeline animation
      gsap.fromTo('.timeline-item',
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.2,
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 80%',
            once: true
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const values = [
    {
      icon: Heart,
      title: "People First",
      description: "We believe in the power of human potential. Every placement is a life changed, every hire is a business transformed.",
      color: "from-rose-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Trust & Integrity",
      description: "Transparency guides every interaction. We build lasting relationships through honest communication and ethical practices.",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Leveraging cutting-edge technology and data-driven insights to revolutionize the recruitment experience.",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We don't just fill positions; we create perfect matches that drive long-term success for all parties.",
      color: "from-emerald-500 to-teal-500"
    }
  ];

  const stats = [
    { number: "15K+", label: "Successful Placements", icon: Users },
    { number: "2.5K+", label: "Partner Companies", icon: Building2 },
    { number: "95%", label: "Retention Rate", icon: TrendingUp },
    { number: "18", label: "Days Avg. Hire Time", icon: Clock }
  ];

  const milestones = [
    { year: "2018", title: "The Beginning", description: "Started with a vision to transform recruitment" },
    { year: "2019", title: "First 1000 Placements", description: "Reached our first major milestone" },
    { year: "2021", title: "National Expansion", description: "Expanded operations across the country" },
    { year: "2023", title: "Tech Innovation", description: "Launched AI-powered matching platform" },
    { year: "2024", title: "Global Reach", description: "Serving clients in 15+ countries" }
  ];

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      bio: "15+ years in HR innovation"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      bio: "Tech visionary and AI expert"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Talent",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      bio: "Connecting talent globally"
    },
    {
      name: "David Park",
      role: "Client Success Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      bio: "Building lasting partnerships"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white pt-20 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div ref={heroRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            About Our Journey
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Transforming Lives Through
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600 mt-2">
              Meaningful Connections
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Since 2018, we've been on a mission to revolutionize recruitment by putting people first. 
            We're not just another staffing agency – we're your strategic partner in building exceptional teams.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors">
              Join Our Team
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:border-gray-400 transition-colors">
              Partner With Us
              <HandshakeIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div ref={storyRef}>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Story: Born from Experience
              </h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-lg leading-relaxed">
                  Our founder, Sarah Johnson, experienced firsthand the frustrations of traditional recruitment – 
                  both as a job seeker and as a hiring manager. She saw talented individuals struggling to find 
                  the right opportunities and companies missing out on perfect candidates due to outdated processes.
                </p>
                <p className="text-lg leading-relaxed">
                  In 2018, she decided to change that. Starting from a small office with just three people, 
                  we've grown into a national leader in talent acquisition, but our core mission remains unchanged: 
                  making recruitment more human, more efficient, and more successful for everyone involved.
                </p>
                <p className="text-lg leading-relaxed">
                  Today, we combine cutting-edge technology with deep human expertise to create connections 
                  that transform careers and businesses alike.
                </p>
              </div>
              
              <div className="mt-8 flex items-center gap-8">
                <div>
                  <div className="text-3xl font-bold text-blue-600">6+</div>
                  <div className="text-sm text-gray-600">Years of Excellence</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">50+</div>
                  <div className="text-sm text-gray-600">Team Members</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">15+</div>
                  <div className="text-sm text-gray-600">Countries Served</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop" 
                alt="Team collaboration" 
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-xl shadow-lg max-w-xs">
                <Star className="w-8 h-8 mb-2" />
                <p className="font-semibold">Award-Winning Service</p>
                <p className="text-sm opacity-90">Best Recruitment Firm 2023</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These principles guide every decision we make and every relationship we build
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="value-card group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className={`w-12 h-12 bg-gradient-to-r ${value.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="stat-item text-center">
                  <Icon className="w-8 h-8 mx-auto mb-3 opacity-80" />
                  <div className="text-4xl font-bold mb-1">{stat.number}</div>
                  <div className="text-sm opacity-90">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section ref={timelineRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Our Journey</h2>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
            
            {milestones.map((milestone, index) => (
              <div key={index} className={`timeline-item flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8 order-2'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <div className="text-blue-600 font-bold text-xl mb-2">{milestone.year}</div>
                    <h3 className="font-semibold text-gray-900 mb-1">{milestone.title}</h3>
                    <p className="text-gray-600 text-sm">{milestone.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Leadership</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Passionate experts dedicated to transforming the recruitment industry
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4 overflow-hidden rounded-xl">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-blue-600 font-medium">{member.role}</p>
                <p className="text-gray-600 text-sm mt-1">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Career or Team?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands who've found success through our platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              <Briefcase className="w-5 h-5" />
              Find Your Dream Job
            </button>
            <button className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all">
              <Users className="w-5 h-5" />
              Hire Top Talent
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}