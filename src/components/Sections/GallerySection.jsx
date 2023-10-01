import React from 'react'
import { gallleryData } from '../../data/galleryData'
import GalleryCard from '../Cards/GalleryCard'

const GallerySection = () => {
  return (
    <div className='w-[90%] py-[100px] flex flex-col items-center '>
         <div className='w-full flex items-center justify-center gap-[50px] text-white'>
            <h1 className='font-brunoAce text-xl font-bold tracking-[2px] underline underline-offset-8 decoration-primaryBlue'>
                Our Gallery
            </h1>
            <button className='bg-primaryBlue px-[30px] py-[10px] rounded-[4px] font-montserrat text-lg font-bold tracking-[2px]'>
                View All
            </button>
        </div>

        <div className='w-full flex items-center justify-center gap-[20px] flex-wrap mt-[70px] '>
            {
                gallleryData?.length > 0 && gallleryData.map((item,index)=>(
                    <GalleryCard key={index} image={item.image} />
                ))
            }
        </div>
    </div>
  )
}

export default GallerySection