import { useOpen } from '@/contexts/OpenDialogContext'
import React from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'

const SearchInputUi = () => {
    const { setOpen } = useOpen()
    return (
        <>
            <div className='relative'>
                <Input type='text'
                    placeholder='جستجو در مقالات...'
                    className='cursor-pointer w-3xs border-gray-500'
                    onClick={() => setOpen(true)} />
                <Button variant='ghost' className='absolute left-0'>ctrl + x</Button>
            </div>
        </>
    )
}

export default SearchInputUi