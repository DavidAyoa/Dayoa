import Marquee from './Marquee'
import HandIcon from '../asssets/icons/hand-wave-icon.svg?react'

function Intro () {
    return (
        <div className='flex flex-col justify-center items-center w-full overflow-hidden text-primary-light mix-blend-difference gap-4'>
            <div className='greeting flex flex-col items-center justify-center'>
                <h4 className='flex font-satoshi-medium text-body-regular lg:text-sub-heading-regular gap-2 items-center font-regular'>hello, David here&nbsp;<HandIcon className='h-8 lg:h-12 w-auto' /></h4>
                <h2 className='font-satoshi-bold text-sub-heading-regular lg:text-heading-medium font-medium'>Software Engineer</h2>
            </div>
            <span className='text-[14px] font-satoshi-light lg:text-body-medium max-w-[600px] w-[85vw] text-center'>
                I'm a software engineer with expertise across design, frontend, and backend development. I’m passionate about building user-centered products and have contributed to impactful, high-quality features in applications designed for broad-scale engagement.
            </span>
            <div></div>
            <Marquee text='&nbsp;• Frontend Engineer • Backend Engineer • Full-Stack Engineer • Product Designer' />
        </div>
    )
}

export default Intro