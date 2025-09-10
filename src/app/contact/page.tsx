import Link from 'next/link';

export default function Contact() {
  return (
    <main>
      <header className="bg-gray-950 text-white py-24 md:py-40 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-6xl font-extrabold md:text-8xl leading-tight mb-4">Contact Us</h1>
          <p className="mt-4 text-xl md:text-2xl text-gray-300">We'd love to hear from you!</p>
        </div>
      </header>

      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="md:flex md:justify-between">
            <div className="md:w-1/2">
              <h2 className="text-5xl font-bold text-blue-500 mb-8">Send us a message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 text-lg font-bold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="shadow-xl appearance-none border border-gray-700 rounded-lg w-full py-4 px-5 bg-gray-800 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 text-lg font-bold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="shadow-xl appearance-none border border-gray-700 rounded-lg w-full py-4 px-5 bg-gray-800 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-300 text-lg font-bold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="shadow-xl appearance-none border border-gray-700 rounded-lg w-full py-4 px-5 bg-gray-800 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg shadow-xl focus:outline-none focus:shadow-outline transition duration-300 hover:shadow-blue-500/50"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
              <h2 className="text-5xl font-bold text-blue-500 mb-8">Our Contact Information</h2>
              <p className="text-xl text-gray-300 mb-4">
                <strong>Address:</strong> 123 Main Street, Anytown, USA 12345
              </p>
              <p className="text-xl text-gray-300 mb-4">
                <strong>Phone:</strong> +1 (123) 456-7890
              </p>
              <p className="text-xl text-gray-300 mb-4">
                <strong>Email:</strong> info@thecompany.com
              </p>
              {/* Placeholder for a map */}
              <div className="bg-gray-700 h-80 md:h-96 rounded-xl shadow-lg mt-8"></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
