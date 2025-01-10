import React, { useContext, useEffect, useState } from 'react';
import { PageContext } from '../context/PageContext';
import Seal1 from '../Components/Seal/Seal1';
import Seal2 from '../Components/Seal/Seal2';
import Seal3 from '../Components/Seal/Seal3';
import Seal4 from '../Components/Seal/Seal4';
import Seal5 from '../Components/Seal/Seal5';
import Seal6 from '../Components/Seal/Seal6';
import Seal7 from '../Components/Seal/Seal7';
import Seal8 from '../Components/Seal/Seal8';
import Seal9 from '../Components/Seal/Seal9';
import Seal10 from '../Components/Seal/Seal10';
import Seal11 from '../Components/Seal/Seal11';
import Seal12 from '../Components/Seal/Seal12';
import Seal13 from '../Components/Seal/Seal13';
import Seal14 from '../Components/Seal/Seal14';
import Seal15 from '../Components/Seal/Seal15';
import Seal16 from '../Components/Seal/Seal16';
import Seal17 from '../Components/Seal/Seal17';
import Seal18 from '../Components/Seal/Seal18';
import Seal19 from '../Components/Seal/Seal19';
import Seal20 from '../Components/Seal/Seal20';
import Seal21 from '../Components/Seal/Seal21';
import Seal22 from '../Components/Seal/Seal22';
import Seal23 from '../Components/Seal/Seal23';


const Products = () => {
  const { products, currency, addToCart, } = useContext(PageContext);

  const [qty, setQty] = useState({});

  const handleQtyChange = (name, value) => {
    setQty((prevQty) => ({
      ...prevQty,
      [name]: value,
    }));
  };

  const [images, setImages] = useState({});
  const backendUrl = import.meta.env.VITE_BACKEND_URL
  const branchName = localStorage.getItem("branchName");

  const seals = [<Seal1 branchName={branchName} />, <Seal2 branchName={branchName} />, <Seal3 branchName={branchName} />, <Seal4 branchName={branchName} />,
  <Seal5 branchName={branchName} />, <Seal6 branchName={branchName} />, <Seal7 branchName={branchName} />, <Seal8 branchName={branchName} />,
  <Seal9 branchName={branchName} />, <Seal10 branchName={branchName} />, <Seal11 branchName={branchName} />, <Seal12 branchName={branchName} />,
  <Seal13 branchName={branchName} />, <Seal14 branchName={branchName} />, <Seal15 branchName={branchName} />, <Seal16 branchName={branchName} />,
  <Seal17 branchName={branchName} />, <Seal18 branchName={branchName} />, <Seal19 branchName={branchName} />, <Seal20 branchName={branchName} />,
  <Seal21 branchName={branchName} />, <Seal22 branchName={branchName} />, <Seal23 branchName={branchName} />]


  /*useEffect(() => {
    const fetchImages = async () => {
      try {
        const fetchedImages = {};

        await Promise.all(
          products.map(async (product) => {
            const params = new URLSearchParams({ branchName, imageName: product.img });
            const response = await fetch(`${backendUrl}/api/genImage/get-image-with-date?${params.toString()}`);
            if (!response.ok) {
              throw new Error("Failed to fetch image for " + product.name);
            }
            const blob = await response.blob();
            const objectURL = URL.createObjectURL(blob);
            fetchedImages[product.name] = objectURL;
          })
        );

        setImages(fetchedImages);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, [products]);*/

  return (
    <div className="px-6 mb-4 w-[90%]">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Products</h1>
      <ul className="grid grid-cols-4 gap-5" style={{ rowGap: "2rem" }}>
        {products.map((product, index) => (
          <li
            key={index}
            className="p-4 bg-white shadow-md rounded-lg flex flex-col"
            style={{ height: "105%", justifyContent: "space-between" }}
          >
            <div className='h-40 flex items-center justify-center'>
              <div className="h-40 flex items-center justify-center" style={{
                textAlign: "center",
                transition: "transform 0.3s ease", // Smooth transition
                transformOrigin: "center", // Zoom from center
              }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.5)")} // Zoom in
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")} // Reset zoom
              >
                {/*images[product.name] ? (
                  <img
                    src={images[product.name]}
                    alt={product.name}
                    style={{ maxWidth: "95%", maxHeight: "95%" }}
                  />
                ) : (
                  <p>Loading image...</p>
                )*/}
                {seals[index]}
              </div>
            </div>
            <div>
              <h2 className="text-lg font-medium text-gray-700">
                {product.name}
              </h2>
              <p className="text-sm text-gray-500">
                Price: {currency}{product.price}
              </p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <input type="number" className='border-2 border-black flex-shrink w-16 p-1.5 rounded-lg' value={qty[product.name] || ''} onChange={(e) =>
                handleQtyChange(product.name, Math.max(1, Number(e.target.value)))
              } min="1" />
              <button onClick={() => addToCart(product, qty)} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Add to Cart
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
