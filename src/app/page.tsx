// Removed import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Home() {
  // Removed const t = useTranslations('Index');

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gray-950 text-white py-24 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-extrabold md:text-7xl leading-tight mb-4">Innovative Solutions for a Digital World</h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">We help businesses thrive by creating beautiful, fast, and effective web experiences.</p>
          <Link href="/contact" className="mt-10 inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105">
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-500">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-xl shadow-xl text-center transition-all duration-300 hover:scale-105">
              <h3 className="text-2xl font-bold mb-4 text-white">Web Development</h3>
              <p className="text-gray-300">We build fast, secure, and scalable web applications tailored to your needs.</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-xl shadow-xl text-center transition-all duration-300 hover:scale-105">
              <h3 className="text-2xl font-bold mb-4 text-white">UI/UX Design</h3>
              <p className="text-gray-300">Our team designs intuitive and engaging user interfaces that your users will love.</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-xl shadow-xl text-center transition-all duration-300 hover:scale-105">
              <h3 className="text-2xl font-bold mb-4 text-white">Digital Strategy</h3>
              <p className="text-gray-300">We help you define your digital strategy to reach your business goals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-950 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-500">Why Choose Us?</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              {/* Placeholder for an image */}
              <div className="bg-gray-700 h-64 rounded-lg shadow-lg"></div>
            </div>
            <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
              <p className="text-lg text-gray-300">With years of experience and a passion for technology, we are dedicated to delivering high-quality solutions that drive results. We work closely with our clients to understand their needs and provide them with the best possible service.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-500">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-8 rounded-xl shadow-xl">
              <p className="text-lg italic mb-4 text-gray-300">"The Company transformed our online presence. Their team is highly skilled and a pleasure to work with!"</p>
              <p className="font-bold text-white">- Client A, CEO of Tech Solutions</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-xl shadow-xl">
              <p className="text-lg italic mb-4 text-gray-300">"Outstanding service and exceptional results. We highly recommend The Company for any web development needs."</p>
              <p className="font-bold text-white">- Client B, Marketing Director</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
