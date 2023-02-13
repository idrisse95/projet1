import React from 'react'
import img from "../horaire/img/image-jeremy.png"
import { Horaire } from '../horaire/horaire'

export const Personne = ({ buttonDaily, buttonMonthly, buttonWeek }) => {

    return (
        <div className='sm:mr-3'>
            <div className=' bg-blue-c h-full rounded-xl'>
                <div className='bg-blue-500 text-white h-2/3 max-sm:h-3/4 sm:w-48 p-5 rounded-xl max-sm:flex align-middle'>
                    <div className='mb-8 max-sm:mr-4'><img className='border-2 border-white rounded-full' src={img} width="60px" alt="" /></div>
                    <div>
                        <div className='text-xs'>Report for</div>
                        <div className='text-3xl font-light max-sm:text-4xl'>Jeremy Robson</div>
                    </div>
                </div>

                <div className='flex flex-col max-sm:flex-row max-sm:justify-between max-sm:text-xl max-sm:py-4 px-7 pt-4 items-start text-blue-t'>
                    <button className='mb-2 hover:text-white focus:text-white' onClick={buttonDaily}>Daily</button><button className='mb-2 hover:text-white focus:text-white' onClick={buttonWeek}>Weekly</button><button className=' hover:text-white focus:text-white' onClick={buttonMonthly}>Monthly</button>
                </div>
            </div>
        </div>
    )
}
