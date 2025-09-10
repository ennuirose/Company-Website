export default function Services() {
  return (
    <main>
      <header className="bg-gray-950 py-24 text-center text-white md:py-40">
        <div className="container mx-auto px-6">
          <h1 className="mb-4 text-6xl leading-tight font-extrabold md:text-8xl">Our Services</h1>
          <p className="mt-4 text-xl text-gray-300 md:text-2xl">We offer a wide range of services to help you achieve your business goals.</p>
        </div>
      </header>

      <section className="bg-gray-900 py-24 text-white">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-center text-5xl font-bold text-blue-500">Our Services</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl bg-gray-800 p-10 text-center shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50">
              <svg className="mx-auto mb-4 h-16 w-16 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
              <h3 className="mb-4 text-3xl font-bold text-white">Web Development</h3>
              <p className="text-lg text-gray-300">We build fast, secure, and scalable web applications tailored to your needs.</p>
            </div>
            <div className="rounded-xl bg-gray-800 p-10 text-center shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50">
              <svg className="mx-auto mb-4 h-16 w-16 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v14m-7 0h14a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              <h3 className="mb-4 text-3xl font-bold text-white">UI/UX Design</h3>
              <p className="text-lg text-gray-300">Our team designs intuitive and engaging user interfaces that your users will love.</p>
            </div>
            <div className="rounded-xl bg-gray-800 p-10 text-center shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50">
              <svg className="mx-auto mb-4 h-16 w-16 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
              <h3 className="mb-4 text-3xl font-bold text-white">Digital Strategy</h3>
              <p className="text-lg text-gray-300">We help you define your digital strategy to reach your business goals.</p>
            </div>
            <div className="rounded-xl bg-gray-800 p-10 text-center shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50">
              <svg className="mx-auto mb-4 h-16 w-16 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
              <h3 className="mb-4 text-3xl font-bold text-white">E-commerce Solutions</h3>
              <p className="text-lg text-gray-300">We create powerful e-commerce platforms that drive sales and growth.</p>
            </div>
            <div className="rounded-xl bg-gray-800 p-10 text-center shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50">
              <svg className="mx-auto mb-4 h-16 w-16 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
              <h3 className="mb-4 text-3xl font-bold text-white">Mobile App Development</h3>
              <p className="text-lg text-gray-300">We build native and cross-platform mobile apps for iOS and Android.</p>
            </div>
            <div className="rounded-xl bg-gray-800 p-10 text-center shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50">
              <svg className="mx-auto mb-4 h-16 w-16 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7"></path></svg>
              <h3 className="mb-4 text-3xl font-bold text-white">Cloud & DevOps</h3>
              <p className="text-lg text-gray-300">We help you deploy, manage, and scale your applications in the cloud.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-950 py-24 text-white">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-center text-5xl font-bold text-blue-500">Our Process</h2>
          <div className="flex flex-col items-center justify-center text-center md:flex-row">
            <div className="m-4 rounded-xl bg-gray-800 p-8 shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50">
              <h3 className="mb-4 text-3xl font-bold text-white">1. Discovery</h3>
              <p className="text-lg text-gray-300">We start by understanding your business and your goals.</p>
            </div>
            <div className="m-4 rounded-xl bg-gray-800 p-8 shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50">
              <h3 className="mb-4 text-3xl font-bold text-white">2. Design</h3>
              <p className="text-lg text-gray-300">We create a beautiful and intuitive design for your project.</p>
            </div>
            <div className="m-4 rounded-xl bg-gray-800 p-8 shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50">
              <h3 className="mb-4 text-3xl font-bold text-white">3. Development</h3>
              <p className="text-lg text-gray-300">We build your project with the latest technologies.</p>
            </div>
            <div className="m-4 rounded-xl bg-gray-800 p-8 shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50">
              <h3 className="mb-4 text-3xl font-bold text-white">4. Deployment</h3>
              <p className="text-lg text-gray-300">We deploy your project and provide ongoing support.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
