"use client";

// Loading animation based on Figma frame analysis:
//
// Frame 1: Only "A" (first) + "D" (last) visible, large gap between them, progress bar gray
// Frame 2–3: Middle letters (L, U, N, A) fade in, gap appears to close
// Frame 4: All letters visible, tight tracking (1.8px), progress bar fully black
//
// Mechanic: A and D are visible from the start. Middle letters stagger in left→right,
// creating the illusion that the gap between A and D is "closing".
//
// Exit: GSAP opacity 0, duration 2.5s, ease power4.out, delay 3.5s — exact screenLoading() from app.js

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

// A=first, L U N A=middle (fade in), D=last
const LETTERS = ["A", "L", "U", "N", "A", "D"];
const MIDDLE_INDICES = [1, 2, 3, 4]; // L, U, N, A

export function LoadingScreen() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const lineFillRef = useRef<HTMLDivElement>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const overlay = overlayRef.current;
    const lineFill = lineFillRef.current;
    if (!overlay) return;

    document.body.style.overflow = "hidden";

    // Middle letters stagger in — creates the "gap closing" illusion
    const middleLetters = MIDDLE_INDICES
      .map((i) => letterRefs.current[i])
      .filter(Boolean) as HTMLSpanElement[];

    gsap.fromTo(
      middleLetters,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.6,
        stagger: 0.25,
        ease: "power2.out",
        delay: 0.4,
      }
    );

    // Progress line: gray → black, synced with letters revealing
    if (lineFill) {
      const totalDuration = 0.4 + (middleLetters.length - 1) * 0.25 + 0.6;
      gsap.fromTo(
        lineFill,
        { width: "0%", background: "#f6f6f6" },
        {
          width: "100%",
          background: "#000000",
          duration: totalDuration,
          ease: "power2.inOut",
        }
      );
    }

    // Exit — exact screenLoading() from apparicio app.js
    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = "";
        setDone(true);
      },
    });

    tl.to(overlay, {
      opacity: 0,
      duration: 2.5,
      ease: "power4.out",
      delay: 3.5,
    });

    return () => {
      document.body.style.overflow = "";
      tl.kill();
    };
  }, []);

  if (done) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 bg-white flex items-center justify-center pointer-events-none"
      style={{ zIndex: 999 }}
    >
      <div className="flex flex-col items-start gap-2">
        {/* Letters: A and D start visible; L U N A start hidden */}
        <div className="flex items-baseline">
          {LETTERS.map((char, i) => (
            <span
              key={i}
              ref={(el) => { letterRefs.current[i] = el; }}
              style={{
                display: "inline-block",
                fontFamily: "var(--font-gelasio)",
                fontSize: "clamp(2rem, 8vw, 5rem)",
                fontWeight: 400,
                color: "#000",
                letterSpacing: "1.8px",
                opacity: MIDDLE_INDICES.includes(i) ? 0 : 1,
              }}
            >
              {char}
            </span>
          ))}
        </div>

        {/* Progress line — gray track + animating fill */}
        <div
          style={{ width: "100%", height: "1.5px", background: "#f6f6f6", position: "relative" }}
        >
          <div
            ref={lineFillRef}
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              height: "100%",
              width: "0%",
              background: "#f6f6f6",
            }}
          />
        </div>
      </div>
    </div>
  );
}
