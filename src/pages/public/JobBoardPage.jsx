import React from 'react'
import HeroSectionCard from '../../components/layout/HeroSectionCard'
import JobBoardimage from '../../assets/JobHeroimage.png'

const JobBoardPage = () => {
  return (
    <div className=' m-[auto] p-[auto] mt-28  '>
     
     <HeroSectionCard 
      Title1="Job in" 
      Title2 ="Cambodia." 
      Subtitle= "Find Your Next Big Opportunity with thousands of jobs that actually match your skills and your goals"
      body="PlovDev works hand-in-hand with a growing network of tech companies and IT partners to bring you exclusive job opportunities you won't find anywhere else. From startups
to established tech firms — they come to us because they want talent like you." 
        img={JobBoardimage} 

        marque1="ABA"
        marque2="Amret"
        marque3="Wing Bank"
        marque4="EMCAST"
        marque5="ACELEDA Bank"
        marque6="PPCBank"

        />
  </div>
  )
}

export default JobBoardPage