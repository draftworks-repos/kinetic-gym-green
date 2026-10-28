import React, { useState, useEffect, useRef } from "react";
import "./InitialLoader.css";

/**
 * Initial website loader displaying only the animated dumbbell in the center.
 * Features:
 * - Full-screen background (#0B0B0B)
 * - Animated dumbbell SVG in an indefinite loop
 * - Zero extra text or distractions
 * - IntersectionObserver to control CSS animation play-state
 * - Smooth fade-out and unmount after initial load
 */
export function InitialLoader() {
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isMounted, setIsMounted] = useState(true);
  const [isInView, setIsInView] = useState(true);
  const dumbbellRef = useRef<HTMLDivElement>(null);

  // IntersectionObserver to pause/resume CSS animations based on viewport visibility
  useEffect(() => {
    const element = dumbbellRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
        });
      },
      { threshold: 0.1 },
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
    };
  }, []);

  // Display loader for full duration of the initial animation cycle (~2.2s), then fade out
  useEffect(() => {
    const fadeTimer = window.setTimeout(() => {
      setIsFadingOut(true);
    }, 2200);

    const unmountTimer = window.setTimeout(() => {
      setIsMounted(false);
    }, 2750); // 2200ms + 550ms fade transition

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(unmountTimer);
    };
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div
      className={`initial-loader-overlay ${isFadingOut ? "fade-out" : ""}`}
      aria-label="Loading"
      role="status"
    >
      <div
        ref={dumbbellRef}
        className={`initial-loader-dumbbell ${isInView ? "running" : "paused"}`}
      >
        <svg
          className="initial-loader-svg"
          fill="none"
          height="100%"
          width="100%"
          viewBox="0 0 1000 1000"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Dumbbell center bar */}
          <g display="inline" id="i0">
            <animate
              repeatCount="indefinite"
              begin="0s"
              calcMode="discrete"
              dur="2.169s"
              values="inline; none; none; none"
              keyTimes="0; 0.983921; 0.984615; 1"
              attributeName="display"
            />
            <g transform="translate(485.056,492.522)">
              <g transform="scale(0,0)">
                <animateTransform
                  repeatCount="indefinite"
                  type="scale"
                  attributeName="transform"
                  dur="2.169s"
                  begin="0s"
                  calcMode="spline"
                  values="0 0; 1 1; 1 1"
                  keyTimes="0; 0.261539; 1"
                  keySplines="0.261 0 0.028 1; 0 0 1 1"
                  fill="freeze"
                />
                <g transform="translate(-485.056,-492.522)">
                  <g id="i1" transform="matrix(1,0,0,1,485.056,492.522)">
                    <path
                      fill="#a8e800"
                      d="M296.901,33C296.901,33,-296.9,33,-296.9,33C-315.126,33,-329.9,18.226,-329.9,0C-329.9,-18.225,-315.126,-33,-296.9,-33C-296.9,-33,296.901,-33,296.901,-33C315.126,-33,329.9,-18.225,329.9,0C329.9,18.226,315.126,33,296.901,33Z"
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>

          {/* Left inner weight plate */}
          <g display="inline" id="i2">
            <animate
              repeatCount="indefinite"
              begin="0s"
              calcMode="discrete"
              dur="2.169s"
              values="inline; none; none; none"
              keyTimes="0; 0.983921; 0.984615; 1"
              attributeName="display"
            />
            <g transform="translate(-112,497.838)">
              <animateTransform
                repeatCount="indefinite"
                type="translate"
                attributeName="transform"
                dur="2.169s"
                begin="0s"
                calcMode="spline"
                values="-112 497.838; -112 497.838; 268 497.838; 268 497.838"
                keyTimes="0; 0.292308; 0.753846; 1"
                keySplines="0 0 1 1; 0 0 0 1; 0 0 1 1"
                fill="freeze"
              />
              <g transform="scale(1,1) translate(-268,-497.838)">
                <g id="i1-p2" transform="matrix(1,0,0,1,268,497.838)">
                  <path
                    fill="#adf000"
                    d="M0,136C0,136,0,136,0,136C-18.778,136,-34,120.777,-34,102C-34,102,-34,-102,-34,-102C-34,-120.778,-18.778,-136,0,-136C18.778,-136,34,-120.778,34,-102C34,-102,34,102,34,102C34,120.777,18.778,136,0,136Z"
                  />
                </g>
              </g>
            </g>
          </g>

          {/* Right outer weight plate */}
          <g display="inline" id="i3">
            <animate
              repeatCount="indefinite"
              begin="0s"
              calcMode="discrete"
              dur="2.169s"
              values="inline; none; none; none"
              keyTimes="0; 0.983921; 0.984615; 1"
              attributeName="display"
            />
            <g transform="translate(1044.941,497.838)">
              <animateTransform
                repeatCount="indefinite"
                type="translate"
                attributeName="transform"
                dur="2.169s"
                begin="0s"
                calcMode="spline"
                values="1044.941 497.838; 1044.941 497.838; 644.941 497.838; 644.941 497.838"
                keyTimes="0; 0.261539; 0.723077; 1"
                keySplines="0 0 1 1; 0 0 0 1; 0 0 1 1"
                fill="freeze"
              />
              <g transform="scale(1,1) translate(-644.941,-497.838)">
                <g id="i1-p3" transform="matrix(1,0,0,1,644.941,497.838)">
                  <path
                    fill="#a5e500"
                    d="M0,187.176C0,187.176,0,187.176,0,187.176C-20.954,187.176,-37.941,170.189,-37.941,149.235C-37.941,149.235,-37.941,-149.234,-37.941,-149.234C-37.941,-170.189,-20.954,-187.176,0,-187.176C20.954,-187.176,37.941,-170.189,37.941,-149.234C37.941,-149.234,37.941,149.235,37.941,149.235C37.941,170.189,20.954,187.176,0,187.176Z"
                  />
                </g>
              </g>
            </g>
          </g>

          {/* Left outer weight plate */}
          <g display="inline" id="i4">
            <animate
              repeatCount="indefinite"
              begin="0s"
              calcMode="discrete"
              dur="2.169s"
              values="inline; none; none; none"
              keyTimes="0; 0.983921; 0.984615; 1"
              attributeName="display"
            />
            <g transform="translate(-52.059,497.838)">
              <animateTransform
                repeatCount="indefinite"
                type="translate"
                attributeName="transform"
                dur="2.169s"
                begin="0s"
                calcMode="spline"
                values="-52.059 497.838; -52.059 497.838; 327.941 497.838; 327.941 497.838"
                keyTimes="0; 0.261539; 0.723077; 1"
                keySplines="0 0 1 1; 0 0 0 1; 0 0 1 1"
                fill="freeze"
              />
              <g transform="scale(1,1) translate(-327.941,-497.838)">
                <g id="i1-p4" transform="matrix(1,0,0,1,327.941,497.838)">
                  <path
                    fill="#a5e500"
                    d="M0,187.176C0,187.176,0,187.176,0,187.176C-20.955,187.176,-37.941,170.189,-37.941,149.235C-37.941,149.235,-37.941,-149.234,-37.941,-149.234C-37.941,-170.189,-20.955,-187.176,0,-187.176C20.955,-187.176,37.941,-170.189,37.941,-149.234C37.941,-149.234,37.941,149.235,37.941,149.235C37.941,170.189,20.955,187.176,0,187.176Z"
                  />
                </g>
              </g>
            </g>
          </g>

          {/* Right inner weight plate */}
          <g display="inline" id="i5">
            <animate
              repeatCount="indefinite"
              begin="0s"
              calcMode="discrete"
              dur="2.169s"
              values="inline; none; none; none"
              keyTimes="0; 0.983921; 0.984615; 1"
              attributeName="display"
            />
            <g transform="translate(1103,497.838)">
              <animateTransform
                repeatCount="indefinite"
                type="translate"
                attributeName="transform"
                dur="2.169s"
                begin="0s"
                calcMode="spline"
                values="1103 497.838; 1103 497.838; 703 497.838; 703 497.838"
                keyTimes="0; 0.292308; 0.753846; 1"
                keySplines="0 0 1 1; 0.046 0 0 1; 0 0 1 1"
                fill="freeze"
              />
              <g transform="scale(1,1) translate(-703,-497.838)">
                <g id="i1-p5" transform="matrix(1,0,0,1,703,497.838)">
                  <path
                    fill="#adf000"
                    d="M0,136C0,136,0,136,0,136C-18.777,136,-34,120.777,-34,102C-34,102,-34,-102,-34,-102C-34,-120.778,-18.777,-136,0,-136C18.777,-136,34,-120.778,34,-102C34,-102,34,102,34,102C34,120.777,18.777,136,0,136Z"
                  />
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}
