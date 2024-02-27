'use client'


import React from 'react'
import { NavbarDemo } from '../../components/Navbar'
import ListContent from '../../components/ListContent'
import { useEffect, useState } from 'react';

import Footer from '../../components/Footer'

const ListintDetails = ({ searchParams }) => {
  const [contentData, setContentData] = useState(null);

  // Parse the stringified searchParams back to an object
  useEffect(() => {
    if (searchParams) {
      const parsedSearchParams = JSON.parse(searchParams.contentData);
      setContentData(parsedSearchParams);
    }
  }, [searchParams]);




  return (
    <>
      <NavbarDemo />
      <div className='mt-[10vh] min-h-screen'>
        {contentData && <ListContent contentData={contentData} />}
      </div>
      <Footer />
    </>
  )
}

export default ListintDetails