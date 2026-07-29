'use client'
import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import loadingPost from '@/components/lottieIcons/loading.json'
import Lottie from 'lottie-react'
const Loading = () => {
  return (
    <>
      <div className='flex gap-4 container mx-auto px-2 mt-10'>
        <SkeletonTheme enableAnimation={true} duration={1.5} baseColor='purple'>
          <aside className=' hidden xl:block xl:col-span-3 '>
            <Skeleton style={{
              height: '100vh',
              width: '200px'
            }} />
          </aside>
          <main className="flex-1 prose porse-lg mt-10 text-white px-10">
            <Skeleton count={2} className="mb-2" width={200} height={20} />
            <Skeleton count={1} className="rounded-xl mb-4 object-contain mt-5 mx-auto" width={800} height={400} />
            <Skeleton count={20} height={20} width={'100%'} />
          </main>
        </SkeletonTheme>
      </div>
    </>
  )
}

export default Loading