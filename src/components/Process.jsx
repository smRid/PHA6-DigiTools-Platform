import React from "react";
import { User, Package, Rocket } from "lucide-react";

const Process = () => {
  return (
    <section id="steps" className="py-30 px-6 bg-[#F9FAFC]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3">
            Get Started In 3 Steps
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>
        {/* Create Account */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative bg-white rounded-2xl p-8 flex flex-col items-center text-center border border-[#F1F1F1] shadow">
            <span className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white text-xs font-bold flex items-center justify-center">
              01
            </span>
            <div className="w-[100px] h-[100px] rounded-full bg-purple-100 flex items-center justify-center mb-5">
              <User className="w-15 h-15 text-[#4F39F6]" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Create Account
            </h3>
            <p className="text-base text-[#627382] leading-relaxed">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>

          {/* Choose Products */}
          <div className="relative bg-white rounded-2xl p-8 flex flex-col items-center text-center border border-[#F1F1F1] shadow">
            <span className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white text-xs font-bold flex items-center justify-center">
              02
            </span>
            <div className="w-[100px] h-[100px] rounded-full bg-purple-100 flex items-center justify-center mb-5">
              <Package className="w-15 h-15 text-[#4F39F6]" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Choose Products
            </h3>
            <p className="text-base text-[#627382] leading-relaxed">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>

          {/* Start Creating */}
          <div className="relative bg-white rounded-2xl p-8 flex flex-col items-center text-center border border-[#F1F1F1] shadow">
            <span className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white text-xs font-bold flex items-center justify-center">
              03
            </span>
            <div className="w-[100px] h-[100px] rounded-full bg-purple-100 flex items-center justify-center mb-5">
              <Rocket className="w-15 h-15 text-[#4F39F6]" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Start Creating
            </h3>
            <p className="text-base text-[#627382]leading-relaxed">
              Download and start using your premium tools immediately.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
