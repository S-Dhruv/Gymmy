import React from 'react'
import { useState } from 'react'
const Workout = (props) => {
  const {workout} = props
    const [setsCompleted, setSetsCompleted] = useState(Array(workout.length).fill(0));
    function handleSets(index) {
      setSetsCompleted((prevSetsCompleted) => {
        const updatedSets = [...prevSetsCompleted];
        updatedSets[index] = (updatedSets[index] + 1) % 6; 
        return updatedSets;
      });
    }
    
  return (
    <div>
      <h1 className='text-3xl text-center mt-10'>Workout</h1>
      <div className='flex flex-col gap-4 text-center mt-4'>
        {workout.map((exercise, index) => {
          return (
            <>
            <div key={index} className='bg-gray-800 border border-blue-400 rounded-lg p-4 mx-[25%]'>
              <div className='flex justify-center gap-1 text-xl'>
              <p>{index+1}.</p>
              <p className='text-xl capitalize'>{exercise.name.replaceAll('_',' ')}</p>
                </div>
              <p className='text-sm capitalize'>{exercise.type}</p>
              <div className='flex gap-2 justify-center'>
                <h3 text-slate-400 text-sm>Muscles Groups:</h3>
                <p className='capitalize'> {exercise.muscles.join(' & ')}</p> 
              </div>
              <div className='grid sm:grid-cols-3 grid-cols-1 gap-2 mt-4'>
                {['reps','rest','tempo'].map(info=>{
                  return(
                    <div key={info} className='flex flex-col p-2 rounded border-[15px]border-slate-900 w-full'>
                      <h3 className='text-sm capitalize'>{info === 'reps'?`${exercise.unit}`:info}</h3>
                      <p className='text-sm'>{exercise[info]}</p>
                    </div>
                  )
                })}
              </div>
            <button onClick={() => handleSets(index)} className='flex flex-col p-2 rounded border-[1.5px] duration-200 border-solid border-blue-900 hover:border-blue-600 w-[25%] mx-auto mt-4'>
              <div className='flex justify-center gap-1'>
                <h3 className='text-slate-400 font-medium capitalize '>Sets completed: </h3>
                <p className='font-medium' >{setsCompleted[index] || 0}/5</p>
                </div>
            </button>
            </div>
                </>
          )
        })}
        
      </div>

    </div>
  )
}

export default Workout