import React from 'react'
import ListCard from '../components/ListCard/ListCard'
import ThreeDListCard from "../components/ThreeDListCard"

const page = ({ params }) => {
    let { id } = params
    return (



        <div className='bg-gray-300'>
            <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto gap-2'>
                <ThreeDListCard />
                <ThreeDListCard />
                <ThreeDListCard />
                <ThreeDListCard />
                <ThreeDListCard />
            </div>
        </div>
    )
}

export default page