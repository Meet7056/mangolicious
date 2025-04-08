import { createContext, useContext, useState } from "react";

// Create Context
const ProductContext = createContext();

// Custom Hook for easy access
export const useProducts = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  // Add Product
  const addProduct = (product) => {
    setProducts((prev) => [...prev, product]);
  };

  // Remove Product (by id)
  const removeProduct = (id) => {
    setProducts((prev) => prev.filter((item) => item.id !== id));
  };

  // Clear all products
  const clearProducts = () => {
    setProducts([]);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        addProduct,
        removeProduct,
        clearProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
