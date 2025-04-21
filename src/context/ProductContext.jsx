import { createContext, useContext, useEffect, useState } from "react";
import { addOrder, getOrders, removeOrder } from "../global/allApis";

// Create Context
const ProductContext = createContext();

// Custom Hook for easy access
export const useProducts = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const getData = async () => {

    try {

      const response = await getOrders();

      if (response.cart_data) {
        setProducts(response.cart_data)
      }
    } catch (error) {
      console.log({ error })
    }
  }

  useEffect(() => {
    getData()
  }, [])

  // Add Product
  const addProduct = (product) => {
    setProducts((prev) => [...prev, { ...product, mango_id: product.id }]);

    const payload = {
      "mango_id": product.id,
      "quantity": product.quantity
    }
    addOrder(payload);
  };

  // Remove Product (by id)
  const removeProduct = (product) => {
    setProducts((prev) => prev.filter((item) => item.mango_id !== product.id));

    const mangoItem = products.find((item) => item.mango_id === product.id);
    console.log({ mangoItem })

    removeOrder({ cart_item_id: mangoItem.id })
  };

  // Clear all products
  const clearProducts = () => {
    setProducts([]);
  };

  // Increase Quantity
  const increaseQuantity = (id) => {
    setProducts((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      )
    );

    const current_order = products.filter((item) => item.id == id);
    const payload = {
      ...current_order[0],
      quantity: current_order[0].quantity + 1,
      mango_id: current_order[0].mango_id
    }

    addOrder(payload)
  };

  // Decrease Quantity (and remove if 0)
  const decreaseQuantity = (id) => {
    setProducts((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: (item.quantity || 1) - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );

    const current_order = products.filter((item) => item.id == id);
    // console.log(current_order[0].quantity)
    if (current_order[0].quantity == 1) {
      // removeProduct(current_order);
      removeOrder({ cart_item_id: current_order[0].id })
    } else {
      const payload = {
        ...current_order[0],
        quantity: current_order[0].quantity - 1,
        mango_id: current_order[0].mango_id
      }

      addOrder(payload)
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        addProduct,
        removeProduct,
        clearProducts,
        increaseQuantity,
        decreaseQuantity,
        getData
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
