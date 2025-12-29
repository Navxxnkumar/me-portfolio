import { useEffect, useRef, useState } from "react";

export const SkillItem = ({ children, delay = "0s" }) => {
    const ref = useRef(null);
    const [revealed, setRevealed] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setRevealed(true);
                    observer.unobserve(entry.target); // 🔥 STOP FOREVER
                }
            },
            {
                threshold: 0.2,
                rootMargin: "0px 0px -80px 0px",
            }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            style={{ transitionDelay: delay }}
            className={`
        will-change-transform
        transition-all
        ease-[cubic-bezier(0.22,1,0.36,1)]
        duration-700
        ${revealed
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-16 scale-95"}
      `}
        >
            {children}
        </div>
    );
};
