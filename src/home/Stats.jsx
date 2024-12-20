import React from "react";
import { Users, Briefcase, Award } from "lucide-react";

const stats = [
  {
    label: "Active Users",
    value: "50K+",
    icon: Users,
    description: "Professionals trust us",
  },
  {
    label: "Success Rate",
    value: "89%",
    icon: Briefcase,
    description: "Land their dream job",
  },
  {
    label: "Industry Awards",
    value: "15+",
    icon: Award,
    description: "For excellence",
  },
];

export function Stats() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map(stat => (
            <div
              key={stat.label}
              className="flex flex-col items-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl"
            >
              <stat.icon className="w-12 h-12 text-blue-600 mb-4" />
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-gray-800 mb-1">
                {stat.label}
              </div>
              <div className="text-gray-600 text-center">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
