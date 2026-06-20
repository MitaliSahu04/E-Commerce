const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We are dedicated to providing high-quality products and an
            exceptional shopping experience for our customers.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="About Us"
              className="rounded-2xl shadow-lg w-full h-[450px] object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Our Story
            </h2>

            <p className="text-gray-600 leading-8 mb-4">
              Founded with a vision to make online shopping simple,
              reliable, and affordable, our platform offers a wide
              range of products across multiple categories.
            </p>

            <p className="text-gray-600 leading-8 mb-4">
              We focus on quality, customer satisfaction, and seamless
              delivery services. Every product is carefully selected
              to ensure the best value for our customers.
            </p>

            <p className="text-gray-600 leading-8">
              Our mission is to connect people with products they love
              while providing a secure and enjoyable shopping
              experience.
            </p>
          </div>

        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            
            <div className="p-6 rounded-xl shadow-md">
              <h3 className="text-4xl font-bold text-blue-600">
                10K+
              </h3>
              <p className="mt-2 text-gray-600">
                Happy Customers
              </p>
            </div>

            <div className="p-6 rounded-xl shadow-md">
              <h3 className="text-4xl font-bold text-blue-600">
                5K+
              </h3>
              <p className="mt-2 text-gray-600">
                Products
              </p>
            </div>

            <div className="p-6 rounded-xl shadow-md">
              <h3 className="text-4xl font-bold text-blue-600">
                100+
              </h3>
              <p className="mt-2 text-gray-600">
                Brands
              </p>
            </div>

            <div className="p-6 rounded-xl shadow-md">
              <h3 className="text-4xl font-bold text-blue-600">
                24/7
              </h3>
              <p className="mt-2 text-gray-600">
                Customer Support
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose Us?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h3 className="text-2xl font-semibold mb-4">
              Quality Products
            </h3>
            <p className="text-gray-600">
              We offer carefully selected products that meet high
              quality standards.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h3 className="text-2xl font-semibold mb-4">
              Fast Delivery
            </h3>
            <p className="text-gray-600">
              Quick and reliable shipping to ensure your orders arrive
              on time.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h3 className="text-2xl font-semibold mb-4">
              Secure Payments
            </h3>
            <p className="text-gray-600">
              Safe and trusted payment options for a worry-free
              shopping experience.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default About;