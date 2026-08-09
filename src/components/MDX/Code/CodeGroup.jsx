'use client'
import React, { Children, cloneElement, useState } from 'react'
import CodeTabs from './CodeTabs'
import { useCodeGroup } from './CodeGroupProvider'
import CodeBlock from './CodeBlock'

const CodeGroup = ({ tabs, children }) => {
    const { preferredTab, setPreferredTab } = useCodeGroup()
    const activeTab = preferredTab ?? 0
    const codes = Children.toArray(children)
    const activeCode = cloneElement(
        codes[activeTab],
        {
            language: tabs[activeTab]?.language,
            filename: tabs[activeTab]?.filename,
            title: tabs[activeTab]?.title
        })
    const parsedTabs = typeof tabs === "string" ? JSON.parse(tabs) : tabs
    return (
        <div className='my-10 relative'>
            <CodeTabs activeTab={activeTab} setActiveTab={setPreferredTab} parsedTabs={parsedTabs} />
            {activeCode}
                 
        </div>
    )
}

export default CodeGroup