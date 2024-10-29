import React from 'react'
import Image from "next/image";
import Link from 'next/link';

const Hero = () => {
  return (
    <div >
      <section className="text-white body-font bg-fixed bg-cover bg-center custom">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center md:px-16">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-5xl text-3xl mb-4 font-medium text-white leading-snug">
              Hi, I am Zehra
            </h1>
              <h1 className="title-font sm:text-5xl text-3xl mb-4 font-medium text-white leading-snug">
              A Front-End Web-Developer
            </h1>
            <div className='w-[100px] h-[3px] bg-yellow-500 my-4'></div>
            <p className="mb-8 leading-relaxed text-xl">
              I specialize in building responsive and interactive websites with a focus on seamless user experiences.
              With skills in HTML, CSS, JavaScript, and modern frameworks like React and Next.js, 
              I bring ideas to life on the web. Let create something impactful together.
            </p>
            <div className="flex justify-center">
                <Link href={'#contact'}>
              <button className="inline-flex text-gray-700  bg-yellow-500 border-0 py-4 px-8 focus:outline-none hover:bg-yellow-700 hover:text-white rounded text-2xl">
                Contact
              </button>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              width={500} 
              height={500}
              src="/accets/images/dummy.avif" // Direct path within the public folder
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
