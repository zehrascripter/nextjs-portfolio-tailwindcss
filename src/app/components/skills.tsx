import React from 'react'
import { FaRegCheckSquare } from 'react-icons/fa'

const Skills = () => {
  return (
    <div id="skills">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 md:py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-10 md:mb-20">
            <h2 className="text-xs text-yellow-500 tracking-widest font-medium title-font mb-1">
              Skills
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
              My Skills
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            {/* Skills */}
            <div className="p-4 sm:w-1/2 md:w-1/3">
              <div className="flex rounded-lg h-full bg-yellow-100 p-6 md:p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-yellow-500 text-white flex-shrink-0">
                    <FaRegCheckSquare className="text-xl font-bold text-blue-50" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">HTML</h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-yellow-300 rounded-xl">
                    <div className="absolute h-1 w-full bg-yellow-500 rounded-xl"></div>
                  </div>
                  <p className="font-bold text-yellow-500 text-right">100%</p>
                </div>
              </div>
            </div>

            <div className="p-4 sm:w-1/2 md:w-1/3">
              <div className="flex rounded-lg h-full bg-yellow-100 p-6 md:p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-yellow-500 text-white flex-shrink-0">
                    <FaRegCheckSquare className="text-xl font-bold text-blue-50" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">CSS</h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-yellow-300 rounded-xl">
                    <div className="absolute h-1 w-[90%] bg-yellow-500 rounded-xl"></div>
                  </div>
                  <p className="font-bold text-yellow-500 text-right">90%</p>
                </div>
              </div>
            </div>

            <div className="p-4 sm:w-1/2 md:w-1/3">
              <div className="flex rounded-lg h-full bg-yellow-100 p-6 md:p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-yellow-500 text-white flex-shrink-0">
                    <FaRegCheckSquare className="text-xl font-bold text-blue-50" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">JavaScript && TypeScript</h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-yellow-300 rounded-xl">
                    <div className="absolute h-1 w-[90%] bg-yellow-500 rounded-xl"></div>
                  </div>
                  <p className="font-bold text-yellow-500 text-right">90%</p>
                </div>
              </div>
            </div>

            <div className="p-4 sm:w-1/2 md:w-1/3">
              <div className="flex rounded-lg h-full bg-yellow-100 p-6 md:p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-yellow-500 text-white flex-shrink-0">
                    <FaRegCheckSquare className="text-xl font-bold text-blue-50" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">Tailwind CSS</h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-yellow-300 rounded-xl">
                    <div className="absolute h-1 w-[90%] bg-yellow-500 rounded-xl"></div>
                  </div>
                  <p className="font-bold text-yellow-500 text-right">90%</p>
                </div>
              </div>
            </div>

            <div className="p-4 sm:w-1/2 md:w-1/3">
              <div className="flex rounded-lg h-full bg-yellow-100 p-6 md:p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-yellow-500 text-white flex-shrink-0">
                    <FaRegCheckSquare className="text-xl font-bold text-blue-50" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">React.JS</h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-yellow-300 rounded-xl">
                    <div className="absolute h-1 w-[80%] bg-yellow-500 rounded-xl"></div>
                  </div>
                  <p className="font-bold text-yellow-500 text-right">80%</p>
                </div>
              </div>
            </div>

            <div className="p-4 sm:w-1/2 md:w-1/3">
              <div className="flex rounded-lg h-full bg-yellow-100 p-6 md:p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-yellow-500 text-white flex-shrink-0">
                    <FaRegCheckSquare className="text-xl font-bold text-blue-50" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">Next.JS</h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-yellow-300 rounded-xl">
                    <div className="absolute h-1 w-[80%] bg-yellow-500 rounded-xl"></div>
                  </div>
                  <p className="font-bold text-yellow-500 text-right">80%</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Skills
