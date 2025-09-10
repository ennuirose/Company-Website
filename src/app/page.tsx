// Removed import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Home() {
  // Removed const t = useTranslations('Index');

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gray-950 py-24 text-white md:py-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="mb-4 text-5xl leading-tight font-extrabold md:text-7xl">Innovative Solutions for a Digital World</h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-300 md:text-xl">We help businesses thrive by creating beautiful, fast, and effective web experiences.</p>
          <Link href="/contact" className="mt-10 inline-block transform rounded-lg bg-blue-600 px-10 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-blue-700">
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-900 py-20 text-white">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-center text-4xl font-bold text-blue-500">Our Services</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-gray-800 p-8 text-center shadow-xl transition-all duration-300 hover:scale-105">
              <h3 className="mb-4 text-2xl font-bold text-white">Web Development</h3>
              <p className="text-gray-300">We build fast, secure, and scalable web applications tailored to your needs.</p>
            </div>
            <div className="rounded-xl bg-gray-800 p-8 text-center shadow-xl transition-all duration-300 hover:scale-105">
              <h3 className="mb-4 text-2xl font-bold text-white">UI/UX Design</h3>
              <p className="text-gray-300">Our team designs intuitive and engaging user interfaces that your users will love.</p>
            </div>
            <div className="rounded-xl bg-gray-800 p-8 text-center shadow-xl transition-all duration-300 hover:scale-105">
              <h3 className="mb-4 text-2xl font-bold text-white">Digital Strategy</h3>
              <p className="text-gray-300">We help you define your digital strategy to reach your business goals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-950 py-20 text-white">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-center text-4xl font-bold text-blue-500">Why Choose Us?</h2>
          <div className="flex flex-col items-center md:flex-row">
            <div className="md:w-1/2">
              {/* Placeholder for an image */}
              <div className="h-64 rounded-lg bg-gray-700 shadow-lg"></div>
            </div>
            <div className="mt-8 md:mt-0 md:w-1/2 md:pl-12">
              <p className="text-lg text-gray-300">With years of experience and a passion for technology, we are dedicated to delivering high-quality solutions that drive results. We work closely with our clients to understand their needs and provide them with the best possible service.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-center text-4xl font-bold text-blue-500">What Our Clients Say</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-xl bg-gray-800 p-8 shadow-xl">
              <p className="mb-4 text-lg text-gray-300 italic">"The Company transformed our online presence. Their team is highly skilled and a pleasure to work with!"</p>
              <p className="font-bold text-white">- Client A, CEO of Tech Solutions</p>
            </div>
            <div className="rounded-xl bg-gray-800 p-8 shadow-xl">
              <p className="mb-4 text-lg text-gray-300 italic">"Outstanding service and exceptional results. We highly recommend The Company for any web development needs."</p>
              <p className="font-bold text-white">- Client B, Marketing Director</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
