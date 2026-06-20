function Cards({isCateogrymsg ,categoriesData}) {
  console.log(categoriesData)
  return (
    <>
      <div className="max-w-6xl mx-auto mb-12">
        {isCateogrymsg ?  <p className="text-xs tracking-[0.2em] uppercase text-[#8B8B9A] font-medium mb-2">
          Explore
        </p> : ""}
      
        <h1 className="display text-4xl md:text-5xl font-extrabold text-[#1A1A2E] leading-tight">
          Shop by <span className="text-[#FF6B6B]">Category</span>
        </h1> 
        <div className="w-12 h-1 bg-[#E8C97E] mt-4 rounded-full"></div>
      </div>

      {/* <!-- CARDS GRID --> */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
 

     {categoriesData?.map((category)=>{
        return (
         <div className="category-card relative rounded-2xl overflow-hidden bg-[#1A1A2E] cursor-pointer h-80 shadow-md">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={category.image}
              alt={category.name}
              className="card-img w-full h-full object-cover object-top opacity-65"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E] via-[#1A1A2E]/30 to-transparent"></div>
          {/* <!-- Coral ribbon --> */}
          <div className="ribbon absolute top-4 left-0 bg-[#FF6B6B] text-white text-[11px] tracking-widest uppercase font-semibold py-1.5 pl-4 pr-6">
           {category.name}
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="text-[#8B8B9A] text-xs tracking-widest uppercase mb-1">
              000+ Items
            </p>
            <h2 className="display text-white text-2xl font-bold leading-tight mb-4">
            {category.name}
            </h2>
            <a
              href="#"
              className="cta-btn inline-block bg-[#FF6B6B] hover:bg-[#e05555] text-white text-xs font-semibold tracking-wider uppercase px-5 py-2.5 rounded-full"
            >
              Shop Now →
            </a>
          </div>
        </div>
        );
     })}
     

      </div>

      {/* <!-- FOOTER NOTE --> */}
      <p className="text-center text-[#8B8B9A] text-xs tracking-widest uppercase mt-12">
        Free shipping on orders above ₹999
      </p>
    </>
  );
}
export default Cards;
