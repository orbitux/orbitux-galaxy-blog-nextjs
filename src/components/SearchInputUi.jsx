import { useOpen } from '@/contexts/OpenDialogContext'
import React from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'

const SearchInputUi = () => {
    const { setOpen } = useOpen()
    return (
        <div>
            <Input type='text'
                placeholder='جستجو در مقالات...'
                className='cursor-pointer w-3xs border-gray-500'
                onClick={() => setOpen(true)}/>
            {/* <div className='flex items-center w-full justify-between'>
                    <span>جستجو در مقالات</span>
                    </div> */}
        </div>
    )
}

export default SearchInputUi