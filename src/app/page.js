import { connectdb } from '@/Connection/db';
import React from 'react'

const page = () => {
  connectdb();
  return(
    <>
    </>
  )
}

export default page
