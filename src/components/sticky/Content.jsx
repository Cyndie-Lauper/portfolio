import React from 'react'

export default function Content() {
  return (
    <div className='bg-[#0E0E0C] py-8 px-12 h-full w-full flex flex-col justify-between'>
        <Section1 />
        <Section2 />
    </div>
  )
}

const Section1 = () => {
    return (
        <div>
            <Nav />
        </div>
    )
}

const Section2 = () => {
    return (
        <div className='flex justify-between items-end'>
            <h1 className='text-[12vw] leading-[0.8] mt-10 text-[#DDDDD5]'>My Portfolio</h1>
            <p>©copyright</p>
        </div>
    )
}

const Nav = () => {
    return (
        <div className='flex shrink-0 gap-20 text-[#DDDDD5]'>
            <div className='flex flex-col gap-2'>
                <h3 className='mb-2 uppercase'>About</h3>
                <a href="/#hero" className="group relative hidden md:inline-block">
                    <span>Home</span>
                    <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
                </a>
                <a href="/#services" className="group relative hidden md:inline-block">
                    <span>Services</span>
                    <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
                </a>
                <a href="/#works" className="group relative hidden md:inline-block">
                    <span>Projects</span>
                    <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
                </a>
                <a href="/#contact" className="group relative hidden md:inline-block">
                    <span>Contact</span>
                    <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
                </a>
            </div>
            <div className='flex flex-col gap-2'>
                <h3 className='mb-2 uppercase'>My bio</h3>
                <a href="https://github.com/Cyndii-Lauper" className="group relative hidden md:inline-block">
                    <span>Github</span>
                    <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
                </a>
                <a href="mailto:diLauper0@gmail.com" className="group relative hidden md:inline-block">
                    <span>Gmail</span>
                    <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
                </a>
                <a href="https://twitter.com/iuyj1223" className="group relative hidden md:inline-block">
                    <span>Twitter</span>
                    <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
                </a>
                <a href="https://www.facebook.com/no.iloveher/" className="group relative hidden md:inline-block">
                    <span>Facebook</span>
                    <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
                </a>
            </div>
        </div>
    )
}