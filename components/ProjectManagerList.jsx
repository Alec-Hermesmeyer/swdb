// export default ProjectManagerList;
import React, { useState, useEffect } from 'react';
import { BiDetail } from 'react-icons/bi';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = 'https://qhiwobrqftpbwsxjvhdl.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFoaXdvYnJxZnRwYndzeGp2aGRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODAxMDYxNDksImV4cCI6MTk5NTY4MjE0OX0.sz1TxezhnyIPIqCvOpAq2G5ZiiDwFQkWZlRxKnvLLLk'

const supabase = createClient(supabaseUrl, supabaseKey);

const ProjectManagerList = () => {
  const [jobName, setJobName] = useState('');
  const [pm, setPM] = useState('');
  const [pmList, setPMList] = useState([]);


  const addJob = async () => {
    try {
      const { data, error } = await supabase
        .from('pm_List')
        .insert([{ Job: jobName, PM: pm }]);

      if (error) {
        throw error;
      }

      setPMList([...pmList, data[0]]);
      setJobName('');
      setPM('');
    } catch (error) {
      console.error('Error adding job:', error.message);
    }
  };

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const { data, error } = await supabase
          .from('pm_List')
          .select('Job, PM');

        if (error) {
          throw error;
        }

        console.log('Retrieved data:', data);
        setPMList(data);
      } catch (error) {
        console.error('Error fetching jobs:', error.message);
      }
    };


    fetchJobs();
  }, []);

  console.log('pmList:', pmList); // Verify the pmList state


  return (
    <div className='w-full col-span-1 relative h-full m-auto p-4 rounded-lg bg-white overflow-scroll'>
      <h1 className='text-2xl font-bold'>Project Manager List</h1>
      <div className='pb-40 h-full w-full'>
        <ul>
          {pmList.map((order) => (
            <li
              key={order.id}
              className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer'
            >
              <div className='bg-blue-100 rounded-lg p-3'>
                <BiDetail className='text-blue-800' />
              </div>
              <div className='flex justify-between w-[90%]'>
                <p className='text-sm text-gray-800 pl-4'>{order.Job}</p>
                <p className='text-sm text-gray-800'>{order.PM}</p>
              </div>
            </li>
          ))}
        </ul>

      </div>
      
        {/* <div className='flex items-center justify-between mt-4 w-45vw'>
          <input
            type='text'
            value={jobName}
            onChange={(e) => setJobName(e.target.value)}
            placeholder='Job Name'
            className='px-2 py-1 w-32 sm:w-35 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500'
          />
          <input
            type='text'
            value={pm}
            onChange={(e) => setPM(e.target.value)}
            placeholder='PM'
            className='px-2 py-1 w-32 sm:w-30 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500'
          />
          <button
            onClick={addJob}
            className='px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600'
          >
            Add Job
          </button>
        </div> */}
      

    </div>
  );
};

export default ProjectManagerList;