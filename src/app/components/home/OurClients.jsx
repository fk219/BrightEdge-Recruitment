"use client"

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, TrendingUp, Globe, Zap } from 'lucide-react';

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const OurClients = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const clientsRef = useRef([]);
  
  // Client data with logo images
  const clients = [
    { 
      id: 1,
      logo: '/logos/client1.png', // Replace with actual logo paths
      alt: 'Company A Logo',
      name: 'Tech Corp',
      industry: 'Technology',
      testimonial: 'Outstanding service and results'
    },
    { 
      id: 2,
      logo: '/logos/client2.png',
      alt: 'Company B Logo',
      name: 'Finance Plus',
      industry: 'Financial Services',
      testimonial: 'Transformed our operations'
    },
    { 
      id: 3,
      logo: '/logos/client3.png',
      alt: 'Company C Logo',
      name: 'Health Systems',
      industry: 'Healthcare',
      testimonial: 'Reliable and innovative partner'
    },
    { 
      id: 4,
      logo: '/logos/client4.png',
      alt: 'Company D Logo',
      name: 'Retail Giant',
      industry: 'E-commerce',
      testimonial: 'Exceeded our expectations'
    },
    { 
      id: 5,
      logo: '/logos/client5.png',
      alt: 'Company E Logo',
      name: 'Media House',
      industry: 'Entertainment',
      testimonial: 'Game-changing solutions'
    },
    { 
      id: 6,
      logo: '/logos/client6.png',
      alt: 'Company F Logo',
      name: 'Auto Industries',
      industry: 'Automotive',
      testimonial: 'Best decision we made'
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current, 
        { 
          opacity: 0, 
          y: 30,
          scale: 0.9
        },
        { 
          opacity: 1, 
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Client logos stagger animation
      gsap.fromTo(clientsRef.current,
        { 
          opacity: 0, 
          scale: 0.5,
          rotationY: 180
        },
        {
          opacity: 1,
          scale: 1,
          rotationY: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Continuous subtle animation
      clientsRef.current.forEach((client, index) => {
        gsap.to(client, {
          y: -5,
          duration: 2 + index * 0.1,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: index * 0.2
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative bg-gradient-to-b from-gray-50 to-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Title section */}
        <div ref={titleRef} className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join over 500+ companies worldwide who trust us to deliver exceptional results
          </p>
        </div>

        {/* Clients logo grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {clients.map((client, index) => (
            <div
              key={client.id}
              ref={el => clientsRef.current[index] = el}
              className="group relative"
            >
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:scale-110 cursor-pointer">
                <div className="relative h-20 flex items-center justify-center">
                  {/* Placeholder for actual logo - replace with your images */}
                  <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-50 transition-colors duration-300">
                    {/* Use actual image */}
                    {/* <img 
                      src={client.logo} 
                      alt={client.alt}
                      className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    /> */}
                    
                    {/* Placeholder text - remove when using actual images */}
                    <span className="text-gray-400 font-semibold text-sm group-hover:text-gray-600 transition-colors duration-300">
                      LOGO
                    </span>
                  </div>
                </div>
                
                {/* Hover overlay with details */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl p-4 flex flex-col justify-end">
                  <p className="text-white font-semibold text-sm">{client.name}</p>
                  <p className="text-white/80 text-xs">{client.industry}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial carousel placeholder */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <blockquote className="max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl font-medium mb-4">
              "Working with this team has been transformative for our business. Their expertise and dedication to excellence is unmatched."
            </p>
            <footer className="text-white/80">
              <cite className="not-italic">— CEO, Leading Tech Company</cite>
            </footer>
          </blockquote>
        </div>

        {/* Stats section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center group cursor-pointer">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 group-hover:bg-blue-200 transition-colors duration-300">
              <Globe className="w-8 h-8 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900">500+</div>
            <div className="text-sm text-gray-600 mt-1">Global Clients</div>
          </div>
          <div className="text-center group cursor-pointer">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4 group-hover:bg-purple-200 transition-colors duration-300">
              <TrendingUp className="w-8 h-8 text-purple-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900">98%</div>
            <div className="text-sm text-gray-600 mt-1">Client Retention</div>
          </div>
          <div className="text-center group cursor-pointer">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4 group-hover:bg-green-200 transition-colors duration-300">
              <Star className="w-8 h-8 text-green-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900">4.9/5</div>
            <div className="text-sm text-gray-600 mt-1">Average Rating</div>
          </div>
          <div className="text-center group cursor-pointer">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4 group-hover:bg-orange-200 transition-colors duration-300">
              <Zap className="w-8 h-8 text-orange-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900">24/7</div>
            <div className="text-sm text-gray-600 mt-1">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClients;