import React from "react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: 0,
    features: [
      "AI Resume Builder",
      "Basic Templates",
      "Export to PDF",
      "WhatsApp Support",
    ],
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Pro",
    price: 499,
    features: [
      "Everything in Basic",
      "ATS Resume Builder",
      //   "Advanced Templates",
      "Priority Support",
      "Resume Analytics",
    ],
    cta: "Get Pro",
    popular: false,
  },
  {
    name: "Premium",
    price: 899,
    features: [
      "Everything in Pro",
      "Custom Branding",
      "LinkedIn Optimization",
      "Multiple Resume Versions",
      "24/7 Phone Support",
      //   "Career Coaching Session",
    ],
    cta: "Go Premium",
    popular: true,
  },
];

export function Pricing() {
  const [selectedPlan, setSelectedPlan] = React.useState(null);

  return (
    <div className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Plan
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Select the perfect plan for your career goals
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-lg md:max-w-none mx-auto">
          {plans.map(plan => (
            <div
              key={plan.name}
              className={`relative rounded-2xl ${
                plan.popular
                  ? "bg-blue-600 text-white ring-4 ring-blue-600 ring-opacity-50"
                  : "bg-white text-gray-900 border-2 border-gray-200"
              } p-6 sm:p-8 shadow-lg hover:scale-105 transition-transform duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium whitespace-nowrap">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">
                  {plan.name}
                </h3>
                <div className="mb-6">
                  <span className="text-3xl sm:text-4xl font-bold">
                    ₹{plan.price}
                  </span>
                  {/* <span className="text-base sm:text-lg">/month</span> */}
                </div>
                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 text-left">
                  {plan.features.map(feature => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="w-5 h-5 flex-shrink-0" />
                      <span className="text-sm sm:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setSelectedPlan(plan)}
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-base sm:text-lg ${
                    plan.popular
                      ? "bg-white text-blue-600 hover:bg-gray-100"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  } transition-colors duration-300`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedPlan && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="relative">
              <button
                onClick={() => setSelectedPlan(null)}
                className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
              >
                <span className="sr-only">Close</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              {/* <PaymentSection
                planName={selectedPlan.name}
                amount={selectedPlan.price}
              /> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
