import { RiFocus2Fill } from "react-icons/ri";
import bannerImg from "../assets/banner.png";
import playImg from "../assets/Play.png";

const Banner = () => {
  return (
    <div>
      <div className="hero my-12 lg:my-20">
        <div className="hero-content flex flex-col md:flex-row lg:flex-row-reverse mx-auto gap-10 lg:gap-16">
          <img src={bannerImg} className="max-w-sm rounded-lg" />
          <div>
            <div className="flex items-center gap-1.5 bg-[#e1e7ffFF] rounded-[1000px] py-2 px-4 w-fit mb-6">
              <RiFocus2Fill className="text-[#4F39F6]" />
              <p className="text-[#4F39F6] font-medium">
                New: AI-Powered Tools Available
              </p>
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-[#101727FF] mb-4">
              Supercharge Your Digital Workflow
            </h1>
            <p className="py-6 text-lg mb-8 text-[#627382FF]">
              Access premium AI tools, design assets, templates, and
              productivity <br /> software—all in one place. Start creating
              faster today.
              <br /> Explore Products
            </p>
            <div className="space-x-4">
              <button className="btn bg-gradient-to-b from-[#4f39f6] to-[#9514fa] text-white p-4 rounded-[1000px] font-semibold border-none">
                Explore Products
              </button>
              <button className="btn text-[#4F39F6] p-4 rounded-[1000px] font-semibold border border-[#4F39F6] hover:bg-[#4F39F6] hover:text-white transition">
                <img src={playImg} alt="" />
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div>
    //   <div className="w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-[60px]">
    //     <div className="w-full lg:w-1/2 flex justify-center">
    //       <img className="w-full max-w-md lg:max-w-full" src="/public/banner.png" alt="" />
    //     </div>
    //     <div className="w-full lg:w-1/2 text-center lg:text-left">
    //       <h1 className="text-3xl lg:text-7xl font-extrabold text-[#101727FF]">
    //         Supercharge Your Digital Workflow
    //       </h1>
    //       <p className="py-6 text-base lg:text-lg">
    //         Access premium AI tools, design assets, templates, and productivity
    //         software—all in one place. Start creating faster today.
    //         <br /> Explore Products
    //       </p>
    //       <button className="btn btn-primary">Get Started</button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Banner;
