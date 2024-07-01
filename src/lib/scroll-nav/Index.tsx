import {motion, useMotionValueEvent, useScroll} from 'framer-motion'
import { useEffect, useState } from 'react'

const NavBar = () => {

    const { scrollY } = useScroll()
    const [hidden, setHidden] = useState(false)

    useMotionValueEvent(scrollY, 'change', latest => {
        const previous = scrollY.getPrevious()
        if (previous && previous < latest) {
            setHidden(true)
        } else {
            setHidden(false)
        }})
    return (
        <motion.header 
            className='sticky top-0 bg-blue-500'
            variants={{
                visible: {y:0},
                hidden: {y:'-100%'},
            }}
            animate={hidden ? 'hidden' : 'visible'}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            >

            <nav 
                className="h-10 flex justify-start items-center xl:max-w-[1180px] max-w-[850px] mx-auto py-12 ">
                <div>
                    <ul className=" max-lg:hidden flex text-center gap-12">
                        <li className="nav__item">
                            <a href="#home" className="text-slate-200 hover:text-slate-300 hover:border-b-2 hover:border-b-slate-300  hover:pb-2 text-xl font-montserrat font-bold">Inicio</a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="text-slate-200 hover:text-slate-300 hover:border-b-2 hover:border-b-slate-300  hover:pb-2 text-xl font-montserrat font-bold">Servicios</a>
                        </li>
                        <li className="nav__item">
                            <a href="#popular" className="text-slate-200 hover:text-slate-300 hover:border-b-2 hover:border-b-slate-300  hover:pb-2 text-xl font-montserrat font-bold">Emergencia</a>
                        </li>
                        <li className="nav__item">
                            <a href="#eventos" className="text-slate-200 hover:text-slate-300 hover:border-b-2 hover:border-b-slate-300  hover:pb-2 text-xl font-montserrat font-bold">Eventos</a>
                        </li>
                        <li className="nav__item">
                            <a href="#turismo" className="text-slate-200 hover:text-slate-300 hover:border-b-2 hover:border-b-slate-300  hover:pb-2 text-xl font-montserrat font-bold">Turismo</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </motion.header>
            

    )
}

const Content = () => {
    return (
        <div className="flex flex-col items-start text-slate-200 w-[1080px] mx-auto gap-12">
            <h2 className="text-8xl font-montserrat my-12">My Ttile</h2>
            <p className="text-xl font-poppins">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores cum asperiores ullam, illo fugit consectetur, tempora repudiandae quidem amet, quis quia eveniet consequatur tenetur voluptate. Alias nam molestias exercitationem officiis!
            Tenetur ad quasi impedit vitae soluta, a nisi quisquam placeat suscipit quidem vel ullam odit alias, magnam optio fugit, voluptates explicabo tempora cumque illo. Minima deserunt quibusdam necessitatibus pariatur consectetur!
            Nulla error, provident enim numquam, aliquid rerum modi, expedita quasi eos dolorum deserunt recusandae. Sed voluptate, et nemo dignissimos, nesciunt, porro culpa perferendis hic nihil illo quam magni incidunt a.
            Commodi quas ex architecto distinctio officia quae provident, error aliquam? Veritatis quidem et ea laudantium, ipsa tempora, incidunt ipsam in non sit magnam fugit sed laboriosam, ullam earum dignissimos. Consectetur!</p>
            <p className="text-xl font-poppins">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem a omnis illo vitae, autem sequi alias obcaecati voluptatibus eaque provident eum, architecto aliquam repudiandae harum magni. Voluptates consectetur ipsam nulla.</p>
            <p className="text-xl font-poppins">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus dignissimos modi suscipit molestiae labore fugit? Impedit, quas ratione saepe officiis nostrum soluta sit rem labore quaerat enim ipsum iusto ipsam.</p>
            <p className="text-xl font-poppins">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore amet quisquam voluptate quasi dolor laborum architecto, ratione aliquid, delectus recusandae assumenda aut voluptas velit facere quaerat corrupti laudantium odio eligendi.</p>
            <p className="text-xl font-poppins">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel magnam nisi, officiis officia obcaecati consequuntur mollitia quo eligendi vero possimus repudiandae, eius perferendis doloribus quaerat, debitis dolorem perspiciatis libero fuga.
            Nesciunt sed repellat sit hic voluptates quod asperiores eveniet nulla pariatur obcaecati, tenetur omnis perspiciatis sunt itaque ipsa quisquam non. Incidunt ipsum deserunt nostrum delectus aliquid magnam quaerat expedita fugit.</p>
            <p className="text-xl font-poppins">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nisi alias iure temporibus exercitationem fugiat minus nulla ipsum rem hic? Aut incidunt similique excepturi qui aspernatur accusantium omnis, consectetur sit?
            Laboriosam eaque repellendus impedit aperiam deserunt iure ipsam aut, est voluptate exercitationem non rem expedita consectetur neque in dolorem eveniet delectus quos praesentium beatae maiores omnis quod. Sit, quasi culpa.
            Rerum distinctio possimus molestias repudiandae, deserunt ut facere voluptates repellendus recusandae! Atque perspiciatis similique voluptate aspernatur tempora incidunt voluptas, quae quas officiis, eaque est deleniti in, minus at ex. Assumenda?</p>
        </div>
    )
}

const Index = () => {
  return (
    <div className="w-full min-h-screen bg-slate-950">
        <NavBar />
        <Content />
    </div>
  )
}

export default Index