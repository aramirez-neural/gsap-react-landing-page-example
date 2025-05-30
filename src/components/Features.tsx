import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Features() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        gsap.from(".feature-title", {
          scrollTrigger: {
            trigger: ".feature-title",
            start: "top 80%",
          },
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        });

        gsap.from(".feature-subtitle", {
          scrollTrigger: {
            trigger: ".feature-subtitle",
            start: "top 80%",
          },
          y: 30,
          opacity: 0,
          duration: 0.8,
          delay: 0.1,
          ease: "power3.out",
        });

        gsap.from(".feature-item", {
          scrollTrigger: {
            trigger: container.current,
            start: "top 85%",
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
        });
      }, container);

      return () => ctx.revert(); // Limpia animaciones al desmontar
    },
    { scope: container }
  );

  return (
    <section ref={container} className="py-24 bg-gray-50 text-gray-900">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="feature-title text-3xl md:text-4xl font-bold mb-4">
          ¿Por qué elegirnos?
        </h2>
        <p className="feature-subtitle text-lg text-gray-600 mb-12">
          Te ofrecemos una experiencia completa y moderna adaptada a tus
          necesidades.
        </p>

        <div className="grid gap-10 md:grid-cols-3 text-left">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="feature-item flex items-start space-x-4">
              <CheckCircle className="w-8 h-8 text-black mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-1">
                  {i === 0
                    ? "Diseño profesional"
                    : i === 1
                    ? "Rendimiento optimizado"
                    : "Tecnología actual"}
                </h3>
                <p className="text-gray-600">
                  {i === 0
                    ? "Interfaces limpias, modernas y centradas en la experiencia del usuario."
                    : i === 1
                    ? "Carga rápida y adaptabilidad en cualquier dispositivo y conexión."
                    : "Usamos herramientas modernas como React, GSAP y Tailwind para darte lo mejor."}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
