import { useEffect, useRef } from 'react';

const ZoomUpObserver = ({ children }) => {
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    } else {
                        entry.target.classList.remove('active');
                    }
                });
            },
            { threshold: 0.15 } 
        );

        if (elementRef.current) observer.observe(elementRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={elementRef} className="zoom-item">
            {children}
        </div>
    );
};

export default ZoomUpObserver;