
function Footer () {
    return (
        <div className='fixed bottom-0 font-satoshi-light left-0 w-full flex items-center justify-between text-primary-light mix-blend-difference font-[100] py-6 px-5'>
            <div className='flex items-center gap-2 text-caption-large'>
                <span>Home</span>
                <span className="w-[10vw] h-[1px] bg-primary-light"></span>
            </div>
            <div>
                <a
                    title="download resume"
                    href='/Ajibade-David-Resume.pdf'
                    target='_blank'
                    rel="noopener noreferrer"
                    className='border rounded-full px-8 py-2 text-caption-large'
                >
                    Resume
                </a>
            </div>
        </div>
    )
}

export default Footer