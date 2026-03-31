import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./Components/Banner";
import Cards from "./Components/Cards";
import Navbar from "./Components/Navbar";
import StatSection from "./Components/StatSection";
import Tab from "./Components/Tab";
import Carts from "./Components/Carts";

function App() {
  const fetchData = async () => {
    const res = await fetch("/Tools.json");
    return res.json();
  };
  const dataPromise = fetchData();
  const [activeTab,setActiveTab]=useState("products");
  const [cartItems,setCartItems]=useState([]);

  

  return (
    <>
      <Navbar />
      <Banner />
      {/* <StatSection /> */}
      <Tab activeTab={activeTab} setActiveTab={setActiveTab}/>
      {activeTab==="products" && <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <Cards dataPromise={dataPromise} cartItems={cartItems} setCartItems={setCartItems}/>
      </Suspense>}
      {activeTab==="carts" && <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <Carts cartItems={cartItems} setCartItems={setCartItems}/>
      </Suspense>}
      
      
    </>
  );
}

export default App;
