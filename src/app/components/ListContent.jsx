"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import ContactModal from "./ContactModal";
import { ImAidKit } from "react-icons/im";
import Amenities from '../components/AmenitiesBox'

export default function ListContent({contentData}) {
    return (

        <div className="max-w-2xl mx-auto antialiased pt-4 relative">

            <div >
                <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                    {contentData.type.toUpperCase()}
                </h2>

                <p className={twMerge("text-[1.5rem] mb-4")}>
                    {contentData.name}
                </p>

                <div className="text-sm  prose prose-sm dark:prose-invert">

                    <Image
                        src={contentData.image_url}
                        alt="blog thumbnail"
                        height="1000"
                        width="1000"
                        className="rounded-lg mb-10 object-cover"
                    />

                    {/* Buttons  */}

                    <div className="w-full my-[3rem]   flex justify-between ">
                        <button className=" rounded-full text-[1rem] font-normal text-black bg-blue-200 hover:bg-blue-500">
                            <ContactModal />
                        </button>
                        <button className="px-7 py-2 rounded-full bg-[green] text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
                            Buy at {contentData.price}/- Rs
                        </button>
                    </div>

                    <>
                        <p>
                            Sit duis est minim proident non nisi velit non consectetur. Esse
                            adipisicing laboris consectetur enim ipsum reprehenderit eu deserunt
                            Lorem ut aliqua anim do. Duis cupidatat qui irure cupidatat incididunt
                            incididunt enim magna id est qui sunt fugiat. Laboris do duis pariatur
                            fugiat Lorem aute sit ullamco. Qui deserunt non reprehenderit dolore
                            nisi velit exercitation Lorem qui do enim culpa. Aliqua eiusmod in
                            occaecat reprehenderit laborum nostrud fugiat voluptate do Lorem culpa
                            officia sint labore. Tempor consectetur excepteur ut fugiat veniam
                            commodo et labore dolore commodo pariatur.
                        </p>
                        <br />
                        <p>
                            Tempor quis dolor veniam quis dolor. Sit reprehenderit eiusmod
                            reprehenderit deserunt amet laborum consequat adipisicing officia qui
                            irure id sint adipisicing. Adipisicing fugiat aliqua nulla nostrud.
                            Amet culpa officia aliquip deserunt veniam deserunt officia
                            adipisicing aliquip proident officia sunt.
                        </p>
                    </>

                    {/* Aminities */}
                    <div className="w-full  mt-[3rem] my-2 flex justify-between lg:flex-row flex-col items-center gap-4">
                        <Amenities name="Amenities" description={contentData.amenities}/>
                        <Amenities name="Facilities" description={contentData.facilities}/>
                    </div>
                    
                    {/* Location  */}

                    <div className="w-full border-[yellow] mt-[3rem] flex flex-col">
                        <h1 className={twMerge("text-[1.5rem]")}>
                            Location
                        </h1>

                        <p className="mt-2">
                            {contentData.location}
                        </p>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!4v1707572363883!6m8!1m7!1sCAoSK0FGMVFpcE1oWFlGcFBtZXRTc29JM0N1WHNIcm5VNkprSDA5MTBNak1lVkE.!2m2!1d18.6228354!2d73.7583772!3f303.09356239173!4f-2.197604200057924!5f0.4000000000000002"
                            loading="lazy"
                            className="self-center mt-5 h-[300px] w-full"
                            >
                        </iframe>

                    </div>
                </div>
            </div>

        </div>
    );
}

