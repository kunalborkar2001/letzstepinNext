"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export default function InfiniteMovingCard() {
    return (
        <div className="h-[40rem] rounded-md flex flex-col antialiased  dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
            />
        </div>
    );
}

const testimonials = [
    {
        quote:
            "I've never experienced such exceptional service before. Every interaction with the team left me impressed and satisfied.",
        name: "Rajesh Patel",
        title: "CEO, ABC Company",
    },
    {
        quote:
            "The service provided exceeded all my expectations. I highly recommend this company to anyone looking for top-notch service.",
        name: "Priya Sharma",
        title: "Marketing Manager, XYZ Corporation",
    },
    {
        quote: "The professionalism and attention to detail displayed by the team were remarkable. I'm truly impressed.",
        name: "Amit Kumar",
        title: "CTO, Acme Inc.",
    },
    {
        quote:
            "From start to finish, the service was flawless. The team went above and beyond to ensure our needs were met.",
        name: "Neha Gupta",
        title: "COO, Summit Enterprises",
    },
    {
        quote:
            "Working with this company was a delight. Their dedication to customer satisfaction is evident in everything they do.",
        name: "Deepak Joshi",
        title: "Founder, Sunrise Technologies",
    },
];
