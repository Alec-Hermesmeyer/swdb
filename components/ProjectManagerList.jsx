import React, { useState } from 'react';
import { BiDetail } from 'react-icons/bi';

const ProjectManagerList = () => {
  const [jobName, setJobName] = useState('');
  const [company, setCompany] = useState('');
  const [pm, setPM] = useState('');
  const [pmList, setPMList] = useState([
    {
      id: 1,
      job: {
        company: 'ACS',
        name: 'DISD Herbert Marcus',
      },
      PM: 'Josh',
    },
  ]);

  const addJob = () => {
    const newJob = {
      id: pmList.length + 1,
      job: {
        company: company,
        name: jobName,
      },
      PM: pm,
    };

    setPMList([...pmList, newJob]);

    // Reset input values
    setJobName('');
    setCompany('');
    setPM('');
  };

  return (
    <div className='w-full col-span-1 relative h-full m-auto p-4 rounded-lg bg-white overflow-scroll'>
      <h1 className='text-2xl font-bold'>Project Manager List</h1>
      <div className='pb-4'>
        <ul>
          {pmList.map((order, id) => (
            <li
              key={id}
              className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer'
            >
              <div className='bg-blue-100 rounded-lg p-3'>
                <BiDetail className='text-blue-800' />
              </div>
              <div className='flex justify-between w-[90%]'>
                <p className='text-sm text-gray-800 pl-4'>{order.job.name}</p>
                <p className='text-sm text-gray-800'>{order.job.company}</p>
                <p className='text-sm text-gray-800'>{order.PM}</p>
              </div>

              {/* <p className='w-full pl-28 flex  absolute right-6 text-sm text-gray-800'>{order.job.company}</p>
              <p className='w-full pl-28 flex  absolute right-6 text-sm text-gray-800'>{order.PM}</p> */}
            </li>
          ))}
        </ul>
      </div>
      <div className='flex items-center justify-between mt-4 w-45vw'>
        <input
          type='text'
          value={jobName}
          onChange={(e) => setJobName(e.target.value)}
          placeholder='Job Name'
          className='px-2 py-1 w-32 sm:w-35 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500'
        />
        <input
          type='text'
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder='Company'
          className='px-2 py-1 w-32 sm:w-35 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500'
        />
        <input
          type='text'
          value={pm}
          onChange={(e) => setPM(e.target.value)}
          placeholder='PM'
          className='px-2 py-1 w-32 sm:w-35 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500'
        />
        <button
          onClick={addJob}
          className='px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600'
        >
          Add Job
        </button>
      </div>


    </div>
  );
};

export default ProjectManagerList;