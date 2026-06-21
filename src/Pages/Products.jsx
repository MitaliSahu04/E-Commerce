import React from 'react'
import {useState,useEffect} from "react"
import FilterSideBar from "../components/FilterSideBar";
import axios from "axios";
import happyGif from "../assets/Happy Dance GIF.gif";

const Products = () => {
const [productData,setProductData]= useState([])
const [loading,setLoading] = useState(false)


useEffect(()=>{
  async function fetchProductData(){
    setLoading(true)
    try{ 
      
      const response = await axios.get("https://api.escuelajs.co/api/v1/products")
      setProductData(response.data)
      setLoading(false)
    }
    catch(error){
      
      console.log(error)
    setLoading(false)
    }
  }
  fetchProductData()

},[])

  return (
  <>
    

    <div className="flex">
      
          <FilterSideBar />
      {/* Left Sidebar */}

      {loading ? <div>
        <img src={happyGif} />
      </div> :   
      
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">Products</h1>

        {/* Product Cards Here */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {productData.map((product)=>{
          return(
           
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-full h-60 object-cover"
          />

          <div className="p-4">
            <span className="text-sm text-gray-500">{product.category.name}</span>

            <h2 className="text-lg font-semibold mt-2">
              {product.title}
            </h2>

            <p className="text-gray-600 text-sm mt-2">
             {product.description}
            </p>

            <div className="flex justify-between items-center mt-4">
              
              <span className="text-xl font-bold text-green-600">
              &#8377;{product.price}
              </span>

              <button className="bg-rose-400 text-white px-4 py-2 rounded-lg">
                Add to Cart
              </button>
            </div>
          </div>
        </div> 
        
          )
        })}</div>

      </div>}
     
    </div>

  </>
  );
};



export default Products;