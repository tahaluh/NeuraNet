import { ChangeEvent } from "react";

interface SliderProps {
  label: string;
  value: number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  min: number;
  max: number;
}

export default function Slider({
  label,
  value,
  onChange,
  min,
  max,
}: SliderProps) {
  return (
    <div className="w-full mx-auto mt-4 flex items-center">
      <label className="w-auto mr-4 text-white RobotoMono">{label}</label>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={onChange}
        step="0.01"
        className="w-full h-1 rounded-full appearance-none cursor-pointer focus:outline-none custom-slider hover:accent-gray-400 accent-white"
      />
    </div>
  );
}
