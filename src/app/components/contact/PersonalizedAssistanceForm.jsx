'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  Calendar, 
  UserRound, 
  Briefcase, 
  Mail, 
  Phone, 
  Building2, 
  Users, 
  Clock, 
  Send, 
  CheckCircle,
  Sparkles,
  ArrowRight,
  Shield,
  MessageSquare
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PersonalizedAssistanceForm = () => {
  const [role, setRole] = useState('job-seeker');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  const formRef = useRef(null);
  const headerRef = useRef(null);
  const roleButtonsRef = useRef(null);
  const fieldsRef = useRef(null);
  const submitButtonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial animations
      gsap.fromTo(headerRef.current, 
        { opacity: 0, y: -30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 80%',
            once: true
          }
        }
      );

      gsap.fromTo(formRef.current.querySelector('.form-container'),
        { opacity: 0, scale: 0.95 },
        { 
          opacity: 1, 
          scale: 1, 
          duration: 0.8, 
          delay: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 80%',
            once: true
          }
        }
      );

      // Floating animation for decorative elements
      gsap.to('.floating-icon', {
        y: 'random(-10, 10)',
        rotation: 'random(-5, 5)',
        duration: 'random(2, 3)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: {
          each: 0.2,
          from: 'random'
        }
      });
    }, formRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    // Animate role change
    if (fieldsRef.current) {
      gsap.fromTo(fieldsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
      );
    }
  }, [role]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Animate submit button
    gsap.to(submitButtonRef.current, {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: 'power2.inOut'
    });

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      
      // Success animation
      gsap.fromTo('.success-message',
        { opacity: 0, scale: 0.8, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: 'back.out(1.7)' }
      );

      // Reset after 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    }, 2000);
  };

  const commonFields = (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="group">
          <label className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-blue-600 transition-colors">
            First Name *
          </label>
          <div className="relative">
            <input
              type="text"
              className="w-full p-3 pl-10 border-2 border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-300"
              placeholder="Enter your first name"
              required
            />
            <UserRound className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
          </div>
        </div>
        <div className="group">
          <label className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-blue-600 transition-colors">
            Last Name *
          </label>
          <div className="relative">
            <input
              type="text"
              className="w-full p-3 pl-10 border-2 border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-300"
              placeholder="Enter your last name"
              required
            />
            <UserRound className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="group">
          <label className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-blue-600 transition-colors">
            Email Address *
          </label>
          <div className="relative">
            <input
              type="email"
              className="w-full p-3 pl-10 border-2 border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-300"
              placeholder="your.email@example.com"
              required
            />
            <Mail className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
          </div>
        </div>
        <div className="group">
          <label className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-blue-600 transition-colors">
            Phone Number
          </label>
          <div className="relative">
            <input
              type="tel"
              className="w-full p-3 pl-10 border-2 border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-300"
              placeholder="(555) 123-4567"
            />
            <Phone className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
          </div>
        </div>
      </div>
    </>
  );

  const jobSeekerFields = (
    <div className="space-y-6 animate-fadeIn">
      <div className="group">
        <label className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-orange-600 transition-colors">
          Current Career Level
        </label>
        <select className="w-full p-3 border-2 border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 hover:border-gray-300 cursor-pointer">
          <option value="">Select career level</option>
          <option value="entry-level">Entry-Level</option>
          <option value="mid-level">Mid-Level</option>
          <option value="senior-level">Senior-Level</option>
          <option value="executive">Executive</option>
        </select>
      </div>
      <div className="group">
        <label className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-orange-600 transition-colors">
          Desired Industry
        </label>
        <select className="w-full p-3 border-2 border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 hover:border-gray-300 cursor-pointer">
          <option value="">Select industry</option>
          <option value="technology">Technology</option>
          <option value="healthcare">Healthcare</option>
          <option value="finance">Finance</option>
          <option value="marketing">Marketing</option>
          <option value="education">Education</option>
        </select>
      </div>
      <div className="group">
        <label className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-orange-600 transition-colors">
          What can we help you with?
        </label>
        <select className="w-full p-3 border-2 border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 hover:border-gray-300 cursor-pointer">
          <option value="">Select an option</option>
          <option value="resume">Resume/CV Review</option>
          <option value="interview">Interview Coaching</option>
          <option value="strategy">Career Strategy</option>
          <option value="negotiation">Salary Negotiation</option>
        </select>
      </div>
    </div>
  );

  const hiringManagerFields = (
    <div className="space-y-6 animate-fadeIn">
      <div className="group">
        <label className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-teal-600 transition-colors">
          Company Name *
        </label>
        <div className="relative">
          <input
            type="text"
            className="w-full p-3 pl-10 border-2 border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 hover:border-gray-300"
            placeholder="Enter your company name"
            required
          />
          <Building2 className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="group">
          <label className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-teal-600 transition-colors">
            Company Size
          </label>
          <div className="relative">
            <select className="w-full p-3 pl-10 border-2 border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 hover:border-gray-300 cursor-pointer appearance-none">
              <option value="">Select company size</option>
              <option value="1-50">1-50 employees</option>
              <option value="51-200">51-200 employees</option>
              <option value="201-500">201-500 employees</option>
              <option value="500+">500+ employees</option>
            </select>
            <Users className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
          </div>
        </div>
        <div className="group">
          <label className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-teal-600 transition-colors">
            Industry
          </label>
          <select className="w-full p-3 border-2 border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 hover:border-gray-300 cursor-pointer">
            <option value="">Select industry</option>
            <option value="technology">Technology</option>
            <option value="healthcare">Healthcare</option>
            <option value="finance">Finance</option>
            <option value="manufacturing">Manufacturing</option>
            <option value="retail">Retail</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="group">
          <label className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-teal-600 transition-colors">
            Hiring Needs
          </label>
          <select className="w-full p-3 border-2 border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 hover:border-gray-300 cursor-pointer">
            <option value="">What type of hiring support?</option>
            <option value="direct-hire">Direct Hire</option>
            <option value="contract">Contract Staffing</option>
            <option value="executive">Executive Search</option>
          </select>
        </div>
        <div className="group">
          <label className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-teal-600 transition-colors">
            Urgency Level
          </label>
          <div className="relative">
            <select className="w-full p-3 pl-10 border-2 border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 hover:border-gray-300 cursor-pointer appearance-none">
              <option value="">How urgent is your need?</option>
              <option value="immediate">Immediately</option>
              <option value="1-3-months">Within 1-3 months</option>
              <option value="3-6-months">Within 3-6 months</option>
            </select>
            <Clock className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section ref={formRef} className="relative py-20 bg-gradient-to-br from-gray-50 via-blue-50/50 to-indigo-50/30 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Sparkles className="floating-icon absolute top-20 right-10 w-8 h-8 text-blue-200 opacity-50" />
        <Shield className="floating-icon absolute bottom-20 left-10 w-10 h-10 text-indigo-200 opacity-50" />
        <MessageSquare className="floating-icon absolute top-1/2 right-20 w-6 h-6 text-teal-200 opacity-50" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4">
            Get Personalized Assistance
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tell us about your needs and we'll connect you with the right specialist for personalized guidance.
          </p>
        </div>

        <div className="form-container bg-white p-8 sm:p-10 rounded-2xl shadow-xl border border-gray-100 backdrop-blur-sm bg-white/95">
          {/* Success Message */}
          {showSuccess && (
            <div className="success-message fixed top-20 right-4 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center space-x-3 z-50">
              <CheckCircle className="w-6 h-6" />
              <span className="font-medium">Form submitted successfully!</span>
            </div>
          )}

          {/* Role Selection */}
          <div ref={roleButtonsRef} className="flex justify-center space-x-4 mb-10">
            <button
              type="button"
              className={`group flex items-center space-x-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 ${
                role === 'job-seeker'
                  ? 'bg-gradient-to-r from-orange-400 to-orange-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              onClick={() => setRole('job-seeker')}
            >
              <UserRound className={`w-5 h-5 ${role === 'job-seeker' ? 'animate-pulse' : ''}`} />
              <span>Job Seeker</span>
            </button>
            <button
              type="button"
              className={`group flex items-center space-x-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 ${
                role === 'hiring-manager'
                  ? 'bg-gradient-to-r from-teal-400 to-teal-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              onClick={() => setRole('hiring-manager')}
            >
              <Briefcase className={`w-5 h-5 ${role === 'hiring-manager' ? 'animate-pulse' : ''}`} />
              <span>Hiring Manager</span>
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            {commonFields}
            
            {/* Role-specific fields */}
            <div ref={fieldsRef} className="mt-8 border-t border-gray-200 pt-8">
              {role === 'job-seeker' ? jobSeekerFields : hiringManagerFields}
            </div>

            {/* Message Field */}
            <div className="mt-8 group">
              <label className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-blue-600 transition-colors">
                Message
              </label>
              <div className="relative">
                <textarea
                  className="w-full p-4 pl-10 border-2 border-gray-200 rounded-lg shadow-sm h-32 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-300 resize-none"
                  placeholder="Tell us more about your needs, goals, or any specific questions you have..."
                ></textarea>
                <MessageSquare className="absolute left-3 top-4 w-4 h-4 text-gray-400" />
              </div>
            </div>

            {/* Schedule Consultation */}
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
              <label className="block text-sm font-semibold text-gray-700 mb-4 flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                Schedule a Free Consultation
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-xs text-gray-600 mb-1">Preferred Date</label>
                  <input
                    type="date"
                    className="w-full p-3 border-2 border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-300"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                <div className="group">
                  <label className="block text-xs text-gray-600 mb-1">Preferred Time</label>
                  <select className="w-full p-3 border-2 border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-300 cursor-pointer">
                    <option value="">Select time slot</option>
                    <option value="9am">9:00 AM - 10:00 AM</option>
                    <option value="10am">10:00 AM - 11:00 AM</option>
                    <option value="11am">11:00 AM - 12:00 PM</option>
                    <option value="2pm">2:00 PM - 3:00 PM</option>
                    <option value="3pm">3:00 PM - 4:00 PM</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              ref={submitButtonRef}
              type="submit"
              disabled={isSubmitting}
              className={`mt-10 w-full px-8 py-4 rounded-xl shadow-lg font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-3 group ${
                isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white transform hover:scale-[1.02] hover:shadow-xl'
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <Send className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  <span>Send Message & Schedule Consultation</span>
                  <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all" />
                </>
              )}
            </button>

            {/* Privacy Notice */}
            <p className="text-xs text-gray-500 mt-6 text-center">
              <Shield className="inline w-3 h-3 mr-1" />
              By submitting this form, you agree to our{' '}
              <a href="#" className="text-blue-600 hover:text-blue-700 underline transition-colors">
                Privacy Policy
              </a>{' '}
              and{' '}
              <a href="#" className="text-blue-600 hover:text-blue-700 underline transition-colors">
                Terms of Service
              </a>
              . Your information is secure and will never be shared.
            </p>
          </form>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </section>
  );
};

export default PersonalizedAssistanceForm;