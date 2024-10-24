import React from 'react'

const Loading = () => {
    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="w-[100px] h-auto m-auto flex flex-col justify-center items-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 150"><path fill="none" stroke="#4E34C5" stroke-width="15" stroke-linecap="round" stroke-dasharray="300 385" stroke-dashoffset="0" d="M275 75c0 31-27 50-50 50-58 0-92-100-150-100-28 0-50 22-50 50s23 50 50 50c58 0 92-100 150-100 24 0 50 19 50 50Z"><animate attributeName="stroke-dashoffset" calcMode="spline" dur="2" values="685;-685" keySplines="0 0 1 1" repeatCount="indefinite"></animate></path></svg>
                <div className='w-screen text-center text-xl md:text-2xl text-blue-950'>Loading... Please wait.</div>
            </div>
        </div>
    )
}

export default Loading;
