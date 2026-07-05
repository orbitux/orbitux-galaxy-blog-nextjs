import { useOpen } from '@/contexts/OpenDialogContext'
import React from 'react'
import { Button } from './ui/button'

const SearchInputUi = () => {
    const { setOpen } = useOpen()
    return (
        <div>
            <Button variant="ghost" className='cursor-pointer w-3xs border-gray-500' onClick={() => setOpen(true)}>
                <div className='flex items-center w-full justify-between'>
                    <span>جستجو در مقالات</span>
                    <span>ctrl + x</span>
                </div>
            </Button>
        </div>
    )
}

export default SearchInputUi