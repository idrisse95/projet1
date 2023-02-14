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
        setTimeframes("daily")
    }

    const buttonMonthly = () => {
        setTimeframes("monthly")
    }




    return (
        <div>


            <div className="flex justify-center align-middle items-center max-md:pb-20 max-sm:pt-16 md:h-screen bg-blue-b w-full">
                <div>
                    <div className='flex justify-center max-md:flex-col max-md:items-center'>

                        <Personne buttonDaily={buttonDaily} buttonWeek={buttonWeek} buttonMonthly={buttonMonthly} />


                        

                            <div id='haut' className='flex md:w-6/12 max-md:w-[80%] grap-5 flex-wrap' >

                                {data.map((donnees) => (

                                    <div id="par" className='sm:mx-3 mb-5 rounded-xl w-48 max-sm:columns-1 max-sm:mt-5 max-md:w-full  mx-auto'>
                                        <div className='bg-blue-c hover:bg-blue-900   text-white px-7  py-3 rounded-xl'>
                                            <ul key={donnees.title}>
                                                <li className='flex align-middle max-sm:font-semibold justify-between my-2'><div>{donnees.title}</div>
                                                    <div className='my-auto hover:cursor-pointer'>{svg1}</div></li>
                                                <ul className="max-sm:flex max-sm:justify-between max-sm:align-baseline">
                                                    <li className='text-4xl font-light mt-3 mb-3'>{donnees.timeframes[timeframes].current}hrs</li>
                                                    <li className=' text-gray-400 text-xs flex max-sm:items-center'>Last Week - {donnees.timeframes[timeframes].previous}hrs</li>
                                                </ul>
                                            </ul>
                                        </div>
                                    </div>

                                ))}

                            </div>
                     


                    </div>
                </div>
            </div>

        </div>

    )
}
