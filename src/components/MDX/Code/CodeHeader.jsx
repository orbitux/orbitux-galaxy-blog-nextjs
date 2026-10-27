'use client'
import React from 'react'
import LanguageBadge from './LanguageBadge'
const CodeHeader = ({ language, filenameu }) => {

    return (
        <div className='border-b border-zinc-700 bg-zinc-900 px-4 py-2'>
            {filename && (
                <span className='text-sm text-zinc-300'>
                    {filename}
                </span>
            )}
            <LanguageBadge language={language} />
        </div>
    )
}

export default CodeHeader