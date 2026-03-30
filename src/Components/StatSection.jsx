const StatSection = () => {
  return (
    <div className="mb-16 lg:mb-28">
      <div className="stats stats-vertical md:stats-horizontal shadow w-full px-8 md:px-16 lg:px-52 py-8 lg:py-16 bg-gradient-to-b from-[#4f39f6] to-[#9514fa] rounded-none">
        <div className="stat max-w-96 mx-auto flex flex-col justify-center items-center border-0 lg:border-r lg:border-gray-400">
          <div className="stat-value text-4xl lg:text-6xl text-white">50K</div>
          <div className="stat-desc text-xl lg:text-2xl font-medium text-white mt-3">
            Active Users
          </div>
        </div>

        <div className="stat max-w-96 mx-auto flex flex-col justify-center items-center border-0 lg:border-r lg:border-gray-400">
          <div className="stat-value text-4xl lg:text-6xl text-white">200+</div>
          <div className="stat-desc text-xl lg:text-2xl font-medium text-white mt-3">
            Premium Tools
          </div>
        </div>

        <div className="stat max-w-96 mx-auto flex flex-col justify-center items-center">
          <div className="stat-value text-4xl lg:text-6xl text-white">4.9</div>
          <div className="stat-desc text-xl lg:text-2xl font-medium text-white mt-3">
            Rating
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatSection;
