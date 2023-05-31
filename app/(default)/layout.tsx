"use client";

import { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import PageIllustration from "@/components/page-illustration";
import Footer from "@/components/ui/footer";

type EasingOption =
    | "linear"
    | "ease"
    | "ease-in"
    | "ease-out"
    | "ease-in-out"
    | "ease-out-sine";

interface AosOptions {
    once: boolean;
    disable: "phone" | "tablet" | "mobile" | boolean;
    duration: number;
    easing: EasingOption;
}

export default function DefaultLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [aosData, setAosData] = useState<AosOptions>({
        once: true,
        disable: "phone",
        duration: 600,
        easing: "ease-out",
    });
    useEffect(() => {
        // AOS.init should only be called in a browser environment
        if (typeof window !== "undefined") {
            AOS.init(aosData);
        }
    }, []);

    return (
        <>
            <main className="grow">
                <PageIllustration />

                {children}
            </main>

            <Footer />
        </>
    );
}
