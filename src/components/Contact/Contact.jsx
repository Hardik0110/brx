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
    <div className="mb-20" id="contact" >
      <div className="md:w-10/12 w-11/12 mx-auto ">
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
      <div class=" flex items-center justify-around">
<div class=" m-2 items-start relative w-full flex flex-row justify-between mt-8 ml-8 mr-8 max-w-7xl">
    <div class="relative">
        <div class="bg-white p-3 space-y-10 md:grid md:grid-cols-2 md:-mt-6 lg:grid-cols-4">
            <div class="w-1/2 md:ml-24 md:mt-9 md:w-3/4">
                <h1 class="text-orange-600 text-xl font-medium">Company</h1> <br />
                <p class="text-gray-500 font-medium text-base hover:text-blue-600 "> the company address here <br />
                    Ahmedabad, 380015 <br /> India </p> <br />
                <p class="text-gray-500 font-medium text-base hover:text-blue-600 cursor-pointer"> <strong
                        class="tracking-wide text-blue-600 font-normal">Phone:</strong> +91 123456789 </p>
                <p class="text-gray-500 font-medium text-base hover:text-blue-600 cursor-pointer"> <strong
                        class="tracking-wide text-blue-600 font-normal">Email:</strong> inquiry@bharatrobotix.com </p>
            </div>
            <div class="leading-9 md:w-2/4 md:order-3 md:ml-24">
                <h1 class="text-orange-600 text-xl font-medium tracking-[0.030rem]"> Useful Links </h1>
                <ul class="mt-2 text-gray-500 font-medium">
                    <li> <i class="fa fa-chevron-right text-blue-600"></i> <a href="#" class="hover:text-blue-600">
                            Home</a> </li>
                    <li> <i class="fa fa-chevron-right text-blue-600"></i> <a href="#" class="hover:text-blue-600">
                            About Us</a> </li>
                    <li> <i class="fa fa-chevron-right text-blue-600"></i> <a href="#" class="hover:text-blue-600">
                            Services</a> </li>
                    <li> <i class="fa fa-chevron-right text-blue-600"></i> <a href="#" class="hover:text-blue-600">
                            Terms of service</a> </li>
                    <li> <i class="fa fa-chevron-right text-blue-600"></i> <a href="#" class="hover:text-blue-600">
                            Privacy policy</a> </li>
                </ul>
            </div>
            <div class="leading-9 md:w-3/4 md:order-4">
                <h1 class="text-orange-600 text-xl font-medium tracking-[0.030rem]"> Our Services </h1>
                <ul class="mt-2 text-gray-500 font-medium">
                    <li> <i class="fa fa-chevron-right text-blue-600"></i> <a href="#" class="hover:text-blue-600">
                            Web Design</a> </li>
                    <li> <i class="fa fa-chevron-right text-blue-600"></i> <a href="#" class="hover:text-blue-600">
                            Web Development</a> </li>
                    <li> <i class="fa fa-chevron-right text-blue-600"></i> <a href="#" class="hover:text-blue-600">
                            Product Management</a> </li>
                    <li> <i class="fa fa-chevron-right text-blue-600"></i> <a href="#" class="hover:text-blue-600">
                            Marketing</a> </li>
                    <li> <i class="fa fa-chevron-right text-blue-600"></i> <a href="#" class="hover:text-blue-600">
                            Graphic Design</a> </li>
                </ul>
            </div>
            <div class="md:order-2 lg:order-last">
                <h1 class="text-orange-600 text-xl font-medium tracking-[0.030rem]"> Join Our Newsletter </h1> <br />
                <p class="text-gray-500 font-medium w-3/5 leading-7 mb-5 md:w-3/4"> DO NOT
                    miss out on our new ventures and. </p> <input type="email"
                    placeholder="Enter E-mail Here"
                    class="py-1 px-2 placeholder-gray-400 rounded-tl-xl focus: outline-none focus:bordermd:w-1/2 lg:w-3/5 border" />
                <button class="text-white bg-orange-600 p-1 -translate-x-1 rounded-br-xl hover:bg-blue-500"> Subscribe
                </button>
            </div>
        </div>
        <div
            class="md:flex hidden bg-gray-900 p-3 flex-col text-center pt-5 space-y-8 md:flex-row md:justify-between md:space-y-0">
            <div
                class="flex mx-3 justify-between space-x-20 md:flex-row text-gray-200 md:space-x-28 md:ml-20 lg:ml-24 lg:space-x-[13rem] xl:space-x-72 xl:ml-24">
                <p>@ Copyright <strong>Company.</strong>All Rights Reserved</p>
                <p>Designed by <span class="text-blue-600">Hardik</span></p>
            </div>
            <div
                class="text-white pb-4 text-center text-xl space-x-2 md:w-2/4 md:pb-0 md:pl-2 md:space-x-1 lg:pl-[171px] lg:space-x-2 xl:pl-44">
                <a href="#"
                    class="w-8 h-8 bg-orange-500 hover:text-orange-500 inline-block rounded-full pt-[3px] hover:bg-gray-200"><i
                        class="fa fa-twitter"></i></a> <a href="#"
                    class="w-8 h-8 bg-orange-500 hover:text-orange-500 inline-block rounded-full pt-[3px] hover:bg-gray-200"><i
                        class="fa fa-instagram"></i></a> <a href="#"
                    class="w-8 h-8 bg-orange-500 hover:text-orange-500 inline-block rounded-full pt-[3px] hover:bg-gray-200"><i
                        class="fa fa-facebook"></i></a> <a href="#"
                    class="w-8 h-8 bg-orange-500 hover:text-orange-500 inline-block rounded-full pt-[3px] hover:bg-gray-200"><i
                        class="fa fa-google"></i></a> <a href="#"
                    class="w-8 h-8 bg-orange-500 hover:text-orange-500 inline-block rounded-full pt-[3px] hover:bg-gray-200"><i
                        class="fa fa-linkedin"></i></a> </div>
        </div>
    </div>
</div>
</div> 
    </div>
  );
};

export default Contact;
