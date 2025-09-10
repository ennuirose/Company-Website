import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Company Info */}
          <div>
            <h3 className="mb-4 text-xl font-bold">The Company</h3>
            <p className="text-gray-400">
              Innovative solutions for a digital world.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="mb-4 text-xl font-bold">Our Contact Information</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <strong>Address:</strong>
                123 Main Street, Anytown, USA 12345
              </li>
              <li>
                <strong>Phone:</strong>
                +1 (123) 456-7890
              </li>
              <li>
                <strong>Email:</strong>
                info@thecompany.com
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="mb-4 text-xl font-bold">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 transition duration-300 hover:text-white">
                {/* Twitter Icon */}
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 014 9.74c-.095.007-.19.015-.285.024a4.072 4.072 0 003.29 4.017 4.102 4.102 0 01-1.844.07 4.102 4.102 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 transition duration-300 hover:text-white">
                {/* LinkedIn Icon */}
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 transition duration-300 hover:text-white">
                {/* Facebook Icon */}
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.812c-3.233 0-4.188 1.508-4.188 4.004v2.996z"></path>
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 transition duration-300 hover:text-white">
                {/* Instagram Icon */}
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.254-.148-4.769-1.691-4.919-4.919-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.149-3.227 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.668.072 4.947c.2 4.358 2.618 6.78 6.98 6.78 1.281.058 1.689.073 4.948.073s3.668-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 6.847c-2.319 0-4.2 1.88-4.2 4.2s1.88 4.2 4.2 4.2 4.2-1.88 4.2-4.2-1.88-4.2-4.2-4.2zm0 6.847c-1.44 0-2.6-1.16-2.6-2.6s1.16-2.6 2.6-2.6 2.6 1.16 2.6 2.6-1.16 2.6-2.6 2.6zm5.725-10.495c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96z"></path>
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 transition duration-300 hover:text-white">
                {/* YouTube Icon */}
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.515 12.816v-8l7 4-7 4z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2025 The Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
