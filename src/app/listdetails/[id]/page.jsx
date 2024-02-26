import React from 'react'
import ListingDetailsContent from "../../components/ListingDetailsContent"
import { NavbarDemo } from '../../components/Navbar'

const ListintDetails = () => {
  return (
    <>
      <NavbarDemo />
      <div className='my-[10vh]'>
        <ListingDetailsContent />
      </div>
    </>
  )
}

export default ListintDetails