'use client'

import { cn } from "@/lib/utils";
import { signOut } from "next-auth/react"


type SignOutButtonProps = {
  className?: string
}

export default function SignOutButton({className} : SignOutButtonProps) {

  const handleClick = () => {
    signOut({
      callbackUrl: '/',
      redirect: true
    });
  }
  return (
    <button 
      onClick={() => handleClick()} 
      className={cn("bg-foreground text-primary-foreground px-6 py-2 rounded transition-all hover:bg-muted-foreground", className)}
    >
      Log out
    </button>
  )
}