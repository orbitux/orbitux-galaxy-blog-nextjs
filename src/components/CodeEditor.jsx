'use client'
import React, { useEffect } from 'react'
import Lottie from 'lottie-react'
import animationData from './codingAnimationIcon.json'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
const CodeEditor = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.set('#section_right', { x: 200, opacity: 0 })
        gsap.set('#section_left', { y: 200, opacity: 0 })

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#code_container',
                toggleActions: 'play none none none'
            }
        })

        tl.to('#section_right', { x: 0, opacity: 1, duration: 1 })
        tl.to('#section_left', { y: 0, opacity: 1, duration: 1 })

        return () => ScrollTrigger.getAll().forEach(t => t.kill())
    }, [])
    return (
        <div id='code_container' className='container my-16'>
            <div className='flex flex-col md:flex-row items-center md:justify-around my-10'>
                <div id='section_right' className='w-[50%] flex flex-col justify-between'>
                    <div >
                        <h2 className='xl:text-4xl text-2xl text-purple-500 mb-8'>کد ادیتور آنلاین</h2>
                        <p className='text-xl'>شما عزیزان میتوانید در شرایطی که دسترسی به IDE های خودتون ندارید از کد ادیتور آنلاین ما استفاده کنید کد ادیتوری ساده که از زبان های html,css,js پشتیبانی میکند و میتواند نیاز های اولیه شمارا در شرایط خاص برطرف سازد.</p>
                    </div>
                    <div className='flex justify-center my-6'>
                        <Link href={'https://editor.orbitux.space'} target='_blank' className='group hover:shadow-2xl text-center hover:shadow-purple-700 hover:scale-105 hover:bg-black transition-all delay-75 bg-purple-900 w-[100%] md:w-[50%] py-2 px-4 rounded-2xl cursor-pointer border '>
                            ورود به کد ادیتور
                        </Link>
                    </div>
                </div>
                <div id='section_left'>
                    <Lottie animationData={animationData} />
                </div>
            </div>
        </div>
    )
}

export default CodeEditor