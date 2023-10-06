import React from 'react'
import { sessionCardData } from '../../data/sessionCardData'
import SessionCard from '../Cards/SessionCard'

const BookTheSession = () => {
  return (
    <div className='w-[90%] py-[70px] '>
        <div className='w-full flex items-center justify-start gap-[50px] text-white'>
            <h1 className='whitespace-nowrap font-brunoAce text-lg md:text-xl font-bold tracking-[2px] underline underline-offset-8 decoration-primaryBlue'>
                Book The Session
            </h1>
            <button className='bg-primaryBlue px-[30px] py-[10px] rounded-[4px] font-montserrat text-[14px] md:text-lg font-bold tracking-[2px]'>
                View All
            </button>
        </div>

        <div className='w-full flex items-center justify-center lg:justify-between gap-[50px] flex-wrap mt-[40px] '>
            {sessionCardData?.length > 0 && sessionCardData.map((item,index)=>(
                <SessionCard key={index} title={item.title} image={item.image} slug={item.slug} />
            ))}
        </div>
    </div>
  )
}

export default BookTheSession