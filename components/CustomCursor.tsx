'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef, useEffect } from 'react';

gsap.registerPlugin(useGSAP);

const NUM_TRAILS = 5; // number of trail dots

const CustomCursor = () => {
    const svgRef = useRef<SVGSVGElement>(null);
    const trailsRef = useRef<Array<SVGSVGElement | null>>([]);

    useEffect(() => {
        if (window.innerWidth < 768) return; // disable on mobile

        const mainCursor = svgRef.current;
        const trails = trailsRef.current.filter(
            (el) => el instanceof SVGCircleElement,
        ) as SVGCircleElement[];

        const positions = Array(NUM_TRAILS).fill({ x: 0, y: 0 });

        const moveCursor = (e: MouseEvent) => {
            const { clientX: x, clientY: y } = e;

            // Move main cursor immediately (with gsap smooth tween)
            if (mainCursor) {
                gsap.to(mainCursor, {
                    x,
                    y,
                    duration: 0.15,
                    ease: 'power2.out',
                    opacity: 1,
                    overwrite: true,
                });
            }

            // Update trail positions
            positions.unshift({ x, y });
            positions.pop();

            trails.forEach((trail, index) => {
                gsap.to(trail, {
                    x: positions[index + 1]?.x || x,
                    y: positions[index + 1]?.y || y,
                    duration: 0.3,
                    ease: 'power2.out',
                    opacity: 0.6 - index * 0.1, // fade out trail
                    overwrite: true,
                });
            });
        };

        window.addEventListener('mousemove', moveCursor);
        return () => {
            window.removeEventListener('mousemove', moveCursor);
        };
    }, []);

    return (
        <>
            {/* Main Cursor SVG */}
            <svg
                width="27"
                height="30"
                viewBox="0 0 27 30"
                className="fixed top-0 left-0 z-[50] pointer-events-none -translate-x-1/2 -translate-y-1/2"
                fill="none"
                id="cursor"
                strokeWidth="2"
                opacity="1"
                xmlns="http://www.w3.org/2000/svg"
                ref={svgRef}
            >
                <path
                    d="M20.0995 11.0797L3.72518 1.13204C2.28687 0.258253 0.478228 1.44326 0.704999 3.11083L3.28667 22.0953C3.58333 24.2768 7.33319 24.6415 8.3792 22.7043C9.5038 20.6215 10.8639 18.7382 12.43 17.7122C13.996 16.6861 16.2658 16.1911 18.6244 15.9918C20.8181 15.8063 21.9811 12.2227 20.0995 11.0797Z"
                    className="fill-foreground stroke-background/50"
                />
            </svg>

            {/* Trail dots */}
            {[...Array(NUM_TRAILS)].map((_, i) => (
                <svg
                    key={i}
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    className="fixed top-0 left-0 z-[45] pointer-events-none -translate-x-1/2 -translate-y-1/2"
                    fill="rgba(255,255,255,0.6)"
                    xmlns="http://www.w3.org/2000/svg"
                    ref={(el) => {
                        trailsRef.current[i] = el;
                    }}
                    style={{ opacity: 0.6 - i * 0.1 }}
                >
                    <circle cx="5" cy="5" r="4" fill="currentColor" />
                </svg>
            ))}
        </>
    );
};

export default CustomCursor;
