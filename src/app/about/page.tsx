import Link from 'next/link';

export default function About() {
  return (
    <main>
      <header className="bg-gray-950 text-white py-24 md:py-40 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-6xl font-extrabold md:text-8xl leading-tight mb-4">About The Company</h1>
          <p className="mt-4 text-xl md:text-2xl text-gray-300">We are a team of creators, thinkers, and innovators.</p>
        </div>
      </header>

      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2">
              <h2 className="text-5xl font-bold text-blue-500 mb-6">Our Mission</h2>
              <p className="text-xl text-gray-300">Our mission is to empower businesses with transformative technology and beautiful design. We believe in the power of collaboration and strive to build long-lasting partnerships with our clients, helping them to navigate the ever-changing digital landscape and achieve their goals.</p>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              {/* Placeholder for an image */}
              <div className="bg-gray-700 h-80 md:h-96 rounded-xl shadow-lg"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-950 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center text-blue-500 mb-12">Our Story</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center">Founded in 2020, The Company started as a small team of passionate developers and designers. We saw a need for high-quality, user-centric web solutions and set out to make a difference. Today, we have grown into a thriving agency that has helped countless businesses succeed online.</p>
        </div>
      </section>

      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center text-blue-500 mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-gray-800 p-10 rounded-xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50">
              <div className="bg-gray-700 h-48 w-48 rounded-full mx-auto mb-6 shadow-lg"></div>
              <h3 className="text-3xl font-bold text-white">Jane Doe</h3>
              <p className="text-gray-300 text-lg">CEO & Founder</p>
            </div>
            <div className="text-center bg-gray-800 p-10 rounded-xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50">
              <div className="bg-gray-700 h-48 w-48 rounded-full mx-auto mb-6 shadow-lg"></div>
              <h3 className="text-3xl font-bold text-white">John Smith</h3>
              <p className="text-gray-300 text-lg">Lead Developer</p>
            </div>
            <div className="text-center bg-gray-800 p-10 rounded-xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50">
              <div className="bg-gray-700 h-48 w-48 rounded-full mx-auto mb-6 shadow-lg"></div>
              <h3 className="text-3xl font-bold text-white">Emily White</h3>
              <p className="text-gray-300 text-lg">Lead Designer</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
