'use client'
import React, { Children, cloneElement, useState } from 'react'
import CodeTabs from './CodeTabs'
import { useCodeGroup } from './CodeGroupProvider'

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
        <div className='my-6 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950'>
            <CodeTabs activeTab={activeTab} setActiveTab={setPreferredTab} parsedTabs={parsedTabs} />
            {activeCode}
        </div>
    )
}

export default CodeGroup