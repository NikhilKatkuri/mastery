import React from "react";
interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, ...props }) => {
  return (
    <div className="w-full ">
      {label && (
        <label htmlFor={props.id} className="text-secondary-foreground mb-2 block text-sm font-medium">
          {label}
        </label>
      )}
      <input
        {...props}
        className="bg-level-02 border-border-03 text-primary-foreground placeholder-tertiary-foreground focus:ring-primary w-full rounded-lg border px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:outline-none"
      />
    </div>
  );
};

export default InputField;
