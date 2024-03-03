import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Home from "@/components/home/home";
import SignOutButton from "@/components/buttons/sign-out-button";
import { Board } from "@/components/board";

export default async function Page() {
  const session = await getServerSession(authOptions);
  return (
    <>
      {session ? (
        <>
          <nav className="bg-zinc-950/70 border-b border-primary-foreground p-4 flex flex-row-reverse items-center justify-between">
            <div className="flex items-center gap-x-20">
              <h1 className="text-2xl font-bold">{session.user?.username}</h1>
              <SignOutButton />
            </div>
          </nav>
          <Board />
        </>
      ) : (
        <Home />
      )}
    </>
  );
}