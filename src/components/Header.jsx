import React from 'react';
import { useState } from 'react';
const Header = () => {
    const[click,setClick] = useState(false);
    const handleClick = () => setClick(!click);
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center bg-gray-900 text-white px-6">

      <p className="font-light text-lg sm:text-2xl mb-8">
        Planning to get in shape? <br />
        <span className="font-medium text-orange-500">But</span> don't know where to start?
      </p>
      
      <h2 className="text-2xl sm:text-4xl font-bold mb-6">
        Time to get <span className="text-orange-500">Ripped</span> with
      </h2>

      <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 text-blue-400">
        Gymmy
      </h1>

      <h1 className="text-lg sm:text-2xl font-semibold mb-6">
        Your <span className="font-light text-blue-500">workout</span> buddy
      </h1>
        
      <p className="text-base sm:text-xl">
        Well! Now pick your poison and{' '}<br/>
        {click ? (
          <button
            onClick={handleClick}
            className="text-transparent text-4xl mt-5 bg-clip-text bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 animate-fire pl-5"
          >
            fire away 🔥
          </button>
        ) : (
          <button
            onClick={handleClick}
            className='text-4xl mt-5'
          >
            (click me)
          </button>
        )}
      </p>
    </div>
  );
};

export default Header;
