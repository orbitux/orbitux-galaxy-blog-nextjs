'use client'
import React from 'react'
import { motion } from 'motion/react'
const CodeTabs = ({ parsedTabs, activeTab, setActiveTab }) => {

    return (
        <div dir='ltr' className='flex items-center gap-1 px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-t-xl'>
            {parsedTabs.map((tab, index) => (
                <motion.button key={index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setActiveTab(index)}
                    className={`relative px-4 py-2 text-sm transition-all rounded-md
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