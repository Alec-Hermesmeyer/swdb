import React, { useState, useEffect } from 'react';
import { BiDetail } from 'react-icons/bi';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;


const supabase = createClient(supabaseUrl, supabaseKey);

const SeanList = () => {
    const [jobName, setJobName] = useState('');
    const [pm, setPM] = useState('');
    const [seanList, setSeanList] = useState([]);

    useEffect(() => {
        const fetchSean = async () => {
            try {
                const { data, error } = await supabase
                    .from('sean_pmList')
                    .select('Job, PM');

                if (error) {
                    throw error;
                }

                console.log('Sean List Working', data);
                setSeanList(data);
            } catch (error) {
                console.error('Ya fucked up', error.message);
            }
        };

        fetchSean();
    }, []);

    return (

<div className='w-full col-span-1 relative h-full m-auto p-4 rounded-lg bg-white overflow-scroll'>
      <h1 className='text-2xl font-bold'>Sean's PM List</h1>
      <div className='pb-40 h-full w-full'>
        <ul>
          {seanList.map((order) => (
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

        

   </div>
  
  );
};


      export default SeanList;
    
