import React from 'react'

export default function InvestMarket() {
  return (
    <div className='border rounded-lg p-5 my-10'>
          {/* Invest */}
          <div className="text-slate-500">
        <p className="text-center text-sm mb-4 font-semibold">
          Investment Market
        </p>
      <div className="flex flex-wrap items-center justify-between gap-3">
      <div className="flex flex-col items-center bg-slate-100 rounded-lg p-4 w-36 transform hover:scale-105 transition-transform ease-in-out duration-300 hover:border-b-2 hover:border-primary-100 hover:text-primary-100">
        <i className="fa-solid fa-tractor text-2xl"></i>
        <p className="p-2 text-sm">Agriculture</p>
      </div>
      <div className="flex flex-col items-center bg-slate-100 rounded-lg p-4 w-36 transform hover:scale-105 transition-transform ease-in-out duration-300 hover:border-b-2 hover:border-primary-100 hover:text-primary-100">
        <i className="fa-solid fa-sign-hanging text-2xl"></i>
        <p className="p-2 text-sm">Real Estate</p>
      </div>
      <div className="flex flex-col items-center bg-slate-100 rounded-lg p-4 w-36 transform hover:scale-105 transition-transform ease-in-out duration-300 hover:border-b-2 hover:border-primary-100 hover:text-primary-100">
        <i className="fa-solid fa-truck-plane text-2xl"></i>
        <p className="p-2 text-sm">Transport</p>
      </div>
          <div className="flex flex-col items-center bg-slate-100 rounded-lg p-4 w-36 transform hover:scale-105 transition-transform ease-in-out duration-300 hover:border-b-2 hover:border-primary-100 hover:text-primary-100">
            <i className="fa-solid fa-book-open-reader text-2xl"></i>
            <p className="p-2 text-sm">Education</p>
          </div>
          <div className="flex flex-col items-center bg-slate-100 rounded-lg p-4 w-36 transform hover:scale-105 transition-transform ease-in-out duration-300 hover:border-b-2 hover:border-primary-100 hover:text-primary-100">
            <i className="fa-solid fa-microchip text-2xl "></i>
            <p className="p-2 text-sm">Technology</p>
          </div>
          <div className="flex flex-col items-center bg-slate-100 rounded-lg p-4 w-36 transform hover:scale-105 transition-transform ease-in-out duration-300 hover:border-b-2 hover:border-primary-100 hover:text-primary-100">
            <i className="fa-solid fa-bolt text-2xl"></i>
            <p className="p-2 text-sm">Energy</p>
          </div>
        </div>
      </div>
    </div>
  )
}
