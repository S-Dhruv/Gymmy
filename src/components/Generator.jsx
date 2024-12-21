import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import { SCHEMES, WORKOUTS } from '../utils/swoldier';

const Generator = (props) => {
    const {poison, setPoison, muscles, setMuscles, goals, setGoals,updateWorkout} = props;
  const [modal, setModal] = useState(false);
  function handleModal() {
    setModal(!modal);
  }

  function updateMuscles(muscleGroup) {
    if(muscles.includes(muscleGroup)) {
        setMuscles(muscles.filter(val => val !== muscleGroup));
        return;
    }
    if(muscles.length > 2){ return;}
    if(poison !== 'individual') {   
        setMuscles([muscleGroup]);
        setModal(false);
        return
    }
    
    setMuscles([...muscles, muscleGroup]);
    if(muscles.length === 2) setModal(false);
}
  return (
    <div className="px-6 py-10">
      <SectionWrapper
        index={'01'}
        title="Pick your poison"
        descriptions="Select your workout to endure!"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Object.keys(WORKOUTS).map((type, typeIndex) => {
          return (
            <button 
            onClick={()=>{
                setMuscles([])
                setPoison(type)
            }}
              
              className={"bg-gray-800 border duration-200 hover:border-blue-600 rounded-lg my-2 py-4 " + (type === poison ? 'border-blue-600' : 'border-blue-400')}
              key={typeIndex}>
              <p className="capitalize">{type.replaceAll('_', ' ')}</p>
            </button>
          );
        })}
      </div>

      <SectionWrapper
        index={'02'}
        title={"Moving on"}
        descriptions={"Select your muscles to be trained"}
      />
      <div className="bg-slate-950 border border-solid border-blue-400 rounded-lg flex flex-col">
        <button
          onClick={handleModal}
          className="relative flex justify-center py-3 text-white"
        >
          <p>{muscles.length===0?"Select the muscle groups" : muscles.join(' ')}</p>
          <i className="fa-solid fa-caret-down absolute right-3 top-1/2 -translate-y-1/2"></i>
        </button>
        {modal && (
          <div className="p-4 bg-gray-700 text-white rounded-b-lg flex flex-col">
            
            {(poison === 'individual' ? WORKOUTS[poison] : Object.keys(WORKOUTS[poison])).map((muscleGroup, muscleGroupIndex) => {
                            return (
                                <button onClick={() => {
                                    updateMuscles(muscleGroup)
                                }} key={muscleGroupIndex} className={'hover:text-blue-400 duration-200 ' + (muscles.includes(muscleGroup) ? ' text-blue-400' : ' ')}>
                                    <p className='uppercase'>{muscleGroup.replaceAll('_', ' ')}</p>
                                </button>
                            )
                        })}
            
          </div>
        )}
      </div>

      <SectionWrapper
        index={'03'}
        title={"Final step"}
        descriptions={"Set up your objective, private!"}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4">
        {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
          return (
            <button 
            onClick={()=>{setGoals(scheme)}}
              
              className={"bg-gray-800 border duration-200 hover:border-blue-600 rounded-lg my-2 py-4 " + (scheme === goals ? 'border-blue-600' : 'border-blue-400')}
              key={schemeIndex}>
              <p className="capitalize">{scheme.replaceAll('_', ' ')}</p>
            </button>
          );
        })}
      </div>
      <button onClick={updateWorkout} className="bg-blue-500 text-white px-6 py-3 mt-4 rounded-lg mx-auto block">
            Generate
        </button>
    </div>
  );
};

export default Generator;
