const ProductDetailsPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-md p-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Product Images */}
          <div>
            <div className="border rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
                alt="Product"
                className="w-full h-[500px] object-cover"
              />
            </div>

            <div className="flex gap-4 mt-4">
              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
                alt=""
                className="w-24 h-24 object-cover border rounded-lg cursor-pointer"
              />

              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
                alt=""
                className="w-24 h-24 object-cover border rounded-lg cursor-pointer"
              />

              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
                alt=""
                className="w-24 h-24 object-cover border rounded-lg cursor-pointer"
              />
            </div>
          </div>

          {/* Product Information */}
          <div>
            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
              Electronics
            </span>

            <h1 className="text-4xl font-bold mt-4">
              Premium Wireless Headphones
            </h1>

            <div className="flex items-center gap-3 mt-4">
              <span className="text-yellow-500 text-lg">
                ⭐⭐⭐⭐⭐
              </span>

              <span className="text-gray-500">
                (245 Reviews)
              </span>
            </div>

            <div className="mt-6">
              <span className="text-4xl font-bold text-green-600">
                ₹2,999
              </span>

              <span className="ml-4 text-xl text-gray-400 line-through">
                ₹4,999
              </span>

              <span className="ml-3 bg-red-100 text-red-600 px-2 py-1 rounded">
                40% OFF
              </span>
            </div>

            <p className="text-gray-600 mt-6 leading-relaxed">
              Experience premium sound quality with advanced noise
              cancellation technology. Designed for comfort and
              long listening sessions.
            </p>

            {/* Quantity */}
            <div className="mt-8">
              <label className="block font-medium mb-2">
                Quantity
              </label>

              <select className="border rounded-lg px-4 py-2">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-8">
              <button className="bg-black text-white px-8 py-3 rounded-xl hover:bg-gray-800">
                Add to Cart
              </button>

              <button className="bg-orange-500 text-white px-8 py-3 rounded-xl hover:bg-orange-600">
                Buy Now
              </button>
            </div>

            {/* Specifications */}
            <div className="mt-10 border-t pt-6">
              <h2 className="text-2xl font-semibold mb-4">
                Specifications
              </h2>

              <ul className="space-y-3 text-gray-600">
                <li>✔ Bluetooth 5.3 Connectivity</li>
                <li>✔ Active Noise Cancellation</li>
                <li>✔ 40 Hours Battery Backup</li>
                <li>✔ Fast Charging Support</li>
                <li>✔ Built-in Microphone</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Description Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-4">
            Product Description
          </h2>

          <p className="text-gray-600 leading-8">
            These premium wireless headphones deliver crystal-clear
            audio, deep bass, and exceptional comfort. Perfect for
            music lovers, gamers, and professionals who need
            high-quality sound and long-lasting battery life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;