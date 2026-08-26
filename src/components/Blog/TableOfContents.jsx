import { useDark } from '@/contexts/DarkModeContext'
import { useActiveHeadings } from '@/hooks/useActiveHeading'
import React from 'react'

const TableOfContents = ({ headings }) => {
    const activeId = useActiveHeadings(headings)
    const { darkmode,setDarkMode } = useDark()
    return (
        <div className='border sticky top-24 overflow-y-auto border-purple-600/50 rounded-xl p-4'>
            <h3 className='mb-4 text-xl font-bold'>فهرست مطالب</h3>
            <ul className='space-y-3'>
                {headings.map(item => (
                    <li key={item.id}
                        onClick={(e) => {
                            e.preventDefault()
                            document.getElementById(item.id)?.scrollIntoView({
                                behavior: "smooth",
                                block: "start"
                            })
                        }}

                        style={{ marginRight: (item.level - 1) * 20 }}
                        className={`cursor-pointer relative transition-all ${activeId === item.id ? 'text-purple-400 font-semibold' : 'text-zinc-400 hover:text-white'}`}
                    >
                        <div className={`absolute right-0 top-0 h-full w-1 rounded-full ${activeId === item.id ? 'bg-purple-600' : 'bg-transparent'}`} />
                        <span className={`${darkmode ? 'text-white' : 'text-black'}`} style={{ paddingRight: (item.level - 1) * 12 }}>
                            {item.text}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TableOfContents