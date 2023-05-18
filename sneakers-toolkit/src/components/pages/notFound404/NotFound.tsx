import React from 'react';
import error from './400.svg'
import s from './Error.module.css'
import {motion} from 'framer-motion';
import {TypeAnimation} from "react-type-animation";
import {fadeIn} from "../../../variants";
import {Link} from "react-router-dom";

export const NotFound = () => {
    return (
          <>

        <div className={s.error}>
            <motion.div variants={fadeIn('right',0.4)} initial='hidden' whileInView={'show'}
                        viewport={{once:false,amount:0.7}} className={s.span}>
                <span className={s.span}>Opps </span>
                <TypeAnimation sequence={['Ничего', 2000,
                    ' не найдено!', 2000
                ]} speed={50} />

            </motion.div>

            <motion.div variants={fadeIn('down',0.5)} initial='hidden' whileInView={'show'}
                        className={s.img}>
                <img className={s.img}  src={error} alt=""/>
            </motion.div>
            <Link to={'/'}> <motion.button className={s.button} variants={fadeIn('right',0.4)} initial='hidden' whileInView={'show'}
                                           viewport={{once:false,amount:0.7}} >To back</motion.button></Link>
        </div>

          </>
    );
};
