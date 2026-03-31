const Tab = ({ activeTab, setActiveTab, cartItems }) => {
  return (
    <div>
      <h1 className="text-3xl lg:text-5xl font-extrabold text-center text-[#101727FF] mb-4">
        Premium Digital Tools
      </h1>
      <p className="py-4 mb-4 text-[#627382FF] text-center">
        Choose from our curated collection of premium digital products designed{" "}
        <br />
        to boost your productivity and creativity.
      </p>

      {/* Tabs */}
      <div className="tabs tabs-box justify-center bg-white shadow-none">
        <div className="bg-white border border-gray-200 w-fit rounded-[1000px] p-1">
          <input
            type="radio"
            name="my_tabs_1"
            onClick={()=>setActiveTab("products")}
            className={`tab ${activeTab==="products" ? "bg-gradient-to-b from-[#4f39f6] to-[#9514fa] text-white":"bg-white text-[#25065dFF]"} rounded-[1000px] font-bold`}
            aria-label="Products"
          />
          <input
            type="radio"
            name="my_tabs_1"
            onClick={()=>setActiveTab("carts")}
            className={`tab ${activeTab==="carts" ? "bg-gradient-to-b from-[#4f39f6] to-[#9514fa] text-white":"bg-white text-[#25065dFF]"} rounded-[1000px] font-bold`}
            // aria-label={cartItems.length>0?`Cart(${cartItems.length})`:`Cart`}
            aria-label={`Cart(${cartItems.length})`}
          />
        </div>
      </div>
    </div>
    // <div>
    //   <h1 className="text-3xl lg:text-5xl font-extrabold text-center text-[#101727FF] mb-4">
    //     Premium Digital Tools
    //   </h1>
    //   <p className="py-4 mb-4 text-[#627382FF] text-center">
    //     Choose from our curated collection of premium digital products designed{" "}
    //     <br />
    //     to boost your productivity and creativity.
    //   </p>

    //   {/* Tabs */}
    //   <div className="tabs tabs-box justify-center bg-white shadow-none">
    //     <div className="bg-white border border-gray-200 w-fit rounded-[1000px] p-1">
    //       {/* <input
    //         type="radio"
    //         name="my_tabs_1"
    //         onClick={()=>setActiveTab("products")}
    //         className="tab"
    //         aria-label="Products"
    //         defaultChecked
    //       /> */}
    //       <button
    //         onClick={() => setActiveTab("products")}
    //         className={`btn ${activeTab === "products" ? "bg-gradient-to-b from-[#4f39f6] to-[#9514fa] text-white" : "bg-white text-black"} rounded-[1000px] font-semibold`}
    //       >
    //         Products
    //       </button>
    //       <button
    //         onClick={() => setActiveTab("products")}
    //         className={`btn ${activeTab === "carts" ? "bg-gradient-to-b from-[#4f39f6] to-[#9514fa] text-white" : "bg-white text-black"} rounded-[1000px] font-semibold`}
    //       >
    //         Carts
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Tab;
