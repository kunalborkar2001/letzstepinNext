"use client"

import React, { useEffect, useState } from 'react'
import ThreeDListCard from "../components/ThreeDListCard"
import { NavbarDemo } from '../components/Navbar'
import ImagesSliderDemo from '../components/ImagesSliderDemo'

import { hotelData } from '../../Data/Hotels'
import { fitnessData } from '../../Data/Fitness';
import { banquetData } from "../../Data/Banquet";
import { coworkingSpaceData } from "../../Data/CoWorking";
import { realEstateData } from "../../Data/RealEstate";
import { educationInstituteData } from "../../Data/EducationInstitute";

const Page = ({ params }) => {
    let { id } = params
    const [allData, setAllData] = useState([])


    useEffect(() => {

        if (id === "fitness") {
            setAllData(fitnessData)
        }
        else if (id === "hotels") {
            setAllData(hotelData)
        }
        else if (id === "banquet") {
            setAllData(banquetData)
        }
        else if (id === "coworking") {
            setAllData(coworkingSpaceData)
        }
        else if (id === "realestate")
            setAllData(realEstateData)
        else if (id === "education") {
            setAllData(educationInstituteData)
        }

    }, [])




    return (
        <>
            <NavbarDemo />
            <div className='w-screen'>
                <div>
                {allData.length > 0 && <ImagesSliderDemo 
                header={id} 
                action={allData[0].action} 
                img1={allData[0].image_url}
                img2={allData[1].image_url}
                img3={allData[2].image_url}
                />}
                </div>

                <div className='bg-gray-300'>
                    <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto gap-2'>
                        {allData.length && allData.map((list, index) => (
                            <ThreeDListCard key={index} name={list.name} location={list.location} image={list.image_url} price={list.price} contentData={list}/>
                        ))}
                    </div>
                </div>

            </div>
        </>
    )
}

export default Page