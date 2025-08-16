"use client";

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowRight,
  Heart,
  ExternalLink,
  Shield,
  Award,
  Sparkles,
  Code,
  Zap,
  Star
} from 'lucide-react';

// Register GSAP plugins only on client side
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Footer = () => {
  const footerRef = useRef(null);
  const socialRef = useRef([]);
  const poweredByRef = useRef(null);
  const [isClient, setIsClient] = useState(false);

  // Ensure this only runs on client side to avoid hydration mismatch
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    // Only run animations on client side after component has mounted
    if (!isClient || typeof window === 'undefined') return;

    const initAnimations = () => {
      const ctx = gsap.context(() => {
        // Check if elements exist before animating
        const footerSections = footerRef.current?.querySelectorAll('.footer-section');
        if (footerSections && footerSections.length > 0) {
          gsap.fromTo(
            footerSections,
            {
              opacity: 0,
              y: 30
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.15,
              ease: "power3.out",
              scrollTrigger: {
                trigger: footerRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse"
              }
            }
          );
        }

        // Animate social icons with null checks
        const validSocialRefs = socialRef.current.filter(ref => ref !== null && ref !== undefined);
        if (validSocialRefs.length > 0) {
          gsap.fromTo(
            validSocialRefs,
            {
              scale: 0,
              rotation: -180
            },
            {
              scale: 1,
              rotation: 0,
              duration: 0.6,
              stagger: 0.1,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: footerRef.current,
                start: "top 80%"
              }
            }
          );
        }

        // Animate powered by section with null check
        if (poweredByRef.current) {
          gsap.fromTo(
            poweredByRef.current,
            {
              opacity: 0,
              scale: 0.8
            },
            {
              opacity: 1,
              scale: 1,
              duration: 1,
              ease: "elastic.out(1, 0.5)",
              scrollTrigger: {
                trigger: footerRef.current,
                start: "top 70%"
              }
            }
          );
        }
      }, footerRef);

      return ctx;
    };

    // Initialize with a small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      const ctx = initAnimations();
      
      return () => {
        if (ctx) ctx.revert();
      };
    }, 150);

    return () => {
      clearTimeout(timer);
    };
  }, [isClient]);

  const navigationLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Careers', href: '/careers' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' }
  ];

  const socialLinks = [
    { 
      icon: Facebook, 
      href: 'https://facebook.com/brightedgerecruitment', 
      label: 'Facebook', 
      color: 'hover:bg-blue-600',
      hoverColor: 'group-hover:text-blue-400'
    },
    { 
      icon: Twitter, 
      href: 'https://twitter.com/brightedgerecruit', 
      label: 'Twitter', 
      color: 'hover:bg-sky-500',
      hoverColor: 'group-hover:text-sky-400'
    },
    { 
      icon: Linkedin, 
      href: 'https://linkedin.com/company/brightedge-recruitment', 
      label: 'LinkedIn', 
      color: 'hover:bg-blue-700',
      hoverColor: 'group-hover:text-blue-400'
    },
    { 
      icon: Instagram, 
      href: 'https://instagram.com/brightedgerecruitment', 
      label: 'Instagram', 
      color: 'hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600',
      hoverColor: 'group-hover:text-pink-400'
    }
  ];

  const certifications = [
    { icon: Shield, text: 'ISO Certified', color: 'text-green-400' },
    { icon: Award, text: 'Top Rated Agency', color: 'text-yellow-400' }
  ];

  // Return a simple version during SSR, full version after hydration
  if (!isClient) {
    return (
      <footer className="relative bg-gray-900 text-white">
        <div className="absolute top-0 left-0 w-full h-px bg-gray-700" />
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              <div className="footer-section lg:col-span-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-xl">B</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
                      BrightEdge Recruitment
                    </h3>
                    <p className="text-xs text-gray-400 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      Connecting Dreams to Reality
                    </p>
                  </div>
                </div>
                <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
                  Transforming careers and building exceptional teams worldwide.
                </p>
              </div>
              <div className="footer-section">
                <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
              </div>
              <div className="footer-section">
                <h4 className="text-lg font-semibold mb-6 text-white">Get In Touch</h4>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
                <p className="text-gray-400 text-sm">
                  © 2025 BrightEdge Recruitment. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer ref={footerRef} className="relative bg-gray-900 text-white">
      {/* Simple top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gray-700" />
      
      <div className="relative z-10">
        {/* Main footer content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Company info section */}
            <div className="footer-section lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xl">B</span>
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-ping" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
                    BrightEdge Recruitment
                  </h3>
                  <p className="text-xs text-gray-400 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Connecting Dreams to Reality
                  </p>
                </div>
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
                Transforming careers and building exceptional teams worldwide. Your success story starts here with our innovative recruitment solutions.
              </p>
              
              {/* Enhanced certifications */}
              <div className="flex items-center gap-6 mb-8">
                {certifications.map((cert, index) => (
                  <div key={index} className="group flex items-center gap-2 text-sm cursor-pointer">
                    <div className="relative">
                      <cert.icon className={`w-5 h-5 ${cert.color} group-hover:scale-110 transition-transform duration-300`} />
                      <div className="absolute inset-0 bg-current opacity-20 rounded-full blur-sm group-hover:opacity-40 transition-opacity duration-300" />
                    </div>
                    <span className="text-gray-400 group-hover:text-white transition-colors duration-300">{cert.text}</span>
                  </div>
                ))}
              </div>
              
              {/* Enhanced social links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      ref={el => {
                        if (el) socialRef.current[index] = el;
                      }}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="group relative"
                    >
                      <div className={`w-12 h-12 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${social.color}`}>
                        <Icon className={`w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300 ${social.hoverColor}`} />
                      </div>
                      <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none border border-gray-700">
                        {social.label}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800" />
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick links */}
            <div className="footer-section">
              <h4 className="text-lg font-semibold mb-6 text-white flex items-center gap-2">
                <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <ArrowRight className="w-3 h-3 text-white" />
                </div>
                Quick Links
              </h4>
              <ul className="space-y-3">
                {navigationLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="group flex items-center text-gray-400 hover:text-white transition-all duration-300 py-1"
                    >
                      <ArrowRight className="w-3 h-3 mr-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-blue-400" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300 text-sm relative">
                        {link.name}
                        <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300" />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact info */}
            <div className="footer-section">
              <h4 className="text-lg font-semibold mb-6 text-white flex items-center gap-2">
                <div className="w-6 h-6 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Mail className="w-3 h-3 text-white" />
                </div>
                Get In Touch
              </h4>
              <ul className="space-y-5">
                <li className="flex items-start gap-3 group cursor-pointer">
                  <div className="relative">
                    <MapPin className="w-5 h-5 text-teal-400 mt-0.5 group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
                    <div className="absolute inset-0 bg-teal-400 opacity-20 rounded-full blur-sm group-hover:opacity-40 transition-opacity duration-300" />
                  </div>
                  <div className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    <p className="font-medium text-gray-300 mb-1">Dubai Office</p>
                    <p>Sobha Saphire, Business Bay</p>
                    <p>Dubai, UAE</p>
                  </div>
                </li>
                <li className="flex items-center gap-3 group">
                  <div className="relative">
                    <Phone className="w-5 h-5 text-green-400 group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
                    <div className="absolute inset-0 bg-green-400 opacity-20 rounded-full blur-sm group-hover:opacity-40 transition-opacity duration-300" />
                  </div>
                  <a 
                    href="tel:+971543772366" 
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm font-medium"
                  >
                    +971 54 377 2366
                  </a>
                </li>
                <li className="flex items-start gap-3 group">
                  <div className="relative">
                    <Mail className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform duration-300 flex-shrink-0 mt-0.5" />
                    <div className="absolute inset-0 bg-blue-400 opacity-20 rounded-full blur-sm group-hover:opacity-40 transition-opacity duration-300" />
                  </div>
                  <a 
                    href="mailto:Info@brightedgerecruitment.com" 
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm break-words font-medium"
                  >
                    Info@brightedgerecruitment.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Enhanced bottom bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                <p className="text-gray-400 text-sm flex items-center gap-2">
                  <span>© 2025 BrightEdge Recruitment.</span>
                  <span className="hidden sm:inline">All rights reserved.</span>
                </p>
                <div className="flex items-center gap-4 text-xs">
                  {legalLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="text-gray-500 hover:text-gray-300 transition-colors duration-300 relative group"
                    >
                      {link.name}
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300" />
                    </a>
                  ))}
                </div>
              </div>
              
              {/* Creative "Powered by FKodeLabs" section */}
              <div ref={poweredByRef} className="relative group cursor-pointer">
                <div className="flex items-center gap-3 px-6 py-3 bg-gray-800 border border-gray-700 rounded-2xl hover:border-blue-400/50 transition-all duration-500 group-hover:scale-105">
                  <div className="relative flex items-center gap-3">
                    <span className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                      Crafted with
                    </span>
                    
                    <div className="relative">
                      <Heart className="w-4 h-4 fill-current text-red-500 animate-pulse group-hover:scale-125 transition-transform duration-300" />
                    </div>
                    
                    <span className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                      by
                    </span>
                    
                    <div className="flex items-center gap-2">
                      <div className="relative">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 via-purple-500 to-teal-500 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                          <Code className="w-4 h-4 text-white" />
                        </div>
                        <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-yellow-400 opacity-0 group-hover:opacity-100 group-hover:animate-spin transition-all duration-500" />
                      </div>
                      
                      <div className="flex flex-col">
                        <a 
                          href="https://fkodelabs.com" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 group-hover:from-blue-300 group-hover:via-purple-300 group-hover:to-teal-300 transition-all duration-500 flex items-center gap-1"
                        >
                          FKodeLabs
                          <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-blue-400" />
                        </a>
                        <div className="flex items-center gap-1 text-xs text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                          <Zap className="w-2 h-2" />
                          <span>Digital Innovation</span>
                          <Star className="w-2 h-2 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;