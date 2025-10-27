
const ReviewCard: React.FC = () => {
  return (
  
      <div className="relative w-[300px] h-[200px] p-3">
        <svg
          viewBox="0 0 450 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            <linearGradient
              id="glassGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                style={{
                  stopColor: "rgba(255,255,255,0.2)",
                  stopOpacity: 1,
                }}
              />
              <stop
                offset="100%"
                style={{
                  stopColor: "rgba(255,255,255,0.05)",
                  stopOpacity: 1,
                }}
              />
            </linearGradient>

            <filter id="glassBlur">
              <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
              <feOffset dx="0" dy="0" result="offsetblur" />
              <feFlood
                floodColor="rgba(0,0,0,0.1)"
                floodOpacity="1"
                result="flood"
              />
              <feComposite
                in="flood"
                in2="offsetblur"
                operator="in"
                result="shadow"
              />
              <feMerge>
                <feMergeNode in="shadow" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* SVG Glass Card Path */}
          <path
            d="M50 0 C 150 20, 300 20, 400 0 
              L400 0 A50 50 0 0 1 450 50 
              V250 A50 50 0 0 1 400 300 
              H50 A50 50 0 0 1 0 250 
              V50 A50 50 0 0 1 50 0 Z"
            fill="url(#glassGradient)"
            stroke="rgba(255, 255, 255, 0.3)"
            strokeWidth="1.5"
            filter="url(#glassBlur)"
          />
        </svg>

        {/* Text and Rating Section */}
     <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white ">
  <h2 className="text-2xl font-bold m-0">Awesome Product</h2>
  <div className="flex justify-center gap-1 mt-2">
    <span className="text-yellow-400 text-xl">★</span>
    <span className="text-yellow-400 text-xl">★</span>
    <span className="text-yellow-400 text-xl">★</span>
    <span className="text-yellow-400 text-xl">★</span>
    <span className="text-yellow-400 text-xl opacity-50">★</span>
  </div>
</div>

      </div>

  );
};

export default ReviewCard;
