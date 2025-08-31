// "use client"

// import { useEffect, useRef, useState } from 'react';
// import { 
//   Shield, 
//   TrendingUp, 
//   Users, 
//   Clock, 
//   Heart, 
//   CheckCircle, 
//   Sparkles, 
//   ArrowRight,
//   Award,
//   Target,
//   Zap
// } from 'lucide-react';

// const WhyChooseUs = () => {
//   const sectionRef = useRef(null);
//   const cardsRef = useRef([]);
//   const [hoveredCard, setHoveredCard] = useState(null);
//   const [animatedNumbers, setAnimatedNumbers] = useState({
//     years: 0,
//     successRate: 0,
//     professionals: 0,
//     days: 0
//   });

//   useEffect(() => {
//     const loadGSAP = async () => {
//       const { gsap } = await import('gsap');
//       const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      
//       gsap.registerPlugin(ScrollTrigger);

//       // Header animation
//       gsap.fromTo(sectionRef.current.querySelector('.header-section'), 
//         { opacity: 0, y: 100, scale: 0.9 }, 
//         { 
//           opacity: 1, 
//           y: 0, 
//           scale: 1, 
//           duration: 1.2, 
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top 70%",
//             end: "bottom 30%",
//             toggleActions: "play none none reverse"
//           }
//         }
//       );

//       // Main cards animation
//       gsap.fromTo('.main-card', 
//         { opacity: 0, y: 80, rotationX: 45 }, 
//         { 
//           opacity: 1, 
//           y: 0, 
//           rotationX: 0,
//           duration: 1, 
//           stagger: 0.2,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: '.main-cards-grid',
//             start: "top 80%",
//             toggleActions: "play none none reverse"
//           }
//         }
//       );

//       // Bottom sections animation
//       gsap.fromTo('.bottom-section', 
//         { opacity: 0, x: (index) => index % 2 === 0 ? -100 : 100 }, 
//         { 
//           opacity: 1, 
//           x: 0, 
//           duration: 1, 
//           stagger: 0.3,
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: '.bottom-sections',
//             start: "top 80%",
//             toggleActions: "play none none reverse"
//           }
//         }
//       );

//       // Animated numbers
//       const animateNumber = (target, key, duration = 2) => {
//         gsap.fromTo({ value: 0 }, 
//           { value: target },
//           {
//             duration,
//             ease: "power2.out",
//             onUpdate: function() {
//               setAnimatedNumbers(prev => ({
//                 ...prev,
//                 [key]: Math.round(this.targets()[0].value)
//               }));
//             },
//             scrollTrigger: {
//               trigger: '.main-cards-grid',
//               start: "top 80%",
//               once: true
//             }
//           }
//         );
//       };

//       animateNumber(10, 'years', 1.5);
//       animateNumber(95, 'successRate', 2);
//       animateNumber(10000, 'professionals', 2.5);
//       animateNumber(14, 'days', 1.8);
//     };

//     loadGSAP();
//   }, []);

//   const addToCardsRef = (el) => {
//     if (el && !cardsRef.current.includes(el)) {
//       cardsRef.current.push(el);
//     }
//   };

