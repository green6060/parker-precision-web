"use client";

import NavBar from "./components/navbar";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Carousel functionality
    const carousel = document.getElementById("featured-carousel");
    const dots = document.querySelectorAll(".carousel-dot");
    const prevBtn = document.getElementById("carousel-prev");
    const nextBtn = document.getElementById("carousel-next");

    let currentSlide = 0;
    const totalSlides = 3;

    function updateCarousel() {
      if (carousel) {
        carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
      }

      // Update dots
      dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentSlide);
        dot.classList.toggle("bg-opacity-100", index === currentSlide);
        dot.classList.toggle("bg-opacity-50", index !== currentSlide);
      });
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % totalSlides;
      updateCarousel();
    }

    function prevSlide() {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      updateCarousel();
    }

    // Event listeners
    if (prevBtn) prevBtn.addEventListener("click", prevSlide);
    if (nextBtn) nextBtn.addEventListener("click", nextSlide);

    // Cleanup
    return () => {
      if (prevBtn) prevBtn.removeEventListener("click", prevSlide);
      if (nextBtn) nextBtn.removeEventListener("click", nextSlide);
    };
  }, []);

  return (
    <div className="font-sans min-h-screen bg-background text-foreground">
      <NavBar />

      {/* Hero Section */}
      <main className="mx-auto px-4 md:px-8 lg:px-32 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Text */}
          <div className="text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-10 text-white leading-tight tracking-tight">
              <div className="text-left mb-6">
                <span className="text-white bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-3 rounded-xl shadow-2xl border border-purple-500/30 transform -rotate-1 inline-block whitespace-nowrap glow">
                  Turn Client-Leads...
                </span>
              </div>
              <div className="text-left">
                <span className="text-black bg-gradient-to-r from-pink-500 to-orange-400 px-4 py-3 rounded-xl shadow-2xl border border-pink-400/30 transform rotate-1 inline-block whitespace-nowrap glow-accent">
                  ... Into Ink-on-Skin
                </span>
              </div>
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-10 text-gray-200 leading-relaxed">
              Custom websites that convert{" "}
              <span className="underline decoration-purple-500 decoration-2">
                leads
              </span>{" "}
              into{" "}
              <span className="relative inline-block px-4 py-3 font-bold text-white">
                <div className="absolute inset-0 border-4 border-purple-500 rounded-full transform rotate-1 scale-105 opacity-80 translate-x-0.5 translate-y-0.5"></div>
                <div className="absolute inset-0 border-4 border-pink-500 rounded-full transform -rotate-2 scale-95 opacity-60 -translate-x-1 -translate-y-0.5"></div>
                <div className="absolute inset-0 border-4 border-purple-400 rounded-full transform rotate-3 scale-110 opacity-40 translate-x-1 -translate-y-1"></div>
                <div className="absolute inset-0 border-4 border-pink-400 rounded-full transform -rotate-1 scale-100 opacity-70 translate-x-0.5 translate-y-1"></div>
                <div className="absolute inset-0 border-4 border-purple-600 rounded-full transform rotate-2 scale-105 opacity-50 -translate-x-0.5 translate-y-0.5"></div>
                <span className="relative z-10">active-clients</span>
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 mb-10 leading-relaxed">
              Built specifically for small businesses who need results, not just
              pretty pages.
            </p>
          </div>

          {/* Right Column - Image */}
          <div className="relative w-full h-full">
            <Image
              src="/skeleton-developer-hero-rmv-bkgd.png"
              alt="Skeleton developer hero illustration"
              width={1000}
              height={1500}
              className="w-full h-full object-cover object-center"
              priority
            />
          </div>
        </div>

        {/* Centered CTA Button */}
        <div className="text-center mb-20">
          <a
            href="https://zcal.co/dallasjamesparker/web-consult"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-16 py-8 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 font-bold text-2xl shadow-2xl hover:shadow-purple-500/25 transform hover:-translate-y-2 glow"
          >
            Book a Free Consultation
          </a>
        </div>
      </main>

      <footer className="text-center py-12 bg-zinc-900/50 backdrop-blur-sm text-white border-t border-zinc-800">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-lg mb-4">
            &copy; {new Date().getFullYear()} Parker Precision Web. All rights
            reserved.
          </p>
          <p className="text-gray-400">
            Custom web solutions for ambitious businesses
          </p>
        </div>
      </footer>
    </div>
  );
}
