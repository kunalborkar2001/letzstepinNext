import React from 'react'
import ThreeDListCard from "../components/ThreeDListCard"
import { NavbarDemo } from '../components/Navbar'

import ImagesSliderDemo from '../components/ImagesSliderDemo'


const page = ({ params }) => {
    let { id } = params
    return (
        <>
            <NavbarDemo />
            <div className='w-screen'>
                    <div>
                        <ImagesSliderDemo header={id} />
                    </div>

                    <div className='bg-gray-300'>
                        <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto gap-2'>
                            <ThreeDListCard />
                            <ThreeDListCard />
                            <ThreeDListCard />
                            <ThreeDListCard />
                            <ThreeDListCard />
                        </div>
                    </div>
                
            </div>
        </>
    )
}

export default page