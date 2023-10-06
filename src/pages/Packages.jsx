import React from 'react'
import { packagesData } from '../data/packagesData'
import PackageCard from '../components/Cards/PackageCard'

const Packages = () => {
    return (
        <div className='min-h-[100vh] w-full pt-[200px] pb-[50px]'>
            <p className='tracking-[2px] underline underline-offset-8 decoration-primaryBlue text-center font-pacifico text-xl font-bold text-white'>
                Maternity Packages
            </p>
            {
                packagesData?.length > 0 && (
                    <div className='mt-[50px] flex items-center gap-[20px] justify-center flex-wrap'>
                        {
                            packagesData.map((item, index) => (
                                <PackageCard title={item.title} price={item.price} features={item.features} />
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}

export default Packages