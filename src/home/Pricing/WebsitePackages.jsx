import React from "react";
import { PackageCard } from "./PackageCard";

export function WebsitePackages() {
  const packages = [
    {
      title: "Personal Website",
      price: 2499,
      currency: "Rs.",
      description: "Professional portfolio website",
      features: [
        "Custom Domain",
        "Portfolio Pages",
        "Blog Section",
        "Contact Form",
        "SEO Optimization",
      ],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80",
      badge: "Premium",
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
