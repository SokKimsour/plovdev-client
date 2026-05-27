import React from 'react'

const JobCard = () => {
  return (
    <div className = "my-12 bg-gray-100 m-auto w-[80%] max-md:w-[96%]  flex justify-between rounded-lg p-8 max-sm:p-4 ">
      <div className='flex gap-4 items-center '>
        <div className= "w-20 h-20 bg-yellow-400 rounded-md" ></div>
        
        
        <div>
          <div className="font-bold text-xl">Position</div>
          <span>(Open applicant)</span>
          <div className="text-gray-500">
          <span>Company</span>-
          <span>Type</span>
          </div>
          <div className="grid grid-cols-3 max-sm:grid-cols-2 gap-2 mt-2 text-center">
            <div className="px-2 py-1 bg-teal-300 rounded-full">AWS</div>
            <div className="px-2 py-1 bg-teal-300 rounded-full">Cloud</div>
            <div className="px-2 py-1 bg-teal-300 rounded-full">DevOPs</div>
          </div>
        </div>
        
      </div>
      <div className='flex flex-col justify-between items-end'>
        <div className= "font-bold text-xl">Salary</div>
        <div className="text-gray-500">Location</div>
        <button className='bg-black text-white p-2 rounded-md '>Apply Now</button>
      </div>
    </div>
  )
}

export default JobCard