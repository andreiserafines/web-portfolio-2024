import React, { useState, useEffect } from 'react';
import { TbArrowBadgeUpFilled } from "react-icons/tb";
import './ScrollUpButton.css'; // Ensure the CSS file is in the same directory

const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to check scroll position and show/hide button
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      className={`scroll-up-btn ${isVisible ? 'show' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
    <TbArrowBadgeUpFilled size={40} />
    </button>
  );
};

export default ScrollUpButton;
