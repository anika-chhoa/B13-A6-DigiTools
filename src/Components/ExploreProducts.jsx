const ExploreProducts = () => {
  return (
    <div>
      <div className="py-12 md:py-20 lg:py-[120px] bg-gradient-to-b from-[#4f39f6] to-[#9514fa] text-white">
        <h1 className="text-3xl lg:text-[40px] font-extrabold text-center mb-4">
          Ready to Transform Your Workflow?
        </h1>
        <p className="py-4 text-center mb-10">
          Join thousands of professionals who are already using Digitools to
          work smarter. <br /> Start your free trial today.
        </p>
        <div className="flex justify-center items-center gap-4 mb-4">
          <button className="btn bg-white text-[#4F39F6] p-4 rounded-[1000px] font-semibold shadow-none hover:bg-[#7362f7] hover:text-white transition">
            Explore Products
          </button>
          <button className="btn text-white p-4 rounded-[1000px] font-semibold bg-transparent border border-white shadow-none hover:bg-[#6f5df9] hover:text-white transition">
            View Pricing
          </button>
        </div>
        <p className="text-center">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </div>
  );
};

export default ExploreProducts;
