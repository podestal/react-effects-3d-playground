import {motion, useScroll} from 'framer-motion'
import { useEffect } from 'react'

const Index = () => {

 const {scrollYProgress} = useScroll()

 useEffect(() => {
    console.log('Scroll',scrollYProgress)
 },[scrollYProgress])

  return (
    <div>
        <div className='h-[200vh]'></div>
        <div className='flex'>
        <div className='flex flex-col h-screen justify-center gap-12 items-start'>
            <motion.div 
                initial={{opacity: 0, translateX: -100}}
                whileInView={{opacity: 1, translateX: 0}}
                transition={{duration: 1}}
                className="w-[120px] h-[120px] bg-yellow-500 mx-[200px]">
            </motion.div>
            <motion.div 
                initial={{opacity: 0, translateX: -100}}
                whileInView={{opacity: 1, translateX: 0}}
                transition={{duration: 1.3}}
                className="w-[120px] h-[120px] bg-yellow-500 mx-[200px]">
            </motion.div>
            <motion.div 
                initial={{opacity: 0, translateX: -100}}
                whileInView={{opacity: 1, translateX: 0}}
                transition={{duration: 1.6}}
                className="w-[120px] h-[120px] bg-yellow-500 mx-[200px]">
            </motion.div>
        </div>
        <div className='flex flex-col h-screen justify-center gap-12 items-start'>
            <motion.div 
                initial={{opacity: 0, translateX: 100}}
                whileInView={{opacity: 1, translateX: 0}}
                transition={{duration: 1}}
                className="w-[120px] h-[120px] bg-yellow-500 mx-[200px]">
            </motion.div>
            <motion.div 
                initial={{opacity: 0, translateX: 100}}
                whileInView={{opacity: 1, translateX: 0}}
                transition={{duration: 1.3}}
                className="w-[120px] h-[120px] bg-yellow-500 mx-[200px]">
            </motion.div>
            <motion.div 
                initial={{opacity: 0, translateX: 100}}
                whileInView={{opacity: 1, translateX: 0}}
                transition={{duration: 1.6}}
                className="w-[120px] h-[120px] bg-yellow-500 mx-[200px]">
            </motion.div>
        </div>
        </div>
    </div>
  )
}

export default Index