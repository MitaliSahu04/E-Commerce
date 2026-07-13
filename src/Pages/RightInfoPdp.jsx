import AddToCart from "../components/AddToCart";
import { useState } from "react";

function RightInfoPdp({pdppageData}){

       const [quantityCount, setQuantityCount] = useState(0);

    function IncrementQuantity(){
        setQuantityCount(quantityCount +1);

    }

    function DecrementQuantity(){
        if (quantityCount>=0){
            setQuantityCount(0);

        }
        else{
            setQuantityCount(quantityCount-1);
        }
        
    }
  

    return (
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

            <div className="mt-8">
              

              <div>
                <button >
                  −
                </button>

                &nbsp;

              <span className="border rounded-lg px-4 py-2">
                
              </span>

              &nbsp;
                

                <button >
                  +
                </button>
              </div>
        </div>

             <div className="flex gap-4 mt-8">
              <AddToCart/>

              <button  className="bg-orange-500 text-white px-8 py-3 rounded-xl hover:bg-orange-600">
                Buy Now
              </button>
         </div>

          </div>
    )
}

export default RightInfoPdp;