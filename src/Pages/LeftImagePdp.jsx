function LeftImagePdp({pdpImage}){
    return (
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
    )
}

export default LeftImagePdp;