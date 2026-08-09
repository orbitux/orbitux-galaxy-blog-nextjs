'use client'
import React, { useRef } from 'react'
import CodeHeader from './CodeHeader'
import CodeTabs from './CodeTabs'
// import CopyCodeBtn from './CopyCodeBtn'

const CodeBlock = ({ children, language = "text", filename = "" }) => {
    const codeRef = useRef(null)
    return (
        <figure className='m-0 p-0 text-left'>
            <CodeHeader filename={filename} language={language} target={codeRef} />
            <div ref={codeRef}>
                {children}
            </div>

        </figure>
    )
}

export default CodeBlock