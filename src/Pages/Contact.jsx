import React from "react";

function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We'd love to hear from you. Whether you have a question about
          products, orders, shipping, or anything else, our team is ready
          to answer all your questions.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">
        {/* Contact Information */}
        <div className="bg-gray-100 p-8 rounded-xl">
          <h2 className="text-2xl font-semibold mb-6">
            Get In Touch
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg">📍 Address</h3>
              <p className="text-gray-600">
                Pune, Maharashtra, India
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">📞 Phone</h3>
              <p className="text-gray-600">
                +91 98765 43210
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">✉️ Email</h3>
              <p className="text-gray-600">
                support@shopease.com
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">🕒 Working Hours</h3>
              <p className="text-gray-600">
                Monday - Saturday
              </p>
              <p className="text-gray-600">
                9:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-lg p-8 rounded-xl">
          <h2 className="text-2xl font-semibold mb-6">
            Send Us a Message
          </h2>

          <form className="space-y-5">
            <div>
              <label className="block mb-2 font-medium">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Subject
              </label>
              <input
                type="text"
                placeholder="Subject"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          <div className="border p-5 rounded-lg">
            <h3 className="font-semibold">
              How long does shipping take?
            </h3>
            <p className="text-gray-600 mt-2">
              Standard delivery usually takes 3–7 business days.
            </p>
          </div>

          <div className="border p-5 rounded-lg">
            <h3 className="font-semibold">
              Can I return a product?
            </h3>
            <p className="text-gray-600 mt-2">
              Yes, we offer a 7-day return and replacement policy.
            </p>
          </div>

          <div className="border p-5 rounded-lg">
            <h3 className="font-semibold">
              How can I track my order?
            </h3>
            <p className="text-gray-600 mt-2">
              Visit the Track Order page and enter your order ID.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;