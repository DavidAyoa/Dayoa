import { useEffect, useState, forwardRef, SVGProps, useRef } from "react";
import { motion } from "motion/react";
// import LoaderLogo from '../asssets/logo/logo-lowercase.svg?react'

const ForwardedLoaderLogo = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  (props, ref) => (
    // <LoaderLogo ref={ref} {...props} />
    <svg
      width="529"
      height="174"
      viewBox="0 0 529 174"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <g>
        <path
          d="M41.816 133.288C16.648 133.288 0.984 114.808 0.984 87.88C0.984 60.776 16.824 41.416 43.048 41.416C55.192 41.416 65.928 46.52 71.384 55.144V0.0559969H92.68V131H72.968L71.56 117.448C66.28 127.48 55.016 133.288 41.816 133.288ZM46.568 113.576C61.528 113.576 71.208 102.84 71.208 87.176C71.208 71.512 61.528 60.6 46.568 60.6C31.608 60.6 22.456 71.688 22.456 87.176C22.456 102.664 31.608 113.576 46.568 113.576ZM140.929 133.288C122.449 133.288 111.185 122.552 111.185 106.184C111.185 90.168 122.801 80.136 143.393 78.552L169.441 76.616V74.68C169.441 62.888 162.401 58.136 151.489 58.136C138.817 58.136 131.777 63.416 131.777 72.568H113.473C113.473 53.736 128.961 41.416 152.545 41.416C175.953 41.416 190.385 54.088 190.385 78.2V131H171.553L169.969 118.152C166.273 127.128 154.481 133.288 140.929 133.288ZM147.969 117.096C161.169 117.096 169.617 109.176 169.617 95.8V91.224L151.489 92.632C138.113 93.864 133.009 98.264 133.009 105.304C133.009 113.224 138.289 117.096 147.969 117.096ZM201.504 171.304V153.352H214.352C222.8 153.352 228.08 151.416 231.776 141.208L234.24 134.696L199.216 44.056H221.92L244.272 107.416L267.856 44.056H290.032L247.44 150.36C240.928 166.552 231.776 173.24 217.52 173.24C211.536 173.24 206.256 172.536 201.504 171.304ZM293.172 87.352C293.172 60.248 312.708 41.592 339.636 41.592C366.564 41.592 386.1 60.248 386.1 87.352C386.1 114.456 366.564 133.112 339.636 133.112C312.708 133.112 293.172 114.456 293.172 87.352ZM314.644 87.352C314.644 103.192 324.852 113.928 339.636 113.928C354.42 113.928 364.628 103.192 364.628 87.352C364.628 71.512 354.42 60.776 339.636 60.776C324.852 60.776 314.644 71.512 314.644 87.352ZM428.991 133.288C410.511 133.288 399.247 122.552 399.247 106.184C399.247 90.168 410.863 80.136 431.455 78.552L457.503 76.616V74.68C457.503 62.888 450.463 58.136 439.551 58.136C426.879 58.136 419.839 63.416 419.839 72.568H401.535C401.535 53.736 417.023 41.416 440.607 41.416C464.015 41.416 478.447 54.088 478.447 78.2V131H459.615L458.031 118.152C454.335 127.128 442.543 133.288 428.991 133.288ZM436.031 117.096C449.231 117.096 457.679 109.176 457.679 95.8V91.224L439.551 92.632C426.175 93.864 421.071 98.264 421.071 105.304C421.071 113.224 426.351 117.096 436.031 117.096ZM513.973 133.112C506.229 133.112 499.717 126.776 499.717 119.208C499.717 111.464 506.229 105.128 513.973 105.128C521.717 105.128 528.229 111.464 528.229 119.208C528.229 126.776 521.717 133.112 513.973 133.112Z"
          fill="#ECE7E1"
        />
      </g>
    </svg>
  )
);

interface PreloaderProps {
  onLoadingComplete?: () => void;
}

function Preloader({ onLoadingComplete }: PreloaderProps) {
  const MotionLoaderLogo = motion.create(ForwardedLoaderLogo, {
    forwardMotionProps: true,
  });

  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const minLoadTime = 1000;
  const startTime = useRef(Date.now());

  const fillProgress = {
    thin: {
      height: "1.5px",
    },
    fill: {
      height: "100%",
      transition: { delay: 1, duration: 0.5 },
    },
  };

  const fillInner = {
    shrink: {
      width: "95%",
      height: "90%",
      bottom: "5%",
    },
    fill: {
      width: "100%",
      height: "100%",
      bottom: 0,
      transition: { delay: 1.5, duration: 0.5 },
    },
  };

  const hideProgress = {
    show: {
      bottom: "30%",
      opacity: 1,
    },
    hide: {
      bottom: "40%",
      opacity: 0,
      transition: { delay: 1, duration: 0.5 },
    },
  };

  const containerAnimation = {
    initial: {
      height: "100vh",
    },
    exit: {
      height: 0,
      transition: {
        height: {
          delay: 3,
          duration: 1.2,
          ease: [0.87, 0, 0.13, 1],
        },
      },
    },
  };

  const logoAnimation = {
    initial: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
        delay: 2.7,
      },
    },
  };

  useEffect(() => {
    const handleLoad = () => {
      const elapsedTime = Date.now() - startTime.current;
      const remainingTime = Math.max(0, minLoadTime - elapsedTime);
      setTimeout(() => {
        setIsLoading(false);
      }, remainingTime);
    };

    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
  }, []);

  useEffect(() => {
    const incrementProgress = () => {
      setProgress((prevProgress) => {
        if (!isLoading && prevProgress >= 98) {
          return 100;
        }
        const increment = prevProgress < 98 ? 1 : 0.1;
        return Math.min(98, prevProgress + increment);
      });
    };

    const interval = setInterval(incrementProgress, 20);
    return () => clearInterval(interval);
  }, [isLoading]);

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        onLoadingComplete?.();
      }, 4200);
      return () => clearTimeout(timer);
    }
  }, [progress, onLoadingComplete]);

  return (
    <motion.div
      id="preloader"
      className="bg-primary-dark h-lvh flex flex-col justify-center items-center mix-blend-difference overflow-hidden relative"
      variants={containerAnimation}
      initial="initial"
      animate={progress === 100 ? "exit" : "initial"}
    >
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <div className="w-full h-full flex flex-col justify-center items-center">
          <MotionLoaderLogo
            className="logo loading absolute mix-blend-difference z-10 w-auto h-10 md:h-32"
            variants={logoAnimation}
            animate={progress === 100 ? "exit" : "initial"}
          />
          <motion.p
            variants={hideProgress}
            animate={progress === 100 ? "hide" : "show"}
            className="text-primary-light font-light z-10 absolute mix-blend-difference text-caption-large md:text-body-small"
          >
            {progress}%
          </motion.p>
          <motion.div
            variants={fillInner}
            animate={progress === 100 ? "fill" : "shrink"}
            className="flex flex-col justify-end mix-blend-difference absolute z-[-2]"
          >
            <motion.div
              variants={fillProgress}
              animate={progress === 100 ? "fill" : "thin"}
              className="progress-bar bg-primary-light"
              style={{ width: `${progress}%` }}
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Preloader;
