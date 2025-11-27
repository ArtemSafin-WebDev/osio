import "swiper/css";
import gsap from "gsap";
import {Flip, ScrollTrigger} from "gsap/all";

gsap.registerPlugin(Flip, ScrollTrigger);

export default function partnerVideo() {
    const elements = Array.from(
        document.querySelectorAll<HTMLElement>(".partner-video")
    );

    elements.forEach((element) => {
        let mm = gsap.matchMedia();
        mm.add(
            "(min-width: 641px)",
            () => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: element,
                        start: "top bottom-=30%",
                    },
                });
                tl.from(".partner-video__heading", {
                    autoAlpha: 0,
                    duration: 0.6,
                    ease: "power3.out",
                    y: 30,
                });

                tl.from(
                    ".partner-video__card",
                    {
                        duration: 1.2,
                        stagger: 0.2,
                        y: 30,
                        ease: "power3.out",
                        autoAlpha: 0,
                    },
                    "<+=0.4"
                )
            },
            element
        );
        mm.add(
            "(max-width: 640px)",
            () => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: element,
                        start: "top bottom-=30%",
                    },
                });
                tl.from(".partner-video__heading", {
                    autoAlpha: 0,
                    duration: 1,
                    ease: "power3.out",
                    y: 30,
                });

                tl.from(
                    ".partner-video__card",
                    {
                        duration: 1.2,
                        stagger: 0.2,
                        y: 30,
                        ease: "power3.out",
                        autoAlpha: 0,
                    },
                    "<+=0.4"
                );

            },
            element
        );


    });
}
