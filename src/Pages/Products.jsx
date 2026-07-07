import axios from "axios";
import { useEffect, useState, useContext } from "react";
import FilterSideBar from "../components/FilterSideBar";
import { useNavigate } from "react-router-dom";
import {Heart,} from "lucide-react";
import { UserContext } from "../context/CreateUserContext";
import { getProducts } from "../services/ProductApi";


const Products = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { addToCart, debouncedSearch} = useContext(UserContext);
  // const { productID } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;
  const lastProductIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;
 const [filters, setFilters] = useState({
    categoryId: "",
    price_min: "",
    price_max: "",
});

const [pendingFilters, setPendingFilters] = useState({
    electronicsUnder1000: false,
    fashionAbove500: false,
    homeUnder5000: false,
});

 const filteredProducts = productData.filter(product =>
    product.title
        .toLowerCase()
        .includes(debouncedSearch.trim().toLowerCase())
);

const currentProducts = filteredProducts.slice(
    firstProductIndex,
    lastProductIndex
);
  const totalPages = Math.ceil(
  filteredProducts.length / productsPerPage
  );
 const visiblePages = 3;

let startPage = Math.max(
  1,
  currentPage - Math.floor(visiblePages / 2)
);

let endPage = startPage + visiblePages - 1;

if (endPage > totalPages) {
  endPage = totalPages;
  startPage = Math.max(
    1,
    endPage - visiblePages + 1
  );
}

const pageNumbers = [];

for (let i = startPage; i <= endPage; i++) {
  pageNumbers.push(i);
}

useEffect(() => {
    setCurrentPage(1);
}, [debouncedSearch]);

const fetchProducts = async (currentFilters = filters) => {
  setLoading(true);

  const data = await getProducts(currentFilters);

  setProductData(data);

  setLoading(false);
};

useEffect(() => {
    fetchProducts();
}, []);


function HandleChangeToPdp(id){
  navigate(`/product/${id}`);

}

const handlePageChange = (page) => {
  setCurrentPage(page);
};

const applyFilters = () => {
  let newFilters = { ...filters };

  if (pendingFilters.electronicsUnder1000) {
    newFilters = {
      categoryId: "2",
      price_min: 0,
      price_max: 1000,
    };
  }

  if (pendingFilters.fashionAbove500) {
    newFilters = {
      categoryId: "1",
      price_min: 500,
      price_max: "",
    };
  }

  if (pendingFilters.homeUnder5000) {
    newFilters = {
      categoryId: "3",
      price_min: 0,
      price_max: 5000,
    };
  }

  setFilters(newFilters);

  // Reset pagination
  setCurrentPage(1);

  fetchProducts(newFilters);
};

const resetFilters = () => {

    const defaultFilters = {
        categoryId: "",
        price_min: "",
        price_max: "",
    };

    setFilters(defaultFilters);

    setPendingFilters({
        electronicsUnder1000:false,
        fashionAbove500:false,
        homeUnder5000:false,
    });

    setCurrentPage(1);
fetchProducts(defaultFilters);
};


// function handleProductClick({id}){
//   navigate(`/product/${product.id}`)

// }



  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <div className="loader"></div>
        </div>
      ) : (

        <div className="flex">
          <FilterSideBar
           filters={filters}
          setFilters={setFilters}
          pendingFilters={pendingFilters}
          setPendingFilters={setPendingFilters}
          applyFilters={applyFilters}
          resetFilters={resetFilters}
          />

          <div className="flex-1 p-6">
            <h1 className="text-3xl font-bold mb-6">Products</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentProducts.map((product) => {
                return (

                  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
                   <div  onClick={() => HandleChangeToPdp(product.id)} >
                    <img
                      src={product.images[0]}
                      alt={product.title}
                      className="w-full h-60 object-cover"
                      // onClick={() => handleProductClick(product.id)}
                    />

                    <div className="p-4">
                      <span className="text-sm text-gray-500">
                        {product.category.name}
                      </span>
                      
                      <h2 className="text-lg font-semibold mt-2">
                        {product.title}
                      </h2>

                      <p className="text-gray-600 text-sm mt-2">
                        {product.description}
                      </p>

                      </div>
                      </div>


                      <div className="flex justify-between items-center mt-4">
                        <span className="text-xl font-bold text-green-600">
                          &#8377;{product.price}
                        </span>

                        {/* Wishlist */}
                       <div className="flex items-center gap-3">
                       <button className="flex flex-col items-center text-gray-700 hover:text-red-500 transition">
                       <Heart className="w-6 h-6" />
                       </button>

                        <button 
                          onClick={() => addToCart(product)}
                          className="cta-btn inline-block bg-[#FF6B6B] hover:bg-[#e05555] text-white text-xs font-semibold tracking-wider uppercase px-5 py-2.5 rounded-full">
                          Add to Cart
                        </button>
                        </div>
                      </div>
                    
                  </div>
                );
              })}
            </div>
            <div className="flex justify-center items-center gap-2 mt-8">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
              className="px-4 py-2 border rounded disabled:opacity-50"
            >
              Prev
           </button>

  {pageNumbers.map((page) => (
    <button
      key={page}
      onClick={() => setCurrentPage(page)}
      className={`px-4 py-2 border rounded ${
        currentPage === page
          ? "bg-black text-white"
          : "bg-white"
      }`}
    >
      {page}
    </button>
  ))}

  <button
    disabled={currentPage === totalPages}
    onClick={() => setCurrentPage(currentPage + 1)}
    className="px-4 py-2 border rounded disabled:opacity-50"
  >
    Next
  </button>
</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Products;