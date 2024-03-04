"use client";

import { Button } from "../ui/button";
import { ReactNode } from "react";
import { useFormStatus } from "react-dom";

type SubmitButtonProps = {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
};

export function SubmitButton({
  children,
  className,
  disabled,
}: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button
      className={`${className} ${pending ? "bg-slate-700" : ""} `}
      type="submit"
      variant="default"
      disabled={disabled === true ? disabled : pending}
    >
      {children}
    </Button>
  );
}

