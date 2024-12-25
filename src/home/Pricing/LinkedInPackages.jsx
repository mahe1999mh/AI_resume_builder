import React from "react";
import { PackageCard } from "./PackageCard";

export function LinkedInPackages() {
  const packages = [
    {
      title: "LinkedIn Basic Optimization",
      price: 999,
      currency: "Rs.",
      description: "Essential LinkedIn profile optimization",
      features: [
        "Profile Review",
        "Headline Optimization",
        "Summary Writing",
        "Basic SEO",
        "One Revision",
      ],
      image:
        "https://images.unsplash.com/photo-1611944212129-29977ae1398c?auto=format&fit=crop&w=400&q=80",
      badge: "Most Popular",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {packages.map(pkg => (
        <PackageCard key={pkg.title} {...pkg} />
      ))}
    </div>
  );
}
