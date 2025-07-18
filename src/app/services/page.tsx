import NavBar from "../components/navbar";

export default function Services() {
  return (
    <div className="font-sans min-h-screen bg-gray-50 text-gray-900">
      <NavBar />
      <main className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-6">Services</h1>
        <p className="mb-4">
          I offer a range of web development services tailored to small
          businesses and individuals:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Custom website design and development</li>
          <li>Responsive and mobile-friendly layouts</li>
          <li>Website maintenance and updates</li>
          <li>SEO optimization</li>
          <li>Performance improvements</li>
        </ul>
      </main>
    </div>
  );
}
