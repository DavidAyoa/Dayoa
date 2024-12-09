import MotionText from "./MotionText";

function FrontendHero() {
  return (
    <section className="font-satoshi-regular frontend h-[125vh] flex justify-center items-center text-primary-light mix-blend-difference w-full text-body-small md:text-body-large">
        <MotionText
            scrollTrigger={true}
            className="w-[50%] text-center"
        >
            I'm a software engineer with expertise across design, frontend, and backend development. I’m passionate about building user-centered products and have contributed to impactful, high-quality features in applications designed for broad-scale engagement.
        </MotionText>
    </section>
  );
}

export default FrontendHero;
