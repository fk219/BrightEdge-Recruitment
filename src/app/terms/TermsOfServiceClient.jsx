'use client';

import { useEffect, useRef } from 'react';
import { Scale, FileText, Users, Shield, AlertTriangle, CheckCircle, Calendar, Gavel } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TermsOfServiceClient() {
  const heroRef = useRef(null);

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
      gsap.fromTo('.terms-section',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.terms-content',
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
      icon: FileText,
      title: "Acceptance of Terms",
      content: [
        "By accessing and using BrightEdge Recruitment services, you accept and agree to be bound by these Terms of Service",
        "If you do not agree to these terms, please do not use our services",
        "These terms apply to all users, including job seekers, employers, and website visitors",
        "We reserve the right to modify these terms at any time with notice to users"
      ]
    },
    {
      icon: Users,
      title: "User Responsibilities",
      content: [
        "Provide accurate and truthful information in all communications and applications",
        "Maintain the confidentiality of your account credentials",
        "Use our services only for lawful purposes related to employment and recruitment",
        "Respect the intellectual property rights of BrightEdge and third parties",
        "Comply with all applicable laws and regulations in your jurisdiction"
      ]
    },
    {
      icon: Shield,
      title: "Service Limitations",
      content: [
        "We do not guarantee job placement or hiring success",
        "Our services are provided 'as is' without warranties of any kind",
        "We are not responsible for the actions or decisions of employers or job seekers",
        "Service availability may be subject to maintenance and technical limitations",
        "We reserve the right to refuse service to any user at our discretion"
      ]
    },
    {
      icon: Scale,
      title: "Intellectual Property",
      content: [
        "All content on our website is protected by copyright and trademark laws",
        "Users retain ownership of their personal information and resume content",
        "You grant us a license to use your information for recruitment purposes",
        "Unauthorized use of our proprietary content is strictly prohibited",
        "We respect the intellectual property rights of others and expect the same from users"
      ]
    },
    {
      icon: AlertTriangle,
      title: "Limitation of Liability",
      content: [
        "BrightEdge shall not be liable for any indirect, incidental, or consequential damages",
        "Our total liability shall not exceed the amount paid for our services",
        "We are not responsible for third-party content or external website links",
        "Users assume all risks associated with their use of our services",
        "Some jurisdictions may not allow certain liability limitations"
      ]
    },
    {
      icon: Gavel,
      title: "Dispute Resolution",
      content: [
        "Any disputes shall be resolved through binding arbitration in Dubai, UAE",
        "These terms are governed by the laws of the United Arab Emirates",
        "Users waive the right to participate in class action lawsuits",
        "Mediation will be attempted before formal arbitration proceedings",
        "The prevailing party may be entitled to attorney fees and costs"
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
            <Scale className="w-4 h-4" />
            Legal Terms & Conditions
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Terms of Service
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            These terms and conditions govern your use of BrightEdge Recruitment services. 
            Please read them carefully before using our platform.
          </p>

          <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Effective Date: January 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>UAE Law Governed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="terms-content py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <div key={index} className="terms-section bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
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

          {/* Additional Terms */}
          <div className="mt-16 space-y-8">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-amber-900 mb-2">Important Notice</h3>
                  <p className="text-amber-800 leading-relaxed">
                    These terms constitute a legally binding agreement between you and BrightEdge Recruitment. 
                    By using our services, you acknowledge that you have read, understood, and agree to be bound by these terms.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-green-900 mb-2">Contact for Legal Matters</h3>
                  <p className="text-green-800 leading-relaxed">
                    For any legal questions or concerns regarding these terms, please contact our legal department at 
                    <a href="mailto:legal@brightedgerecruitment.com" className="font-medium underline ml-1">
                      legal@brightedgerecruitment.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Severability Clause */}
          <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Severability</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              If any provision of these Terms of Service is found to be unenforceable or invalid, 
              that provision will be limited or eliminated to the minimum extent necessary so that 
              these Terms of Service will otherwise remain in full force and effect and enforceable.
            </p>
          </div>

          {/* Entire Agreement */}
          <div className="mt-4 p-6 bg-gray-50 rounded-xl border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Entire Agreement</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              These Terms of Service, together with our Privacy Policy, constitute the entire agreement 
              between you and BrightEdge Recruitment regarding the use of our services and supersede all 
              prior and contemporaneous written or oral agreements between you and BrightEdge Recruitment.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}