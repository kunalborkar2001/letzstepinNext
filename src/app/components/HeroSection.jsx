"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";

export function HeroSection() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Muscle Haven",
    link: "/fitness",
    thumbnail:
      "https://plus.unsplash.com/premium_photo-1664109999537-088e7d964da2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zml0bmVzc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "FitZone X",
    link: "/fitness",
    thumbnail:
      "https://images.unsplash.com/photo-1679679008578-e3b6406bdb47?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8OHx8Zml0bmVzc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Luxury Villa",
    link: "/realestate",
    thumbnail:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D",
  },

  {
    title: "Modern Apartment",
    link: "/realestate",
    thumbnail:
      "https://plus.unsplash.com/premium_photo-1675324517011-24d2c741c22f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Elegant Ballroom",
    link: "/banquet",
    thumbnail:
      "https://images.unsplash.com/photo-1572319663329-ac47c4efdef0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFucXVldHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Grand Hall",
    link: "/banquet",
    thumbnail:
      "https://images.unsplash.com/photo-1561593367-66c79c2294e6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJhbnF1ZXR8ZW58MHx8MHx8fDA%3D",
  },

  {
    title: "Seaside Banquet",
    link: "/banquet",
    thumbnail:
      "https://plus.unsplash.com/premium_photo-1661774645265-ce387923cb5b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJhbnF1ZXR8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "TechHub",
    link: "/coworking",
    thumbnail:
      "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y28lMjB3b3JraW5nfGVufDB8fDB8fHww",
  },
  {
    title: "Innovate CoLab",
    link: "/coworking",
    thumbnail:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y28lMjB3b3JraW5nfGVufDB8fDB8fHww",
  },
  {
    title: "SmartBridge",
    link: "/coworking",
    thumbnail:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y28lMjB3b3JraW5nfGVufDB8fDB8fHww",
  },
  {
    title: "Elite Academy",
    link: "/education",
    thumbnail:
      "https://plus.unsplash.com/premium_photo-1661947876256-b44c1bfc04d2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWR1Y2F0aW9ufGVufDB8fDB8fHww",
  },

  {
    title: "Bright Minds School",
    link: "/education",
    thumbnail:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWR1Y2F0aW9ufGVufDB8fDB8fHww",
  },
  {
    title: "Creative Learning Center",
    link: "/education",
    thumbnail:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZWR1Y2F0aW9ufGVufDB8fDB8fHww",
  },
  {
    title: "Luxury Palace",
    link: "/hotels",
    thumbnail:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww",
  },
  {
    title: "Grand Resort",
    link: "/hotels",
    thumbnail:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D",
  },
];
