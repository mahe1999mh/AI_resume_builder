import React, { useState, useMemo } from "react";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

const colors = [
  "text-pink-500",
  "text-green-500",
  "text-blue-500",
  "text-purple-500",
  "text-orange-500",
  "text-indigo-500",
  "text-cyan-500",
  "text-teal-500",
];

const sizes = [
  "text-sm",
  "text-base",
  "text-lg",
  "text-xl",
  "text-2xl",
  "text-3xl",
];

const DynamicWordCloud = () => {
  const [text, setText] = useState("");

  const processText = inputText => {
    const words = inputText
      .toLowerCase()
      .replace(/[^\w\s]/g, "")
      .split(/\s+/)
      .filter(word => word.length > 3);

    const wordCount = words.reduce((acc, word) => {
      acc[word] = (acc[word] || 0) + 1;
      return acc;
    }, {});

    const wordArray = Object.entries(wordCount)
      .map(([text, count]) => ({ text, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 30);

    const maxCount = Math.max(...wordArray.map(w => w.count));

    return wordArray.map((word, index) => ({
      text: word.text,
      size: sizes[
        Math.min(
          Math.floor((word.count / maxCount) * (sizes.length - 1)),
          sizes.length - 1
        )
      ],
      color: colors[index % colors.length],
      weight: word.count > maxCount / 2 ? "font-bold" : "font-normal",
      count: word.count,
    }));
  };

  const words = useMemo(() => processText(text), [text]);

  return (
    <Card className="w-full max-w-4xl p-6 space-y-6">
      <Textarea
        placeholder="Paste job description here..."
        className="w-full h-32 p-2 border rounded"
        value={text}
        onChange={e => setText(e.target.value)}
      />

      <div className="w-full h-64 bg-white rounded-lg p-4 flex items-center justify-center">
        <div className="relative w-full h-full flex flex-wrap items-center justify-center gap-4">
          {words.map((word, index) => (
            <span
              key={index}
              className={`
                ${word.size}
                ${word.color}
                ${word.weight}
                transform
                hover:scale-110
                transition-transform
                duration-200
                cursor-pointer
              `}
              style={{
                transform: `rotate(${Math.random() * 20 - 10}deg)`,
              }}
              title={`Frequency: ${word.count}`}
            >
              {word.text}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default DynamicWordCloud;
