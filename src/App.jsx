import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./Components/Banner";
import Cards from "./Components/Cards";
import Carts from "./Components/Carts";
import Navbar from "./Components/Navbar";
import StatSection from "./Components/StatSection";
import Tab from "./Components/Tab";
import GetStarted from "./Components/GetStarted";
import Pricing from "./Components/Pricing";
import { ToastContainer } from 'react-toastify';
import ExploreProducts from "./Components/ExploreProducts";
import Footer from "./Components/Footer";

const fetchData = async () => {
    const res = await fetch("/Tools.json");
    return res.json();
  };
  const dataPromise = fetchData(); 

  const fetchGetStartedData = async () => {
    const res = await fetch("/GetStartedData.json");
    return res.json();
  };
  const getStartedData = fetchGetStartedData();


function App() {
  
  const [activeTab, setActiveTab] = useState("products");
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  return (
    <>
      <Navbar cartItems={cartItems} />
      <Banner />
      <StatSection />
      <Tab
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        cartItems={cartItems}
        className='flex justify-center items-center'
      />
      {activeTab === "products" && (
        <Suspense
          fallback={
              <span className="loading loading-dots loading-5xl"></span>
          }
        >
          <Cards
            dataPromise={dataPromise}
            cartItems={cartItems}
            setCartItems={setCartItems}
            total={total}
            setTotal={setTotal}
          />
        </Suspense>
      )}
      {activeTab === "carts" && (
        <Suspense
          fallback={<span className="loading loading-dots loading-xl"></span>}
        >
          <Carts
            cartItems={cartItems}
            setCartItems={setCartItems}
            total={total}
            setTotal={setTotal}
          />
        </Suspense>
      )}
      <GetStarted getStartedData={getStartedData}></GetStarted>
      <Pricing/>
      <ExploreProducts/>
      <Footer/>


      <ToastContainer />
    </>
  );
}

export default App;
