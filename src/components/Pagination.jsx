function Pagination(props){

    const totalPages = Math.ceil(props.productData.length / props.perPage);

    function prePage() {
        if (props.currentPage>0){
            props.setCurrentPage(props.currentPage - 1);
        }
       }

    function nextPage() {
      props.setCurrentPage(props.currentPage + 1);
    }


    return (
     <>
     {!props.productData.length ===0 ? 
  <div className="flex justify-center items-center gap-2 mt-6">
  <button
    onClick={prePage}
    className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
     disabled={props.currentPage === 1}
  >
    Prev
  </button>

  {[...Array(totalPages)].map((_, index) => (
    <button
      key={index}
      onClick={() => props.setCurrentPage(index + 1)}
      className={`px-4 py-2 rounded border transition
      ${
        props.currentPage === index + 1
          ? "bg-blue-600 text-white border-blue-600"
          : "bg-white text-black border-gray-300 hover:bg-gray-100"
      }`}
    >
      {index + 1}
    </button>
  ))}

  <button
    onClick={nextPage}
    className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
     disabled={props.currentPage === totalPages}
  >
    Next
  </button>
  </div>
  : null}
    
    </>
    )
}

export default Pagination