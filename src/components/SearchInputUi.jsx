'use client'
import { useOpen } from '@/contexts/OpenDialogContext'
import React from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'

const SearchInputUi = () => {
    const { setOpen } = useOpen()
    return (
        <>
            <div className='relative w-[100px] md:w-[200px] xl:w-64'>
                <Input type='text'
                    placeholder='جستجو در مقالات...'
                    className='cursor-pointer placeholder:text-[10px] xl:placeholder:text-[16px] border-gray-500'
                    onClick={() => setOpen(true)} />
                <Button variant='ghost' className='hidden xl:inline xl:absolute xl:left-0'>ctrl + x</Button>
            </div>
        </>
    )
}

export default SearchInputUi