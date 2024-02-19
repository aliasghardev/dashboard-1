"use client"
import Sec1 from './home/sec1'
import Sec2 from './home/sec2'
import Sec3 from './home/sec3'
import Sec4 from './home/sec4'
import Sec5 from './home/sec5'

export default function page() {
  return (
    <div className='flex flex-wrap w-full justify-evenly *:m-5'>
      <div className='w-full'><Sec1 /></div>
      <div className='w-full flex'>
        <div className='w-4/12 p-2 border rounded-lg *:p-3  bg-white'><Sec2 /><h3 className='w-full text-center text-2xl'>Transfer to Paypal <strong>$236</strong></h3></div>
        <div className='w-8/12 p-2 m-5 border rounded-lg *:p-3  bg-white'><Sec3 /></div>
      </div>
      <div className='w-11/12 p-2 border rounded-lg *:p-3  bg-white'><Sec4 /></div>
      <div className='w-11/12 p-2 border rounded-lg *:p-3  bg-white'><Sec5 /></div>
    </div>
  )
}
