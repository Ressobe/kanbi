'use client'

import { signOut } from "next-auth/react"

export default function SignOutButton() {
  const handleClick = () => {
    signOut();
  }
  return (
    <button 
      onClick={() => handleClick()} 
      className="bg-foreground text-primary-foreground px-4 py-2 rounded-lg"
    >
      Log out
    </button>
  )
}