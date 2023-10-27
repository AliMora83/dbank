import React from 'react'
import Image from 'next/image';


export default function UserInfo() {
  return (
    <div>
      {/* User Info */}
      <div className="flex items-center mt-10">
        <div className="">
          <Image
            src="/bg.jpg"
            alt="User Avatar"
            width={100}
            height={100}
            className="w-12 h-12 rounded-full cursor-pointer transform hover:scale-110 transition-transform ease-out duration-300 object-cover"
          />
        </div>
        <div className="ml-4">
          <p className="text-slate-500 text-xs">
            Welcome back
          </p>
          <p className="text-primary-100 text-xm font-semibold">
            James Babonda
          </p>
        </div>
        <div className="ml-auto">
          <i className="fas fa-bell p-3 text-primary-100 hover:text-primary-200 cursor-pointer transform hover:scale-110 transition-transform ease-out duration-300 border hover:border-slate-500 rounded-full"></i>
        </div>
      </div>
    </div>
  )
}
