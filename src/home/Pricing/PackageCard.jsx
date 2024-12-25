import React from "react";
import { Check, ArrowRight } from "lucide-react";

export function PackageCard({
  title,
  price,
  currency,
  description,
  features,
  image,
  badge,
}) {
  return (
    <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {badge && (
        <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-medium shadow-lg z-10">
          {badge}
        </div>
      )}

      <div className="aspect-[16/9] relative">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      <div className="p-4 sm:p-6 md:p-8">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-gray-600">{description}</p>

        <div className="mt-4 sm:mt-6 flex items-baseline">
          <span className="text-3xl sm:text-4xl font-bold text-gray-900">
            {currency}
            {price}
          </span>
          <span className="ml-1 text-gray-500">.00</span>
        </div>

        <ul className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
          {features.map(feature => (
            <li key={feature} className="flex items-start">
              <Check className="h-4 sm:h-5 w-4 sm:w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="ml-3 text-sm sm:text-base text-gray-600">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        <button className="mt-6 sm:mt-8 w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl font-medium flex items-center justify-center gap-2 hover:from-blue-700 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base">
          Get Started
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    </div>
  );
}
