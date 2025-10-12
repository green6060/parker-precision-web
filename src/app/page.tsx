"use client";

import NavBar from "./components/navbar";
import { useState, useRef, useEffect } from "react";

export default function Home() {
  const [isBookingVisible, setIsBookingVisible] = useState(false);
  const bookingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsBookingVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "100px" }
    );

    if (bookingRef.current) {
      observer.observe(bookingRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <div className="font-sans min-h-screen bg-background text-foreground">
      <NavBar />

      {/* Parallax Hero Section */}
      <main className="relative">
        {/* Parallax Background */}
        <div className="relative min-h-screen overflow-hidden">
          <div
            className="absolute inset-0 parallax-bg transform scale-110"
            style={{
              backgroundImage: "url(/tattoo_studio_bkg.jpg)",
            }}
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 hero-overlay" />

          {/* Content Section */}
          <div className="relative z-10 hero-content flex items-center justify-center px-4 md:px-8 lg:px-32">
            {/* Single Opaque Container */}
            <div className="bg-black/30 backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 border border-white/10 shadow-2xl max-w-6xl mx-auto w-full">
              <div className="text-center">
                {/* Main Pitch */}
                <div className="mb-8 md:mb-12">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-8 text-white leading-tight">
                    Tattoo Websites That
                    <span className="block rustic-accent mt-2">
                      Book More Clients
                    </span>
                  </h1>

                  <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto px-4">
                    Showcase your work. Convert visitors. Get booked.
                  </p>
                </div>

                {/* Key Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 md:mb-12">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">
                      Easy Booking
                    </h3>
                    <p className="text-gray-300 text-base leading-relaxed">
                      One-click booking that converts visitors to clients.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">
                      Mobile Ready
                    </h3>
                    <p className="text-gray-300 text-base leading-relaxed">
                      Fast-loading design for phones and tablets.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">
                      Local SEO
                    </h3>
                    <p className="text-gray-300 text-base leading-relaxed">
                      Rank higher in local tattoo searches.
                    </p>
                  </div>
                </div>

                {/* Horizontal Divider */}
                <div className="border-t border-white/20 my-12 md:my-16"></div>

                {/* Integrated Booking Section */}
                <div ref={bookingRef}>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">
                    Let&apos;s Build Your Success Story
                  </h2>
                  <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
                    Join the tattoo artists who are already getting more
                    bookings with professional websites.
                  </p>

                  {/* Embedded Booking Widget */}
                  <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10 shadow-2xl max-w-4xl mx-auto">
                    {isBookingVisible ? (
                      <iframe
                        src="https://zcal.co/dallasjamesparker/web-consult"
                        width="100%"
                        height="1000"
                        frameBorder="0"
                        title="Book a consultation with Parker Precision Web"
                        className="rounded-lg"
                        style={{
                          minHeight: "1000px",
                          border: "none",
                          overflow: "hidden",
                        }}
                        scrolling="no"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    ) : (
                      <div
                        className="rounded-lg bg-gray-800/50 flex items-center justify-center"
                        style={{ minHeight: "1000px" }}
                      >
                        <div className="text-white text-lg">
                          Loading booking widget...
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
