import React from 'react'
import Link from 'next/link'
import {SlCalender} from 'react-icons/sl'
import { BsCardList } from 'react-icons/bs'
import useAuth from '@/utils/auth'

const hub = () => {
    useAuth();
    return (
        <div className='bg-gray-100 min-h-screen'>
            <div className='flex justify-between px-4 pt-4 pb-4 bg-blue-800 text-white'>
                <h2 className='pl-2'>Welcome!</h2>
                <h2 className='pr-2'>Easily Access Your Data</h2>
            </div>
            <div className='grid lg:grid-cols-4 gap-4 p-4'>
                <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg lg:h-[45vh] h-[35vh] overflow-scroll overflow-y-auto'>
                    <div className='flex flex-col w-full pb-4'>
                        <h1 className='text-2xl font-bold pl-2'>Adminstrative</h1>
                        <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 items-center justify-between cursor-pointer '>
                            <span className='pl-2'>Job Name</span>
                            <span className='sm:text-left text-right'>Company</span>
                            <span className='hidden sm:grid'>Project Manager</span>
                            <span className='hidden md:grid pl-8'>Start Date</span>
                        </div>
                    </div>
                </div>
                <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg lg:h-[45vh] h-[35vh] overflow-scroll overflow-y-auto'>
                    <div className='flex flex-col w-full pb-4'>
                        <h1 className='text-2xl font-bold pl-2'>Pre-Con & Sales</h1>
                        <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 items-center justify-between cursor-pointer '>
                            <span className='pl-2'>Job Name</span>
                            <span className='sm:text-left text-right'>Company</span>
                            <span className='hidden sm:grid'>Contract Amount</span>
                            <span className='hidden md:grid pl-8'>Date Sold</span>
                        </div>
                    </div>
                </div>

                <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg lg:h-[45vh] h-[35vh] overflow-scroll overflow-y-auto'>
                    <div className='flex flex-col w-full pb-4'>
                        <Link href='/pm' className='cursor-pointer'><h1 className='text-2xl font-bold pl-2'>Project Managers</h1></Link>
                        <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 items-center justify-between cursor-pointer '>
                            <span className='pl-2 flex-col items-center'><BsCardList  /> PM List</span>
                            <span className='sm:text-left text-right'>Company</span>
                            <span className='hidden sm:grid'>Contract Amount</span>
                            <span className='hidden md:grid pl-8'>Date Sold</span>
                        </div>
                    </div>
                </div>
                <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg lg:h-[45vh] h-[35vh] overflow-scroll overflow-y-auto'>
                    <div className='flex flex-col w-full pb-4'>
                        <h1 className='text-2xl font-bold pl-2'>Field Operations</h1>
                        <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 items-center justify-between cursor-pointer '>
                            <span className='pl-2'>Calender
                            {/* <SlCalender className='pl-4'/> */}
                            </span>
                            <span className='sm:text-left text-right'>Company</span>
                            <span className='hidden sm:grid'>Contract Amount</span>
                            <span className='hidden md:grid pl-8'>Date Sold</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default hub