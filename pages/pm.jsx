import ProjectManagerList from '@/components/PMList/ProjectManagerList';
import React, { useState } from 'react';
import useAuth from '@/utils/auth';
import SeanList from '@/components/PMList/SeanList';

const pm = () => {
  useAuth();
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleList = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div
        className="flex items-center justify-between cursor-pointer px-4 py-2 bg-white"
        onClick={toggleList}
      >
        <h1>Project Manager List</h1>
        {isExpanded ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        )}
      </div>
      {isExpanded && (
        <div className="grid grid-cols-2 gap-4 px-4 py-2">
        <div className="col-span-1 lg:h-[70vh] h-[50vh]">
          <ProjectManagerList />
        </div>
        <div className="col-span-1 lg:h-[70vh] h-[50vh]">
          <SeanList />
        </div>
      </div>
    )}
  </div>
);
};

export default pm;