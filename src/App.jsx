import "./App.css";
import React, { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Designs from "./others/Designs";
import ScrollUpButton from "./others/ScrollUpButton";


function App() {
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach((anchor) => {
      anchor.addEventListener("click", handleSmoothScroll);
    });

    // Cleanup event listeners on component unmount
    return () => {
      anchors.forEach((anchor) => {
        anchor.removeEventListener("click", handleSmoothScroll);
      });
    };
  }, []);


  return (
    <div className="min-h-screen bg-slate-900">
      <div className="relative max-w-full mx-auto overflow-hidden">
        <Designs className="absolute inset-0 w-full h-full" />
        <Header className="sticky top-0 z-10" />
        <Hero />
        <About />
        <Skills />
        <Footer />
        <ScrollUpButton />
      </div>
    </div>
  );
}

export default App;
