import Marquee from "./Marquee";
import MotionText from "./MotionText";
import HandIcon from "../asssets/icons/hand-wave-icon.svg?react";

function Intro() {
  return (
    <section className="flex flex-col justify-center items-center w-full h-dvh overflow-hidden text-primary-light mix-blend-difference gap-4">
      <div className="greeting flex flex-col items-center justify-center">
        <h4 className="flex font-satoshi-medium text-body-regular lg:text-sub-heading-regular gap-2 items-center font-regular">
          hello, David here&nbsp;
          <HandIcon className="h-8 lg:h-12 w-auto" />
        </h4>
        <MotionText className="font-satoshi-bold text-sub-heading-regular lg:text-heading-medium font-medium">
          Software Engineer
        </MotionText>
      </div>
      <MotionText
        className="text-[14px] font-satoshi-light lg:text-body-medium max-w-[600px] w-[85vw] text-center"
      >
        I'm a software engineer with expertise across design, frontend, and backend development. I’m passionate about building user-centered products and have contributed to impactful, high-quality features in applications designed for broad-scale engagement.
      </MotionText>
      <Marquee text="&nbsp;• Frontend Engineer • Backend Engineer • Full-Stack Engineer • Product Designer" />
      <div className="dividier mix-blend-difference flex justify-center items-center gap-2 mt-3">
        <span className="w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-primary-light"></span>
        <span className="min-w-40 w-[14vw] h-[1px] bg-primary-light"></span>
        <span className="w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-primary-light"></span>
      </div>
    </section>
  );
}

export default Intro;
