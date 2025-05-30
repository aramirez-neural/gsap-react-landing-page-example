import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const images = [
  "https://picsum.photos/seed/1/400",
  "https://picsum.photos/seed/2/400",
  "https://picsum.photos/seed/3/400",
  "https://picsum.photos/seed/4/400",
  "https://picsum.photos/seed/5/400",
  "https://picsum.photos/seed/6/400",
  "https://picsum.photos/seed/7/400",
];

export default function GalleryCarousel() {
  const [index, setIndex] = useState(0);
  const refs = useRef<(HTMLImageElement | null)[]>([]);
  const galleryRef = useRef(null);

  const setRef = (el: HTMLImageElement | null, i: number) => {
    refs.current[i] = el;
  };

  useGSAP(
    () => {
      refs.current.forEach((el, i) => {
        if (!el) return;

        let offset = i - index;
        if (offset > Math.floor(images.length / 2)) {
          offset -= images.length;
        } else if (offset < -Math.floor(images.length / 2)) {
          offset += images.length;
        }

        const baseX = 300;
        const x = offset * baseX * (1 - Math.abs(offset) * 0.15);
        let scale = 1;
        let opacity = 1;
        let z = 10 - Math.abs(offset);
        let blur = 0;

        if (offset === 0) {
          scale = 1;
          opacity = 1;
          blur = 0;
        } else if (Math.abs(offset) === 1) {
          scale = 0.8;
          opacity = 0.5;
          blur = 2;
        } else if (Math.abs(offset) === 2) {
          scale = 0.6;
          opacity = 0.3;
          blur = 6;
        } else {
          scale = 0.3;
          opacity = 0;
          blur = 10;
          z = 0;
        }

        gsap.to(el, {
          x,
          scale,
          opacity,
          zIndex: z,
          filter: `blur(${blur}px)`,
          duration: 0.8,
          ease: "power2.out",
        });
      });
    },
    { dependencies: [index], scope: galleryRef }
  );

  // rotar cada 3 segundos
  useGSAP(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={galleryRef} className="py-20 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-8">Galería Destacada</h2>
      <div className="relative flex justify-center items-center h-[300px] md:h-[500px] overflow-hidden">
        {images.map((src, i) => (
          <img
            key={i}
            ref={(el) => setRef(el, i)}
            src={src}
            alt={`Slide ${i + 1}`}
            className="absolute w-72 h-86 object-cover rounded-lg shadow-lg"
            style={{
              transition: "transform 0.8s ease, opacity 0.8s ease",
              willChange: "transform, opacity, filter",
            }}
          />
        ))}
      </div>
    </section>
  );
}
