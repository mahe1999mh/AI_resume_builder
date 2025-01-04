import React from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

export function Hero({ onGetStarted }) {
  const benefits = [
    "AI-Powered Resume Analysis",
    "LinkedIn Profile Optimization",
    "ATS-Friendly Templates",
  ];

  return (
    <div className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 text-white">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:16px]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 relative">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-6">
              Build Your Dream Career
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8">
              Create stunning resumes and optimize your LinkedIn profile with
              our AI-powered platform. Stand out in the competitive job market.
            </p>
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-base sm:text-lg">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onGetStarted}
                className="w-full sm:w-auto bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get Started Now
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg border border-white/20 hover:bg-white/10 transition-colors duration-300">
                Watch Demo
              </button>
            </div>
          </div>
          <div className="relative mt-8 md:mt-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl transform rotate-6 blur-2xl opacity-30"></div>
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&h=600"
              alt="Professional workspace"
              className="rounded-2xl shadow-2xl relative z-10 w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-4 sm:p-6 rounded-xl shadow-lg z-20">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="text-sm font-medium">89% Success Rate</div>
              </div>
              <div className="text-xl sm:text-2xl font-bold mt-1">
                Interview Success
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </div>
  );
}
