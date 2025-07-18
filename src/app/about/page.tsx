import NavBar from "../components/navbar";

export default function About() {
  return (
    <div className="font-sans min-h-screen bg-gray-50 text-gray-900">
      <NavBar />
      <main className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-6">About Me</h1>
        <p className="mb-4">
          Hello! I&apos;m Parker, a professional web contractor specializing in
          building small, custom websites tailored to your needs.
        </p>
        <p>
          With years of experience in web development, I focus on delivering
          high-quality, responsive, and user-friendly websites that help your
          business grow.
        </p>
      </main>
    </div>
  );
}
