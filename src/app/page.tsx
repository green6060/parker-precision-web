import NavBar from "./components/navbar";

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-gray-50 text-gray-900">
      <NavBar />
      <main className="max-w-4xl mx-auto px-4 pt-[96px] pb-16 flex flex-col items-center text-center">
        <h1 className="text-4xl font-extrabold mb-4">Parker Precision Web</h1>
        <p className="text-lg mb-8">
          Professional web contractor specializing in creating small, custom
          websites for clients.
        </p>
        <a
          href="/contact"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
        >
          Get in Touch
        </a>
      </main>
      <footer className="text-center py-8 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Parker Precision Web. All rights
        reserved.
      </footer>
    </div>
  );
}
