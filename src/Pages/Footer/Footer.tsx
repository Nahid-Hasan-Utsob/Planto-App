// components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1f2d1c]/30 backdrop-blur-md text-white py-10 px-5 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        
        {/* Logo & Description */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10  rounded-full flex items-center justify-center">
              <span className="text-2xl">🌱</span>
            </div>
            <span className="font-bold text-lg">Planto.</span>
          </div>
          <p className="text-white/70 text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex-1">
          <h3 className="font-semibold text-white mb-3">Quick Link's</h3>
          <ul className="flex flex-col gap-2 text-white/70 text-sm">
            <li className="hover:text-white transition cursor-pointer">Home</li>
            <li className="hover:text-white transition cursor-pointer">Type's Of plant's</li>
            <li className="hover:text-white transition cursor-pointer">Contact</li>
            <li className="hover:text-white transition cursor-pointer">Privacy</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="flex-1">
          <h3 className="font-semibold text-white mb-3">For Every Update.</h3>
          <div className="flex gap-2 max-w-sm">
            <input
              type="email"
              placeholder="Enter Email"
              className="flex-1 px-4 py-2 rounded-l-md bg-white/10 placeholder-white/60 text-white focus:outline-none"
            />
            <button className="bg-white text-black font-semibold px-4 rounded-r-md hover:bg-white/90 transition">
              SUBSCRIBE
            </button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-6 text-white/70 text-sm">
            <span className="hover:text-white cursor-pointer">FB</span>
            <span className="hover:text-white cursor-pointer">TW</span>
            <span className="hover:text-white cursor-pointer">LI</span>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-white/50 text-sm">
        planto © all right reserve
      </div>
    </footer>
  );
};

export default Footer;
