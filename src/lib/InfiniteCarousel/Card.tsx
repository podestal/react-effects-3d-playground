import {motion} from 'framer-motion'

interface Props {
    img: string
}

const Card = ({img} : Props) => {

  return (
    <motion.div style={{backgroundImage: `url(${img})`}} className='w-[180px] h-[180px] bg-center bg-cover rounded-xl'></motion.div>
  )
}

export default Card