import React from 'react'
import { pmList } from '@/data/pmList'
import { RxPerson } from 'react-icons/rx'
import ProjectManagerList from '@/components/ProjectManagerList'
import useAuth from '@/utils/auth'

const projects = () => {
    useAuth();
    return (
        <div className='bg-gray-100 min-h-screen'>
            <div className='flex justify-between px-4 pt-4 pb-4 bg-blue-800 text-white'>
                <h2>Projects</h2>
                <h2>Welcome Back, Client</h2>
            </div>
            <div className='grid lg:grid-cols-4 gap-4 p-4'>
                <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg lg:h-[70vh] h-[50vh] overflow-scroll overflow-y-auto'>
                    <div className='flex flex-col w-full'>
                        {/* <p className='text-2xl font-bold pl-2'>PM List</p>
                        <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 items-center justify-between cursor-pointer '>
                            <span className='pl-2'>Job Name</span>
                            <span className='sm:text-left text-right'>Company</span>
                            <span className='hidden sm:grid'>Project Manager</span>
                            <span className='hidden md:grid pl-8'>Start Date</span>
                        </div>
                        <ul>
                            {pmList.map((order, id) => (
                                <li key={id} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
                                    <div className='flex items-center'>
                                        <div className='bg-blue-100 p-3 rounded-lg'>
                                            <RxPerson className='text-blue-800' />
                                        </div>
                                        <div className='pl-4'>
                                        <p className='text-gray-800 text-sm pl-4'>{order.job.name}</p>
                                          
                                            
                                        </div>
                                        <p className='text-gray-800 text-sm pl-4'>{order.job.company}</p>
                                    </div>
                                    <p className='text-gray-800 text-sm'>{order.PM}</p>
                                </li>
                            ))}
                        </ul> */}
                        <ProjectManagerList />
                    </div>
                    
                </div>
                
                <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg lg:h-[70vh] h-[50vh] overflow-scroll overflow-y-auto'>
                    <div className='flex flex-col w-full pb-4'>
                        <p className='text-2xl font-bold pl-2'>S&W Commercial Backlog</p>
                        <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 items-center justify-between cursor-pointer '>
                            <span className='pl-2'>Job Name</span>
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

export default projects