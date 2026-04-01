import { Play } from "lucide-react";
import React from "react";
import bannerImg from "../../assets/banner.png";

const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row container mx-auto justify-around items-center gap-12 lg:mt-20 mt-4 p-2">
      <div className="space-y-5 animate-[fadeInUp_0.6s_ease-out_both]">
        <div className="flex items-center gap-3 bg-violet-100 rounded-full px-4 py-2.5 w-fit cursor-default hover:bg-violet-200/70 transition-colors duration-300 select-none">
          <span className="relative flex size-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75"></span>
            <span className="relative bg-violet-600 inline-flex size-3 rounded-full"></span>
          </span>
          <p className="text-violet-600 font-medium text-md">
            New: AI-Powered Tools Available
          </p>
        </div>
        <h1 className="text-4xl lg:text-7xl font-extrabold">
          Supercharge Your
          <br />
          Digital Workflow
        </h1>
        <p className="lg:text-lg text-black/60">
          Access premium AI tools, design assets, templates, and productivity
          software <br className="hidden lg:block" />
          all in one place. Start creating faster today.
        </p>
        <div className="flex items-center lg:gap-4 gap-3">
          <button className="bg-violet-600 hover:bg-violet-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-200 cursor-pointer shadow-lg shadow-violet-500/25 hover:shadow-xl hover:shadow-violet-500/35 hover:scale-[1.03] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2">
            Explore Products
          </button>
          <button className="flex items-center gap-2 rounded-full border-2 border-violet-600 text-violet-600 font-semibold hover:bg-violet-50 transition-all duration-200 cursor-pointer hover:scale-[1.03] active:scale-[0.98] hover:border-violet-700 hover:text-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-300 focus:ring-offset-2 group py-3 px-6">
            <Play
              size={16}
              fill="currentColor"
              className="transition-transform duration-200 group-hover:scale-110"
            />
            Watch Demo
          </button>
        </div>
      </div>
      <div className="animate-pulse">
        <img
          src={bannerImg}
          alt="DigiTools platform preview"
          className="drop-shadow-2xl select-none"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Banner;
