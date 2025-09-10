export default function About() {
  return (
    <main>
      <header className="bg-gray-950 py-24 text-center text-white md:py-40">
        <div className="container mx-auto px-6">
          <h1 className="mb-4 text-6xl leading-tight font-extrabold md:text-8xl">About The Company</h1>
          <p className="mt-4 text-xl text-gray-300 md:text-2xl">We are a team of creators, thinkers, and innovators.</p>
        </div>
      </header>

      <section className="bg-gray-900 py-24 text-white">
        <div className="container mx-auto px-6">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2">
              <h2 className="mb-6 text-5xl font-bold text-blue-500">Our Mission</h2>
              <p className="text-xl text-gray-300">Our mission is to empower businesses with transformative technology and beautiful design. We believe in the power of collaboration and strive to build long-lasting partnerships with our clients, helping them to navigate the ever-changing digital landscape and achieve their goals.</p>
            </div>
            <div className="mt-8 md:mt-0 md:w-1/2">
              {/* Placeholder for an image */}
              <div className="h-80 rounded-xl bg-gray-700 shadow-lg md:h-96"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-950 py-24 text-white">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-center text-5xl font-bold text-blue-500">Our Story</h2>
          <p className="mx-auto max-w-3xl text-center text-xl text-gray-300">Founded in 2020, The Company started as a small team of passionate developers and designers. We saw a need for high-quality, user-centric web solutions and set out to make a difference. Today, we have grown into a thriving agency that has helped countless businesses succeed online.</p>
        </div>
      </section>

      <section className="bg-gray-900 py-24 text-white">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-center text-5xl font-bold text-blue-500">Our Team</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-gray-800 p-10 text-center shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50">
              <div className="mx-auto mb-6 h-48 w-48 rounded-full bg-gray-700 shadow-lg"></div>
              <h3 className="text-3xl font-bold text-white">Jane Doe</h3>
              <p className="text-lg text-gray-300">CEO & Founder</p>
            </div>
            <div className="rounded-xl bg-gray-800 p-10 text-center shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50">
              <div className="mx-auto mb-6 h-48 w-48 rounded-full bg-gray-700 shadow-lg"></div>
              <h3 className="text-3xl font-bold text-white">John Smith</h3>
              <p className="text-lg text-gray-300">Lead Developer</p>
            </div>
            <div className="rounded-xl bg-gray-800 p-10 text-center shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50">
              <div className="mx-auto mb-6 h-48 w-48 rounded-full bg-gray-700 shadow-lg"></div>
              <h3 className="text-3xl font-bold text-white">Emily White</h3>
              <p className="text-lg text-gray-300">Lead Designer</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
