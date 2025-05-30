import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

export default function Header() {
  const container = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".header-content", {
        y: -80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    },
    { scope: container }
  );

  useGSAP(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className="absolute bottom-0 w-full left-1/2 -translate-x-1/2 z-100 py-4 hover:bg-white/10 transition-colors duration-300 hover:backdrop-blur-sm"
    >
      <nav className="text-sm m-auto flex justify-between items-center text-white w-2xl">
        <a href="#hero" className="hover:text-mint">
          Inicio
        </a>
        <a href="#features" className="hover:text-mint">
          Servicios
        </a>
        <a href="#testimonials" className="hover:text-mint">
          Opiniones
        </a>
        <a href="#contact" className="hover:text-mint">
          Contacto
        </a>
      </nav>
    </header>
  );
}
