"use client";

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ExternalLink,
  Zap,
  Code2,
  Home,
  FileText,
  HelpCircle,
  Mail,
  Phone,
  MapPin,
  Users,
  Briefcase,
  TrendingUp,
  Award,
  Target,
  Search,
} from 'lucide-react';

const Footer = () => {
  const footerRef = useRef(null);
  const logoRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navigationLinks = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Blog', href: '/blog', icon: FileText },
    { name: 'FAQ', href: '/faq', icon: HelpCircle },
    { name: 'Contact Us', href: '/contact', icon: Mail },
  ];

  const services = [
    { name: 'Executive Search', icon: Search },
    { name: 'Talent Acquisition', icon: Users },
    { name: 'HR Consulting', icon: Briefcase },
    { name: 'Career Coaching', icon: TrendingUp },
    { name: 'Recruitment Process', icon: Target },
    { name: 'Headhunting', icon: Award }
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: 'https://facebook.com/brightedgerecruitment',
      label: 'Facebook',
      color: 'hover:text-blue-500'
    },
    {
      icon: Twitter,
      href: 'https://twitter.com/brightedgerecruit',
      label: 'Twitter',
      color: 'hover:text-sky-400'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/company/brightedge-recruitment-services/',
      label: 'LinkedIn',
      color: 'hover:text-blue-600'
    },
    {
      icon: Instagram,
      href: 'https://instagram.com/brightedgerecruitment',
      label: 'Instagram',
      color: 'hover:text-pink-500'
    }
  ];

  const currentYear = new Date().getFullYear();

  // Don't render anything on server-side to avoid hydration issues
  if (!mounted) {
    return null;
  }

  return (
    <footer 
      ref={footerRef} 
      className="w-full bg-gradient-to-b from-gray-900 to-black text-white relative"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-transparent to-purple-900/40" />
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-2xl" />
      </div>

      {/* Main Footer Content */}
      <div className="relative w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Company Info - Column 1 */}
            <div className="lg:col-span-1 space-y-6">
              <div className="flex items-center group">
                <div 
                  ref={logoRef}
                  className="relative cursor-pointer mr-3 flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
                >
                  <Image 
                    src="/images/logo.png" 
                    alt="BrightEdge Recruitment Logo" 
                    width={56} 
                    height={56}
                    className="rounded-xl"
                  />
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                    BrightEdge
                  </h2>
                  <p className="text-xs text-blue-400 font-medium uppercase tracking-wider">
                    Recruitment Excellence
                  </p>
                </div>
              </div>
              
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                Transforming careers and building exceptional teams. Your trusted partner in talent acquisition and recruitment solutions across the UAE and beyond.
              </p>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className={`w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-gray-700 border border-gray-700 hover:border-gray-600 hover:scale-110 hover:shadow-lg ${social.color}`}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">15K+</div>
                  <div className="text-xs text-gray-400">Placements</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">95%</div>
                  <div className="text-xs text-gray-400">Success Rate</div>
                </div>
              </div>
            </div>

            {/* Quick Links - Column 2 */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white flex items-center">
                <div className="w-1 h-6 bg-blue-500 rounded-full mr-3"></div>
                Quick Links
              </h3>
              <ul className="space-y-4">
                {navigationLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="flex items-center text-gray-300 hover:text-white transition-all duration-200 text-sm group"
                      >
                        <Icon className="w-4 h-4 mr-3 text-gray-500 group-hover:text-blue-400 transition-colors duration-200" />
                        <span className="group-hover:translate-x-1 transition-transform duration-200">
                          {link.name}
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Our Services - Column 3 */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white flex items-center">
                <div className="w-1 h-6 bg-purple-500 rounded-full mr-3"></div>
                Our Services
              </h3>
              <ul className="space-y-4">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <li key={index}>
                      <a
                        href={`/services#${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                        className="flex items-center text-gray-300 hover:text-white transition-all duration-200 text-sm group"
                      >
                        <Icon className="w-4 h-4 mr-3 text-gray-500 group-hover:text-purple-400 transition-colors duration-200" />
                        <span className="group-hover:translate-x-1 transition-transform duration-200">
                          {service.name}
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Contact Info - Column 4 */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white flex items-center">
                <div className="w-1 h-6 bg-green-500 rounded-full mr-3"></div>
                Get In Touch
              </h3>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-white font-medium mb-3">Ready to connect?</p>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Find your next opportunity or hire top talent with our expert team.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <a 
                    href="mailto:info@brightedgerecruitment.com" 
                    className="flex items-center text-gray-300 hover:text-white transition-colors duration-200 group"
                  >
                    <Mail className="w-4 h-4 mr-3 text-gray-500 group-hover:text-blue-400 transition-colors duration-200" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      info@brightedgerecruitment.com
                    </span>
                  </a>
                  
                  <a 
                    href="tel:+971543772366" 
                    className="flex items-center text-gray-300 hover:text-white transition-colors duration-200 group"
                  >
                    <Phone className="w-4 h-4 mr-3 text-gray-500 group-hover:text-green-400 transition-colors duration-200" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      +971 54 377 2366
                    </span>
                  </a>
                  
                  <div className="flex items-start text-gray-300 group">
                    <MapPin className="w-4 h-4 mr-3 text-gray-500 mt-0.5 flex-shrink-0" />
                    <span>Sobha Saphire, Business Bay<br />Dubai, UAE</span>
                  </div>
                </div>
                
                <a 
                  href="/contact" 
                  className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg transition-all duration-300 font-medium text-sm group mt-4"
                >
                  <span>Contact Us Today</span>
                  <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                <p className="text-sm text-gray-400">
                  {currentYear} BrightEdge Recruitment. All rights reserved.
                </p>
                <div className="hidden sm:block w-px h-4 bg-gray-700" />
                <div className="flex gap-6 text-sm">
                  <a href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200 hover:underline">
                    Privacy Policy
                  </a>
                  <a href="/terms" className="text-gray-400 hover:text-white transition-colors duration-200 hover:underline">
                    Terms of Service
                  </a>
                </div>
              </div>
              
              {/* Powered by FKodeLabs */}
              <div>
                <a 
                  href="https://fkodelabs.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-700/50 hover:bg-gray-700/80 hover:border-gray-600/50 transition-all duration-300 group text-sm"
                  aria-label="Visit FKodeLabs - Premium Web Development"
                >
                  <Zap className="w-3.5 h-3.5 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-xs text-gray-400 font-medium">
                    Powered by
                  </span>
                  <Code2 className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm font-bold">
                    <span className="text-blue-400">FKode</span>
                    <span className="text-white">Labs</span>
                  </span>
                  <ExternalLink className="w-3 h-3 text-gray-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;