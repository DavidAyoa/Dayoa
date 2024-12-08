import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";

type MotionTextProps = {
    children: string;
    className?: string;
    childClassName?: string;
    scrollTrigger?: boolean;
    duration?: number;
    delay?: number;
};

type WordProp = {
    text: string;
    childClassName?: string;
    range: [number, number];
    progress: MotionValue<number>;
    scrollTrigger?: boolean;
    duration?: number;
    delay?: number;
}

function MotionText({ children, scrollTrigger, className, childClassName, duration, delay, ...rest }: MotionTextProps) {

    const wordsContainer = useRef(null)
    const words = children.split(' ');

    const { scrollYProgress } = useScroll(scrollTrigger ? {
        target: wordsContainer,
        offset: ['start 0.9', 'start 0.25']
    } : { target: wordsContainer, offset: ['start end', 'start end'] });
    
    return (
        <div ref={wordsContainer} className={className} {...rest}>
            {words.map((word, i) => {
                const start = i / words.length;
                const end = start + 1 / words.length;

                return <Word key={i} text={word} childClassName={childClassName} range={[start, end]} progress={scrollYProgress} scrollTrigger={scrollTrigger} duration={duration} delay={delay} />
            })}
        </div>
    );
}

export function Word ({ text, childClassName, range, progress, scrollTrigger, duration = 0.5, delay }: WordProp) {
    const color = useTransform(progress, range, ['rgba(236, 231, 225, 0.25)', 'rgba(236, 231, 225, 1)'])

    return (
        <motion.span
            style={scrollTrigger ? { color } : undefined}
            className={childClassName}
            initial={{ color: 'rgba(236, 231, 225, 0.25)' }}
            whileInView={!scrollTrigger ? {
                color: 'rgba(236, 231, 225, 1)',
                transition: {
                    duration: duration,
                    delay: delay !== undefined ? delay : range[0] * 0.8
                }
            } : undefined}
            viewport={{ once: true }}
        >
            {text+' '}
        </motion.span>
    )
}

export default MotionText