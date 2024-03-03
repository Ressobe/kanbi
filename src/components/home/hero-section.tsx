import Link from "next/link";
import SignButton from "../buttons/sign-button";
import ShowCase from "./show-case";
import { RefObject } from "react";

type HeroSectionProps = {
    ref: RefObject<HTMLDivElement>;
}

export default function HeroSection() {
    return (
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
    );
}