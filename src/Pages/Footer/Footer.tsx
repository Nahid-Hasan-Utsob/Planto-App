import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1f2d1c]/30 backdrop-blur-md text-white py-8 px-5 sm:px-8 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10 md:gap-8">
        {/* 🌱 Logo & Description */}
        <div className="flex-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center">
              <span className="text-xl sm:text-2xl">🌱</span>
            </div>
            <span className="font-bold text-base sm:text-lg">Planto.</span>
          </div>
          <p className="text-white/70 text-[10px] sm:text-[12px] md:text-[14px] leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* 🔗 Quick Links */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="font-semibold text-white mb-2 sm:mb-3 text-[12px] sm:text-[14px] md:text-[15px]">
            Quick Link's
          </h3>
          <ul className="flex flex-col gap-1 sm:gap-2 text-white/70 text-[10px] sm:text-[12px] md:text-[14px]">
            <li className="hover:text-white transition cursor-pointer">Home</li>
            <li className="hover:text-white transition cursor-pointer">Type's Of plant's</li>
            <li className="hover:text-white transition cursor-pointer">Contact</li>
            <li className="hover:text-white transition cursor-pointer">Privacy</li>
          </ul>
        </div>

        {/* 📨 Newsletter */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="font-semibold text-white mb-2 sm:mb-3 text-[12px] sm:text-[14px] md:text-[15px]">
            For Every Update.
          </h3>

          <div className="flex justify-center md:justify-start gap-2 max-w-xs mx-auto md:mx-0">
            <input
              type="email"
              placeholder="Enter Email"
              className="flex-1 px-3 py-1.5 sm:py-2 rounded-l-md bg-white/10 placeholder-white/60 text-white text-[10px] sm:text-[12px] md:text-[13px] focus:outline-none"
            />
            <button className="bg-white text-black font-semibold px-3 sm:px-4 text-[10px] sm:text-[12px] md:text-[13px] rounded-r-md hover:bg-white/90 transition">
              SUBSCRIBE
            </button>
          </div>

          {/* 🌐 Social Links */}
          <div className="flex justify-center md:justify-start gap-3 sm:gap-4 mt-4 text-white/70 text-[10px] sm:text-[12px] md:text-[13px]">
            <span className="hover:text-white cursor-pointer">FB</span>
            <span className="hover:text-white cursor-pointer">TW</span>
            <span className="hover:text-white cursor-pointer">LI</span>
          </div>
        </div>
      </div>

      {/* ⚡ Footer Bottom */}
      <div className="mt-8 text-center text-white/50 text-[10px] sm:text-[12px] md:text-[13px]">
        planto © all right reserve
      </div>
    </footer>
  );
};

export default Footer;
