import { RiFocus2Fill } from "react-icons/ri";
import bannerImg from "../assets/banner.png";
import playImg from "../assets/Play.png";

const Banner = () => {
  return (
    <div>
      <div className="hero my-12 lg:my-20">
        <div className="hero-content flex flex-col md:flex-row lg:flex-row-reverse mx-auto gap-10 lg:gap-16 items-center">
          <img src={bannerImg} className="max-w-full sm:max-w-sm lg:max-w-lg rounded-lg" />
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
  );
};

export default Banner;
