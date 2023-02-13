import React, { useState } from 'react'
import svg1 from "./img/img.js"
import img from "./img/image-jeremy.png"
import { Personne } from '../personne/personne'


export const Horaire = () => {


    //states
    let [week, setWeek] = useState([
        { act: "Work", heure: 32, last: 36 },
        { act: "Play", heure: 10, last: 8 },
        { act: "Study", heure: 4, last: 7 },
        { act: "Exercice", heure: 4, last: 5 },
        { act: "Social", heure: 5, last: 10 },
        { act: "Self Care", heure: 2, last: 2 },

    ])


    //Comportantement donc fonctuon
    const buttonWeek = () => {
        week = [
            { act: "Work", heure: 32, last: 36 },
            { act: "Play", heure: 10, last: 8 },
            { act: "Study", heure: 4, last: 7 },
            { act: "Exercice", heure: 4, last: 5 },
            { act: "Social", heure: 5, last: 10 },
            { act: "Self Care", heure: 2, last: 2 },

        ]
        setWeek(week)
    }



    const buttonDaily = () => {
        week = [
            { act: "Work", heure: 5, last: 7 },
            { act: "Play", heure: 1, last: 2 },
            { act: "Study", heure: 0, last: 1 },
            { act: "Exercice", heure: 1, last: 1 },
            { act: "Social", heure: 1, last: 3 },
            { act: "Self Care", heure: 0, last: 1 },

        ]
        setWeek(week)
        console.log(week)
    }

    const buttonMonthly = () => {
        week = [
            { act: "Work", heure: 103, last: 128 },
            { act: "Play", heure: 23, last: 29 },
            { act: "Study", heure: 13, last: 19 },
            { act: "Exercice", heure: 11, last: 18 },
            { act: "Social", heure: 21, last: 23 },
            { act: "Self Care", heure: 7, last: 11 },

        ]
        setWeek(week)
        console.log(week)
    }

    //Affichage
    // setWeek(week)


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
                                        {week.map((jour, index) => (
                                            index === 0 && (
                                                <ul key={index}>
                                                    <li className='flex align-middle max-sm:font-semibold justify-between my-2'><div>{jour.act}</div>
                                                        <div className='my-auto hover:cursor-pointer'>{svg1}</div></li>
                                                    <ul className="max-sm:flex max-sm:justify-between max-sm:align-baseline">
                                                        <li className='text-4xl font-light mt-3 mb-3'>{jour.heure}hrs</li>
                                                        <li className=' text-gray-400 text-xs flex max-sm:items-center'>Last Week - {jour.last}hrs</li>
                                                    </ul>
                                                </ul>
                                            )
                                        ))}
                                    </div>
                                </div>
                                <div id="par" className='sm:mx-3 mb-5 rounded-xl w-48 max-sm:w-96 max-sm:mt-3 max-xs:w-full'>
                                    <div className='bg-blue-c hover:bg-blue-900 text-white px-7 py-3 rounded-xl'>
                                        {week.map((jour, index) => (
                                            index === 1 && (
                                                <ul key={index}>
                                                    <li className='flex align-middle max-sm:font-semibold justify-between my-2'><div>{jour.act}</div>
                                                        <div className='my-auto hover:cursor-pointer'>{svg1}</div></li>
                                                    <ul className="max-sm:flex max-sm:justify-between max-sm:align-baseline">
                                                        <li className='text-4xl font-light mt-3 mb-3'>{jour.heure}hrs</li>
                                                        <li className='text-gray-400 text-xs flex max-sm:items-center'>Last Week - {jour.last}hrs</li>
                                                    </ul>
                                                </ul>
                                            )
                                        ))}
                                    </div>
                                </div>
                                <div id="par" className='sm:mx-3 mb-5 rounded-xl w-48 max-sm:w-96 max-sm:mt-3 max-xs:w-full'>
                                    <div className='bg-blue-c hover:bg-blue-900 text-white px-7 py-3 rounded-xl'>
                                        {week.map((jour, index) => (
                                            index === 2 && (
                                                <ul key={index}>
                                                    <li className='flex align-middle max-sm:font-semibold justify-between my-2'><div>{jour.act}</div>
                                                        <div className='my-auto hover:cursor-pointer'>{svg1}</div></li>
                                                    <ul className="max-sm:flex max-sm:justify-between max-sm:align-baseline">
                                                        <li className='text-4xl font-light mt-3 mb-3'>{jour.heure}hrs</li>
                                                        <li className='text-gray-400 text-xs flex max-sm:items-center'>Last Week - {jour.last}hrs</li>
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
                                        {week.map((jour, index) => (
                                            index === 3 && (
                                                <ul key={index}>
                                                    <li className='flex align-middle max-sm:font-semibold justify-between my-2'><div>{jour.act}</div>
                                                        <div className='my-auto hover:cursor-pointer'>{svg1}</div></li>
                                                    <ul className="max-sm:flex max-sm:justify-between max-sm:align-baseline">
                                                        <li className='text-4xl font-light mt-3 mb-3'>{jour.heure}hrs</li>
                                                        <li className='text-gray-400 text-xs flex max-sm:items-center'>Last Week - {jour.last}hrs</li>
                                                    </ul>
                                                </ul>
                                            )
                                        ))}
                                    </div>
                                </div>
                                <div id="par" className='sm:mx-3 max-sm:mb-5 rounded-xl w-48 max-sm:w-96 max-sm:mt-3 max-xs:w-full'>
                                    <div className='bg-blue-c hover:bg-blue-900 text-white px-7 py-3 rounded-xl'>
                                        {week.map((jour, index) => (
                                            index === 4 && (
                                                <ul key={index}>
                                                    <li className='flex align-middle max-sm:font-semibold justify-between my-2'><div>{jour.act}</div>
                                                        <div className='my-auto hover:cursor-pointer'>{svg1}</div></li>
                                                    <ul className="max-sm:flex max-sm:justify-between max-sm:align-baseline">
                                                        <li className='text-4xl font-light mt-3 mb-3'>{jour.heure}hrs</li>
                                                        <li className='text-gray-400 text-xs flex max-sm:items-center'>Last Week - {jour.last}hrs</li>
                                                    </ul>
                                                </ul>
                                            )
                                        ))}
                                    </div>
                                </div>
                                <div id="par" className='sm:mx-3 max-sm:mb-5 rounded-xl w-48 max-sm:w-96 max-sm:mt-3 max-xs:w-full'>
                                    <div className='bg-blue-c hover:bg-blue-900 text-white px-7 py-3 rounded-xl'>
                                        {week.map((jour, index) => (
                                            index === 5 && (
                                                <ul key={index}>
                                                    <li className='flex align-middle max-sm:font-semibold justify-between my-2'><div>{jour.act}</div>
                                                        <div className='my-auto hover:cursor-pointer'>{svg1}</div></li>
                                                    <ul className="max-sm:flex max-sm:justify-between max-sm:align-baseline">
                                                        <li className='text-4xl font-light mt-3 mb-3'>{jour.heure}hrs</li>
                                                        <li className='text-gray-400 text-xs flex max-sm:items-center'>Last Week - {jour.last}hrs</li>
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
