const GetStartedItem = ({ getStartedItem }) => {
  return (
    <div>
      <div
        className="bg-white border border-[#f1f1f1FF] rounded-2xl p-6 transition-all duration-300 ease-in-out hover:shadow-xl"
      >
        <div className="flex justify-end mb-[30px]">
          <button className="btn bg-gradient-to-b from-[#4f39f6] to-[#9514fa] text-white px-3 py-1.5 rounded-full text-sm font-bold border-none">
            {getStartedItem.step}
          </button>
        </div>
        <div className="w-[100px] h-[100px] mx-auto rounded-full bg-[#e1e7ffFF] flex justify-center items-center">
          <img
            className="w-[60px] h-[60px] mx-auto"
            src={getStartedItem.image}
            alt=""
          />
        </div>
        <h2 className="text-2xl text-[#101727FF] font-bold my-4 text-center">
          {getStartedItem.title}
        </h2>
        <p className="text-base text-[#627382FF] mb-[90px] text-center">
          {getStartedItem.description}
        </p>
      </div>
    </div>
  );
};

export default GetStartedItem;
