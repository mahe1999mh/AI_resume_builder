import React from "react";
import { templates } from "./templates";

export function TemplateSelector() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {templates.map(template => (
        <button
          key={template.id}
          //   onClick={() => onSelectTemplate(template.id)}
          className={`relative aspect-[210/297] rounded-lg overflow-hidden transition-all`}
        >
          <img
            src={template.thumbnail}
            alt={template.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-2">
            <span className="text-white text-sm font-medium">
              {template.name}
            </span>
          </div>
        </button>
      ))}
    </div>
  );
}
