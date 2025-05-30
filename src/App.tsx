import Features from "./components/Features";
import Footer from "./components/Footer";
import GalleryCarousel from "./components/GalleryCarousel";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function App() {
  return (
    <div>
      <Header />

      <main>
        <Hero />
        <Features />
        <GalleryCarousel />
      </main>

      <Footer />
    </div>
  );
}
