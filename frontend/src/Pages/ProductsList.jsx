import React, { useContext, useEffect, useState } from 'react';
import { PageContext } from '../context/PageContext';

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

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const branchName = localStorage.getItem("branchName");
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
  }, [products]);

  return (
    <div className="px-6 mb-4 w-[90%]">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Products</h1>
      <ul className="grid grid-cols-4 gap-3">
        {products.map((product, index) => (
          <li
            key={index}
            className="p-4 bg-white shadow-md rounded-lg flex flex-col"
          >
            <div className='h-40 flex items-center justify-center'>
              <div className="h-40 flex items-center justify-center">
                {images[product.name] ? (
                  <img
                    src={images[product.name]}
                    alt={product.name}
                    style={{ maxWidth: "95%", maxHeight: "95%" }}
                  />
                ) : (
                  <p>Loading image...</p>
                )}
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
