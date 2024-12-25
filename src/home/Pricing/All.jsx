import React from "react";
import { PackageCard } from "./PackageCard";

export function All({ region = "All" }) {
  const packages = [
    {
      title: "Entry-Level Resume",
      price: 499,
      currency: "Rs.",
      description: "Perfect for freshers and students",
      features: [
        "ATS-Friendly Format",
        "Professional Template",
        "Keyword Optimization",
        "One Revision",
        "24/7 Support",
      ],
      image:
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=400&q=80",
      badge: "Most Ordered",
    },
    {
      title: "Professional Resume",
      price: 1899,
      currency: "Rs.",
      description: "For experienced professionals",
      features: [
        "Advanced ATS Optimization",
        "Multiple Template Options",
        "LinkedIn Profile Review",
        "Two Revisions",
        "Priority Support",
      ],
      image:
        "https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?auto=format&fit=crop&w=400&q=80",
      badge: "Popular",
    },
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
