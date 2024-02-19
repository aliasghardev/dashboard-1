import React, { useEffect, useState } from 'react'
import { MdArrowOutward } from "react-icons/md";

export default function Master() {

    const data1 = [
        { cash: 17.85, per: 2.4, p: 'Potential growth' },
        { cash: 12.35, per: 3.5, p: 'Revenue current' },
        { cash: 17.85, per: 11, p: 'Daily Income' },
        { cash: 31.53, per: 3.5, p: 'Expense current' }
      ]

  return (
    <main>
      <div className="flex justify-evenly w-full p-3">
        {data1 && data1.map((val) => {
          return (
            <div className="w-1/4 p-2 m-3 border rounded-lg *:p-3 bg-slate-500 text-white">
              <h3 className="w-full flex justify-around font-bold text-2xl">${val.cash} <span className="text-green-900 text-xl">+{val.per}%</span><span className="text-green-600 bg-green-900 p-2 rounded-xl"><MdArrowOutward /></span></h3>
              <p className="text-slate-200">{val.p}</p>
            </div>
          )
        })}
      </div>
    </main>
  )
}
