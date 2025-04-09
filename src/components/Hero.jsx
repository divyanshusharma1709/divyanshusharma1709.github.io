import p_photo from "/p_photo.png"
import { motion } from "framer-motion"
const Hero = () => {
  return (
    <div id="home" className="px-16 flex flex-col min-h-screen w-full items-center justify-center py-28 md:px-32">
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        <motion.div
          initial={{y: -50, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{duration: 0.8, delay: 0.2}}
        
        
        >
          <img src={p_photo} alt="" className="w-[250px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2x1 hover:shadow-indigo-600 md:w-[250px]" />
        </motion.div>
      </div>

      <div className="flex max-w-[600px] mt-8 flex-col items-center justify-center gap-3 text-center">
        <motion.div
            initial={{y: 50, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 0.8, delay: 0.2}}
          
          
          >
        <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-5xl font-light md:text-7x1 ">Divyanshu Sharma</h1>
        <h3 className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-2xl font-light md:text-3x1 ">Student</h3>
        <p className="md:text-base text-pretty text-sm text-gray-400"></p>
        <p></p>
      </motion.div>
      </div>

    </div>
  )
}

export default Hero