import bg from '../../assets/imgs/mdi-hero4.png'
import { MotionValue, motion, useTransform } from "framer-motion";
// sticky top-0 h-screen bg-center bg-cover bg-red-500

interface Props {
    scrollYProgress: MotionValue<number>
}

const Section1 = ({ scrollYProgress }: Props) => {

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, -5])

  return (
    <motion.div style={{backgroundImage: `url(${bg})`, scale, rotate}} className='sticky top-0 h-screen bg-center bg-cover '>
        <div className='w-full h-screen flex justify-center items-center'>
            <div className='w-[50%] h-[50%] flex flex-col justify-center items-center gap-12 backdrop-opacity-30 bg-black/30 rounded-3xl'>
                <h2 className='text-7xl text-slate-200'>Gnerice Title</h2>
                <p className='text-slate-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis impedit magnam rem dict</p>
            </div>
        </div>
    </motion.div>
    // <motion.div className="sticky top-0 h-screen bg-[#C72626] text-[3.5vw] flex flex-col items-center justify-center text-white pb-[10vh]">
    //     <p>Scroll Perspective</p>
    //     <div className="flex gap-4">
    //     <p>Section</p>
    //     <p>Transition</p>
    //     </div>
    // </motion.div>
  )
}

export default Section1