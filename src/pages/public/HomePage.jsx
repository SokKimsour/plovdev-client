import React from 'react'
import HeroSectionCard from '../../components/layout/HeroSectionCard'
import Homeimage from '../../assets/HomepageHeroimage.png'
import ValueSection from '../../components/about/ValueSection'
const HomePage = () => {
  return (
    <div className=' m-[auto] p-[auto] mt-28  '>
     
     <HeroSectionCard 
        Title1="Code Smarter Build Real" 
        Title2 ="Skills." 
        Subtitle= "Start learning with PlovDev, earn certificates, and land a job." 
        img={Homeimage} 

        marque1="html"
        marque2="css"
        marque3="javascript"
        marque4="python"
        marque5="html"
        marque6="css"

        />
    <ValueSection />
        
       
    </div>
  )
}

export default HomePage