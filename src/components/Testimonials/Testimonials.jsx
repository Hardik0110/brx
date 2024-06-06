import React,{useRef} from 'react'
import {motion} from "framer-motion"

const Testimonials = () => {

  return (
    <div id='testimonials' className='md:w-10/12 mx-auto w-11/12 py-10 mb-32'>
        <motion.div initial={{opacity: 0, y: -150 }}
                    viewport={{ once: true, amount: 0.5 }}
                    whileInView={{opacity: .8, y: 0 }}
                    transition={{ duration: 0.6 }} 
                    className="border-b-2 text-4xl pink-text-gradient inline-block border-pink-600 mb-20">
                <h2 className=" p-1">Testimonials</h2>
        </motion.div>
        <div className='w-10/12 mx-auto'>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-10'>
                <motion.div initial={{opacity: 0, x: -150 }}
                    viewport={{ once: true, amount: 0.5 }}
                    whileInView={{opacity: .8, x: 0 }}
                    transition={{ duration: 0.6 }}  
                    className='border-2  border-neutral-400 rounded-xl p-2 relative text-center'>
                    <p className='text-sm mb-8 mt-4 w-10/12 mx-auto text-black-300'>"Clients Testimonials  "</p>
                    <h1 className='mt-2 text-xl blue-text-gradient'>"anything more"</h1>
                    <p className='mb-6 mt-1 text-sm italic text-red-400'>Robot developers</p>
                    <div className='w-10 h-10 absolute top-[100%] left-[50%] translate-x-[-50%] translate-y-[-50%] '>
                        <img className='w-full h-full rounded-full object-cover object-center' src="/client2.jpg" alt="" />
                    </div>
                </motion.div>
                <motion.div initial={{opacity: 0, x: 150 }}
                    viewport={{ once: true, amount: 0.5 }}
                    whileInView={{opacity: .8, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className='border-2 border-neutral-400 rounded-xl p-2 relative text-center'>
                    <p className='text-sm mb-8 mt-4 w-10/12 mx-auto text-black-300'>"client number2 testimonials"</p>
                    <h1 className='mt-2 text-xl blue-text-gradient'>anyname would be fine</h1>
                    <p className='mb-6 mt-1 text-sm italic text-red-400'>client description</p>
                    <div className='w-10 h-10 absolute top-[100%] left-[50%] translate-x-[-50%] translate-y-[-50%] '>
                        <img className='w-full h-full rounded-full object-cover object-center' src="/client1.jpg" alt="" />
                    </div>
                </motion.div>
                <motion.div initial={{opacity: 0, x: -150 }}
                    viewport={{ once: true, amount: 0.5 }}
                    whileInView={{opacity: .8, x: 0 }}
                    transition={{ duration: 0.6 }}  
                    className='border-2  border-neutral-400 rounded-xl p-2 relative text-center'>
                    <p className='text-sm mb-8 mt-4 w-10/12 mx-auto text-black-300'>"client number3 testimonial."</p>
                    <h1 className='mt-2 text-xl blue-text-gradient'>anyname willdo </h1>
                    <p className='mb-6 mt-1 text-sm italic text-red-400'>client job title</p>
                    <div className='w-10 h-10 absolute top-[100%] left-[50%] translate-x-[-50%] translate-y-[-50%] '>
                        <img className='w-full h-full rounded-full object-cover object-center' src="/client3.png
                        " alt="" />
                    </div>
                </motion.div>
                <motion.div initial={{opacity: 0, x: 150 }}
                    viewport={{ once: true, amount: 0.5 }}
                    whileInView={{opacity: .8, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className='border-2 border-neutral-400 rounded-xl p-2 relative text-center'>
                    <p className='text-sm mb-8 mt-4 w-10/12 mx-auto text-black-300'>"client number2 testimonials"</p>
                    <h1 className='mt-2 text-xl blue-text-gradient'>anyname would be fine</h1>
                    <p className='mb-6 mt-1 text-sm italic text-red-400'>client description</p>
                    <div className='w-10 h-10 absolute top-[100%] left-[50%] translate-x-[-50%] translate-y-[-50%] '>
                        <img className='w-full h-full rounded-full object-cover object-center' src="/client1.jpg" alt="" />
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials