// Built using Hyperiux Vault: https://vault.hyperiux.com

"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { prefersReducedMotion } from "./Animations/reducedMotion";


const HOLD = 0.35;
const FADE = 0.6;

/**
 * Plain white cover held over the page for the first few frames.
 *
 * The content underneath renders and paints as normal - which is what lets the
 * browser pick a Largest Contentful Paint candidate at all - while this sits on
 * top so the load still reads as "blank, then everything arrives in sequence".
 * Painting over the page is not the same as hiding it: an opacity-0 hero has no
 * LCP candidate, an overlaid one does.
 */
export default function IntroOverlay() {
  const ref = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const el = ref.current;
    if (!el) return;

    gsap.set(el, {
      position: "fixed",
      inset: 0,
      width: "100%",
      height: "100svh",
      backgroundColor: "#ffffff",
      zIndex: 9999,
      pointerEvents: "none",
      opacity: 1,
    });

    if (prefersReducedMotion()) {
      gsap.set(el, { display: "none" });
      return;
    }

    gsap.to(el, {
      opacity: 0,
      duration: FADE,
      delay: HOLD,
      ease: "power2.out",
      // Drop it out of the layer tree so it never costs a composite later
      onComplete: () => gsap.set(el, { display: "none" }),
    });
  }, []);

  return (
    <>
      {/* Without JS nothing would ever clear the cover, so hide it outright */}
      <noscript>
        <style>{`[data-intro-overlay]{display:none!important}`}</style>
      </noscript>
      <div
        ref={ref}
        aria-hidden
        data-intro-overlay

        style={{
          position: "fixed",
          inset: 0,
          width: "100%",
          height: "100svh",
          backgroundColor: "#ffffff",
          zIndex: 9999,
          pointerEvents: "none",
        }}
      />
    </>
  );
}
