import React from 'react'
import { RefreshIcon } from '@heroicons/react/outline'
const Feed = () => {
  return (
    <div className="col-span-7 lg:col-span-5">
        <div className="flex item-center justify-between ">
            <h1 className="p-5 pb-0 text-xl font-bold">Home</h1>
            <RefreshIcon className="w-8 h-8 cursor-pointer text-twitter mr-5 mt-5 transition-all duration-500 ease-out hover:rotate-180 active:scale-125" />
        </div>
    </div>
  )
}

export default Feed