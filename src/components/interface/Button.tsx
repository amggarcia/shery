import { ComponentProps } from "react";
import NextLink from "next/link";
import { LinkProps } from "next/link";
import { clsx } from "clsx";

type ButtonProps = ComponentProps<"button"> & ComponentProps<"a">;

interface Props extends ButtonProps {}

export function Button({ className, ...props }: Props) {
  return (
    <InnerButton
      className={clsx(
        "bg-green-600 flex items-center justify-center px-6 py-2 rounded-xl shadow-xl mt-2 hover:bg-opacity-50 focus:ring-2 focus:ring-gray-700 focus:outline-none focus:ring-offset-black focus:ring-offset-1",
        className
      )}
      {...props}
    ></InnerButton>
  );
}

function InnerButton({ href, ...props }: Props | LinkProps) {
  const isLink = typeof href != "undefined";
  const ElementType = isLink ? "a" : "button";
  const button = <ElementType {...(props as Props)}></ElementType>;
  if (isLink) {
    return <NextLink href={href!} {...(props as LinkProps)}></NextLink>;
  } else return button;
}
