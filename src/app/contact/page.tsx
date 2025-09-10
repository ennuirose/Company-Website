export default function Contact() {
  return (
    <main>
      <header className="bg-gray-950 py-24 text-center text-white md:py-40">
        <div className="container mx-auto px-6">
          <h1 className="mb-4 text-6xl leading-tight font-extrabold md:text-8xl">Contact Us</h1>
          <p className="mt-4 text-xl text-gray-300 md:text-2xl">We'd love to hear from you!</p>
        </div>
      </header>

      <section className="bg-gray-900 py-24 text-white">
        <div className="container mx-auto px-6">
          <div className="md:flex md:justify-between">
            <div className="md:w-1/2">
              <h2 className="mb-8 text-5xl font-bold text-blue-500">Send us a message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="mb-2 block text-lg font-bold text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full appearance-none rounded-lg border border-gray-700 bg-gray-800 px-5 py-4 leading-tight text-white shadow-xl transition duration-300 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-lg font-bold text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full appearance-none rounded-lg border border-gray-700 bg-gray-800 px-5 py-4 leading-tight text-white shadow-xl transition duration-300 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-lg font-bold text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full appearance-none rounded-lg border border-gray-700 bg-gray-800 px-5 py-4 leading-tight text-white shadow-xl transition duration-300 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="Your Message"
                  >
                  </textarea>
                </div>
                <button
                  type="submit"
                  className="rounded-lg bg-blue-600 px-8 py-4 font-bold text-white shadow-xl transition duration-300 hover:bg-blue-700 hover:shadow-blue-500/50 focus:outline-none"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="mt-8 md:mt-0 md:w-1/2 md:pl-12">
              <h2 className="mb-8 text-5xl font-bold text-blue-500">Our Contact Information</h2>
              <p className="mb-4 text-xl text-gray-300">
                <strong>Address:</strong>
                123 Main Street, Anytown, USA 12345
              </p>
              <p className="mb-4 text-xl text-gray-300">
                <strong>Phone:</strong>
                +1 (123) 456-7890
              </p>
              <p className="mb-4 text-xl text-gray-300">
                <strong>Email:</strong>
                info@thecompany.com
              </p>
              {/* Placeholder for a map */}
              <div className="mt-8 h-80 rounded-xl bg-gray-700 shadow-lg md:h-96"></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
