'use client'
import React from 'react'

const Prose = ({ children }) => {
    return (
        <article className='
        max-w-4xl
        mx-auto

        text-gray-300
        leading-9

        [&_h1]:text-5xl
        [&_h1]:font-bold
        [&_h1]:mb-8
        [&_h1]:mt-12

        [&_h2]:text-4xl
        [&_h2]:font-semibold
        [&_h2]:mt-12
        [&_h2]:mb-6

        [&_h3]:text-2xl
        [&_h3]:font-semibold
        [&_h3]:mt-8
        [&_h3]:mb-4

        [&_p]:leading-9
        [&_p]:mb-6
        [&_p]:text-lg

        [&_strong]:font-bold
        [&_strong]:text-white

        [&_a]:text-purple-600
        [&_a]:underline
        [&_a:hover]:text-purple-500

        [&_img]: rounded-xl
        [&_img]: my-8
        '>
            {children}
        </article>
    )
}

export default Prose