import React from "react";

const Workflow = () => {
  return (
    <section className="bg-gradient-to-r from-[#4F39F6] to-purple-500 text-white text-center py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Ready To Transform Your Workflow?
        </h2>
        <p className="text-white text-base mb-8">
          Join thousands of professionals who are already using DigiTools to
          work smarter. Start your free trial today.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-white text-[#4F39F6] font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors text-sm shadow-lg">
            Explore Products
          </button>
          <button className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-colors text-sm">
            View Pricing
          </button>
        </div>
        <p className="text-white text-xs mt-5">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default Workflow;
