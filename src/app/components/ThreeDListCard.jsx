"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import ContactModal from "./ContactModal"
import Link from "next/link";


export default function ThreeDListCard({name, location, image, price, contentData}) {
    
    return (
        <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto  h-auto rounded-xl p-6 border  sm:w-[25rem]">
                <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                    {name}
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                    {location}
                </CardItem>
                    <CardItem translateZ="100" className="w-full mt-4">
                <Link href={{ pathname: '/listdetails/kunal', query: { contentData: JSON.stringify(contentData) } }}>
                        <Image
                            src={image}
                            height="1000"
                            width="1000"
                            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                            alt="thumbnail"
                        />
                </Link>
                    </CardItem>

                <div className="flex justify-between items-center mt-20">
                    <CardItem
                        translateZ={20}
                        as="button"
                        className=" rounded-full text-[1rem] font-normal text-black bg-blue-200 hover:bg-blue-500"
                    >
                        <ContactModal />
                    </CardItem>
                    <CardItem
                        translateZ={20}
                        as="button"
                        className="px-7 py-2 rounded-full bg-[green] text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500"
                    >
                        {price}/- Rs
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
    );
}
