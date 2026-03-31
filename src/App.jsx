import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./Components/Banner";
import Cards from "./Components/Cards";
import Carts from "./Components/Carts";
import GetStarted from "./Components/GetStarted";
import Navbar from "./Components/Navbar";
import StatSection from "./Components/StatSection";
import Tab from "./Components/Tab";

function App() {
  // const fetchData = async () => {
  //   const res = await fetch("/Tools.json");
  //   return res.json();
  // };
  // const dataPromise = fetchData();

  const dataPromise = fetch("/Tools.json").then((res) => res.json());

  // const fetchGetStartedData = async () => {
  //   const res = await fetch("/GetStartedData.json");
  //   return res.json();
  // };
  // const getStartedData = fetchGetStartedData();

  const getStartedData=fetch("/GetStartedData.json").then((res) => res.json());
  const [activeTab, setActiveTab] = useState("products");
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  return (
    <>
      <Navbar />
      <Banner />
      <StatSection />
      <Tab
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        cartItems={cartItems}
      />
      {activeTab === "products" && (
        <Suspense
          fallback={<span className="loading loading-dots loading-xl"></span>}
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
      <Suspense
        fallback={<span className="loading loading-dots loading-xl"></span>}
      >
        <GetStarted getStartedData={getStartedData}></GetStarted>
      </Suspense>
    </>
  );
}

export default App;
