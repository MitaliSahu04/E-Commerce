import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";

function Carousel({ slides}) {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);
  const DURATION = 4000;

  const goTo = useCallback(
    (index) => {
      setCurrent((index + slides.length) % slides.length);
    },
    [slides.length]
  );

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, DURATION);
    return () => clearInterval(timerRef.current);
  }, [slides.length]);

  const pauseTimer = () => clearInterval(timerRef.current);

  const resumeTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, DURATION);
  };

  return (
    <div className="relative w-full overflow-hidden rounded-2xl bg-[#1A1A2E] select-none"
      style={{ height: "520px" }}
      onMouseEnter={pauseTimer}
      onMouseLeave={resumeTimer}>
  <div
        className="flex h-full"
        style={{ transform: `translateX(-${current * 100}%)`, transition: "transform 0.55s cubic-bezier(.4,0,.2,1)" }}
      >
       {slides.map((slide, i) => (
          <div key={i} className="min-w-full h-full relative flex-shrink-0">
            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover object-center opacity-65" />

            {/* Gradients */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A2E]/80 via-[#1A1A2E]/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E]/70 via-transparent to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 p-7 md:p-10 max-w-md">
              {/* Ribbon badge */}
              <span
                className={`inline-block text-[10px] tracking-[.18em] uppercase font-bold py-1.5 pl-3 pr-5 mb-3 ${slide.badgeStyle}`}
                style={{ clipPath: "polygon(0 0,100% 0,92% 100%,0 100%)", fontFamily: "'Syne',sans-serif" }}
              >
                {slide.badge}
              </span>

              <h2
                className="text-white text-2xl md:text-4xl font-extrabold leading-tight mb-2"
                style={{ fontFamily: "'Syne',sans-serif" }}
              >
                {slide.title}
              </h2>
              <p className="text-white/60 text-sm md:text-base mb-5 leading-relaxed">{slide.subtitle}</p>
               <a
                href={slide.href}
                className={`inline-block text-[11px] font-semibold tracking-wider uppercase px-6 py-2.5 rounded-full ${slide.ctaStyle}`}
              >
                {slide.cta}
              </a>
            </div>
          </div>
        ))}

         <button
        onClick={() => goTo(current - 1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-colors z-10"
      >
        ←
      </button>
      <button
        onClick={() => goTo(current + 1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-colors z-10"
      >
        →
      </button>


      <div className="absolute bottom-5 right-7 flex gap-1.5 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-[#FF6B6B]" : "w-1.5 bg-white/35"}`}
          />
        ))}
      </div>

      <div
        key={current}
        className="absolute bottom-0 left-0 h-[3px] bg-[#FF6B6B] z-10"
        style={{ animation: `progress ${DURATION}ms linear forwards` }}
      />

       <style>{`
        @keyframes progress { from { width: 0% } to { width: 100% } }
      `}</style>
  </div>
  </div>
  );
}

export default Carousel;