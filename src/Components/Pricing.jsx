const Pricing = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto py-12 md:py-20 lg:py-[120px]">
        <h1 className="text-3xl lg:text-5xl font-extrabold text-center text-[#101727FF] mb-4">
          Simple, Transparent Pricing
        </h1>
        <p className="py-4 text-[#627382FF] text-center mb-10">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>

        <div className="card-container flex flex-col lg:flex-row gap-8 justify-items-center">

          <div className="card w-sm mx-auto bg-[#f9fafcFF] rounded-2xl border border-[#f2f2f2FF] p-6 shadow-sm transition-all duration-300 hover:scale-[1.01] hover:shadow-xl">
            <div className="card-body p-0 flex flex-col">
              <h2 className="text-2xl text-[#101727FF] font-bold">Starter</h2>
              <p className="text-base text-[#627382FF]">
                Perfect for getting started
              </p>
              <p className="text-base text-[#627382FF] my-6">
                <span className="text-2xl font-bold text-[#101727FF] grow-0 self-auto">$0</span>
                /month
              </p>
              <ul className="flex flex-col gap-2 text-base font-medium text-[#627382FF] self-stretch">
                <li>
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
                  <span>Access to 10 free tools</span>
                </li>
                <li>
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
                  <span>Basic templates</span>
                </li>
                <li>
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
                  <span>Community support</span>
                </li>
                <li>
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
                  <span>1 project per month</span>
                </li>
              </ul>
              <div className="mt-6">
                <button
                  className="btn btn-block rounded-[100px] bg-gradient-to-b from-[#4f39f6] to-[#9514fa] text-white px-4 py-3 font-bold border-none mt-auto"
                >
                  Get Started Free
                </button>
              </div>
            </div>
          </div>
          <div className="card relative w-sm mx-auto bg-gradient-to-b from-[#4f39f6] to-[#9514fa] rounded-2xl border border-[#f2f2f2FF] p-6 mb-2 shadow-sm transition-all duration-300 hover:scale-[1.01] hover:shadow-xl">
            <span
            className="badge badge-xs absolute -top-2.5 left-[135px] text-[#bb4d00FF] bg-[#fef3c6FF] rounded-[1000px] text-sm font-semibold border-0 px-3.5 py-3 flex justify-center items-center"
          >
            Most Popular
          </span>
            <div className="card-body p-0">
              <h2 className="text-2xl text-white font-bold">Pro</h2>
              <p className="text-base text-white">
                Best for professionals
              </p>
              <p className="text-base text-white">
                <span className="text-2xl font-bold text-white">$29</span>
                /month
              </p>
              <ul className="flex flex-col gap-2 text-base font-medium text-white">
                <li>
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
                  <span>Access to all premium tools</span>
                </li>
                <li>
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
                  <span>Unlimited templates</span>
                </li>
                <li>
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
                  <span>Priority support</span>
                </li>
                <li>
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
                  <span>Unlimited projects</span>
                </li>
                <li>
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
                  <span>Cloud sync</span>
                </li>
                <li>
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
                  <span>Advanced analytics</span>
                </li>
              </ul>
              <div className="mt-6">
                <button
                  className="btn btn-block rounded-[100px] bg-white text-[#4F39F6] px-4 py-3 font-bold border-none"
                >
                  Start Pro Trial
                </button>
              </div>
            </div>
          </div>
          <div className="card w-sm mx-auto bg-[#f9fafcFF] rounded-2xl border border-[#f2f2f2FF] p-6 shadow-sm transition-all duration-300 hover:scale-[1.01] hover:shadow-xl">
            <div className="card-body p-0">
              <h2 className="text-2xl text-[#101727FF] font-bold">Enterprise</h2>
              <p className="text-base text-[#627382FF]">
                For teams and businesses
              </p>
              <p className="text-base text-[#627382FF]">
                <span className="text-2xl font-bold text-[#101727FF]">$99</span>
                /month
              </p>
              <ul className="flex flex-col gap-2 text-base font-medium text-[#627382FF]">
                <li>
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
                  <span>Everything in Pro</span>
                </li>
                <li>
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
                  <span>Team collaboration</span>
                </li>
                <li>
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
                  <span>Custom integrations</span>
                </li>
                <li>
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
                  <span>Dedicated support</span>
                </li>
                <li>
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
                  <span>SLA guarantee</span>
                </li>
                <li>
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
                  <span>Custom branding</span>
                </li>
              </ul>
              <div className="mt-6">
                <button
                  className="btn btn-block rounded-[100px] bg-gradient-to-b from-[#4f39f6] to-[#9514fa] text-white px-4 py-3 font-bold border-none"
                >
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
          

        </div>
      </div>
    </div>
  );
};

export default Pricing;
