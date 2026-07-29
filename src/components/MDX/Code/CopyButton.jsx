// 'use client'
// import { Check, Copy } from 'lucide-react'
// import React, { useState } from 'react'

// const CopyButton = ({ target }) => {
//     const [copied, setCopied] = useState(false)
//     const handleCopy = async () => {
//         if (!target.current) return
//         const code = target.current.innerText
//         await navigator.clipboard.writeText(code)
//         setCopied(true)
//         setTimeout(() => {
//             setCopied(false)
//         }, 2000)
//     }
//     return (
//         <button onClick={handleCopy} className='
//         rounded-md
//         p-2
//         transition
//         hover:bg-zinc-800
//         '>
//             {copied ? <Check size={16} /> : <Copy size={16} />}
//         </button>
//     )
// }

// export default CopyButton