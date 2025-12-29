import { useEffect, useRef } from 'react';

const Autoshow = ({ children, index }) => {
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Add class when it enters view
                        entry.target.classList.add('active');
                    } else {
                        // REMOVE class when it leaves view so it can animate again
                        entry.target.classList.remove('active');
                    }
                });
            },
            {
                threshold: 0.10 // Triggers when 10% of the element is visible
            }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={elementRef} className="scroll-flip"
            style={{ transitionDelay: `${index * 10}s` }}>
            {children}
        </div>
    );
};

export default Autoshow;