//   const mainFeatures = [
//     {
//       icon: Shield,
//       title: "Industry Expertise",
//       description: "Over 10 years of specialized experience in talent acquisition and workforce solutions across diverse industries.",
//       stat: `${animatedNumbers.years}+ Years Experience`,
//       color: "from-blue-500 to-indigo-600",
//       bgColor: "bg-blue-50",
//       iconBg: "bg-blue-100",
//       iconColor: "text-blue-600"
//     },
//     {
//       icon: TrendingUp,
//       title: "Proven Track Record",
//       description: "Consistently delivering exceptional results with a 95% client satisfaction rate and successful placement guarantee.",
//       stat: `${animatedNumbers.successRate}% Success Rate`,
//       color: "from-emerald-500 to-green-600",
//       bgColor: "bg-emerald-50",
//       iconBg: "bg-emerald-100",
//       iconColor: "text-emerald-600"
//     },
//     {
//       icon: Users,
//       title: "Extensive Network",
//       description: "Access to a vast network of over 10,000 pre-qualified professionals and 500+ trusted corporate partners.",
//       stat: `${animatedNumbers.professionals.toLocaleString()}+ Professionals`,
//       color: "from-purple-500 to-pink-600",
//       bgColor: "bg-purple-50",
//       iconBg: "bg-purple-100",
//       iconColor: "text-purple-600"
//     },
//     {
//       icon: Clock,
//       title: "Speed & Efficiency",
//       description: "Average placement time of just 14 days, significantly faster than industry standards without compromising quality.",
//       stat: `${animatedNumbers.days} Days Average`,
//       color: "from-orange-500 to-red-600",
//       bgColor: "bg-orange-50",
//       iconBg: "bg-orange-100",
//       iconColor: "text-orange-600"
//     }
//   ];

//   const jobSeekerBenefits = [
//     "Personalized career coaching and guidance",
//     "Access to exclusive, unlisted job opportunities",
//     "Comprehensive interview preparation support",
//     "Ongoing professional development resources",
//     "Direct connections with industry leaders"
//   ];

//   const clientBenefits = [
//     "Pre-screened, qualified candidates only",
//     "Flexible hiring solutions and contract options",
//     "Dedicated account management support",
//     "Post-placement follow-up and retention services",
//     "Competitive pricing with transparent fee structure"
//   ];

//   return (
//     <section ref={sectionRef} className="bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
//       {/* Background decorations */}
//       <div className="absolute top-[-15%] right-[-10%] w-[80%] h-[70%] bg-gradient-to-br from-blue-200/20 to-indigo-300/30 rounded-full blur-[120px]"></div>
//       <div className="absolute bottom-[-10%] left-[-5%] w-[60%] h-[60%] bg-gradient-to-tr from-indigo-200/20 to-blue-300/20 rounded-full blur-[100px]"></div>
//       <div className="absolute top-[30%] left-[40%] w-[30%] h-[40%] bg-gradient-to-r from-purple-200/10 to-blue-200/20 rounded-full blur-[80px]"></div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Header Section */}
//         <div className="header-section text-center mb-16">
//           <div className="inline-flex items-center px-6 py-3 bg-blue-100/70 backdrop-blur-sm rounded-full text-blue-700 font-semibold mb-6 border border-blue-200/50">
//             <Target className="w-4 h-4 mr-2" />
//             Our Competitive Edge
//           </div>
          
//           <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
//             Why Choose Us
//           </h2>
          
//           <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
//             We've built our reputation on trust, excellence, and results. Here's what sets us apart in the competitive talent marketplace.
//           </p>

//           {/* Decorative line */}
//           <div className="mt-8 flex items-center justify-center">
//             <div className="h-1 w-24 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full"></div>
//             <div className="w-3 h-3 bg-blue-500 rounded-full mx-4"></div>
//             <div className="h-1 w-24 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full"></div>
//           </div>
//         </div>

//         {/* Main feature cards */}
//         <div className="main-cards-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
//           {mainFeatures.map((feature, index) => {
//             const Icon = feature.icon;
//             return (
//               <div
//                 key={index}
//                 ref={addToCardsRef}
//                 className={`main-card group relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/50 text-center transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer ${
//                   hoveredCard === index ? 'shadow-2xl' : ''
//                 }`}
//                 onMouseEnter={() => setHoveredCard(index)}
//                 onMouseLeave={() => setHoveredCard(null)}
//               >
//                 {/* Gradient background on hover */}
//                 <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
//                 {/* Icon container */}
//                 <div className={`relative inline-flex items-center justify-center w-20 h-20 ${feature.iconBg} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
//                   <Icon className={`w-10 h-10 ${feature.iconColor} group-hover:rotate-6 transition-transform duration-300`} />
//                   <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
//                 </div>

