'use client';

import { useEffect, useRef, useState } from 'react';
import { 
  Briefcase, Target, TrendingUp, Clock, Users, 
  ArrowRight, CheckCircle, Star, Zap, Award,
  FileText, Globe, Heart, Lightbulb, GraduationCap,
  DollarSign, Calendar, MapPin, Shield, Phone, Mail
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FindJobPage() {
  const heroRef = useRef(null);
  const formRef = useRef(null);
  const statsRef = useRef(null);
  const benefitsRef = useRef(null);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    careerLevel: '',
    desiredIndustry: '',
    helpWith: '',
    message: ''
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate left content
      gsap.fromTo(heroRef.current.children,
        { opacity: 0, x: -30 },
        { 
          opacity: 1, 
          x: 0, 
          duration: 0.8, 
          stagger: 0.1,
          ease: 'power2.out'
        }
      );

      // Animate form
      gsap.fromTo(formRef.current,
        { opacity: 0, x: 30 },
        { 
          opacity: 1, 
          x: 0, 
          duration: 0.8,
          delay: 0.3,
          ease: 'power2.out'
        }
      );

      // Animate stats
      gsap.fromTo('.stat-card',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          delay: 0.5,
          ease: 'power2.out'
        }
      );

      // Animate benefits
      gsap.fromTo('.benefit-card',
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: benefitsRef.current,
            start: 'top 80%',
            once: true
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const careerLevels = [
    'Entry Level (0-2 years)',
    'Mid Level (2-5 years)',
    'Senior Level (5-10 years)',
    'Executive (10+ years)',
    'Fresh Graduate',
    'Internship'
  ];

  const industries = [
    'Technology',
    'Healthcare',
    'Finance & Banking',
    'Marketing & Advertising',
    'Sales',
    'Engineering',
    'Education',
    'Retail & E-commerce',
    'Manufacturing',
    'Consulting',
    'Real Estate',
    'Legal',
    'Human Resources',
    'Other'
  ];

  const helpOptions = [
    'Find a new job',
    'Career transition',
    'Salary negotiation',
    'Resume review',
    'Interview preparation',
    'Career coaching',
    'Executive opportunities',
    'Remote work opportunities'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5" />
              <span className="text-sm font-medium">Join 15,000+ Professionals Who Found Their Dream Jobs</span>
            </div>
            <div className="hidden sm:flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>Free Service</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>100% Confidential</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4" />
                <span>Expert Guidance</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Content */}
          <div ref={heroRef}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4" />
              Career Success Starts Here
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Your Dream Career
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600 mt-2">
                Is Just One Step Away
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Whether you're looking for your next opportunity or planning a career transition, 
              our expert team provides personalized guidance to help you land the perfect role 
              with top companies.
            </p>

            {/* Key Benefits List */}
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5" />
                <p className="text-gray-700">Access to exclusive job opportunities not posted elsewhere</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5" />
                <p className="text-gray-700">Personalized career coaching and interview preparation</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5" />
                <p className="text-gray-700">Salary negotiation support to maximize your earning potential</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5" />
                <p className="text-gray-700">Direct connections with hiring managers at top companies</p>
              </div>
            </div>

            {/* Stats Grid */}
            <div ref={statsRef} className="grid grid-cols-2 gap-4 mb-10">
              <div className="stat-card bg-gradient-to-br from-teal-50 to-white p-6 rounded-xl border border-teal-100">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-teal-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900">35%</div>
                </div>
                <div className="text-gray-600">Avg. Salary Increase</div>
              </div>

              <div className="stat-card bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900">14</div>
                </div>
                <div className="text-gray-600">Days to Job Offer</div>
              </div>

              <div className="stat-card bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl border border-purple-100">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-purple-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900">15K+</div>
                </div>
                <div className="text-gray-600">Success Stories</div>
              </div>

              <div className="stat-card bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl border border-orange-100">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Star className="w-5 h-5 text-orange-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900">4.9</div>
                </div>
                <div className="text-gray-600">Client Rating</div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200">
              <div className="flex items-start gap-2 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-3">
                "The team helped me land a senior role at a Fortune 500 company with a 40% salary increase. 
                Their guidance throughout the process was invaluable!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center text-white font-semibold">
                  JD
                </div>
                <div>
                  <p className="font-semibold text-gray-900">John Davis</p>
                  <p className="text-sm text-gray-600">Senior Software Engineer at Microsoft</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div ref={formRef} className="bg-white rounded-2xl shadow-xl p-8 h-fit">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Start Your Journey</h2>
              <p className="text-gray-600">Tell us about yourself and we'll match you with the perfect opportunities</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter your first name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter your last name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(555) 123-4567"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Current Career Level
                </label>
                <select
                  name="careerLevel"
                  value={formData.careerLevel}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all appearance-none"
                >
                  <option value="">Select career level</option>
                  {careerLevels.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Desired Industry
                </label>
                <select
                  name="desiredIndustry"
                  value={formData.desiredIndustry}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all appearance-none"
                >
                  <option value="">Select industry</option>
                  {industries.map(industry => (
                    <option key={industry} value={industry}>{industry}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  What can we help you with?
                </label>
                <select
                  name="helpWith"
                  value={formData.helpWith}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all appearance-none"
                >
                  <option value="">Select an option</option>
                  {helpOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                  placeholder="Tell us more about your career goals..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all resize-none"
                />
              </div>

              {/* Resume Upload Option */}
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                <FileText className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600 mb-2">Upload your resume (optional)</p>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                  id="resume-upload"
                />
                <label
                  htmlFor="resume-upload"
                  className="inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors text-sm font-medium"
                >
                  Choose File
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-600 to-teal-700 text-white py-3 rounded-lg font-semibold hover:from-teal-700 hover:to-teal-800 transition-all shadow-lg flex items-center justify-center gap-2"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-xs text-gray-500 text-center">
                Your information is 100% confidential. We will never share your details 
                without your explicit permission.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <section ref={benefitsRef} className="bg-gradient-to-b from-gray-50 to-white py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            How We Help You Succeed
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="benefit-card text-center">
              <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-7 h-7 text-teal-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Job Matching</h3>
              <p className="text-gray-600 text-sm">AI-powered matching with roles that fit your skills and goals</p>
            </div>
            
            <div className="benefit-card text-center">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Resume Optimization</h3>
              <p className="text-gray-600 text-sm">Professional review and enhancement of your resume</p>
            </div>
            
            <div className="benefit-card text-center">
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Interview Prep</h3>
              <p className="text-gray-600 text-sm">Mock interviews and coaching from industry experts</p>
            </div>
            
            <div className="benefit-card text-center">
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Ongoing Support</h3>
              <p className="text-gray-600 text-sm">Continuous guidance even after you land your job</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12 pt-12 border-t border-gray-200">
            <p className="text-gray-600 mb-4">
              Ready to take the next step in your career? Contact us today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+971543772366" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-colors">
                <Phone className="w-5 h-5" />
                +971 54 377 2366
              </a>
              <a href="mailto:info@brightedgerecruitment.com" className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-gray-400 transition-colors">
                <Mail className="w-5 h-5" />
                info@brightedgerecruitment.com
              </a>
            </div>
            <p className="text-sm text-gray-500 mt-3">
              Sobha Saphire, Business Bay, Dubai, UAE
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}