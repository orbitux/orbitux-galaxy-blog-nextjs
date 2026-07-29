import { Copy } from 'lucide-react'
import React from 'react'
import LanguageBadge from './LanguageBadge'
import CopyButton from './CopyButton'
const CodeHeader = ({ language, filename, target }) => {

    return (
        <div className='flex flex-row-reverse items-center justify-between border-b border-zinc-700 bg-zinc-900 px-4 py-2'>
            <div className='flex items-center gap-3'>
                {filename && (
                    <span className='text-sm text-zinc-300'>
                        {filename}
                    </span>
                )}
                <LanguageBadge language={language} />
            </div>
            {/* <CopyButton target={target} /> */}
        </div>
    )
}

export default CodeHeader