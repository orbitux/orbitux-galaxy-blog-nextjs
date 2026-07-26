import React from 'react'

const TableOfContents = ({ headings }) => {
    return (
        <div className='border fixed border-purple-600/50 rounded-xl p-4'>
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

                        style={{ marginRight: (item.level - 1) * 16 }}
                        className='cursor-pointer'
                    >
                        {item.text}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TableOfContents