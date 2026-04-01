import { useState, useCallback } from "react";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Activity from "./components/Activity";
import Tools from "./components/Tools";
import Process from "./components/Process";
import Pricing from "./components/Pricing";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// API fetch
const getData = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

const productsPromise = getData();

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = useCallback(
    (tool) => {
      const alreadyAdded = cartItems.find((item) => item.id === tool.id);
      if (alreadyAdded) {
        toast.warn("Already added to Cart!");
        return;
      }
      setCartItems([...cartItems, tool]);
      toast.success("Added to Cart!");
    },
    [cartItems],
  );

  const handleRemoveFromCart = useCallback(
    (id) => {
      setCartItems(cartItems.filter((item) => item.id !== id));
      toast.info("Removed from Cart");
    },
    [cartItems],
  );

  const handleCheckout = useCallback(() => {
    setCartItems([]);
    toast.success("🎉 Order placed successfully!");
  }, []);

  return (
    <>
      <Navbar cartCount={cartItems.length} />
      <Banner />
      <Activity />
      <Tools
        productsPromise={productsPromise}
        cartItems={cartItems}
        onAddToCart={handleAddToCart}
        onRemoveFromCart={handleRemoveFromCart}
        onCheckout={handleCheckout}
      />
      <Process />
      <Pricing />
      <Workflow />
      <Footer />
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}

export default App;
