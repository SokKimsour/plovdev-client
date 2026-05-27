import React from 'react'
import { PiEyeBold } from "react-icons/pi";
import { GoGoal } from "react-icons/go";
import { PiCertificate } from "react-icons/pi";
const ValueSection = () => {
  return (
    <div className=' grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 text-center px-8 my-28 max-md:my-12 my-18 gap-12 max-lg:gap-8 max-md:gap-6 max-sm:gap-4'>
            <div>
                <div className="flex justify-center items-center"><PiEyeBold className='text-2xl' /></div>
                <div className='text-2xl mb-6'>
                     Our Vision
                </div>
                <div className='text-gray-500'>
                    We envision a world where anyone with the desire to learn has the tools and opportunities to succeed—regardless of location, background, or financial situation.
                </div>
            </div>
            <div>
            <div className="flex justify-center items-center"><GoGoal className='text-2xl' /></div>
                <div className='text-xl mb-6'>
                    Our Mission
                </div>
                <div className='text-gray-500'>
                    To make learning flexible, affordable, and impactful by connecting learners with expert knowledge and practical skills that matter in the real world. 
                </div>
            </div>
            <div>
            <div className="flex justify-center items-center"><PiCertificate className='text-2xl' /></div>
                <div className='text-xl mb-6'>
                    Certificate with Job-board
                </div>
                <div className='text-gray-500'>
                    Earn a verifiable PDF certificate on completion.
Then use the PlovDev Job Board to apply directly
to hiring partners in Cambodia.
                </div>
            </div>
        </div>
  )
}

export default ValueSection