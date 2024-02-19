"use client"
import Tab1 from './table/table1'
import Tab2 from './table/table2'
import Tab3 from './table/table3'

export default function page() {
    return (
        <div className='w-10/12  m-10 '>
            <h1 className='text-4xl  font-bold capitalize text-white m-5'>tables</h1>
            <div className='bg-slate-300 m-8'><Tab1/></div>
            <div className='bg-slate-300 m-8'><Tab2/></div>
            <div className='bg-slate-300 m-8'><Tab3/></div>
        </div>
    )
}