//                 <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
//                   {feature.title}
//                 </h3>
                
//                 <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors">
//                   {feature.description}
//                 </p>

//                 {/* Animated stat */}
//                 <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${feature.color} text-white rounded-full font-bold text-sm shadow-lg group-hover:scale-105 transition-transform duration-300`}>
//                   <Zap className="w-4 h-4 mr-2" />
//                   {feature.stat}
//                 </div>

//                 {/* Hover accent */}
//                 <div className={`absolute bottom-0 left-0 h-2 bg-gradient-to-r ${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-3xl`}></div>
//               </div>
//             );
//           })}
//         </div>

//         {/* For Job Seekers and For Clients sections */}
//         <div className="bottom-sections grid grid-cols-1 lg:grid-cols-2 gap-10">
//           {/* For Job Seekers */}
//           <div className="bottom-section group bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] relative overflow-hidden">
//             {/* Background pattern */}
//             <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/20 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-500"></div>
            
//             <div className="relative z-10">
//               <div className="flex items-center mb-6">
//                 <div className="p-3 bg-blue-100 rounded-2xl mr-4 group-hover:scale-110 transition-transform duration-300">
//                   <Heart className="w-8 h-8 text-blue-600" />
//                 </div>
//                 <div>
//                   <h3 className="text-3xl font-bold text-gray-900 group-hover:text-blue-800 transition-colors">
//                     For Job Seekers
//                   </h3>
//                   <p className="text-blue-600 font-semibold">Career Growth Partners</p>
//                 </div>
//               </div>
              
//               <p className="text-gray-700 mb-8 text-lg leading-relaxed">
//                 We're committed to your career success. Our comprehensive approach ensures you're not just placed, but positioned for long-term growth.
//               </p>
              
//               <ul className="space-y-4">
//                 {jobSeekerBenefits.map((benefit, index) => (
//                   <li key={index} className="flex items-start group/item">
//                     <div className="p-1 bg-blue-100 rounded-full mr-4 mt-1 group-hover/item:scale-110 transition-transform duration-300">
//                       <CheckCircle className="w-5 h-5 text-blue-600" />
//                     </div>
//                     <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors font-medium">
//                       {benefit}
//                     </span>
//                   </li>
//                 ))}
//               </ul>

//               <button className="mt-8 inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
//                 Start Your Journey
//                 <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
//               </button>
//             </div>
//           </div>

//           {/* For Clients */}
//           <div className="bottom-section group bg-gradient-to-br from-emerald-50 to-green-50 p-8 rounded-3xl shadow-xl border border-emerald-100 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] relative overflow-hidden">
//             {/* Background pattern */}
//             <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-200/20 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-500"></div>
            
//             <div className="relative z-10">
//               <div className="flex items-center mb-6">
//                 <div className="p-3 bg-emerald-100 rounded-2xl mr-4 group-hover:scale-110 transition-transform duration-300">
//                   <TrendingUp className="w-8 h-8 text-emerald-600" />
//                 </div>
//                 <div>
//                   <h3 className="text-3xl font-bold text-gray-900 group-hover:text-emerald-800 transition-colors">
//                     For Clients
//                   </h3>
//                   <p className="text-emerald-600 font-semibold">Business Growth Partners</p>
//                 </div>
//               </div>
              
//               <p className="text-gray-700 mb-8 text-lg leading-relaxed">
//                 Partner with us for streamlined recruitment that saves time, reduces costs, and delivers exceptional talent that drives your business forward.
//               </p>
              
//               <ul className="space-y-4">
//                 {clientBenefits.map((benefit, index) => (
//                   <li key={index} className="flex items-start group/item">
//                     <div className="p-1 bg-emerald-100 rounded-full mr-4 mt-1 group-hover/item:scale-110 transition-transform duration-300">
//                       <CheckCircle className="w-5 h-5 text-emerald-600" />
//                     </div>
//                     <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors font-medium">
//                       {benefit}
//                     </span>
//                   </li>
//                 ))}
//               </ul>

