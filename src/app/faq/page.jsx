'use client';

import { useState, useEffect, useRef } from 'react';
import { 
  ChevronDown, 
  HelpCircle, 
  Clock, 
  DollarSign, 
  Globe, 
  Briefcase, 
  Shield, 
  Send,
  Sparkles,
  ArrowRight,
  Search,
  MessageCircle,
  Zap,
  Users,
  Award,
  CheckCircle,
  Star,
  FileText,
  UserCheck,
  Target
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Faq } from '../../../public/images/Faq.png'
import Cta from '../components/Cta';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const faqs = [
  // Timeline Category
  {
    id: 'speed-1',
    icon: Clock,
    category: 'Timeline',
    question: 'How quickly can you help me find a job?',
    answer: 'Our average placement time is 18 days, but this varies based on your experience level, industry, and specific requirements. We start working on your profile immediately and typically have initial opportunities to present within 48-72 hours of completing your assessment.',
    highlight: '18 days average',
    stats: { value: '48-72', unit: 'hours', label: 'First opportunities' },
    color: 'blue',
    badge: 'Fast Track'
  },
  {
    id: 'speed-2',
    icon: Clock,
    category: 'Timeline',
    question: 'What is the typical interview process timeline?',
    answer: 'The interview process typically takes 2-4 weeks from initial application to offer. This includes initial screening (1-2 days), first interview (week 1), technical assessment if required (week 2), final interviews (week 2-3), and offer negotiation (week 3-4).',
    highlight: '2-4 weeks total',
    stats: { value: '2-4', unit: 'weeks', label: 'Full process' },
    color: 'blue',
    badge: 'Streamlined'
  },
  {
    id: 'speed-3',
    icon: Clock,
    category: 'Timeline',
    question: 'How long does the initial consultation take?',
    answer: 'Our initial consultation typically lasts 30-45 minutes. During this time, we\'ll discuss your career goals, review your experience, understand your preferences, and outline our process. We\'ll also answer any questions you have about our services.',
    highlight: '30-45 minutes',
    stats: { value: '30-45', unit: 'minutes', label: 'Consultation' },
    color: 'blue',
    badge: 'Quick Start'
  },

  // Pricing Category
  {
    id: 'pricing-1',
    icon: DollarSign,
    category: 'Pricing',
    question: 'What are your fees for recruitment services?',
    answer: 'For job seekers, our services are completely free. For companies, we offer flexible pricing models including contingency-based fees (only when we successfully place a candidate), retained search options, and custom packages for bulk hiring needs.',
    highlight: 'Free for job seekers',
    stats: { value: '100%', unit: 'free', label: 'For candidates' },
    color: 'green',
    badge: 'No Cost'
  },
  {
    id: 'pricing-2',
    icon: DollarSign,
    category: 'Pricing',
    question: 'Are there any hidden costs for candidates?',
    answer: 'Absolutely not. We never charge candidates any fees. Our revenue comes entirely from our corporate clients who pay us to find talented professionals like you. This includes all our services: resume review, interview coaching, and job placement.',
    highlight: 'Zero hidden fees',
    stats: { value: '0', unit: 'fees', label: 'Ever charged' },
    color: 'green',
    badge: 'Transparent'
  },
  {
    id: 'pricing-3',
    icon: DollarSign,
    category: 'Pricing',
    question: 'Do you help with salary negotiation?',
    answer: 'Yes! We provide comprehensive salary negotiation support. We\'ll share market data, help you understand your worth, coach you through negotiation tactics, and even negotiate on your behalf when appropriate. Our goal is to secure the best possible compensation package for you.',
    highlight: 'Full negotiation support',
    stats: { value: '+15%', unit: 'average', label: 'Salary increase' },
    color: 'green',
    badge: 'Max Value'
  },

  // Work Style Category
  {
    id: 'remote-1',
    icon: Globe,
    category: 'Work Style',
    question: 'Do you work with remote positions?',
    answer: 'Yes! We specialize in remote, hybrid, and on-site positions across all industries. Our network includes companies that are fully remote, offering flexible work arrangements, and traditional office-based roles. We\'ll match you with opportunities that fit your preferred work style.',
    highlight: 'All work styles',
    stats: { value: '65%', unit: 'remote', label: 'Opportunities' },
    color: 'purple',
    badge: 'Global'
  },
  {
    id: 'remote-2',
    icon: Globe,
    category: 'Work Style',
    question: 'Can you help me find international opportunities?',
    answer: 'Absolutely! We have a global network spanning 50+ countries. We can help with international job placement, visa sponsorship guidance, relocation assistance, and cultural adaptation support. Many of our clients actively seek international talent.',
    highlight: 'Global reach',
    stats: { value: '50+', unit: 'countries', label: 'Coverage' },
    color: 'purple',
    badge: 'Worldwide'
  },
  {
    id: 'remote-3',
    icon: Globe,
    category: 'Work Style',
    question: 'Do you offer part-time or contract positions?',
    answer: 'Yes, we work with all types of employment arrangements including full-time, part-time, contract, freelance, and project-based roles. We\'ll match you with opportunities that align with your lifestyle and career goals.',
    highlight: 'Flexible options',
    stats: { value: '30%', unit: 'flexible', label: 'Positions' },
    color: 'purple',
    badge: 'Flexible'
  },

  // Expertise Category
  {
    id: 'industries-1',
    icon: Briefcase,
    category: 'Expertise',
    question: 'What industries do you specialize in?',
    answer: 'We work across all major industries including Technology, Healthcare, Finance, Marketing, Sales, Operations, Manufacturing, and more. Our team includes specialists with deep expertise in each sector, ensuring we understand the unique requirements and culture of your industry.',
    highlight: 'All industries',
    stats: { value: '50+', unit: 'sectors', label: 'Covered' },
    color: 'orange',
    badge: 'All Sectors'
  },
  {
    id: 'industries-2',
    icon: Briefcase,
    category: 'Expertise',
    question: 'Do you work with entry-level positions?',
    answer: 'Yes! We work with all experience levels from fresh graduates to C-suite executives. We have dedicated programs for entry-level candidates including internship placements, graduate programs, and junior positions with strong growth potential.',
    highlight: 'All levels',
    stats: { value: '25%', unit: 'entry-level', label: 'Placements' },
    color: 'orange',
    badge: 'All Levels'
  },
  {
    id: 'industries-3',
    icon: Briefcase,
    category: 'Expertise',
    question: 'Can you help with career transitions?',
    answer: 'Absolutely! We specialize in helping professionals transition between industries or roles. We provide career counseling, skills gap analysis, rebranding support, and targeted job matching to ensure a smooth transition into your new career path.',
    highlight: 'Career pivoting',
    stats: { value: '40%', unit: 'transitions', label: 'Success rate' },
    color: 'orange',
    badge: 'Pivot Ready'
  },

  // Process Category
  {
    id: 'quality-1',
    icon: Shield,
    category: 'Process',
    question: 'How do you ensure candidate quality?',
    answer: 'We use a comprehensive screening process including skills assessments, behavioral interviews, reference checks, and cultural fit evaluations. Our AI-powered matching system pre-screens candidates based on technical requirements, while our human experts ensure personality and cultural alignment.',
    highlight: 'AI + Human expertise',
    stats: { value: '98%', unit: 'success', label: 'Placement rate' },
    color: 'teal',
    badge: 'Verified'
  },
  {
    id: 'quality-2',
    icon: Shield,
    category: 'Process',
    question: 'What is your screening process?',
    answer: 'Our 5-step screening process includes: 1) Initial application review, 2) Skills assessment and testing, 3) Behavioral interview with our team, 4) Reference and background checks, 5) Client-specific evaluation. This ensures only the best matches move forward.',
    highlight: '5-step process',
    stats: { value: '5', unit: 'stages', label: 'Screening' },
    color: 'teal',
    badge: 'Thorough'
  },
  {
    id: 'quality-3',
    icon: Shield,
    category: 'Process',
    question: 'Do you provide interview preparation?',
    answer: 'Yes! We offer comprehensive interview preparation including mock interviews, company research briefs, common question preparation, presentation skills training, and feedback sessions. We\'ll ensure you\'re fully prepared and confident for each interview.',
    highlight: 'Full prep support',
    stats: { value: '90%', unit: 'success', label: 'Interview rate' },
    color: 'teal',
    badge: 'Prep Pro'
  },

  // Getting Started Category
  {
    id: 'next-steps-1',
    icon: Send,
    category: 'Getting Started',
    question: 'What happens after I submit this form?',
    answer: 'Within 24 hours, a specialist from our team will contact you to discuss your needs in detail. We\'ll schedule your free consultation, provide initial guidance, and outline the next steps in your journey. You\'ll receive a confirmation email with your consultation details and preparation materials.',
    highlight: '24-hour response',
    stats: { value: '24h', unit: 'response', label: 'Guaranteed' },
    color: 'indigo',
    badge: 'Quick Start'
  },
  {
    id: 'next-steps-2',
    icon: Send,
    category: 'Getting Started',
    question: 'What documents do I need to get started?',
    answer: 'To get started, you\'ll need an updated resume/CV, and optionally a cover letter, portfolio (for relevant roles), and references. Don\'t worry if your resume needs work - we offer free resume review and optimization services to all our candidates.',
    highlight: 'Simple requirements',
    stats: { value: '1-2', unit: 'documents', label: 'Needed' },
    color: 'indigo',
    badge: 'Easy Start'
  },
  {
    id: 'next-steps-3',
    icon: Send,
    category: 'Getting Started',
    question: 'How do I track my application progress?',
    answer: 'You\'ll have access to our candidate portal where you can track all your applications in real-time. You\'ll see application status, interview schedules, feedback from interviews, and any pending actions. We also send regular email updates and your dedicated recruiter is always available.',
    highlight: 'Real-time tracking',
    stats: { value: '24/7', unit: 'portal', label: 'Access' },
    color: 'indigo',
    badge: 'Transparent'
  }
];

