import React from "react";
interface ColorButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  props?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

const ColorButton: React.FC<ColorButtonProps> = ({ title, ...props }) => {
  return (
    <button
      {...props}
      className="bg-primary hover:bg-primary/90 mt-5 w-full rounded-lg px-4 py-3 font-medium text-white transition-all duration-200 hover:shadow-lg active:scale-[0.98]"
    >
      {title}
    </button>
  );
};

export default ColorButton;
