import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import NeuralIntensiveLogo from "../assets/NeuralIntensiveLogo";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden"
    >
      {/* Video de fondo */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/video/hero-bg.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Filtro oscuro opcional */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-10" />

      {/* Contenido encima del video */}
      <div className="relative z-20 flex items-center flex-col justify-center gap-y-6 w-xl">
        <h2
          ref={titleRef}
          className="text-4xl md:text-6xl font-bold flex items-center justify-center text-white ml-4"
        >
          neural
          <span className="mx-2 -mb-1">
            <NeuralIntensiveLogo />
          </span>
          intensive
        </h2>

        <p ref={subtitleRef} className="text-lg md:text-xl text-gray-200 mr-6">
          vuelve a ser tu
        </p>

        <button
          ref={buttonRef}
          type="button"
          className="bg-mint px-4 py-2 rounded-full text-xs mr-6"
        >
          CONTÁCTANOS
        </button>
      </div>
    </section>
  );
}
