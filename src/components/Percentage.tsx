import React from 'react'
interface ProgressProps{
    percent: number;
}
const ProgressBar2:React.FC<ProgressProps> = ({percent}) => {
  return (
    <div className=" border rounded-lg  bg-neutral-200 ">
    <div
      className="bg-redbg rounded-lg border p-0.5 text-center text-xs font-medium leading-none text-white"
      style={{ width: `${percent}%` }} 
      
    >
      {percent}%
    </div>
  </div>
  )
}

export default ProgressBar2