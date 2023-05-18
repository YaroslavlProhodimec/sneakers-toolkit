import React from 'react';
import s from './Sneaker.module.css'
import {motion, useMotionValue, useTransform} from "framer-motion";
import Button from "@mui/material/Button";
import {fadeIn} from "../../../../variants";
import {TypeAnimation} from "react-type-animation";
import {Link} from 'react-router-dom';
import nikeGreen from "../../../../img/nikeGreen.png";
import nikePink from "../../../../img/nikePink.png";
import adidasBrown from '../../../../img/adidasBrown.png'
import adidasGray from '../../../../img/adidasGray.png'
import nikeYellow from '../../../../img/nikeYellow.png'
import balanseaga from '../../../../img/balanseaga.png'
import adidasGold from '../../../../img/adidasGold.png'
import adidasPink from '../../../../img/adidasPink.png'
import nikeBlack from '../../../../img/nikeBlack.png'

const photos = [
    {id:'0',image:adidasBrown},
    {id:'1',image:nikeYellow},
    {id:'2',image:adidasGold},
    {id:'3',image:adidasPink},
    {id:'4',image:balanseaga},
    {id:'5',image:nikeBlack},
    {id:'6',image:nikeGreen},
    {id:'7',image:adidasGray},
    {id:'8',image:nikePink},

]
type PropsSneaker = {
    id:string  | undefined
    sneaker:any
}
export const Sneaker = ({id,sneaker}:PropsSneaker) => {

        const x = useMotionValue(0);
        const y = useMotionValue(0);
        const rotateX = useTransform(y, [-100, 100], [30, -30]);
        const rotateY = useTransform(x, [-100, 100], [-30, 30]);

        const colors = [
            {value: '#b6a179'},
            {value: '#272425'},
            {value: '#6389cb'},
            {value: '#f2c758'},
            {value: '#ffffff'},
        ];

        return (

            <div className={s.cardContainer}>
                <motion.div
                    style={{x, y, rotateX, rotateY, z: 100}}
                    drag
                    dragElastic={0.18}
                    dragConstraints={{top: 0, left: 0, right: 0, bottom: 0}}
                    whileTap={{cursor: 'grabbing'}}
                    className={s.card}
                >
                    <motion.div variants={fadeIn('right',0.4)} initial='hidden' whileInView={'show'}
                                viewport={{once:false,amount:0.7}} className={s.span}>
                        <span className={s.span}>Пошевели 😀 </span>
                        <TypeAnimation sequence={['меня', 2000,
                            '', 2000
                        ]} speed={50} />

                    </motion.div>
                    <div className={s.cardLogo}>

                    </div>

                    <h1 className={s.cardTitle}
                    >{sneaker.name}</h1>

                    <p className={s.cardSubtitle}

                    >
                        Taking the classic look of heritage Nike Running into new realm, the
                        Nike Air Max Pre-Day brings you a fast-paced look that's ready for
                        today's world.
                    </p>

                    <div className={s.priceWrapper}
                    >
                      <Link to={'/'}>  <Button
                            variant={'outlined'} sx={{
                                marginLeft:'7px',

                            border: '1px solid pink',
                            background: 'linear-gradient(89.9deg, rgb(208, 246, 255) 0.1%, rgb(255, 237, 237) 47.9%, rgb(255, 255, 231) 100.2%)'
                        }}
                        >
                            To back
                        </Button></Link>
                        <div className={s.price}

                        >{sneaker.price}$
                        </div>
                    </div>
                    <ul className={s.colors}
                    >
                        {colors.map((color, index) => {
                            return (
                                <div
                                    key={index}
                                    style={{backgroundColor: color.value}}
                                    className={s.color}

                                ></div>
                            );
                        })}
                    </ul>
                    <motion.div
                        style={{x, y, rotateX, rotateY, z: 100000}}
                        className={s.cardImage}

                    >
                        {photos.map(el => el.id === id ?
                            <img key={el.id} className={s.img} src={el.image} draggable='false' alt=""/> : null
                        )}

                    </motion.div>
                </motion.div>
            </div>

        );


}