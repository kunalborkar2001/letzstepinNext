'use client'

import Image from "next/image";
import { NavbarDemo } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { NextUIProvider } from "@nextui-org/react";


export default function Home() {
  return (
    <NextUIProvider>
      <main className="w-full">
        <NavbarDemo />
        <HeroSection />
        
      </main>
    </NextUIProvider>
  );
}
