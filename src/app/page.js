'use client'

import Image from "next/image";
import { NavbarDemo } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { NextUIProvider } from "@nextui-org/react";
import InfiniteMovingCard from "./components/InfiniteMovingCards";


export default function Home() {
  return (
    <NextUIProvider>
      <main className="w-full">
        <NavbarDemo />
        <HeroSection />
        <div className="w-full bg-black">
        <InfiniteMovingCard />
        </div>
      </main>
    </NextUIProvider>
  );
}
