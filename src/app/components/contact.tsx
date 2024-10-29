import React from 'react'

const Contact = () => {
  return (
    <div id='contact'>
        <section className="text-gray-600 body-font relative">
  <div className="absolute inset-0 bg-gray-300">
    <iframe
      width="100%"
      height="100%"
      title="map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.391599987681!2d67.14294437393598!3d24.884620744293052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb339999ea08443%3A0x3c7b8986abed7d76!2sShah%20Faisal%20Colony%20Bridge%20(IN)!5e0!3m2!1sen!2s!4v1730124980548!5m2!1sen!2s"
      style={{ filter: "contrast(1.2) opacity(0.4)" }}
    />
  </div>
  <div className="container px-5 py-24 mx-auto flex">
    <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
      <h2 className="title-font sm:text-5xl text-3xl mb-4 font-medium text-gray-900 leading-snug">
        Contact Us
      </h2>
      <p className="leading-relaxed mb-5 text-gray-600">
        Conatact for hire or to get in touch
      </p>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-600">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          defaultValue={""}
        />
      </div>
      <button className="text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-700 rounded text-lg">
        Send
      </button>
   
    </div>
  </div>
</section>

    </div>
  )
}

export default Contact



