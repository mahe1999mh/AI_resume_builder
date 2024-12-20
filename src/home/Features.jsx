import React from "react";
import {
  FileText,
  Linkedin,
  Sparkles,
  Target,
  Clock,
  Shield,
} from "lucide-react";

const features = [
  {
    title: "AI-Powered Resume Builder",
    description:
      "Create professional resumes tailored to your industry with our advanced AI technology.",
    icon: FileText,
  },
  {
    title: "LinkedIn Optimization",
    description:
      "Enhance your LinkedIn profile visibility with expert recommendations.",
    icon: Linkedin,
  },
  {
    title: "Smart Formatting",
    description:
      "Automatically format your resume to match industry standards and best practices.",
    icon: Sparkles,
  },
  {
    title: "ATS-Friendly",
    description:
      "Ensure your resume passes Applicant Tracking Systems with optimized keywords.",
    icon: Target,
  },
  {
    title: "Real-Time Updates",
    description:
      "Make changes to your resume and LinkedIn profile in real-time.",
    icon: Clock,
  },
  {
    title: "Privacy Protected",
    description:
      "Your data is secure with enterprise-grade encryption and privacy controls.",
    icon: Shield,
  },
];

export function Features() {
  return (
    <div className="bg-gray-50 py-12 sm:py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Your Success
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Everything you need to build a compelling professional presence
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map(feature => (
            <div
              key={feature.title}
              className="bg-white p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <feature.icon className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 mb-4 sm:mb-6" />
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
