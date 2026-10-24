// // export default Listproduct;

// import { useState, useEffect } from "react";
// import "./Listproduct.css";

// function Listproduct() {
//   // Fetch data from API
//   const [allproducts, setAllproducts] = useState([]);

//   // Pagination
//   const [currentPage, setCurrentPage] = useState(1);

//   const productsPerPage = 10;

//   const fetchInfo = async () => {
//     await fetch("http://localhost:4000/allproducts")
//       .then((res) => res.json())
//       .then((data) => {
//         setAllproducts([...data].reverse());
//         setCurrentPage(1);
//       });
//   };

//   useEffect(() => {
//     fetchInfo();
//   }, []);

//   // Remove product
//   const remove_product = async (id) => {
//     await fetch("http://localhost:4000/removeproduct", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ id: id }),
//     });

//     await fetchInfo();
//   };

//   // Total pages
//   const totalPages = Math.ceil(allproducts.length / productsPerPage);

//   // Get products for current page
//   const indexOfLastProduct = currentPage * productsPerPage;
//   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

//   const currentProducts = allproducts.slice(
//     indexOfFirstProduct,
//     indexOfLastProduct,
//   );

//   return (
//     <section className="list-product">
//       <h1>All Products List</h1>

//       {/* Header */}
//       <div className="listproduct-format-main">
//         <p>Products</p>
//         <p>Title</p>
//         <p>Old Price</p>
//         <p>New Price</p>
//         <p>Category</p>
//         <p>Remove</p>
//       </div>

//       {/* Products */}
//       <div className="listproduct-allproducts">
//         <hr />

//         {currentProducts.map((product) => {
//           return (
//             <div key={product.id}>
//               <div className="listproduct-format-main listproduct-format">
//                 <img
//                   src={product.image}
//                   alt=""
//                   className="listproduct-product-icon"
//                 />

//                 <p>{product.name}</p>

//                 <p>${product.old_price}</p>

//                 <p>${product.new_price}</p>

//                 <p>{product.category}</p>

//                 <button
//                   onClick={() => {
//                     remove_product(product.id);
//                   }}
//                   className="listproduct-remove-icon"
//                 >
//                   <i className="fa-solid fa-trash"></i>
//                 </button>
//               </div>

//               <hr />
//             </div>
//           );
//         })}
//       </div>

//       {/* Pagination */}
//       <div className="pagination">
//         {/* First */}
//         <button onClick={() => setCurrentPage(1)} disabled={currentPage === 1}>
//           First
//         </button>

//         {/* Previous */}
//         <button
//           onClick={() => setCurrentPage(currentPage - 1)}
//           disabled={currentPage === 1}
//         >
//           Previous
//         </button>

//         {/* Page Numbers */}
//         {Array.from({ length: totalPages }, (_, index) => {
//           const pageNumber = index + 1;

//           return (
//             <button
//               key={pageNumber}
//               onClick={() => setCurrentPage(pageNumber)}
//               className={currentPage === pageNumber ? "active" : ""}
//             >
//               {pageNumber}
//             </button>
//           );
//         })}

//         {/* Next */}
//         <button
//           onClick={() => setCurrentPage(currentPage + 1)}
//           disabled={currentPage === totalPages}
//         >
//           Next
//         </button>

//         {/* Last */}
//         <button
//           onClick={() => setCurrentPage(totalPages)}
//           disabled={currentPage === totalPages}
//         >
//           Last
//         </button>
//       </div>
//     </section>
//   );
// }

// export default Listproduct;

import { useState, useEffect } from "react";
import "./Listproduct.css";

function Listproduct() {
  // Products from API
  const [allproducts, setAllproducts] = useState([]);

  // Current pagination page
  const [currentPage, setCurrentPage] = useState(1);

  // Number of products per page
  const productsPerPage = 10;

  // Fetch products
  const fetchInfo = async () => {
    try {
      const response = await fetch("http://localhost:4000/allproducts");
      const data = await response.json();

      // Show newest products first
      setAllproducts([...data].reverse());

      // Start from first page
      setCurrentPage(1);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  // Remove product
  const remove_product = async (id) => {
    try {
      await fetch("http://localhost:4000/removeproduct", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: id }),
      });

      // Fetch updated products
      await fetchInfo();
    } catch (error) {
      console.error("Error removing product:", error);
    }
  };

  // Total pages
  const totalPages = Math.ceil(allproducts.length / productsPerPage);

  // Last product index for current page
  const indexOfLastProduct = currentPage * productsPerPage;

  // First product index for current page
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  // Get only 10 products for current page
  const currentProducts = allproducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );

  return (
    <section className="list-product">
      <h1>All Products List</h1>

      {/* Table Header */}
      <div className="listproduct-format-main">
        <p>No.</p>
        <p>Product</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>

      {/* Products */}
      <div className="listproduct-allproducts">
        {currentProducts.map((product, index) => {
          return (
            <div className="product-row-wrapper" key={product.id}>
              <div className="listproduct-format">
                {/* Product Number */}
                <p>{indexOfFirstProduct + index + 1}</p>

                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="listproduct-product-icon"
                />

                {/* Product Title */}
                <p>{product.name}</p>

                {/* Old Price */}
                <p>${product.old_price}</p>

                {/* New Price */}
                <p>${product.new_price}</p>

                {/* Category */}
                <p>{product.category}</p>

                {/* Remove Button */}
                <button
                  onClick={() => remove_product(product.id)}
                  className="listproduct-remove-icon"
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>

              <hr />
            </div>
          );
        })}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="pagination">
          {/* First Page */}
          <button
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
          >
            First
          </button>

          {/* Previous Page */}
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          {/* Page Numbers */}
          {Array.from({ length: totalPages }, (_, index) => {
            const pageNumber = index + 1;

            return (
              <button
                key={pageNumber}
                onClick={() => setCurrentPage(pageNumber)}
                className={currentPage === pageNumber ? "active" : ""}
              >
                {pageNumber}
              </button>
            );
          })}

          {/* Next Page */}
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            Next
          </button>

          {/* Last Page */}
          <button
            onClick={() => setCurrentPage(totalPages)}
            disabled={currentPage === totalPages}
          >
            Last
          </button>
        </div>
      )}
    </section>
  );
}

export default Listproduct;
