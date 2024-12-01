import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";

type MotionTextProps = {
    children: string;
    className?: string;
    childClassName?: string;
};

type WordProp = {
    children: string;
    childClassName?: string;
    range: [number, number];
    progress: MotionValue<number>;
}

function MotionText({ children, className, childClassName, ...rest }: MotionTextProps) {

    const wordsContainer = useRef(null)
    const words = children.split(' ');

    const { scrollYProgress } = useScroll({
        target: wordsContainer,
        offset: ['start 0.9', 'start 0.25']
    })
    
    return (
        <div ref={wordsContainer} className={className} {...rest}>
            {words.map((word, i) => {
                const start = i / words.length;
                const end = start + 1 / words.length;

                return <Word key={i} children={word} childClassName={childClassName} range={[start, end]} progress={scrollYProgress} />
            })}
        </div>
    );
}

export function Word ({ children, childClassName, range, progress }: WordProp) {
    const color = useTransform(progress, range, ['rgba(236, 231, 225, 0.25)', 'rgba(236, 231, 225, 1)'])

    return (
        <motion.span
            style={{ color }}
            className={childClassName}
        >
            {children+' '}
        </motion.span>
    )
}

export default MotionText