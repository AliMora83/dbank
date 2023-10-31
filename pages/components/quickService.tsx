import Link from "next/link";
import React from "react";

export default function QuickService() {
  return (
    <div>
      {/* Services */}
      <div className="text-slate-500  my-10">
        <p className="text-center text-sm mb-2 font-semibold">
          Quick Services
        </p>

        <div className="flex items-center justify-between lg:w-[80%] mx-auto">
          <Link href="/transact">
            <div className="flex flex-col items-center bg-slate-100 rounded-lg py-4 px-6 transform hover:scale-110 transition-transform ease-in-out duration-300 hover:border-b-2 hover:border-primary-100 hover:text-primary-100">
              <i className="fa-solid fa-money-bill-trend-up text-2xl"></i>
              <p className="p-2 text-sm">Send</p>
            </div>
          </Link>
          <Link href="/invest">
          <div className="flex flex-col items-center bg-slate-100 rounded-lg py-4 px-6 transform hover:scale-110  transition-transform ease-in-out duration-300 hover:border-b-2  hover:border-primary-100 hover:text-primary-100">
            <i className="fa-solid fa-piggy-bank text-2xl "></i>
            <p className="p-2 text-sm">Invest</p>
          </div></Link>
          <div className="flex flex-col items-center bg-slate-100 rounded-lg py-4 px-6 transform hover:scale-110  transition-transform ease-in-out duration-300 hover:border-b-2  hover:border-primary-100 hover:text-primary-100">
            <i className="fa-solid fa-file-invoice text-2xl"></i>
            <p className="p-2 text-sm">History</p>
          </div>
       
        </div>
      </div>
    </div>
  );
}
