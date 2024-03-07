import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import HorizontalSection from "../horizontal-section";
import VerticalSection from "../vertical-section";

gsap.registerPlugin(ScrollTrigger);

const Body = () => {
    const containerRef = useRef(null);

    const fruits = [
        { id: 1, name: "pear", backColor: "#abc778" },
        { id: 2, name: "apple", backColor: "#fcaaa8" },
        { id: 3, name: "exotic", backColor: "#9896c3" },
    ];

    useGSAP(
        () => {
            gsap.to(".section-container", {
                scrollTrigger: {
                    start: "top top",
                    end: "bottom bottom",
                    trigger: ".scroll-section-1",
                    endTrigger: ".scroll-section-3",
                    scrub: true,
                    scroller: ".scroll-container",
                },
                xPercent: -66.67,
                ease: "power1.inOut",
            });

            gsap.to(".can-background", {
                scrollTrigger: {
                    start: "top top",
                    end: "bottom bottom",
                    trigger: ".scroll-section-1",
                    endTrigger: ".scroll-section-3",
                    scrub: true,
                    scroller: ".scroll-container",
                },
                backgroundPosition: "44% 51%, 150% 50%",
                ease: "power1.inOut",
            });

            gsap.to(".shop-button", {
                scrollTrigger: {
                    start: "top top",
                    end: "bottom bottom",
                    trigger: ".scroll-section-1",
                    endTrigger: ".scroll-section-3",
                    scrub: true,
                    scroller: ".scroll-container",
                },
                keyframes: {
                    "0%": { color: "#03612f" },
                    "50%": { color: "#b8231b" },
                    "100%": { color: "#3834ac" },
                    easeEach: "sine.out",
                },
                ease: "power1.inOut",
            });

            fruits.forEach((fruit) => {
                gsap.to(`.${fruit.name}-pieces`, {
                    scrollTrigger: {
                        trigger: `.scroll-section-${fruit.id}`,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true,
                        scroller: ".scroll-container",
                    },
                    keyframes: {
                        "0%": { yPercent: 0 },
                        "45%": { yPercent: 100 },
                        "55%": { yPercent: 100 },
                        "100%": { yPercent: 0 },
                        easeEach: "none",
                    },
                    ease: "none",
                });
            });
        },
        { scope: containerRef }
    );

    return (
        <>
            <div ref={containerRef}>
                <HorizontalSection fruits={fruits} />
                <VerticalSection fruits={fruits} />
            </div>
        </>
    );
};

export default Body;
