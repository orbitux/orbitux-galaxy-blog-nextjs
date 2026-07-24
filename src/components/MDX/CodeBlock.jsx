import React from 'react'
import CopyCodeBtn from './CopyCodeBtn'

const CodeBlock = ({ children }) => {
    const text = children.props.children
    console.log(children);
    return (
        <div className="relative my-8">
            <CopyCodeBtn text={text.trim()} />
            <pre className="overflow-x-auto rounded-xl bg-slate-900 p-5">
                <code>
                    {children}
                </code>
            </pre>
        </div>
    )
}

export default CodeBlock