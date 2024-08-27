import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const ScrollRevealComponent = ({
    revealConfig = {
        duration: 1000,
        distance: "50px",
        easing: "ease-in-out",
        origin: "bottom",
        reset: true,
    },
    revealDelays = [200, 400, 600],
    classNames = ["reveal-delay-1", "reveal-delay-2", "reveal-delay-3"],
    children,
}) => {
    useEffect(() => {
        classNames.forEach((className, index) => {
            ScrollReveal().reveal(`.${className}`, {
                ...revealConfig,
                delay: revealDelays[index] || 0,
            });
        });
    }, [classNames, revealConfig, revealDelays]);

    return <>{children}</>;
};

export default ScrollRevealComponent;
