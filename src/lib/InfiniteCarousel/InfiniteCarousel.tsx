import { animate, motion, useMotionValue } from 'framer-motion'
import img1 from '../../assets/imgs/event1.png'
import img2 from '../../assets/imgs/event2.png'
import img3 from '../../assets/imgs/mdi-hero.png'
import img4 from '../../assets/imgs/mdi-hero3.png'
import img5 from '../../assets/imgs/mdi-hero4.png'
import img6 from '../../assets/imgs/mdi-hero5.png'
import img7 from '../../assets/imgs/mdi-hero.png'
import img8 from '../../assets/imgs/event1.png'
import Card from './Card'
import useMeasure from 'react-use-measure'
import { useEffect } from 'react'

const imgs = [img1, img2, img3, img4, img5, img6, img7, img8]

const InfiniteCarousel = () => {

  let [ref, {height}] = useMeasure()

  const xtranslation = useMotionValue(0)

  useEffect(() => {

    let controls
    let finalPosition = -height / 2 - 8
    controls = animate(xtranslation, [0, finalPosition], {
      ease: 'linear',
      duration: 25,
      repeat: Infinity,
      repeatType: 'loop',
      repeatDelay: 0,
    })

    return controls.stop
  }, [xtranslation, height])
  return (
    <div className='w-full flex justify-center gap-12 mx-auto'>
      <div className='w-full h-[100vh] flex flex-col justify-center items-start relative z-10'>
        {/* <h2 className='text-[100px] text-slate-950 w-[70%] font-semibold font-montserrat leading-[8rem]'>Le Damos la Bienvenida a</h2> */}
        {/* <h2 className='text-[130px] text-blue-600 font-poppins font-bold drop-shadow-lg bg-gradient-to-r from-blue-700 to-sky-400 bg-clip-text text-transparent'>Islay</h2> */}
        <p className='text-[110px] font-poppins w-full leading-[8rem] text-slate-900'><span className='drop-shadow-lg bg-gradient-to-r from-blue-600 to-sky-300 bg-clip-text text-transparent'>Islay</span> le dá la bienvenida </p>
        <p className='w-[70%] text-slate-700 text-2xl leading-10 my-12 rounded-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eum officia praesentium</p>
       
      </div>
      <motion.div ref={ref} className='flex flex-col gap-12 px-20 items-end relative z-10' style={{y: xtranslation}}>
        {[...imgs, ...imgs].map(img => <Card key={img} img={img}/>)}
      </motion.div>
      <div className='circlePosition w-[520px] h-[400px] bg-sky-300 rounded-[100%] absolute z-1 translate-x-[-80%] translate-y-[-50%] blur-[190px] '/>
      <div className='circlePosition w-[720px] h-[400px] bg-sky-400 rounded-[100%] absolute z-1 translate-x-[50%] translate-y-[70%] blur-[210px] '/>
    </div>
  )
}

export default InfiniteCarousel