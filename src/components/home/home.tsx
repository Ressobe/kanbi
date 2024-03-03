"use client";

import Link from "next/link";
import ShowCase from "./show-case";
import SignButton from "../buttons/sign-button";
import { CheckCircleIcon } from "lucide-react";
import Pricing from "./pricing";
import ContactUs from "./contact-us";
import Footer from "../footer";
import { useRef } from "react";
import SignOutButton from "../buttons/sign-out-button";
import { Button } from "../ui/button";
import { Session } from "next-auth";

type HomeProps = {
    session: Session | null;
}
export default function Home({session} : HomeProps) {

    const feautersRef = useRef<HTMLDivElement>(null);
    const pricingRef = useRef<HTMLDivElement>(null);
    const contactUsRef = useRef<HTMLDivElement>(null);
    const aboutUsRef = useRef<HTMLDivElement>(null);


    return (
        <>
            <nav className="bg-zinc-950/70 border-b border-primary-foreground p-4 flex items-center justify-between">
                {session ? (
                    <div className="flex items-center gap-x-20">
                        <h1 className="text-2xl font-bold">{session.user?.username}</h1>
                        <SignOutButton />
                    </div>
                ) : (
                    <>
                        <div className="flex gap-x-10">
                            <Button onClick={() => feautersRef.current?.scrollIntoView({behavior: "smooth"})} variant="outline" className="text-md py-1 px-4 border-none font-medium hover:cursor-pointer">
                                Features
                            </Button>
                            <Button onClick={() => pricingRef.current?.scrollIntoView({behavior: "smooth"})} variant="outline" className="text-md py-1 px-4 border-none font-medium hover:cursor-pointer">
                                Pricing
                            </Button>
                            <Button onClick={() => contactUsRef.current?.scrollIntoView({behavior: "smooth"})} variant="outline" className="text-md py-1 px-4 border-none font-medium hover:cursor-pointer">
                                Contact
                            </Button>
                            <Button onClick={() => aboutUsRef.current?.scrollIntoView({behavior: "smooth"})} variant="outline" className="text-md py-1 px-4 border-none font-medium hover:cursor-pointer">
                                About
                            </Button>
                        </div>
                        <SignButton defaultFormOpen="sign-in" />
                    </>
                )}
            </nav>
            <div className="flex flex-col min-h-[100dvh]">
                <header className="px-4 lg:px-6 h-14 flex items-center">
                    <Link className="flex items-center justify-center" href="#">
                        <span className="sr-only">Acme Inc</span>
                    </Link>
                </header>
                <main className="flex-1">
                    <section className="w-full py-6 md:py-12 lg:py-16 xl:py-20">
                        <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 text-center">
                            <div className="space-y-6">
                                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-7xl  text-gradient bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">Kanbi</h1>
                                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl  text-gradient bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                                    The Kanban Board for Modern Teams
                                </h1>
                                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                    Visualize your work. Streamline your workflow. Ship faster with our Kanban app.
                                </p>
                            </div>
                            <ShowCase />
                            <div className="mx-auto w-full max-w-sm space-y-6">
                                <form className="flex items-center justify-center space-x-2">
                                    <SignButton defaultFormOpen="sign-up" className="py-4 px-12 font-bold transition-colors hover:bg-muted-foreground" />
                                </form>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                    Sign up to get notified when we launch.
                                    <span> </span>
                                    <Link className="underline underline-offset-2" href="#">
                                        Terms of Service
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </section>
                    <div ref={feautersRef}></div>
                    <section className="w-full py-12 md:py-24 lg:py-32">
                        <div  className="container px-4 md:px-6">
                            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                                <div className="gap-10 flex flex-col items-center">
                                    <h2 className="font-bold tracking-tighter text-4xl text-gradient bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
                                        The Kanbi makes it easy to stay organized and get things done
                                    </h2>
                                    <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                        With Kanban, you can create boards to organize your tasks, move cards to track progress, and collaborate
                                        with your team in real-time. Here are some key benefits of using the Kanban app:
                                    </p>
                                </div>
                                <div className="pt-4 grid max-w-sm gap-2">
                                    <div className="flex items-center space-x-2">
                                        <CheckCircleIcon className="w-5 h-5 flex-shrink-0 text-green-500" />
                                        <p className="text-lg font-medium tracking-wide dark:text-gray-400">Improved productivity</p>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <CheckCircleIcon className="w-5 h-5 flex-shrink-0 text-green-500" />
                                        <p className="text-lg font-medium tracking-wide dark:text-gray-400">Better task organization</p>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <CheckCircleIcon className="w-5 h-5 flex-shrink-0 text-green-500" />
                                        <p className="text-lg font-medium tracking-wide dark:text-gray-400">Enhanced collaboration</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div ref={pricingRef}></div>
                    <Pricing />
                    <div ref={contactUsRef}></div>
                    <ContactUs />
                </main>
                <div ref={aboutUsRef}></div>
                <Footer />
            </div>
        </>
    );
}