import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id='about'>

<section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
<Image
              className="object-cover object-center rounded"
              alt="hero"
              width={1000} 
              height={1100}
              src="/accets/images/me.webp" // Direct path within the public folder
            />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        About Me
      </h1>
      <p className="mb-8 leading-relaxed">
      Hello! I am Zehra, a passionate and dedicated Front-End Developer. My journey in web development began 
      with a strong fascination for creating visually appealing and user-friendly websites. I specialize in 
      building responsive and interactive interfaces using technologies like HTML, CSS, JavaScript, and 
      frameworks like React and Next.js.
      With a keen eye for detail and a commitment to clean code, 
      I strive to bring designs to life while ensuring that each project is both functional and engaging. 
      I enjoy solving complex challenges and am constantly working to improve my skills and keep up with 
      the latest industry trends.
      When I am not coding, you will find me exploring new design techniques or learning about backend technologies
      to help me to expand my knowledge and enhance my capabilities as a full-stack developer. 
      I am excited to contribute to projects that make an impact and create seamless user experiences.
      </p>

      <div className="flex justify-center">
            <a
            href="/accets/cv/hareem_zehra_cv.pdf" // Path to the PDF in the public folder
            download
            className="inline-flex text-gray-700  bg-yellow-500 border-0 py-4 px-8 focus:outline-none hover:bg-yellow-700 hover:text-white rounded text-2xl">
            Download CV
          </a>
        
     
      </div>
    </div>
  </div>
</section>


    </div>
  )
}

export default About