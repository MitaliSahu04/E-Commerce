// Footer.jsx

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              ShopEase
            </h2>
            <p>
              Your one-stop destination for fashion, electronics,
              and daily essentials.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2">
              <li><a href="/">Home</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/categories">Categories</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Customer Service
            </h3>

            <ul className="space-y-2">
              <li><a href="/">FAQs</a></li>
              <li><a href="/">Shipping</a></li>
              <li><a href="/">Returns</a></li>
              <li><a href="/">Track Order</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Contact
            </h3>

            <p>Email: support@shopease.com</p>
            <p>Phone: +91 9876543210</p>
            <p>Pune, Maharashtra</p>
          </div>

        </div>

        <hr className="border-gray-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <p>
            © 2026 ShopEase. All rights reserved.
          </p>

          <div className="flex gap-4">
            <a href="/">Facebook</a>
            <a href="/">Instagram</a>
            <a href="/">Twitter</a>
            <a href="/">LinkedIn</a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;