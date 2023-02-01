import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";


export default function Contact() {
  const { isAuthenticated, user } = useAuth0();

  return (
    <div>
      <section className="text-gray-400 bg-gray-900 body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe width="100%" height="100%" title="map" className="absolute inset-0" frameBorder="0" marginHeight="0" marginWidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114084.42876586971!2d92.72556874146879!3d26.67605582640148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3744c20b7dfbbb95%3A0x12c7aa98abf85080!2sTezpur%2C%20Assam!5e0!3m2!1sen!2sin!4v1662736825643!5m2!1sen!2sin"   loading="lazy" ></iframe>
            <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">ADDRESS</h2>
                <p className="mt-1">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">EMAIL</h2>
                <div className="text-green-400 leading-relaxed">example@email.com</div>
                <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">PHONE</h2>
                <p className="leading-relaxed">123-456-7890</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <form action="https://formspree.io/f/mgeqandd"
              method="POST">
              
              <h2 className="text-white text-lg mb-1 font-medium title-font">Feedback</h2>
              <p className="leading-relaxed mb-5">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
              <div className="relative mb-4">
                <label htmlFor="name" className="leading-7 text-sm text-gray-400">Name</label>
                {
                  isAuthenticated ? (
                    <div>
                      <input value={user.name} type="text" id="name" name="name" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                  ) :
                    <input type="text" id="name" name="name" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />

                }

              </div>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
                {
                  isAuthenticated ? <input value={user.email} type="email" id="email" name="email" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" /> :
                    <input type="email" id="email" name="email" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                }
              </div>
              <div className="relative mb-4">
                <label htmlFor="message" className="leading-7 text-sm text-gray-400">Message</label>
                <textarea id="message" name="message" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
              </div>
              <button type="submit" value="send" className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Send</button>
              <p className="text-xs text-gray-400 text-opacity-90 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
            </form>
          </div>
        </div >
      </section >
    </div >
  )
}
