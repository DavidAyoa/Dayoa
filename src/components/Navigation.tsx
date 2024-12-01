import '../styles/Navigation.css'
import DayoaLogo from '../asssets/logo/logo-lowercase.svg?react'
import BehanceLogo from '../asssets/icons/Behance.svg?react'
import GithubLogo from '../asssets/icons/GitHub.svg?react'
import LinkedInLogo from '../asssets/icons/LinkedIn Circled.svg?react'

function Navigation () {
    const iconLogoClassnames = 'h-5 md:h-6 lg:h-7 w-auto cursor-pointer'

    return (
        <div className='nav flex justify-between items-center mix-blend-difference fixed top-0 left-0 w-[100vw] py-5 px-4 md:py-5 md:px-10 z-[999]'>
            <div className='flex items-center gap-2'>
                <DayoaLogo className='nav-logo h-5 md:h-6 w-auto'/>
                <div className='bg-primary-light h-7 w-12 md:h-8 md:w-14 flex justify-center items-center gap-[3px] rounded-3xl'>
                    <span className='w-1 h-1 rounded-full bg-primary-dark'></span>
                    <span className='w-1 h-1 rounded-full bg-primary-dark'></span>
                    <span className='w-1 h-1 rounded-full bg-primary-dark'></span>
                </div>
            </div>

            <div className='nav-icons-container flex items-center gap-2 md:gap-5'>
                <BehanceLogo className={iconLogoClassnames} />
                <GithubLogo className={iconLogoClassnames} />
                <LinkedInLogo className={iconLogoClassnames} />
            </div>
        </div>
    )
}

export default Navigation