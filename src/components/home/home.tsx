"use client";

import Link from "next/link";
import ShowCase from "./show-case";
import SignButton from "../buttons/sign-button";
import { CheckCircleIcon } from "lucide-react";
import Pricing from "./pricing";
import ContactUs from "./contact-us";
import { useRef } from "react";
import { Button } from "../ui/button";
import HeroSection from "./hero-section";
import FeaturesSecion from "./feauters-section";


export default function Home() {
    const feautersRef = useRef<HTMLDivElement>(null);
    const pricingRef = useRef<HTMLDivElement>(null);
    const contactUsRef = useRef<HTMLDivElement>(null);
    const aboutUsRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <nav className="bg-zinc-950/70 border-b border-primary-foreground p-4 flex items-center justify-between">
                <div className="flex gap-x-10">
                    <Button onClick={() => feautersRef.current?.scrollIntoView({ behavior: "smooth" })} variant="outline" className="text-md py-1 px-4 border-none font-medium hover:cursor-pointer">
                        Features
                    </Button>
                    <Button onClick={() => pricingRef.current?.scrollIntoView({ behavior: "smooth" })} variant="outline" className="text-md py-1 px-4 border-none font-medium hover:cursor-pointer">
                        Pricing
                    </Button>
                    <Button onClick={() => contactUsRef.current?.scrollIntoView({ behavior: "smooth" })} variant="outline" className="text-md py-1 px-4 border-none font-medium hover:cursor-pointer">
                        Contact
                    </Button>
                    <Button onClick={() => aboutUsRef.current?.scrollIntoView({ behavior: "smooth" })} variant="outline" className="text-md py-1 px-4 border-none font-medium hover:cursor-pointer">
                        About
                    </Button>
                </div>
                <SignButton defaultFormOpen="sign-in" />
            </nav>
            <div className="flex flex-col min-h-[100dvh]">
                <header className="px-4 lg:px-6 h-14 flex items-center">
                    <Link className="flex items-center justify-center" href="#">
                        <span className="sr-only">Acme Inc</span>
                    </Link>
                </header>
                <main className="flex-1">
                    <HeroSection />

                    <div ref={feautersRef}>
                        <FeaturesSecion />
                    </div>

                    <div ref={pricingRef}>
                        <Pricing />
                    </div>

                    <div ref={contactUsRef}>
                        <ContactUs />
                    </div>
                </main>
                <div ref={aboutUsRef}></div>
            </div>
        </>
    );
}