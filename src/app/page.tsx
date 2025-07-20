import NavBar from "./components/navbar";

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-white text-gray-900">
      <NavBar />

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-4 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Text */}
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-8 text-black leading-tight tracking-tight">
              <div className="text-center mb-8">
                <span className="text-white bg-gray-800 px-3 py-2 rounded-xl shadow-lg border-2 border-gray-700 transform -rotate-1 inline-block">
                  Client-Leads
                </span>
              </div>
              <div className="text-center mb-6">
                <svg
                  className="w-12 h-12 text-gray-700 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={4}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>
              <div className="text-center">
                <span className="text-black bg-white px-3 py-2 rounded-xl shadow-xl border-2 border-gray-300 transform rotate-1 inline-block">
                  Ink-on-Skin
                </span>
              </div>
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-8 text-gray-800 leading-relaxed">
              Custom websites that convert visitors into customers.
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Built specifically for small businesses who need results, not just
              pretty pages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="inline-block bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-all duration-300 font-bold text-lg border-2 border-black hover:border-gray-800 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get Your Free Consultation
              </a>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="bg-gray-100 border-2 border-gray-300 rounded-2xl aspect-square flex items-center justify-center overflow-hidden">
              <div className="text-center p-8">
                <svg
                  className="w-24 h-24 mx-auto mb-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <p className="text-gray-500 font-medium">
                  Tattoo-themed hero image
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  Replace with striking black & white artwork
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Services Showcase */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-black">
              What I Specialize In
            </h3>
            <div className="w-24 h-1 bg-black mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:border-black transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-white"
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
              <h4 className="text-xl font-bold mb-4 text-black">
                Custom Website Development
              </h4>
              <p className="text-gray-600">
                Bespoke websites tailored to your brand, goals, and target
                audience. No templates, no compromises.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:border-black transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-white"
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
              <h4 className="text-xl font-bold mb-4 text-black">
                Performance Optimization
              </h4>
              <p className="text-gray-600">
                Lightning-fast websites that rank higher in search results and
                provide exceptional user experiences.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:border-black transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-white"
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
              <h4 className="text-xl font-bold mb-4 text-black">
                Mobile-First Design
              </h4>
              <p className="text-gray-600">
                Responsive designs that look and work perfectly on every device,
                from phones to desktops.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:border-black transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-4 text-black">
                SEO & Marketing
              </h4>
              <p className="text-gray-600">
                Built-in SEO optimization and marketing strategies to help you
                get found and convert visitors.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:border-black transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-4 text-black">
                Ongoing Support
              </h4>
              <p className="text-gray-600">
                Continuous maintenance, updates, and support to keep your
                website running smoothly and securely.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:border-black transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-white"
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
              <h4 className="text-xl font-bold mb-4 text-black">
                E-commerce Solutions
              </h4>
              <p className="text-gray-600">
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
                and target audience. No cookie-cutter solutions here.
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
                Ongoing Partnership
              </h4>
              <p className="text-gray-600 mb-6">
                Your success is my success. I provide ongoing support and
                maintenance to ensure your website continues to perform.
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
