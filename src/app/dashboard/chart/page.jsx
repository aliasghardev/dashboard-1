"use client"
import Bar from './charts/bar'
import Line from './charts/line'
import Pie from './charts/pie'
import Scatter from './charts/scatter'

export default function page() {
    return (
        <div className='w-full flex flex-wrap justify-evenly *:w-5/12 *:bg-white *:m-3 *:p-2'>
            <div><h2 className='text-2xl font-bold capitalize'>bar chart</h2><Bar/></div>
            <div><h2 className='text-2xl font-bold capitalize'>line chart</h2><Line/></div>
            <div><h2 className='text-2xl font-bold capitalize'>pie chart</h2><Pie/></div>
            <div><h2 className='text-2xl font-bold capitalize'>scatter chart</h2><Scatter/></div>
        </div>
    )
}