export default function () {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredFaqs, setFilteredFaqs] = useState(faqs);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const itemsRef = useRef([]);
  const searchRef = useRef(null);

  // Get unique categories
  const categories = ['all', ...new Set(faqs.map(faq => faq.category))];

  // Filter FAQs based on search and category
  useEffect(() => {
    const filtered = faqs.filter(faq => {
      const matchesSearch = searchTerm === '' || 
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.category.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });

    setFilteredFaqs(filtered);
    setOpenIndex(null); // Reset open FAQ when filtering
  }, [searchTerm, selectedCategory]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      // Animate section title
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: titleRef.current,
              start: 'top 80%',
            },
          }
        );
      }

      // Animate search bar
      if (searchRef.current) {
        gsap.fromTo(
          searchRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: searchRef.current,
              start: 'top 85%',
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  // Animate FAQ items when filtered list changes
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      const validItems = itemsRef.current.filter(Boolean);
      if (validItems.length > 0) {
        gsap.fromTo(
          validItems,
          { 
            opacity: 0, 
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.05,
            ease: 'power2.out',
          }
        );
      }
    });

    return () => ctx.revert();
  }, [filteredFaqs]);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const getColorClasses = (color, type = 'gradient') => {
    const gradients = {
      blue: 'from-blue-500 to-blue-600',
      green: 'from-green-500 to-emerald-600',
      purple: 'from-purple-500 to-purple-600',
      orange: 'from-orange-500 to-orange-600',
      teal: 'from-teal-500 to-cyan-600',
      indigo: 'from-indigo-500 to-indigo-600',
    };

    const backgrounds = {
      blue: 'bg-blue-100',
      green: 'bg-green-100',
      purple: 'bg-purple-100',
      orange: 'bg-orange-100',
      teal: 'bg-teal-100',
      indigo: 'bg-indigo-100',
    };

    const textColors = {
      blue: 'text-blue-600',
      green: 'text-green-600',
      purple: 'text-purple-600',
      orange: 'text-orange-600',
      teal: 'text-teal-600',
      indigo: 'text-indigo-600',
    };

    if (type === 'gradient') return gradients[color] || gradients.blue;
    if (type === 'bg') return backgrounds[color] || backgrounds.blue;
    if (type === 'text') return textColors[color] || textColors.blue;
  };

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div ref={titleRef} className="text-center mb-12 opacity-0">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-blue-600 animate-spin" />
            <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Quick Answers
            </span>
            <Sparkles className="w-4 h-4 text-purple-600 animate-spin" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Frequently Asked <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Questions</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about our services and how we can help you succeed
          </p>
        </div>

        {/* Search and Filter Section */}
        <div ref={searchRef} className="mb-8 opacity-0">
          <div className="max-w-2xl mx-auto space-y-4">
            {/* Search Bar */}
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-12 py-4 bg-white border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all text-base"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-200 transition-all"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all transform hover:scale-105 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  {category === 'all' ? `All Topics (${faqs.length})` : `${category} (${faqs.filter(f => f.category === category).length})`}
                </button>
              ))}
            </div>

            {/* Results count */}
            {(searchTerm || selectedCategory !== 'all') && (
              <div className="text-center text-sm text-gray-600">
                Showing {filteredFaqs.length} of {faqs.length} questions
              </div>
            )}
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => {
            const Icon = faq.icon;
            const isOpen = openIndex === index;
            const gradientClasses = getColorClasses(faq.color, 'gradient');
            const bgClasses = getColorClasses(faq.color, 'bg');
            const textClasses = getColorClasses(faq.color, 'text');

            return (
              <div
                key={faq.id}
                ref={(el) => (itemsRef.current[index] = el)}
                className={`
                  group relative rounded-2xl transition-all duration-500 transform opacity-0
                  ${isOpen 
                    ? 'bg-white shadow-xl scale-[1.02]' 
                    : 'bg-white shadow-md hover:shadow-lg hover:scale-[1.01]'
                  }
                `}
              >
                {/* Badge */}
                <div className={`absolute -top-2 -right-2 px-3 py-1 bg-gradient-to-r ${gradientClasses} text-white text-xs font-bold rounded-full shadow-lg transform rotate-3 ${isOpen ? 'scale-110' : 'scale-100'} transition-transform duration-300`}>
                  {faq.badge}
                </div>

                <button
                  className="w-full p-6 text-left focus:outline-none focus:ring-4 focus:ring-blue-500/20 rounded-2xl"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-content-${faq.id}`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`
                      relative p-3 rounded-xl transition-all duration-500
                      ${isOpen 
                        ? `bg-gradient-to-br ${gradientClasses} text-white shadow-lg` 
                        : `${bgClasses} ${textClasses}`
                      }
                    `}>
                      <Icon className="w-6 h-6" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <span className={`
                            text-xs font-semibold uppercase tracking-wider transition-colors duration-300
                            ${isOpen ? textClasses : 'text-gray-500'}
                          `}>
                            {faq.category}
                          </span>
                          <h3 className="text-lg md:text-xl font-bold text-gray-900 mt-1 leading-tight">
                            {faq.question}
                          </h3>
                        </div>
                        
                        <div className={`
                          p-2 rounded-full transition-all duration-500 flex-shrink-0
                          ${isOpen ? `bg-gradient-to-br ${gradientClasses} rotate-180` : 'bg-gray-100'}
                        `}>
                          <ChevronDown className={`
                            w-5 h-5 transition-colors duration-300
                            ${isOpen ? 'text-white' : 'text-gray-600'}
                          `} />
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 mt-2">
                        <span className={`
                          inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full transition-all duration-300
                          ${isOpen 
                            ? `bg-gradient-to-r ${gradientClasses} text-white shadow-md` 
                            : 'bg-gray-100 text-gray-700'
                          }
                        `}>
                          <Zap className="w-3 h-3" />
                          {faq.highlight}
                        </span>
                      </div>
                    </div>
                  </div>
                </button>

                {/* Expandable Content */}
                <div 
                  id={`faq-content-${faq.id}`}
                  className={`overflow-hidden transition-all duration-500 ${
                    isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6">
                    <div className="pl-16">
                      <p className="text-base text-gray-700 leading-relaxed mb-6">
                        {faq.answer}
                      </p>
                      
                      {/* Stats Section */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className={`text-center p-4 bg-gradient-to-br ${gradientClasses} rounded-xl text-white transform hover:scale-105 transition-transform`}>
                          <div className="text-3xl font-bold">{faq.stats.value}</div>
                          <div className="text-sm opacity-90">{faq.stats.unit}</div>
                          <div className="text-xs opacity-75">{faq.stats.label}</div>
                        </div>
                        
                        <div className="text-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                          <Users className="w-8 h-8 text-gray-600 mx-auto mb-2" />
                          <div className="text-sm font-semibold text-gray-700">Expert Team</div>
                          <div className="text-xs text-gray-500">Always ready to help</div>
                        </div>
                        
                        <div className="text-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                          <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
                          <div className="text-sm font-semibold text-gray-700">Guaranteed</div>
                          <div className="text-xs text-gray-500">100% satisfaction</div>
                        </div>
                      </div>
                      
                      <button className={`mt-4 inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r ${gradientClasses} text-white font-medium rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 transform`}>
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* No results message */}
        {filteredFaqs.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl shadow-md">
            <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No matching questions found</h3>
            <p className="text-gray-500">Try searching with different keywords or browse all categories</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Call to Action */}
        <Cta />
      </div>
    </section>
  );
}