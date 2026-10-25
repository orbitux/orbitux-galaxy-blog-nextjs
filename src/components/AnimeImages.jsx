import Image from 'next/image'
import React from 'react'

const AnimeImages = () => {
    return (
        <>
            <div className='absolute bottom-0 -z-10'>
                <Image src={'/anime4.png'} width={500} height={500}/>
            </div>
        </>
    )
}

export default AnimeImages