import React from 'react'
import './App.css';
import { GiSpinningBlades } from 'react-icons/gi'
const App = () => {
  return (
    <div className='flex justify-center h-[40vh] items-center  text-5xl'>
      <button type="button" class="flex flex-row text-[#4D4D4D] items-center" >
    
          <GiSpinningBlades class="animate-spin text-[#40C057] h-20 w-20 mr-3 ..."  />
      
        Processing...
      </button>
    
    </div>
  )
}

export default App
