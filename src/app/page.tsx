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
    <div className="font-sans min-h-screen bg-white text-gray-900">
      <NavBar />

      {/* Hero Section */}
      <main className="mx-auto px-8 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Text */}
          <div className="text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-10 text-black leading-tight tracking-tight">
              <div className="text-left mb-6">
                <span className="text-black bg-white px-4 py-3 rounded-xl shadow-xl border-2 border-gray-300 transform -rotate-1 inline-block whitespace-nowrap">
                  Turn Client-Leads...
                </span>
              </div>
              <div className="text-left">
                <span className="text-white bg-gray-800 px-4 py-3 rounded-xl shadow-lg border-2 border-gray-700 transform rotate-1 inline-block whitespace-nowrap">
                  ... Into Ink-on-Skin
                </span>
              </div>
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-10 text-gray-800 leading-relaxed">
              Custom websites that convert{" "}
              <span className="underline decoration-gray-700 decoration-2">
                leads
              </span>{" "}
              into{" "}
              <span className="relative inline-block px-4 py-3 font-bold text-gray-900">
                <div className="absolute inset-0 border-4 border-gray-700 rounded-full transform rotate-1 scale-105 opacity-80 translate-x-0.5 translate-y-0.5"></div>
                <div className="absolute inset-0 border-4 border-gray-700 rounded-full transform -rotate-2 scale-95 opacity-60 -translate-x-1 -translate-y-0.5"></div>
                <div className="absolute inset-0 border-4 border-gray-700 rounded-full transform rotate-3 scale-110 opacity-40 translate-x-1 -translate-y-1"></div>
                <div className="absolute inset-0 border-4 border-gray-700 rounded-full transform -rotate-1 scale-100 opacity-70 translate-x-0.5 translate-y-1"></div>
                <div className="absolute inset-0 border-4 border-gray-700 rounded-full transform rotate-2 scale-105 opacity-50 -translate-x-0.5 translate-y-0.5"></div>
                <span className="relative z-10">active-clients</span>
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
              Built specifically for small businesses who need results, not just
              pretty pages.
            </p>
          </div>

          {/* Right Column - Image */}
          <div className="relative w-full h-full">
            <Image
              src="/skeleton_developer.jpeg"
              alt="Skeleton developer illustration"
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
            href="/contact"
            className="inline-block bg-black text-white px-16 py-8 rounded-xl hover:bg-gray-800 transition-all duration-300 font-bold text-2xl border-2 border-black hover:border-gray-800 shadow-xl hover:shadow-2xl transform hover:-translate-y-2"
          >
            Book a Free Consultation
          </a>
        </div>

        {/* Services Showcase */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-6 text-black">
              What I Specialize In
            </h3>
            <div className="w-32 h-2 bg-black mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-10 rounded-2xl border border-gray-200 hover:border-black transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="w-20 h-20 bg-black rounded-xl flex items-center justify-center mb-8">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h4 className="text-2xl font-bold mb-6 text-black">
                Custom Website Development
              </h4>
              <p className="text-lg text-gray-600">
                Bespoke websites tailored to your brand, goals, and target
                audience.
              </p>
            </div>

            <div className="bg-gray-50 p-10 rounded-2xl border border-gray-200 hover:border-black transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="w-20 h-20 bg-black rounded-xl flex items-center justify-center mb-8">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h4 className="text-2xl font-bold mb-6 text-black">
                Performance Optimization
              </h4>
              <p className="text-lg text-gray-600">
                Lightning-fast websites that rank higher in search results and
                move website visitors from &quot;visiting&quot; to
                &quot;booking&quot;
              </p>
            </div>

            <div className="bg-gray-50 p-10 rounded-2xl border border-gray-200 hover:border-black transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="w-20 h-20 bg-black rounded-xl flex items-center justify-center mb-8">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h4 className="text-2xl font-bold mb-6 text-black">
                Mobile-First Design
              </h4>
              <p className="text-lg text-gray-600">
                Responsive designs that look and work perfectly on every device,
                from phones to desktops.
              </p>
            </div>

            <div className="bg-gray-50 p-10 rounded-2xl border border-gray-200 hover:border-black transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="w-20 h-20 bg-black rounded-xl flex items-center justify-center mb-8">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </svg>
              </div>
              <h4 className="text-2xl font-bold mb-6 text-black">
                E-commerce Solutions
              </h4>
              <p className="text-lg text-gray-600">
                Complete online store setups with secure payment processing and
                inventory management.
              </p>
            </div>
          </div>
        </div>

        {/* Featured Work Carousel */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-6 text-black">
              Featured Work
            </h3>
            <div className="w-32 h-2 bg-black mx-auto rounded-full"></div>
          </div>

          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            {/* Carousel Container */}
            <div
              className="flex transition-transform duration-700 ease-in-out"
              id="featured-carousel"
            >
              {/* Client 1 - MX */}
              <div className="w-full flex-shrink-0">
                <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white p-12 md:p-16">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <h4 className="text-3xl font-bold mb-6">
                        Financial Technology Platform
                      </h4>
                      <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                        Developed and maintained critical components of
                        MX&apos;s financial data aggregation platform, working
                        on user-facing dashboards and API integrations.
                        Contributed to improving platform performance and user
                        experience for millions of users.
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <span className="bg-white text-blue-900 px-4 py-2 rounded-full text-sm font-semibold">
                          React/TypeScript
                        </span>
                        <span className="bg-white text-blue-900 px-4 py-2 rounded-full text-sm font-semibold">
                          API Development
                        </span>
                        <span className="bg-white text-blue-900 px-4 py-2 rounded-full text-sm font-semibold">
                          Performance Optimization
                        </span>
                      </div>
                    </div>
                    <div className="bg-blue-700 rounded-2xl p-8 text-center">
                      <div className="text-4xl font-bold text-white mb-4">
                        MX Technologies
                      </div>
                      <h5 className="text-2xl font-bold mb-2">
                        Money Experience
                      </h5>
                      <p className="text-blue-300 mb-4">Lehi, UT</p>
                      <a
                        href="https://www.linkedin.com/in/parkerfam/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-white text-blue-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-50 transition-colors duration-300"
                      >
                        View on LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Client 2 - Domo */}
              <div className="w-full flex-shrink-0">
                <div className="bg-gradient-to-br from-purple-900 to-purple-800 text-white p-12 md:p-16">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <h4 className="text-3xl font-bold mb-6">
                        Business Intelligence Dashboard
                      </h4>
                      <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                        Built interactive data visualization components and
                        dashboard features for Domo&apos;s business intelligence
                        platform. Implemented real-time data streaming and
                        custom chart configurations for enterprise clients.
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <span className="bg-white text-purple-900 px-4 py-2 rounded-full text-sm font-semibold">
                          Data Visualization
                        </span>
                        <span className="bg-white text-purple-900 px-4 py-2 rounded-full text-sm font-semibold">
                          Real-time Updates
                        </span>
                        <span className="bg-white text-purple-900 px-4 py-2 rounded-full text-sm font-semibold">
                          Enterprise UI/UX
                        </span>
                      </div>
                    </div>
                    <div className="bg-purple-700 rounded-2xl p-8 text-center">
                      <div className="text-4xl font-bold text-white mb-4">
                        DOMO
                      </div>
                      <h5 className="text-2xl font-bold mb-2">
                        Business Intelligence
                      </h5>
                      <p className="text-purple-300 mb-4">American Fork, UT</p>
                      <a
                        href="https://www.linkedin.com/in/parkerfam/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-white text-purple-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-purple-50 transition-colors duration-300"
                      >
                        View on LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Client 3 - Software Technology Group */}
              <div className="w-full flex-shrink-0">
                <div className="bg-gradient-to-br from-green-900 to-green-800 text-white p-12 md:p-16">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <h4 className="text-3xl font-bold mb-6">
                        Custom Software Solutions
                      </h4>
                      <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                        Delivered custom software solutions for various clients
                        through STG, including web applications, mobile
                        interfaces, and system integrations. Collaborated with
                        cross-functional teams to deliver high-quality, scalable
                        solutions.
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <span className="bg-white text-green-900 px-4 py-2 rounded-full text-sm font-semibold">
                          Full-Stack Development
                        </span>
                        <span className="bg-white text-green-900 px-4 py-2 rounded-full text-sm font-semibold">
                          System Integration
                        </span>
                        <span className="bg-white text-green-900 px-4 py-2 rounded-full text-sm font-semibold">
                          Agile Development
                        </span>
                      </div>
                    </div>
                    <div className="bg-green-700 rounded-2xl p-8 text-center">
                      <div className="text-3xl font-bold text-white mb-4">
                        STG
                      </div>
                      <h5 className="text-2xl font-bold mb-2">
                        Software Technology Group
                      </h5>
                      <p className="text-green-300 mb-4">Salt Lake City, UT</p>
                      <a
                        href="https://www.linkedin.com/in/parkerfam/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-white text-green-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-50 transition-colors duration-300"
                      >
                        View on LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
              <button
                className="w-3 h-3 rounded-full bg-white bg-opacity-50 hover:bg-opacity-100 transition-all duration-300 carousel-dot active"
                data-slide="0"
              ></button>
              <button
                className="w-3 h-3 rounded-full bg-white bg-opacity-50 hover:bg-opacity-100 transition-all duration-300 carousel-dot"
                data-slide="1"
              ></button>
              <button
                className="w-3 h-3 rounded-full bg-white bg-opacity-50 hover:bg-opacity-100 transition-all duration-300 carousel-dot"
                data-slide="2"
              ></button>
            </div>

            {/* Navigation Arrows */}
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-70 hover:bg-opacity-90 text-white p-4 rounded-full transition-all duration-300 carousel-prev z-10"
              id="carousel-prev"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-70 hover:bg-opacity-90 text-white p-4 rounded-full transition-all duration-300 carousel-next z-10"
              id="carousel-next"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-6 text-black">
            Ready to Transform Your Online Presence?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how a custom website can help you achieve your
            business goals and stand out from the competition.
          </p>
          <a
            href="/contact"
            className="inline-block bg-black text-white px-10 py-5 rounded-xl hover:bg-gray-800 transition-all duration-300 font-bold text-xl border-2 border-black hover:border-gray-800 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Start Your Project Today
          </a>
        </div>
      </main>

      <footer className="text-center py-12 bg-black text-white">
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
