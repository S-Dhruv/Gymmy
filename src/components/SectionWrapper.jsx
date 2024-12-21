import React from 'react'


const SectionWrapper = (props) => {
    const {index,title,descriptions } = props
  return (
    <div className='flex flex-col bg-gray-900 text-white p-4 rounded-lg'>
        <div className='flex justify-center gap-5 text-center'>
            <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400 '>{index}</p>
            <h3 className='mt-3 text-2xl sm:text-md md:text-xl text-slate-300'>{title}</h3>
        </div>
        <p className='text-xl sm:text-2xl mx-auto my-5'>{descriptions}</p>
    </div>
  )
}

export default SectionWrapper