import React from 'react'
import Aboutimage from "../../assets/AboutHeroimage.png"
import HeroSectionCard from '../../components/layout/HeroSectionCard'
import BenefitBar from '../../components/about/BenefitBar'
import ValueSection from '../../components/about/ValueSection'
const AboutusPage = () => {
  return (
    <div className=' m-[auto] p-[auto] mt-28  '>
     
     <HeroSectionCard 
      Title1="About" 
      Title2 ="PlovDev" 
      Subtitle= "We are on a mission to make quality tech education accessible to everyone, everywhere."
      body="PlovDev is a structured learning platform for beginner and junior
for beginner and developer. We create practical, project based courses that help you build
real skill and become job-ready." 
        img={Aboutimage} 

        marque1="We dont't teach theory. We train creators."
        marque2="Not just courses - real skills that get you hired."
        marque3="Your journey from zero to job-ready starts here."
        marque4="Learn by doing. Build real projects. Land your dream job."
        marque5="Join 100,000+ learners building real skills with PlovDev."
        marque6="From beginner to job-ready - PlovDev is your path to a tech career."

        />

        <BenefitBar />
        <ValueSection />
  </div>
  )
}

export default AboutusPage