import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Projects = () => {
  return (
    <div id='projects'>
      <section className="text-gray-600 body-font">
        <div className="container px-10 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
      <h1 className="title-font sm:text-5xl text-3xl mb-4 font-medium text-gray-900 leading-snug">
              My Previous Projects
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Here is a showcase of some projects I have built, ranging from responsive websites to
              dynamic web applications. Each project reflects my commitment to clean code, functional 
              design, and attention to detail. Explore my work below to see how I bring ideas to life on the web.
            </p>
          </div>
          <div className="block lg:flex flex-wrap -m-8">
            {/* projects */}
            <div className="w-full lg:w-1/3 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="/accets/projects/portfolio.png" // Updated path
                  width={500}
                  height={500}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-yellow-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-yellow-500 mb-1">
                   My privious Portfolio Website

                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Portfolio
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                    I created this project for my personal use. It was a fun project to work on.
                  </p>
                  <Link target='_blank' href="https://zehrascripter.github.io/portfolio-live-new/">
                    <p className="leading-relaxed text-yellow-500 hover:underline">
                      View project
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/3 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="/accets/projects/shoping.png" // Updated path
                  width={500}
                  height={500}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-yellow-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-yellow-500 mb-1">
                    E-commerce Website
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Shopping
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                    I created this project for my personal use. It was a fun project to work on.
                  </p>
                  <Link target='_blank' href="https://next-js-milestone-2-custom-css.vercel.app/">
                    <p className="leading-relaxed text-yellow-500 hover:underline">
                      View project
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/3 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="/accets/projects/smitfigma.png" 
                  width={500}
                  height={500}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-yellow-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-yellow-500 mb-1">
                    Figma Design Website
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Figma Design
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                    I created this project for my personal use. It was a fun project to work on.
                  </p>
                  <Link target='_blank' href="https://fimgadesign.vercel.app/">
                    <p className="leading-relaxed text-yellow-500 hover:underline">
                      View project
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Projects;
