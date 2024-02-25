import React from 'react'

const page = ({ params }) => {
    let { id } = params
    return (
        <div>page {id}</div>
    )
}

export default page