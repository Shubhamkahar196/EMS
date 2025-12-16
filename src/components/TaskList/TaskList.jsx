import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-wrap w-full py-5  mt-10'>
   <div className=' shrink-0 h-full w-75  p-5 bg-green-400 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 px-3 py-1 rounded'>High</h3>
            <h4 className='text-sm'>16 Dec 2025</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>I am a react developer</h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime vero sint delectus facere dolorum ad!</p>
   </div>
   <div className=' shrink-0 h-full w-75  p-5 bg-blue-400 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 px-3 py-1 rounded'>High</h3>
            <h4 className='text-sm'>16 Dec 2025</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>I am a react developer</h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime vero sint delectus facere dolorum ad!</p>
   </div>
   <div className=' shrink-0 h-full w-75  p-5 bg-cyan-400 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 px-3 py-1 rounded'>High</h3>
            <h4 className='text-sm'>16 Dec 2025</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>I am a react developer</h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime vero sint delectus facere dolorum ad!</p>
   </div>
   <div className=' shrink-0 h-full w-75  p-5 bg-red-500 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 px-3 py-1 rounded'>High</h3>
            <h4 className='text-sm'>16 Dec 2025</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>I am a react developer</h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime vero sint delectus facere dolorum ad!</p>
   </div>
   <div className=' shrink-0 h-full w-75  p-5 bg-green-400 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 px-3 py-1 rounded'>High</h3>
            <h4 className='text-sm'>16 Dec 2025</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>I am a react developer</h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime vero sint delectus facere dolorum ad!</p>
   </div>
 
    </div>
  )
}

export default TaskList