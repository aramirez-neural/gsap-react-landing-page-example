import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo / Marca */}
        <div>
          <h2 className="text-2xl font-bold mb-2">MyLanding</h2>
          <p className="text-gray-400 text-sm">
            Construyendo experiencias digitales que inspiran.
          </p>
        </div>

        {/* Enlaces rápidos */}
        <div className="flex flex-col space-y-2">
          <a
            href="#features"
            className="text-gray-300 hover:text-white transition"
          >
            Características
          </a>
          <a
            href="#about"
            className="text-gray-300 hover:text-white transition"
          >
            Nosotros
          </a>
          <a
            href="#pricing"
            className="text-gray-300 hover:text-white transition"
          >
            Precios
          </a>
          <a
            href="#contact"
            className="text-gray-300 hover:text-white transition"
          >
            Contacto
          </a>
        </div>

        {/* Redes sociales */}
        <div>
          <p className="mb-4 text-gray-400 text-sm">Síguenos</p>
          <div className="flex space-x-4">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-blue-500 transition"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-blue-400 transition"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-pink-500 transition"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-blue-300 transition"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} MyLanding. Todos los derechos reservados.
      </div>
    </footer>
  );
}