//               <button className="mt-8 inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
//                 Partner With Us
//                 <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;

"use client"

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { 
  Shield, 
  TrendingUp, 
  Users, 
  Clock, 
  Heart, 
  CheckCircle, 
  Sparkles, 
  ArrowRight,
  Award,
  Target,
  Zap
} from 'lucide-react';

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [animatedNumbers, setAnimatedNumbers] = useState({
    years: 0,
    successRate: 0,
    professionals: 0,
    days: 0
  });

  useEffect(() => {
    const loadGSAP = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      
      gsap.registerPlugin(ScrollTrigger);

      // Header animation
      gsap.fromTo(sectionRef.current.querySelector('.header-section'), 
        { opacity: 0, y: 100, scale: 0.9 }, 
        { 
          opacity: 1, 
          y: 0, 
          scale: 1, 
          duration: 1.2, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Main cards animation
      gsap.fromTo('.main-card', 
        { opacity: 0, y: 80, rotationX: 45 }, 
        { 
          opacity: 1, 
          y: 0, 
          rotationX: 0,
          duration: 1, 
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: '.main-cards-grid',
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Bottom sections animation
      gsap.fromTo('.bottom-section', 
        { opacity: 0, x: (index) => index % 2 === 0 ? -100 : 100 }, 
        { 
          opacity: 1, 
          x: 0, 
          duration: 1, 
          stagger: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: '.bottom-sections',
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animated numbers
      const animateNumber = (target, key, duration = 2) => {
        gsap.fromTo({ value: 0 }, 
          { value: target },
          {
            duration,
            ease: "power2.out",
            onUpdate: function() {
              setAnimatedNumbers(prev => ({
                ...prev,
                [key]: Math.round(this.targets()[0].value)
              }));
            },
            scrollTrigger: {
              trigger: '.main-cards-grid',
              start: "top 80%",
              once: true
            }
          }
        );
      };

      animateNumber(10, 'years', 1.5);
      animateNumber(95, 'successRate', 2);
      animateNumber(10000, 'professionals', 2.5);
      animateNumber(14, 'days', 1.8);
    };

    loadGSAP();
  }, []);

  const addToCardsRef = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  const mainFeatures = [
    {
      icon: Shield,
      title: "Industry Expertise",
      description: "Over 10 years of specialized experience in talent acquisition and workforce solutions across diverse industries.",
      stat: `${animatedNumbers.years}+ Years Experience`,
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: TrendingUp,
      title: "Proven Track Record",
      description: "Consistently delivering exceptional results with a 95% client satisfaction rate and successful placement guarantee.",
      stat: `${animatedNumbers.successRate}% Success Rate`,
      color: "from-emerald-500 to-green-600",
      bgColor: "bg-emerald-50",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600"
    },
    {
      icon: Users,
      title: "Extensive Network",
      description: "Access to a vast network of over 10,000 pre-qualified professionals and 500+ trusted corporate partners.",
      stat: `${animatedNumbers.professionals.toLocaleString()}+ Professionals`,
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      icon: Clock,
      title: "Speed & Efficiency",
      description: "Average placement time of just 14 days, significantly faster than industry standards without compromising quality.",
      stat: `${animatedNumbers.days} Days Average`,
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600"
    }
  ];

  const jobSeekerBenefits = [
    "Personalized career coaching and guidance",
    "Access to exclusive, unlisted job opportunities",
    "Comprehensive interview preparation support",
    "Ongoing professional development resources",
    "Direct connections with industry leaders"
  ];

  const clientBenefits = [
    "Pre-screened, qualified candidates only",
    "Flexible hiring solutions and contract options",
    "Dedicated account management support",
    "Post-placement follow-up and retention services",
    "Competitive pricing with transparent fee structure"
  ];

  return (
    <section ref={sectionRef} className="bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-[-15%] right-[-10%] w-[80%] h-[70%] 
        bg-gradient-to-br from-blue-500/30 via-indigo-600/25 to-indigo-700/20 
        rounded-full blur-[140px] opacity-70"></div>

      <div className="absolute bottom-[-10%] left-[-5%] w-[60%] h-[60%] 
        bg-gradient-to-tr from-indigo-600/25 via-blue-700/20 to-blue-800/15 
        rounded-full blur-[120px] opacity-60"></div>

      <div className="absolute top-[30%] left-[40%] w-[30%] h-[40%] 
        bg-gradient-to-r from-purple-600/20 via-blue-700/15 to-indigo-500/20 
        rounded-full blur-[100px] opacity-50"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="header-section text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-blue-100/70 backdrop-blur-sm rounded-full text-blue-700 font-semibold mb-6 border border-blue-200/50">
            <Target className="w-4 h-4 mr-2" />
            Our Competitive Edge
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Why Choose Us
          </h2>
          
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We've built our reputation on trust, excellence, and results. Here's what sets us apart in the competitive talent marketplace.
          </p>
        </div>

        {/* Main feature cards */}
        <div className="main-cards-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {mainFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                ref={addToCardsRef}
                className={`main-card group relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/50 text-center transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer ${
                  hoveredCard === index ? 'shadow-2xl' : ''
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Icon container */}
                <div className={`relative inline-flex items-center justify-center w-20 h-20 ${feature.iconBg} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon className={`w-10 h-10 ${feature.iconColor} group-hover:rotate-6 transition-transform duration-300`} />
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors">
                  {feature.description}
                </p>

                {/* Animated stat */}
                <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${feature.color} text-white rounded-full font-bold text-sm shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                  <Zap className="w-4 h-4 mr-2" />
                  {feature.stat}
                </div>

                {/* Hover accent */}
                <div className={`absolute bottom-0 left-0 h-2 bg-gradient-to-r ${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-3xl`}></div>
              </div>
            );
          })}
        </div>

        {/* For Job Seekers and For Clients sections */}
        <div className="bottom-sections grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* For Job Seekers */}
          <div className="bottom-section group bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/20 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-500"></div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 rounded-2xl mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 group-hover:text-blue-800 transition-colors">
                    For Job Seekers
                  </h3>
                  <p className="text-blue-600 font-semibold">Career Growth Partners</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                We're committed to your career success. Our comprehensive approach ensures you're not just placed, but positioned for long-term growth.
              </p>
              
              <ul className="space-y-4">
                {jobSeekerBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start group/item">
                    <div className="p-1 bg-blue-100 rounded-full mr-4 mt-1 group-hover/item:scale-110 transition-transform duration-300">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors font-medium">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>

              <Link href="/find-jobs" className="mt-8 inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          {/* For Clients */}
          <div className="bottom-section group bg-gradient-to-br from-emerald-50 to-green-50 p-8 rounded-3xl shadow-xl border border-emerald-100 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-200/20 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-500"></div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-emerald-100 rounded-2xl mr-4 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-8 h-8 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 group-hover:text-emerald-800 transition-colors">
                    For Clients
                  </h3>
                  <p className="text-emerald-600 font-semibold">Business Growth Partners</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Partner with us for streamlined recruitment that saves time, reduces costs, and delivers exceptional talent that drives your business forward.
              </p>
              
              <ul className="space-y-4">
                {clientBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start group/item">
                    <div className="p-1 bg-emerald-100 rounded-full mr-4 mt-1 group-hover/item:scale-110 transition-transform duration-300">
                      <CheckCircle className="w-5 h-5 text-emerald-600" />
                    </div>
                    <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors font-medium">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>

              <Link href="/hire-talent" className="mt-8 inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Partner With Us
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;