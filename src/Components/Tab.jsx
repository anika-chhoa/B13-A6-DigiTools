const Tab = () => {
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
          className="tab bg-gradient-to-b from-[#4f39f6] to-[#9514fa] text-white rounded-[1000px] font-semibold border-none"
          aria-label="Products"
          defaultChecked
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab font-semibold bg-white border-0 shadow-0"
          aria-label="Cart"
        />
        </div>
      </div>
    </div>
  );
};

export default Tab;
