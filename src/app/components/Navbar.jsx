"use client";

import React, { useState, useEffect, useRef } from 'react';
import { UserCheck, Menu, X, Briefcase, User } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';

// Navigation data with SEO-optimized descriptions
const navigationData = [
  {
    href: "/",
    label: "Home",
    description: "BrightEdge homepage - Connect talent with opportunity",
  },
  {
    href: "/blog",
    label: "Blog", 
    description: "Latest insights and industry news from BrightEdge",
  },
  {
    href: "/about",
    label: "About Us",
    description: "Learn about BrightEdge's mission and values",
  },
  {
    href: "/faq",
    label: "FAQ",
    description: "Frequently asked questions about BrightEdge services",
  },
  {
    href: "/contact",
    label: "Contact Us", 
    description: "Get in touch with the BrightEdge team",
  },
];

// Logo component with entrance animation and hover micro-interaction
const Logo = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`flex items-center space-x-3 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
      <div className="relative group cursor-pointer">
        <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-2.5 rounded-xl shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-blue-500/25">
          <UserCheck className="text-white h-6 w-6" aria-hidden="true" />
        </div>
        {/* Micro-interaction: subtle glow on hover */}
        <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-300 pointer-events-none" />
        <div className="absolute inset-0 rounded-xl ring-2 ring-blue-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none" />
      </div>
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-blue-700 bg-clip-text text-transparent">
          BrightEdge
        </h1>
        <span className="text-xs text-blue-600 font-medium tracking-wide">
          Connect • Grow • Succeed
        </span>
      </div>
    </div>
  );
};

// CTA Buttons with hover animations and responsive styling
const CTAButtons = ({ isMobile = false, onNavigate }) => {
  const router = useRouter();
  
  const handleFindJobs = () => {
    router.push('/find-jobs');
    if (onNavigate) onNavigate();
  };

  const handleHireTalent = () => {
    router.push('/hire-talent');
    if (onNavigate) onNavigate();
  };

  const baseClasses = isMobile
    ? `flex items-center justify-center space-x-2 w-full px-6 py-3.5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105`
    : `flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform shadow-md hover:scale-105`;

  return (
    <div className={isMobile ? 'space-y-3' : 'flex space-x-3'}>
      <button
        onClick={handleFindJobs}
        className={`${baseClasses} border-2 border-blue-500 text-blue-600 bg-blue-50 hover:bg-blue-100 hover:border-blue-600 hover:shadow-lg hover:shadow-blue-500/25`}
        aria-label="Find job opportunities on BrightEdge"
      >
        <Briefcase className="h-5 w-5" aria-hidden="true" />
        <span>Find Jobs</span>
      </button>
      <button
        onClick={handleHireTalent}
        className={`${baseClasses} bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:from-blue-600 hover:to-blue-800 shadow-lg hover:shadow-xl hover:shadow-blue-500/30`}
        aria-label="Hire talented professionals through BrightEdge"
      >
        <User className="h-5 w-5" aria-hidden="true" />
        <span>Hire Talent</span>
      </button>
    </div>
  );
};

// Animated Navigation Item with improved active status
const NavItem = ({ item, currentPath, onClick, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200 + index * 100);
    return () => clearTimeout(timer);
  }, [index]);

  // Check if current path matches this nav item
  const isActive = currentPath === item.href || (item.href === '/' && currentPath === '/');

  return (
    <button
      onClick={() => onClick(item.href)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        relative flex items-center space-x-1 px-6 py-3 rounded-xl font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        ${isActive
          ? 'text-white bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg shadow-blue-500/30 transform scale-105'
          : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50 hover:shadow-md hover:transform hover:scale-105'
        }
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
      `}
      aria-label={item.description}
      title={item.description}
    >
      <span className="relative z-10">{item.label}</span>
      
      {/* Active indicator - glowing dot */}
      {isActive && (
        <>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl opacity-20 animate-pulse" />
        </>
      )}
      
      {/* Hover indicator */}
      {!isActive && isHovered && (
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-blue-500 rounded-full transition-all duration-300" />
      )}
    </button>
  );
};

// Main Navbar component with Next.js routing
const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileMenuRef = useRef(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle navigation with Next.js router
  const handleNavigation = (href) => {
    setIsMobileMenuOpen(false);
    
    // Use Next.js router for navigation
    router.push(href);
    
    // Smooth scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Handle click outside mobile menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* SEO Schema.org structured data */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'BrightEdge',
          description: 'Connect talent with opportunity - Premier job matching platform',
          url: 'https://www.BrightEdge.com',
          logo: 'https://www.BrightEdge.com/logo.png',
          sameAs: [
            'https://www.linkedin.com/company/BrightEdge',
            'https://twitter.com/BrightEdge',
          ],
        })}
      </script>

      <nav
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-500
          ${isScrolled 
            ? 'bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-200' 
            : 'bg-white/90 backdrop-blur-md shadow-lg'
          }
        `}
        role="navigation"
        aria-label="Main navigation"
        ref={mobileMenuRef}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <button
                onClick={() => handleNavigation('/')}
                className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg p-1 transition-all duration-300 hover:transform hover:scale-105"
                aria-label="BrightEdge - Go to homepage"
              >
                <Logo />
              </button>
            </div>

            {/* Desktop navigation */}
            <div className="hidden lg:flex flex-grow justify-center">
              <div className="flex items-center space-x-5 bg-white-50/50 backdrop-blur-sm rounded-2xl p-2 shadow-inner">
                {navigationData.map((item, index) => (
                  <NavItem
                    key={item.href}
                    item={item}
                    currentPath={pathname}
                    onClick={handleNavigation}
                    index={index}
                  />
                ))}
              </div>
            </div>

            {/* Desktop CTA buttons */}
            <div className="hidden lg:flex items-center">
              <CTAButtons />
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-3 rounded-xl text-gray-600 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-110 shadow-md"
                aria-expanded={isMobileMenuOpen}
                aria-label="Toggle mobile menu"
              >
                <span className="sr-only">
                  {isMobileMenuOpen ? 'Close main menu' : 'Open main menu'}
                </span>
                <div className="relative w-6 h-6">
                  <Menu 
                    className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
                      isMobileMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
                    }`} 
                    aria-hidden="true" 
                  />
                  <X 
                    className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
                      isMobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
                    }`} 
                    aria-hidden="true" 
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu panel */}
        <div
          className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-white/98 backdrop-blur-lg border-t border-gray-200 shadow-xl">
            <div className="px-4 py-6 space-y-2">
              {navigationData.map((item, index) => {
                const isActive = pathname === item.href || (item.href === '/' && pathname === '/');
                
                return (
                  <button
                    key={item.href}
                    onClick={() => handleNavigation(item.href)}
                    className={`
                      relative block w-full text-left px-6 py-4 rounded-xl font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform hover:scale-[1.02]
                      ${isActive
                        ? 'text-white bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg shadow-blue-500/30'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50 hover:shadow-md'
                      }
                    `}
                    style={{
                      transitionDelay: isMobileMenuOpen ? `${index * 75}ms` : '0ms'
                    }}
                    aria-label={item.description}
                  >
                    {item.label}
                    {isActive && (
                      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                    )}
                  </button>
                );
              })}
            </div>
            <div className="px-4 py-6 border-t border-gray-200 bg-gradient-to-br from-gray-50/80 to-blue-50/50">
              <CTAButtons isMobile={true} onNavigate={closeMobileMenu} />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;