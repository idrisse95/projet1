// import React, { useState } from 'react'
import svg1 from "./img/img.js"
// import img from "./img/image-jeremy.png"
import { Personne } from '../personne/personne'
import data from './data.json'
import { useState } from "react"


export const Horaire = () => {


    //states
    const [timeframes, setTimeframes] = useState("daily")


    //Comportantement donc fonctuon
    const buttonWeek = () => {
        setTimeframes("weekly")
    }

    const buttonDaily = () => {
        setTimeframes("daily" )
    }

    const buttonMonthly = () => {
        setTimeframes("monthly" )
    }
     
     


    return (
        <div>


            <div className="flex justify-center pt-32 max-sm:pt-16 sm:h-screen bg-blue-b w-full">
                <div>
                    <div className='sm:flex'>

                        <Personne buttonDaily={buttonDaily} buttonWeek={buttonWeek} buttonMonthly={buttonMonthly} />


                        <div>

                            <div id='haut' className='sm:flex '>
                                <div id="par" className='sm:mx-3 mb-5 rounded-xl w-48 max-sm:w-96 max-sm:mt-5 max-xs:w-full'>
                                    <div className='bg-blue-c hover:bg-blue-900 text-white px-7  py-3 rounded-xl'>
                                        {data.map((donnees, index) => (
                                            index === 0 && (
                                                <ul key={donnees.title}>
                                                    <li className='flex align-middle max-sm:font-semibold justify-between my-2'><div>{donnees.title}</div>
                                                        <div className='my-auto hover:cursor-pointer'>{svg1}</div></li>
                                                    <ul className="max-sm:flex max-sm:justify-between max-sm:align-baseline">
                                                        <li className='text-4xl font-light mt-3 mb-3'>{donnees.timeframes[timeframes].current}hrs</li>
                                                        <li className=' text-gray-400 text-xs flex max-sm:items-center'>Last Week - {donnees.timeframes[timeframes].previous}hrs</li>
                                                    </ul>
                                                </ul>
                                            )
                                        ))}
                                    </div>
                                </div>
                                  <div id="par" className='sm:mx-3 mb-5 rounded-xl w-48 max-sm:w-96 max-sm:mt-3 max-xs:w-full'>
                                    <div className='bg-blue-c hover:bg-blue-900 text-white px-7 py-3 rounded-xl'>
                                    {data.map((donnees, index) => (
                                            index === 1 && (
                                                <ul key={donnees.title}>
                                                    <li className='flex align-middle max-sm:font-semibold justify-between my-2'><div>{donnees.title}</div>
                                                        <div className='my-auto hover:cursor-pointer'>{svg1}</div></li>
                                                    <ul className="max-sm:flex max-sm:justify-between max-sm:align-baseline">
                                                        <li className='text-4xl font-light mt-3 mb-3'>{donnees.timeframes[timeframes].current}hrs</li>
                                                        <li className=' text-gray-400 text-xs flex max-sm:items-center'>Last Week - {donnees.timeframes[timeframes].previous}hrs</li>
                                                    </ul>
                                                </ul>
                                            )
                                        ))}
                                    </div>
                                </div>
                                <div id="par" className='sm:mx-3 mb-5 rounded-xl w-48 max-sm:w-96 max-sm:mt-3 max-xs:w-full'>
                                    <div className='bg-blue-c hover:bg-blue-900 text-white px-7 py-3 rounded-xl'>
                                    {data.map((donnees, index) => (
                                            index === 2 && (
                                                <ul key={donnees.title}>
                                                    <li className='flex align-middle max-sm:font-semibold justify-between my-2'><div>{donnees.title}</div>
                                                        <div className='my-auto hover:cursor-pointer'>{svg1}</div></li>
                                                    <ul className="max-sm:flex max-sm:justify-between max-sm:align-baseline">
                                                        <li className='text-4xl font-light mt-3 mb-3'>{donnees.timeframes[timeframes].current}hrs</li>
                                                        <li className=' text-gray-400 text-xs flex max-sm:items-center'>Last Week - {donnees.timeframes[timeframes].previous}hrs</li>
                                                    </ul>
                                                </ul>
                                            )
                                        ))}
                                    </div>
                                </div>
                            </div>











                            <div id='bas' className='sm:flex'>
                                <div id="par" className='sm:mx-3 max-sm:mb-5 rounded-xl w-48 max-sm:w-96 max-sm:mt-3 max-xs:w-full'>
                                    <div className='bg-blue-c hover:bg-blue-900 text-white px-7 py-3 rounded-xl'>
                                    {data.map((donnees, index) => (
                                            index === 3 && (
                                                <ul key={donnees.title}>
                                                    <li className='flex align-middle max-sm:font-semibold justify-between my-2'><div>{donnees.title}</div>
                                                        <div className='my-auto hover:cursor-pointer'>{svg1}</div></li>
                                                    <ul className="max-sm:flex max-sm:justify-between max-sm:align-baseline">
                                                        <li className='text-4xl font-light mt-3 mb-3'>{donnees.timeframes[timeframes].current}hrs</li>
                                                        <li className=' text-gray-400 text-xs flex max-sm:items-center'>Last Week - {donnees.timeframes[timeframes].previous}hrs</li>
                                                    </ul>
                                                </ul>
                                            )
                                        ))}
                                    </div>
                                </div>
                                <div id="par" className='sm:mx-3 max-sm:mb-5 rounded-xl w-48 max-sm:w-96 max-sm:mt-3 max-xs:w-full'>
                                    <div className='bg-blue-c hover:bg-blue-900 text-white px-7 py-3 rounded-xl'>
                                    {data.map((donnees, index) => (
                                            index === 4 && (
                                                <ul key={donnees.title}>
                                                    <li className='flex align-middle max-sm:font-semibold justify-between my-2'><div>{donnees.title}</div>
                                                        <div className='my-auto hover:cursor-pointer'>{svg1}</div></li>
                                                    <ul className="max-sm:flex max-sm:justify-between max-sm:align-baseline">
                                                        <li className='text-4xl font-light mt-3 mb-3'>{donnees.timeframes[timeframes].current}hrs</li>
                                                        <li className=' text-gray-400 text-xs flex max-sm:items-center'>Last Week - {donnees.timeframes[timeframes].previous}hrs</li>
                                                    </ul>
                                                </ul>
                                            )
                                        ))}
                                    </div>
                                </div>
                                <div id="par" className='sm:mx-3 max-sm:mb-5 rounded-xl w-48 max-sm:w-96 max-sm:mt-3 max-xs:w-full'>
                                    <div className='bg-blue-c hover:bg-blue-900 text-white px-7 py-3 rounded-xl'>
                                    {data.map((donnees, index) => (
                                            index === 5 && (
                                                <ul key={donnees.title}>
                                                    <li className='flex align-middle max-sm:font-semibold justify-between my-2'><div>{donnees.title}</div>
                                                        <div className='my-auto hover:cursor-pointer'>{svg1}</div></li>
                                                    <ul className="max-sm:flex max-sm:justify-between max-sm:align-baseline">
                                                        <li className='text-4xl font-light mt-3 mb-3'>{donnees.timeframes[timeframes].current}hrs</li>
                                                        <li className=' text-gray-400 text-xs flex max-sm:items-center'>Last Week - {donnees.timeframes[timeframes].previous}hrs</li>
                                                    </ul>
                                                </ul>
                                            )
                                        ))}
                                    </div>
                                </div>  

                            </div>
                        </div></div>
                </div>
            </div></div>
    )
}
