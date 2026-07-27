'use client'
import React, { useRef } from 'react'
import CodeHeader from './CodeHeader'
// import CopyCodeBtn from './CopyCodeBtn'

const CodeBlock = ({ children }) => {
    const codeRef = useRef(null)
    return (
        <figure className='text-left'>
            <CodeHeader filename="example.jsx" language="jsx" target={codeRef} />
            <div ref={codeRef}>
                {children}
            </div>
        </figure>
    )
}

export default CodeBlock