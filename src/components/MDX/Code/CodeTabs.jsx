'use client'
import React from 'react'
import { motion } from 'motion/react'
const CodeTabs = ({ parsedTabs, activeTab, setActiveTab }) => {

    return (
        <div dir='ltr' className='
        absolute 
        xl:left-[35%] 
        xl:md
        xl:w-fit 
        xl:px-3 
        xl:py-2
        left-0
        -top-7
        md:top-0
        justify-center
        w-full 
        flex 
        items-center 
        gap-1 
        border-zinc-800 
        xl:rounded-xl'>
            {parsedTabs.map((tab, index) => (
                <motion.button key={index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setActiveTab(index)}
                    className={`relative shrink-0 md:px-4 md:py-2 px-2 py-1 text-sm transition-all rounded-md
                        ${activeTab === index ? 'text-white bg-zinc-800' : 'text-zinc-400 hover:text-white'} `}
                >
                    {tab.title}
                    {
                        activeTab === index && (
                            <motion.span
                                layoutId="active-tab"
                                className="
                                 absolute
                                 left-2
                                 right-2
                                 bottom-0
                                 h-[2px]
                                bg-purple-500
                                        "
                            />
                        )
                    }
                </motion.button>
            ))}
        </div>
    )
}

export default CodeTabs