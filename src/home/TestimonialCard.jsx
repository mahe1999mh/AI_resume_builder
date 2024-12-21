import React from "react";
import { Star } from "lucide-react";

export const TestimonialCard = ({ name, role, image, content, rating }) => {
  return (
    <div className="bg-white rounded-3xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 w-72">
      <div className="flex flex-col items-start gap-4">
        {/* Header with Image and Details */}
        <div className="flex items-center gap-3">
          {/* <img
            src={image || "/api/placeholder/48/48"}
            alt={name}
            className="w-12 h-12 rounded-full object-cover"
          /> */}
          <div className="flex flex-col">
            <h3 className="font-semibold text-sm text-gray-900">{name}</h3>
            <div className="flex items-center text-xs text-gray-500">
              {role}
            </div>
          </div>
        </div>

        {/* Rating Stars */}
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }, (_, i) => (
            <Star
              key={i}
              size={16}
              className={`${
                i < rating
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-gray-200 fill-gray-200"
              }`}
            />
          ))}
        </div>

        {/* Content */}
        <p className="text-sm leading-relaxed text-gray-600">{content}</p>
      </div>
    </div>
  );
};
