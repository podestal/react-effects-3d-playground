import { MotionValue, useTransform, motion  } from "framer-motion";
import bg from '../../assets/imgs/mdi-hero3.png'

interface Props {
    scrollYProgress: MotionValue<number>
}

const Section3 = ({scrollYProgress}: Props) => {

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, -5])

  return (
    <motion.div style={{backgroundImage: `url(${bg})`}} className='sticky top-0 h-screen bg-cover bg-center'>
    </motion.div>
  )
}

export default Section3