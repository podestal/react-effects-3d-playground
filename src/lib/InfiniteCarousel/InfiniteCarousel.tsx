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
      <div className='w-full h-[100vh] flex flex-col justify-center items-center'>
        <h2 className='text-8xl text-slate-950 font-montserrat font-semibold'>Bienvenido a</h2>
        <h2 className='text-8xl text-slate-950 font-montserrat font-bold mt-6'>Islay</h2>
        <p className='text-4xl font-montserrat w-[70%] text-center my-10 leading-[3.5rem]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, ipsa nulla quam </p>
      </div>
      <motion.div ref={ref} className='flex flex-col gap-12 px-20 items-end' style={{y: xtranslation}}>
        {[...imgs, ...imgs].map(img => <Card key={img} img={img}/>)}
      </motion.div>
    </div>
  )
}

export default InfiniteCarousel