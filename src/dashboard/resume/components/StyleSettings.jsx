import React, { useEffect, useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useDispatch } from "react-redux";
import {
  setFont,
  setFontSize,
  setFontColor,
} from "./../../../redux/resume/styleSlice";

const fonts = [
  "Arial",
  "Helvetica",
  "Times New Roman",
  "Courier New",
  "Verdana",
];

const StyleSettings = () => {
  const dispatch = useDispatch();
  const [formState, setFormState] = useState({
    fonts: fonts[2],
    fontSize: 16,
    fontColor: "#000000",
  });

  const onChangeHandle = e => {
    const { name, value } = e.target;

    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleFontSizeChange = value => {
    setFormState(prev => ({ ...prev, fontSize: value[0] }));
  };

  useEffect(() => {
    dispatch(setFont(formState.fonts));
  }, [dispatch, formState.fonts]);

  useEffect(() => {
    dispatch(setFontSize(formState.fontSize));
  }, [dispatch, formState.fontSize]);

  useEffect(() => {
    dispatch(setFontColor(formState.fontColor));
  }, [dispatch, formState.fontColor]);

  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="sm" className="flex gap-2">
            <SlidersHorizontal />
            <span>Style Settings</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-4 w-[300px] rounded-lg shadow-lg bg-white">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2">
                Font Family
              </label>
              <select
                value={formState.fonts}
                onChange={onChangeHandle}
                name="fonts"
                className="w-full p-2 border rounded-md text-sm"
              >
                {fonts.map(font => (
                  <option key={font} value={font}>
                    {font}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                Font Size
              </label>
              <Slider
                value={[formState.fontSize]}
                min={10}
                max={36}
                step={1}
                onValueChange={handleFontSizeChange}
                className="w-full"
              />
              <div className="text-right text-xs text-gray-500">
                {formState.fontSize}px
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                Font Color
              </label>
              <input
                type="color"
                name="fontColor"
                value={formState.fontColor}
                onChange={onChangeHandle}
                className="w-full h-10 p-1 border rounded-md cursor-pointer"
              />
            </div>

            {/* Preview Box */}
            <div
              className="p-4 border rounded-md mt-4 text-center"
              style={{
                fontFamily: formState.fonts,
                fontSize: `${formState.fontSize}px`,
                color: formState.fontColor,
              }}
            >
              This is a preview!
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default StyleSettings;
