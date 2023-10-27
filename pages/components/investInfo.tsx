import React from 'react'

export default function InvestInfo() {
  return (
    <div>
            {/* Invest */}
            <div className='flex items-center justify-evenly my-6'>
        <div className="py-5 px-10 rounded-lg text-xs border border-green-600">
          <p className=' text-green-600'>Investment Balance</p>
          <h5 className="font-bold text-lg text-slate-700">
            ₦622,135.00
          </h5>
          <div className="flex p-1 bg-slate-100 rounded-lg items-center mt-2 text-green-600">
            <p>4.5%</p>
            <i className="fa-solid fa-arrow-up-right-dots ml-2"></i>
          </div>
        </div>

        <div className="text-xs">
          <p className='text-red-800'>Spending</p>
          <h5 className="font-bold text-lg text-slate-700">
            ₦52,249.00
          </h5>
          <div className="flex p-1 bg-red-100 rounded-lg items-center mt-2">
            <p className='text-red-800'>1.3%</p>
            <i className="fa-solid fa-arrow-trend-down ml-2 text-red-800"></i>
          </div>
        </div>
      </div>
    </div>
  )
}
