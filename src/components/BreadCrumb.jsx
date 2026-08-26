'use client'

import { useDark } from '@/contexts/DarkModeContext'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const formatSlug = (slug) => {
    return slug
        .replace(/-/g, ' ')
        .replace(/\b\w/g, (char) => char.toUpperCase())
}
const breadcrumbLabels = {
    blog: 'بلاگ',
    post: 'پست',
    contact: 'تماس با من'
}
const BreadCrumb = () => {
    const {darkmode} = useDark()
    const pathname = usePathname() || '/'
    const pathName = pathname.split('/').filter(Boolean)
    if (pathName.length === 0) return null
    const getBreadcrumbLabel = (slug) => {
        return breadcrumbLabels[slug] || formatSlug(slug)
    }
    return (
        <nav className={`text-sm flex justify-center ${!darkmode && 'bg-white'}`}>
            <ul className="flex flex-wrap items-center gap-2 text-gray-600">
                <li>
                    <Link href="/">خانه</Link>
                </li>
                {pathName.map((part, index) => {
                    const to = '/' + pathName.slice(0, index + 1).join('/')
                    const label = getBreadcrumbLabel(part)
                    const isLast = index === pathName.length - 1
                    return (
                        <li key={to} className="flex items-center gap-1">
                            <span className='text-lg'>{'>'}</span>
                            {isLast ? (
                                <>
                                    <span className="text-gray-500">{label}</span>
                                </>
                            ) : (
                                <Link href={to} className="hover:underline">
                                    {label}
                                </Link>
                            )}
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default BreadCrumb
