"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Phone,
  Mail,
  MessageCircle,
  Clock,
  CheckCircle,
  Headphones,
  Globe,
  Zap,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ConnectWays() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 60, scale: 0.94 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );

      cardsRef.current.forEach((card, index) => {
        const icon = card.querySelector(".contact-icon");
        if (icon) {
          gsap.to(icon, {
            y: -8,
            duration: 2 + index * 0.2,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            delay: index * 0.3,
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone Support",
      description:
        "Speak directly with our experts for immediate assistance and personalized guidance.",
      color: "blue",
      bgGradient: "from-blue-500 to-blue-600",
      lightBg: "bg-blue-50",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      details: [
        { label: "Phone", value: "+971 54 377 2366", primary: true },
        { label: "Alternate", value: "+91 98805 95566" },
      ],
      availability: ["Mon-Fri: 8AM-6PM GST", "Sat: 9AM-5PM GST"],
      features: ["Instant response", "Expert advisors"],
    },
    {
      icon: Mail,
      title: "Email Support",
      description:
        "Send detailed inquiries and receive a comprehensive response within 24 hours.",
      color: "teal",
      bgGradient: "from-teal-500 to-teal-600",
      lightBg: "bg-teal-50",
      iconBg: "bg-teal-100",
      iconColor: "text-teal-600",
      details: [
        {
          label: "Email",
          value: "info@brightedgerecruitment.com",
          primary: true,
        },
      ],
      availability: ["Response within 24 hours", "Priority support for clients"],
      features: ["Detailed responses", "Document sharing"],
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description:
        "Get instant answers to your questions with our real-time chat support system. (Coming Soon)",
      color: "orange",
      bgGradient: "from-orange-500 to-orange-600",
      lightBg: "bg-orange-50",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      details: [],
      availability: ["Coming Soon"],
      features: ["Real-time support", "Screen sharing"],
      hasButton: true,
      buttonText: "Coming Soon",
      buttonDisabled: true,
      status: "Offline",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div ref={titleRef} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Headphones className="w-4 h-4" />
            <span>We're here to help</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Multiple Ways to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
              Connect
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose the communication channel that works best for you. Our team
            is available to provide immediate assistance and personalized
            support.
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:justify-center gap-8">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className={`flex-1 max-w-sm ${method.lightBg} rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2`}
              >
                <div className="relative mb-6 flex justify-center">
                  <div
                    className={`contact-icon w-20 h-20 ${method.iconBg} rounded-2xl flex items-center justify-center transition-transform duration-500`}
                  >
                    <Icon className={`w-10 h-10 ${method.iconColor}`} />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
                  {method.title}
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  {method.description}
                </p>

                {method.details.length > 0 && (
                  <div className="space-y-2 mb-6">
                    {method.details.map((detail, idx) => (
                      <p
                        key={idx}
                        className="text-center font-medium text-gray-900"
                      >
                        {detail.value}
                      </p>
                    ))}
                  </div>
                )}

                {method.hasButton && (
                  <button
                    className={`w-full bg-gradient-to-r ${method.bgGradient} text-white px-6 py-3 rounded-xl font-medium mb-4`}
                  >
                    <span className="flex items-center justify-center gap-2">
                      <Zap className="w-4 h-4" />
                      {method.buttonText}
                    </span>
                  </button>
                )}

                {method.status && (
                  <p className="text-center text-green-600 font-semibold flex items-center justify-center gap-2 mb-4">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    {method.status}
                  </p>
                )}

                <div className="border-t border-gray-200 pt-4 mt-4">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-sm font-medium text-gray-700">
                      Availability
                    </span>
                  </div>
                  {method.availability.map((time, idx) => (
                    <p key={idx} className="text-center text-sm text-gray-600">
                      {time}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-gray-600">
            <Globe className="w-5 h-5" />
            <span>Available in multiple languages</span>
          </div>
        </div>
      </div>
    </section>
  );
}