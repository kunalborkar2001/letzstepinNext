"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "../utils/cn";
import Link from "next/link";

export function NavbarDemo() {
    return (
        <div className="relative w-full flex items-center justify-center">
            <Navbar className="top-2" />
        </div>
    );
}

function Navbar({ className }) {
    const [active, setActive] = useState(null);
    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
        >
            <Menu setActive={setActive}>

                <Link href="/"><MenuItem setActive={setActive} active={active} item="Home" /></Link>
                <MenuItem setActive={setActive} active={active} item="Services">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/">3D View</HoveredLink>
                        <HoveredLink href="/">Category insights</HoveredLink>
                        <HoveredLink href="/">Collections</HoveredLink>
                        <HoveredLink href="/">Branding</HoveredLink>
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Categories">
                    <div className="  text-sm grid gird-cols-1 md:grid-cols-2 gap-10 p-4">
                        <ProductItem
                            title="Fitness"
                            href="/fitness"
                            src="https://plus.unsplash.com/premium_photo-1664109999537-088e7d964da2?q=80&w=3271&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            description="Prepare for tech interviews like never before."
                        />
                        <ProductItem
                            title="Banquet"
                            href="/banquet"
                            src="https://images.unsplash.com/photo-1572319663329-ac47c4efdef0?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            description="Production ready Tailwind css components for your next project"
                        />
                        <ProductItem
                            title="Real-Estate"
                            href="/realestate"
                            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFJlYWwlMjBFc3RhdGV8ZW58MHx8MHx8fDA%3D"
                            description="Never write from scratch again. Go from idea to blog in minutes."
                        />
                        <ProductItem
                            title="Education"
                            href="education"
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZWR1Y2F0aW9ufGVufDB8fDB8fHww"
                            description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                        />
                        <ProductItem
                            title="Hotels"
                            href="/hotels"
                            src="https://images.unsplash.com/photo-1590447158019-883d8d5f8bc7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D"
                            description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                        />
                        <ProductItem
                            title="Co-Working"
                            href="/coworking"
                            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y28lMjB3b3JraW5nfGVufDB8fDB8fHww"
                            description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                        />
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Location">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/">Pune</HoveredLink>
                        <HoveredLink href="/">Mumbai</HoveredLink>
                        <HoveredLink href="/">Bangalore</HoveredLink>
                        <HoveredLink href="/">Chennai</HoveredLink>
                        <HoveredLink href="/">Goa</HoveredLink>
                    </div>
                </MenuItem>
            </Menu>
        </div>
    );
}
