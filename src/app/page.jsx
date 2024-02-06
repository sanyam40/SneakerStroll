import { cloudinaryConnect } from '@/Connection/cloudinary';
import { connectdb } from '@/Connection/db';
import React from 'react'

const page = () => {
  connectdb();
  cloudinaryConnect();
  return(
    <>
    </>
  )
}

export default page
