import axios from "axios";
import { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import LeftImagePdp from "./leftImagePdp";
import RightInfoPdp from "./RightInfoPdp";
import {  ProductByIdApi } from "../services/ProductApi";

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
        const pdppagefetchdata = await ProductByIdApi(productID)
        console.log(pdppagefetchdata)
        setPdppageData(pdppagefetchdata)
        setPdpImage(pdppagefetchdata.images)
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
    <>
    {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <div className="loader"></div>
        </div>
      ) : (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-md p-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* left pdp information(product image) */}
          <LeftImagePdp pdpImage={pdpImage} />

           {/* right pdp information(product info) */}
          <RightInfoPdp pdppageData={pdppageData}
          />

        </div>
      </div>
    </div>
      )}
    </>
  );

};

export default ProductDetailsPage