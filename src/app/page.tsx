import NavBar from "./components/navbar";
import Image from "next/image";

export default function Home() {
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

        {/* Why Choose Me Section */}
        <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 md:p-12 mb-16 shadow-lg">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-black">
              Why Choose Parker Precision Web?
            </h3>
            <div className="w-24 h-1 bg-black mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4 text-black">
                Personalized Approach
              </h4>
              <p className="text-gray-600 mb-6">
                Every project starts with understanding your business, goals,
                and target audience, for a personalized web-app that represents
                YOUR brand.
              </p>

              <h4 className="text-xl font-bold mb-4 text-black">
                Results-Driven Design
              </h4>
              <p className="text-gray-600 mb-6">
                I don&apos;t just build pretty websites - I create digital
                assets that drive conversions and grow your business.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4 text-black">
                Building Brands and Web Apps Since 2018
              </h4>
              <p className="text-gray-600 mb-6">
                With years of experience working with small businesses AND large
                corporations across Utah, I can walk you towards your business
                goals.
              </p>

              <h4 className="text-xl font-bold mb-4 text-black">
                Transparent Process
              </h4>
              <p className="text-gray-600 mb-6">
                Clear communication, regular updates, and no hidden fees.
                You&apos;ll always know exactly what&apos;s happening with your
                project.
              </p>
            </div>
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
