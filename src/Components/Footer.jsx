import { AiFillInstagram } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-[#101727FF] text-white w-full">
      <footer className="footer grid-cols-2 md:grid-cols-3 lg:grid-cols-5 max-w-7xl mx-auto px-6 lg:px-0 text-white pt-[120px] pb-[80px]">
        <nav>
          <a className="text-3xl text-white font-bold text-left">DigiTools</a>
          <p className="text-base">
            Premium digital tools for creators,
            <br /> professionals, and businesses. Work smarter <br /> with our
            suite of powerful tools.
          </p>
        </nav>
        <nav>
          <h6 className="text-xl font-medium text-white">Product</h6>
          <a className="link link-hover text-base">Features</a>
          <a className="link link-hover text-base">Pricing</a>
          <a className="link link-hover text-base">Templates</a>
          <a className="link link-hover text-base">Integrations</a>
        </nav>
        <nav>
          <h6 className="text-xl font-medium text-white">Company</h6>
          <a className="link link-hover text-base">About</a>
          <a className="link link-hover text-base">Blog</a>
          <a className="link link-hover text-base">Careers</a>
          <a className="link link-hover text-base">Press</a>
        </nav>
        <nav>
          <h6 className="text-xl font-medium text-white">Resources</h6>
          <a className="link link-hover text-base">Documentation</a>
          <a className="link link-hover text-base">Help Center</a>
          <a className="link link-hover text-base">Community</a>
          <a className="link link-hover text-base">Contact</a>
        </nav>
        <nav>
          <h6 className="text-xl font-medium text-white">Social Links</h6>
          <div className="flex gap-4">
            <a className="w-10 h-10 rounded-full bg-white flex justify-center items-center hover:bg-gray-100 transition-all border border-gray-200 hover:border-gray-300">
              <AiFillInstagram className="text-2xl text-gray-700" />
            </a>

            <a className="w-10 h-10 rounded-full bg-white flex justify-center items-center hover:bg-gray-100 transition-all border border-gray-200 hover:border-gray-300">
              <FaFacebookSquare className="text-2xl text-gray-700" />
            </a>

            <a className="w-10 h-10 rounded-full bg-white flex justify-center items-center hover:bg-gray-100 transition-all border border-gray-200 hover:border-gray-300">
              <BsTwitterX className="text-2xl text-gray-700" />
            </a>
          </div>
        </nav>
      </footer>
      <div className="max-w-7xl mx-auto  lg:px-0 text-white border-base-300 border-t border-[#e5e7ebFF] py-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-0 w-full">
          <p className="text-[#fafafaFF]">
            © 2026 Digitools. All rights reserved.
          </p>
          <div className="flex gap-2 lg:gap-3">
            <p className="text-[#fafafaFF]">Privacy Policy</p>
            <p className="text-[#fafafaFF]">Terms of Service</p>
            <p className="text-[#fafafaFF]">Cookies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
