import { useEffect, useRef } from "react";

const ScrollCard = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("open");
          observer.unobserve(entry.target); // open ONCE
        }
      },
      { threshold: 0.25 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="scroll-open-card hover:transform-3d hover:scale-105 transition-all duration-900">
      {children}
    </div>
  );
};

export default ScrollCard;
