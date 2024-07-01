import { useScroll } from "framer-motion"
import Section1 from "./Section1"
import Section2 from "./Section2"
import { useEffect, useRef } from "react"
import Lenis from "lenis"
import Section3 from "./Section3"
import Section4 from "./Section4"

const Index = () => {

    const container = useRef(null)
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    useEffect(() => {
        const lenis = new Lenis()

        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
          }
      
          requestAnimationFrame(raf)
    }, [])

  return (
    <div ref={container} className="relative h-[400vh]">
        <Section1 scrollYProgress={scrollYProgress} />
        <Section2 />
        <Section3 />
        <Section4 />
    </div>
  )
}

export default Index