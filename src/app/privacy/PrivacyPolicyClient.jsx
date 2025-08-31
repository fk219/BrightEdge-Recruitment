'use client';

import { useEffect, useRef } from 'react';
import { Shield, Eye, Lock, Users, FileText, Mail, Phone, MapPin, Calendar, AlertCircle } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function PrivacyPolicyClient() {
  const heroRef = useRef(null);
  const sectionsRef = useRef([]);

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

      // Sections animation
      gsap.fromTo('.privacy-section',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.privacy-content',
            start: 'top 80%',
            once: true
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const sections = [
    {
      icon: Eye,
      title: "Information We Collect",
      content: [
        "Personal identification information (Name, email address, phone number)",
        "Professional information (Resume, work experience, skills, education)",
        "Technical information (IP address, browser type, device information)",
        "Usage data (How you interact with our website and services)",
        "Communication records (Emails, calls, messages with our team)"
      ]
    },
    {
      icon: Users,
      title: "How We Use Your Information",
      content: [
        "To provide recruitment and job placement services",
        "To match candidates with suitable job opportunities",
        "To communicate with you about our services and opportunities",
        "To improve our website and services based on your feedback",
        "To comply with legal obligations and protect our rights"
      ]
    },
    {
      icon: Shield,
      title: "Information Sharing",
      content: [
        "We share candidate information with potential employers only with consent",
        "We may share information with trusted service providers who assist our operations",
        "We do not sell, trade, or rent your personal information to third parties",
        "We may disclose information when required by law or to protect our rights",
        "All sharing is done in accordance with applicable privacy laws"
      ]
    },
    {
      icon: Lock,
      title: "Data Security",
      content: [
        "We implement industry-standard security measures to protect your data",
        "All sensitive information is encrypted during transmission and storage",
        "Access to personal information is restricted to authorized personnel only",
        "We regularly update our security practices and conduct security audits",
        "We maintain secure backup systems to prevent data loss"
      ]
    },
    {
      icon: FileText,
      title: "Data Retention",
      content: [
        "We retain personal information only as long as necessary for our services",
        "Candidate profiles are kept active for up to 2 years unless requested otherwise",
        "Communication records are retained for 3 years for quality assurance",
        "You can request deletion of your data at any time",
        "Some information may be retained longer if required by law"
      ]
    },
    {
      icon: Users,
      title: "Your Rights",
      content: [
        "Right to access your personal information we hold",
        "Right to correct or update your information",
        "Right to delete your personal information",
        "Right to restrict processing of your information",
        "Right to data portability and to withdraw consent"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
        <div ref={heroRef} className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            Privacy & Data Protection
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Privacy Policy
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            At BrightEdge Recruitment, we are committed to protecting your privacy and ensuring 
            the security of your personal information. This policy explains how we collect, use, 
            and safeguard your data.
          </p>

          <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Last Updated: January 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4" />
              <span>GDPR Compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="privacy-content py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <div key={index} className="privacy-section bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
                      <ul className="space-y-3">
                        {section.content.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3 text-gray-600">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact Section */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Questions About Our Privacy Policy?</h2>
            <p className="text-blue-100 mb-6">
              If you have any questions about this Privacy Policy or how we handle your personal information, 
              please don't hesitate to contact us.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-200" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-blue-200 text-sm">privacy@brightedgerecruitment.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-200" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-blue-200 text-sm">+971 54 377 2366</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-200" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-blue-200 text-sm">Business Bay, Dubai, UAE</p>
                </div>
              </div>
            </div>
          </div>

          {/* Legal Notice */}
          <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong>Legal Notice:</strong> This Privacy Policy is governed by the laws of the United Arab Emirates. 
              We reserve the right to update this policy at any time. Material changes will be communicated to users 
              via email or website notification. Continued use of our services after changes constitutes acceptance 
              of the updated policy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}