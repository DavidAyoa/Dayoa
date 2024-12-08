import { motion } from 'motion/react'

type MarqueeText = {
    text: string
}

function Marquee({ text }: MarqueeText) {
    const contentTranslate = {
        end: {
            x: '-100%',
            transition: {
                ease: 'linear',
                duration: 15,
                repeat: Infinity,
            },
        },
    }
    
    return (
        <motion.div className="marquee flex justify-start items-center mt-5">
            <div className="track flex justify-center items-center font-bold">
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={i}
                        variants={contentTranslate}
                        animate="end"
                        className="content font-satoshi-bold p-0 text-heading-large lg:text-display-large text-nowrap text-primary-light leading-tight"
                    >
                        {text}
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}

export default Marquee
