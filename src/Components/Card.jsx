const Card = ({ product }) => {
  const tagStyles = {
    Popular: {
      bg: "bg-[#e1e7ffFF]",
      text: "text-[#4F39F6]",
    },
    "Best Seller": {
      bg: "bg-[#fef3c6FF]",
      text: "text-[#bb4d00FF]",
    },
    New: {
      bg: "bg-[#dbfce7FF]",
      text: "text-[#0a883eFF]",
    },
  };
  return (
    <div>
      <div className="card max-w-96 mx-auto bg-base-100 rounded-2xl relative border border-[#f2f2f2FF] p-6 transition-all duration-300 hover:scale-[1.01] hover:shadow-xl">
        {product.tag && (
          <span
            className={`badge badge-xs ${tagStyles[product.tagType].bg} ${tagStyles[product.tagType].text} rounded-full border-0 px-3 py-2 flex justify-center items-center absolute top-2 right-2`}
          >
            {product.tag}
          </span>
        )}
        <div className="w-[60px] h-[60px] border border-gray-200 rounded-full flex justify-center items-center">
          <span className="w-8 h-8 flex justify-center items-center">
            {product.icon}
          </span>
        </div>
        <div className="card-body p-0 mt-4">
          <h2 className="text-2xl text-[#101727FF] font-bold">
            {product.name}
          </h2>
          <p className="text-base text-[#627382FF]">{product.description}</p>
          <p className="text-base text-[#627382FF]">
            <span className="text-2xl font-bold text-[#101727FF]">
              ${product.price}
            </span>
            /{product.period}
          </p>
          <ul className="flex flex-col gap-2 text-base font-medium text-[#627382FF]">
            {product.features.map((feature, index) => {
              return (
                <li key={index}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{feature}</span>
                </li>
              );
            })}
          </ul>
          <div className="mt-6">
            <button className="btn btn-block rounded-[100px]  bg-gradient-to-b from-[#4f39f6] to-[#9514fa] text-white px-4 py-3 font-bold border-none">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
