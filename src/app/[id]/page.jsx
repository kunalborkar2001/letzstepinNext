import React from 'react'
import ListCard from '../components/ListCard/ListCard'
import ThreeDListCard from "../components/ThreeDListCard"

const page = ({ params }) => {
    let { id } = params
    return (



        <div className='bg-white flex flex-col items-center'>

            <ThreeDListCard />
            <ThreeDListCard />
        </div>
    )
}

export default page