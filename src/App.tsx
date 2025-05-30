import Features from "./components/Features";
import GalleryCarousel from "./components/GalleryCarousel";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function App() {
  return (
    <div className="text-2xl text-center text-blue-500">
      <Header />

      <main>
        <Hero />
        <Features />
        <GalleryCarousel />
      </main>
    </div>
  );
}
