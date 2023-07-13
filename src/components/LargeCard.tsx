import React from 'react'

import '../css/skeleton.css'
import '../css/normalize.css'
import '../css/components.css'
import { motion } from "framer-motion"
import { LCard } from '../ts/interfaces';

function Card(props: LCard): JSX.Element {
    const variants = {
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
              delay: i * 0.1,
              duration: 0.5,
              ease: "easeIn",
              type: "spring",
              stiffness: 50
            },
          }),
        hidden: { opacity: 0, y: 200}
    }

    return (
        <a href={props.link} target="_blank" rel="noopener noreferrer">
            <motion.div className = "sponsorCard six columns"
                initial="hidden"
                animate="visible"
                custom={props.i}
                variants={variants}>
                <img className ="sponsor" src={props.cover} alt="" ></img>
            </motion.div>
        </a>
    )
}

export default Card;
