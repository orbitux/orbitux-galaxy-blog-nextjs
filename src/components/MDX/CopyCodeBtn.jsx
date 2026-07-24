'use client'
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { PiCopySimpleBold } from "react-icons/pi";
import { RiCheckboxMultipleFill } from "react-icons/ri";
const CopyCodeBtn = ({ text }) => {
    const [copied, setCopied] = useState(false)
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(text)
            setCopied(true)
            toast.success("کد با موفقیت کپی شد!")
            setTimeout(() => {
                setCopied(false)
                toast.remove()
            }, 2000)
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <button onClick={handleCopy} className="absolute top-3 right-3 flex items-center gap-2 rounded-md bg-zinc-800 px-3 py-2 text-sm text-white transition hover:bg-zinc-700">
            {copied ? (
                <>
                    <RiCheckboxMultipleFill size={16} />
                </>
            ) : (
                <>
                    <PiCopySimpleBold size={16} />
                </>
            )}
            <Toaster />
        </button>
    )
}

export default CopyCodeBtn