import React from "react";
import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#101727] text-gray-400 px-6 md:px-10 pt-30 pb-8">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 mb-10">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <p className="text-white text-4xl font-extrabold mb-3">DigiTools</p>
          <p className="text-sm leading-relaxed text-gray-400">
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </div>

        {/* Product */}
        <div>
          <h4 className="text-white font-medium text-[20px] mb-4">Product</h4>
          <ul className="space-y-2 text-base">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Templates
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Integrations
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white font-medium text-[20px] mb-4">Company</h4>
          <ul className="space-y-2 text-base">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Press
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-white font-medium text-[20px] mb-4">Resources</h4>
          <ul className="space-y-2 text-base">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Documentation
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Community
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-4">
            Social Links
          </h4>
          <div className="flex gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-8 h-8 rounded-full bg-gray-700 hover:bg-primary flex items-center justify-center text-white transition-colors"
            >
              <FaSquareInstagram />
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-8 h-8 rounded-full bg-gray-700 hover:bg-primary flex items-center justify-center text-white transition-colors"
            >
              <FaSquareFacebook />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X / Twitter"
              className="w-8 h-8 rounded-full bg-gray-700 hover:bg-primary flex items-center justify-center text-white transition-colors"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t max-w-7xl mx-auto border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-gray-500">
        <p>©2026 DigiTools. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
