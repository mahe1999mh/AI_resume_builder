import React from "react";
import { useSelector } from "react-redux";

function SummeryPreview() {
  const { fonts, fontSize, fontColor } = useSelector((state) => state?.styles);
  const { summary } = useSelector((state) => state?.resume);
  if (!summary) return null;
  return (
    <div className="my-1">
      <h2 className="text-center font-bold text-sm mb-2">Summary</h2>

      <p
        className="text-xs text-justify"
        style={{ fontFamily: fonts, fontSize, color: fontColor }}
      >
        {summary ?? ""}
      </p>  
    </div>
  );
}

export default SummeryPreview;
