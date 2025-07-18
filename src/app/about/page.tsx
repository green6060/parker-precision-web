import NavBar from "../components/navbar";

export default function About() {
  return (
    <div className="font-sans min-h-screen bg-gray-50 text-gray-900">
      <NavBar />
      <main className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-6">About Me</h1>
        <p className="mb-4">
          Hello! I&apos;m Dallas. I&apos;ve been into Web Development since
          about 2017, and I&apos;m only JUST now getting around to create a
          portfolio of my work!
        </p>
      </main>
    </div>
  );
}
