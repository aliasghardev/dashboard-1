"use client"
import Btn from './button/buttons'
import Rating from './select/rating'
import Select from './select/select'
import Typography from './typography/typogrophy'

export default function page() {
    return (
        <>
            <div className='w-10/12 bg-slate-300 m-10'>
                <h1 className='text-4xl  font-bold capitalize m-5'>buttons</h1>
                <div><Btn /></div>
            </div>
            <div className='w-10/12 bg-slate-300 m-10'><h1 className='text-4xl  font-bold capitalize m-5'>select & rating</h1><Select/><Rating /></div>
            <div className='w-10/12 bg-slate-300 m-10'><h1 className='text-4xl  font-bold capitalize m-5'>typography</h1><Typography/></div>
        </>
    )
}
