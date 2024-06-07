import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {motion} from "framer-motion"

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_4x8m2fn', 'template_4vpop5s', form.current, 'dZiAkK9akG9nVWWdS')
        .then((result) => {
            console.log(result.text);
            e.target.reset()
        }, (error) => {
            console.log(error.text);
        }).catch(err => console.log(err))
        ;
    };


    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.3,
          },
        },
      };
    
      const item = {
        hidden: { opacity: 0, x:100,  },
        show: { opacity: 1, x:0, transition:{type: 'spring'} },
    };
  return (
    <div className="mb-0" id="contact" >
      <div className="md:w-16/12 w-36/12 mx-auto ">
        <div className="pink-text-gradient inline-block mb-12">
          <h2 className="text-4xl p-2 px-1">Contact Us</h2>
        </div>
        <div className="md:w-8/12 w-full mx-auto">
            <motion.h1 initial={{opacity: 0, x: -150 }}
                    viewport={{ once: true, amount: 0.5 }}
                    whileInView={{opacity: .8, x: 0 }}
                    transition={{ duration: 0.6 }}
                     className=" text-2xl text-black mb-5">
            Get in Touch &#128075;
            </motion.h1>
            <p className='text-xl text-black-200 mb-5'>Our Email: <span className='italic text-sm text-blue-400'>inquiry@bharatrobotix.com</span></p>
          <motion.form ref={form} onSubmit={sendEmail} variants={container} viewport={{ once: true, amount: 0.5 }} initial="hidden" whileInView="show"  action="" className="border-2 border-neutral-700 rounded-xl p-8">
            <motion.div variants={item} className="grid sm:grid-cols-2 grid-cols-1 sm:gap-20 gap-6">
              <div className="flex flex-col space-y-4">
                <label>Your Name</label>
                <input
                  className="w-full h-10 text-black bg-white px-2 caret-pink-600 rounded-sm"
                  type="text"
                  placeholder="Edward"
                  required={true}
                  name="name"
                />
              </div>
              <div className="flex flex-col space-y-4">
                <label>Your Email</label>
                <input
                  className="w-full h-10 text-black bg-white px-2 rounded-md"
                  type="email"
                  placeholder="test@gmail.com"
                  required={true}
                  name="user_email"
                />
              </div>
            </motion.div>
            <motion.div variants={item}  className="flex flex-col mt-10 ">
              <label>Message</label>
              <textarea
                className="bg-white text-black p-4 mt-4 rounded-md"
                name="message"
                id=""
                cols="20"
                rows="8"
                required={true}
              ></textarea>
            </motion.div>
            <motion.button variants={item} className="bg-orange-500 hover:bg-blue-600 transition-all ease-in duration-200 px-32 py-3 mt-10 rounded-full">Submit</motion.button>
          </motion.form>
        </div>
      </div>
      <footer class="text-gray-600 body-font">
  <div class="container px-2 py-8 mx-auto flex items-auto sm:flex-row flex-col">
    
    <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                <img  src='/logo.png' alt="logo" fill="none" stroke="" stroke-linecap="round" stroke-linejoin="round" stroke-width="" class="w-10 h-10 text-white"/>
      <span class="ml-3 text-xl">BharatRobotix</span>
    </a>
    <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2024 BharatRobotix —
      <a href="https://twitter.com/" class="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@all copyrights</a>
    </p>
    <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a class="text-gray-500">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </a>
      <a class="ml-3 text-gray-500">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
        </svg>
      </a>
      <a class="ml-3 text-gray-500">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </a>
      <a class="ml-3 text-gray-500">
        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </a>
    </span>
  </div>
</footer> 
    </div>
  );
};

export default Contact;
