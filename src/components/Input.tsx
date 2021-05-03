import { forwardRef, ComponentProps } from "react";
type InputProps = ComponentProps<"input">;

interface Props extends InputProps {
  label: string;
}

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ label, type = "text", ...props }, ref) => {
    return (
      <div>
        <div>{label}</div>
        <input
          type={type}
          {...props}
          ref={ref}
          className="text-gray-700"
        ></input>
      </div>
    );
  }
);
