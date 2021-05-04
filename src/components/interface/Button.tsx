import { ComponentProps } from "react";
import Link from "next/link";

type ButtonProps = ComponentProps<"button"> & ComponentProps<"a">;

interface Props extends ButtonProps {}

export function Button({ ...props }: Props) {
  return (
    <InnerButton
      className="bg-green-600 flex items-center justify-center px-6 py-2 rounded-xl shadow-xl mt-2
      hover:bg-opacity-50 focus:ring-2 focus:ring-gray-700 focus:outline-none focus:ring-offset-black focus:ring-offset-1"
      {...props}
    ></InnerButton>
  );
}

function InnerButton({ href, ...props }: Props) {
  const isLink = typeof href != "undefined";
  const ElementType = isLink ? "a" : "button";
  const button = <ElementType {...props}></ElementType>;
  if (isLink) {
    return <Link href={href!}>{button}</Link>;
  } else return button;
}
