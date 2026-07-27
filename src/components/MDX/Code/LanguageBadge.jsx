import React from 'react'

const LanguageBadge = ({ language }) => {
    if (!language) return null
    return (
        <span className='
        rounded-md
        border
        text-zinc-300
        border-zinc-700
        bg-zinc-800
        px-2
        py-0.5
        text-sm
        font-medium
        uppercase
        tracking-wide

        '>
            {language}
        </span>
    )
}

export default LanguageBadge