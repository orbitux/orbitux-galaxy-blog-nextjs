'use client'
import { Check, Copy } from 'lucide-react'
import React, { useEffect } from 'react'
import { createRoot } from 'react-dom/client'

const mounted = new WeakMap()
const CodeCopyButtons = () => {
    useEffect(() => {
        const handleClick = async (e) => {
            const button = e.target.closest("[data-copy-button]")
            if (!button) return
            const figure = button.closest("figure")
            const code = figure?.querySelector("pre code")
            if (!code) return

            await navigator.clipboard.writeText(code.innerText)
            const root = mounted.get(button)
            root.render(
                <Check size={16} className='text-green-400' />
            )
            setTimeout(() => {
                root.render(
                    <Copy size={16} />
                )
            }, 2000)
        }
        document.addEventListener('click', handleClick)
        document.querySelectorAll("[data-copy-button]").forEach(button => {
            if (mounted.has(button)) return
            const root = createRoot(button)
            mounted.set(button, root)
            root.render(
                <Copy size={16} />
            )
        })
        return () => {
            document.removeEventListener('click', handleClick)
            mounted.forEach?.(() => { })
        }
    }, [])
    return null
}

export default CodeCopyButtons