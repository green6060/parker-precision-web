import NavBar from "./components/navbar";

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-background text-foreground">
      <NavBar />

      {/* Parallax Hero Section */}
      <main className="relative">
        {/* Parallax Background */}
        <div className="relative h-screen overflow-hidden">
          <div
            className="absolute inset-0 parallax-bg transform scale-110"
            style={{
              backgroundImage: "url(/tattoo_studio_bkg.jpg)",
            }}
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 hero-overlay" />
        </div>
      </main>
    </div>
  );
}
