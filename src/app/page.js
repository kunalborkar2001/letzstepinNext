import Image from "next/image";
import { NavbarDemo } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";

export default function Home() {
  return (
    <main className="w-full">
      <NavbarDemo />
      <HeroSection />
    </main>
  );
}
