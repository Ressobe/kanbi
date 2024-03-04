import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Home from "@/components/home/home";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/board")
  }

  return <Home />;
}