import React from 'react'
import { FaInfo } from "react-icons/fa";
import { IoMdAlert } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import { GoXCircleFill } from "react-icons/go";
const varients = {
    info: {
        icon: FaInfo,
        title: "نکته",
        className: "border-blue-500/50 bg-blue-500/5 text-blue-100"
    },
    warning: {
        icon: IoMdAlert,
        title: "هشدار",
        className: "border-yellow-500/50 bg-yellow-500/10 text-yellow-100"
    },
    success: {
        icon: FaCheckCircle,
        title: "موفق",
        className: "border-green-500/50 bg-green-500/10 text-green-100"
    },
    error: {
        icon: GoXCircleFill,
        title: "خطا",
        className: "border-red-500/50 bg-red-500/10 text-red-100"
    }
}

const Callout = ({ type = "info", children }) => {
    const varient = varients[type] || varients.info
    const Icon = varient.icon
    return (
        <div className={`my-8 rounded-xl border p-5 ${varient.className}`}>
            <div className='mb-3 flex items-center gap-2 font-bold'>
                <Icon size={20} />
                <span>{varient.title}</span>
            </div>
            <div className='leading-8u'>
                {children}
            </div>
        </div>
    )
}

export default Callout