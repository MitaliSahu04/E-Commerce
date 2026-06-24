import axios from "axios";
import { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";

const ProductDetailsPage = () => {
  const { productID } = useParams()
  const [pdppageData, setPdppageData] = useState([])
  const [pdpImage, setPdpImage] = useState([])
  const [loading, setLoading] = useState(false);
  const [count,setcount] = useState(0);
  const navigate = useNavigate();


  useEffect(() => {

    async function fetchpdpdata() {
      setLoading(true)
      try {
        const pdppagefetchdata = await axios.get(`https://api.escuelajs.co/api/v1/products/${productID}`)
        console.log(pdppagefetchdata.data.images)
        setPdppageData(pdppagefetchdata.data)
        setPdpImage(pdppagefetchdata.data.images)
        setLoading(false)
      }
      catch (error) {
        console.error(error)
        setLoading(false);
      }
    }

    fetchpdpdata()

  }, [productID])

  function HandleChangeIncrement(){
    setcount(count +1);
  }

  function HandleChangeDecrement(){
    if(count <=0){
      setcount(0);
    }
     
    else{
      setcount(count-1);
    }
    
  }


  function HandleChangePayment(){
    navigate("/paymentpage");
  }

  

  

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-md p-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Product Images */}
          <div>
            <div className="border rounded-xl overflow-hidden">
              <img
                src={pdpImage?.[0]}
                alt="Product"
                className="w-full h-[500px] object-cover"
              />
            </div>
          <div className="flex gap-4 mt-4">
               {pdpImage.map((imaages)=>{
              return(
              <img
                src={imaages}
                alt=""
                className="w-24 h-24 object-cover border rounded-lg cursor-pointer"
              />
              )
            })}
              </div>
          </div>

          {/* Product Information */}
          <div>
            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
              {pdppageData?.category?.name}
            </span>

            <h1 className="text-4xl font-bold mt-4">
              {pdppageData?.title}
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
                &#8377;{pdppageData.price - (pdppageData.price * 20) / 100}
              </span>

              <span className="ml-4 text-xl text-gray-400 line-through">
                &#8377;{pdppageData?.price}
              </span>

              <span className="ml-3 bg-red-100 text-red-600 px-2 py-1 rounded">
                20% OFF
              </span>
            </div>

            <p className="text-gray-600 mt-6 leading-relaxed">
              {pdppageData?.description}
            </p>

            {/* Quantity */}
            <div className="mt-8">
              

              <div>
                <button onClick={HandleChangeDecrement}>
                  −
                </button>

                &nbsp;

              <span className="border rounded-lg px-4 py-2">
                {count}
              </span>

              &nbsp;
                

                <button onClick={HandleChangeIncrement}>
                  +
                </button>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-8">
              <button className="bg-black text-white px-8 py-3 rounded-xl hover:bg-gray-800">
                Add to Cart
              </button>

              <button onClick={HandleChangePayment} className="bg-orange-500 text-white px-8 py-3 rounded-xl hover:bg-orange-600">
                Buy Now
              </button>
            </div>

            {/* Specifications */}
            {/* <div className="mt-10 border-t pt-6">
              <h2 className="text-2xl font-semibold mb-4">
                {pdppageData.creationAt}
              </h2> */}
{/* 
              <ul className="space-y-3 text-gray-600">
                <li>✔ Bluetooth 5.3 Connectivity</li>
                <li>✔ Active Noise Cancellation</li>
                <li>✔ 40 Hours Battery Backup</li>
                <li>✔ Fast Charging Support</li>
                <li>✔ Built-in Microphone</li>
              </ul> */}
            {/* </div> */}
          </div>

        </div>

        {/* Description Section */}
        {/* <div className="mt-16">
          <h2 className="text-3xl font-bold mb-4">
            Product Description
          </h2>

          <p className="text-gray-600 leading-8">
            These premium wireless headphones deliver crystal-clear
            audio, deep bass, and exceptional comfort. Perfect for
            music lovers, gamers, and professionals who need
            high-quality sound and long-lasting battery life.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default ProductDetailsPage;