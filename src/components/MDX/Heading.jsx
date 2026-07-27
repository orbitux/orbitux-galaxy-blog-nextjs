'use client'
import { Link2 } from 'lucide-react'
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

const Heading = ({ as: Tag, id, children, className = "" }) => {
    const [copied, setCopied] = useState(false)
    const handleCopy = async () => {
        const url = `${window.location.origin}${window.location.pathname}#${id}`
        await navigator.clipboard.writeText(url)
        setCopied(true)
        toast.success('متن با موفقیت کپی شد!')
        setTimeout(() => {
            setCopied(false)
            toast.remove()
        }, 2000)
    }
    return (
        <>
            <Tag id={id} className={`group scroll-mt-24 ${className}`}>
                <span className='flex items-center gap-2'>
                    {children}
                    <button onClick={handleCopy} className='opacity-0 transition-opacity group-hover:opacity-100' title='کپی لینک'>
                        <Link2
                            size={18}
                            className={copied ? 'text-purple-500' : 'text-zink-500 hover:text-purple-500'}
                        />
                    </button>
                </span>
            </Tag>
            <Toaster toastOptions={{
                icon: <Link2 />
            }} />
        </>
    )
}

export default Heading