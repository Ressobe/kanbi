"use client";

import { useState } from "react";
import { SignUpForm } from "../forms/sign-up-form";
import { SignInForm } from "../forms/sign-in-form";
import { Dialog, DialogTrigger, DialogContent } from "../ui/dialog";
import { cn } from "@/lib/utils";

type SignButtonProps = {
  defaultFormOpen: "sign-in" | "sign-up";
  className?: string;
}

export default function SignButton({defaultFormOpen, className}: SignButtonProps) {
  const [form, setForm] = useState<"sign-in" | "sign-up">(defaultFormOpen);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setForm("sign-in");
    setOpen(false);
  };

  const handleClick = () => {
    if (form === "sign-in") {
      setForm("sign-up");
      return;
    }
    setForm("sign-in");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className= {cn("bg-foreground flex items-center justify-center gap-3 text-background px-6 py-2 rounded-lg hover:text-accent", className)}>
          { defaultFormOpen === "sign-in" ? "Sign In" : "Sign Up" }
        </button>
      </DialogTrigger>
      <DialogContent>
        {form === "sign-in" ? (
          <div>
            <SignInForm onSuccess={handleClose} />
            <div className="flex gap-4 justify-center">
              Don't have an account?
              <button onClick={handleClick} className="underline">
                Create account
              </button>
            </div>
          </div>
        ) : (
          <div>
            <SignUpForm onSuccess={handleClose} />
            <div className="flex gap-4 justify-center">
              Have an account?
              <button onClick={handleClick} className="underline">
                Log In
              </button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}