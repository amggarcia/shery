import { ReactNode } from "react";
interface Props {
  title?: string;
  children?: ReactNode;
}

export function Card({ children }: Props) {
  return (
    <div className="sm:mt-8 w-full sm:max-w-lg mx-auto sm:rounded-xl shadow-lg bg-gray-800 p-6">
      {children}
    </div>
  );
}
