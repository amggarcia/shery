import { forwardRef, ComponentProps } from "react";
type InputProps = ComponentProps<"input">;

interface Props extends InputProps {
  label: string;
}

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ label, type = "text", ...props }, ref) => {
    return (
      <label>
        <div className="font-semibold mb-1 ">{label}</div>
        <div className="bg-gray-700 rounded-lg mb-2 ">
          <input
            type={type}
            {...props}
            ref={ref}
            className="bg-gray-900 w-full rounded-lg"
          ></input>
        </div>
      </label>
    );
  }
);
