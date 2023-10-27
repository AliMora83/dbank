import React from 'react'

export default function ActiveInvest() {
  return (
    <div>
      {/* Active Investments */}
      <div className="text-slate-500 mt-10 mb-40">
        <p className="text-center text-sm font-semibold mb-2">
          Active Investments
        </p>
        <div className="flex flex-col space-y-3 text-xs">
          <div className="flex items-center justify-between border py-3 px-8 rounded-lg">
            <div>
              <p className='text-slate-400'>Agriculture</p>
              <h5 className="font-bold text-base">
                ₦331,100.00
              </h5>
            </div>
            <div>
              <p className='text-slate-400 text-right'>03/Sept/2022</p>
              <h5 className="font-medium text-sm">
                34 months left
              </h5>
            </div>
          </div>

          <div className="flex items-center justify-between py-3 px-8 rounded-lg border">
            <div>
              <p className='text-slate-400'>Real Estate</p>
              <h5 className="font-bold text-base">
                ₦1,272,205.00
              </h5>
            </div>
            <div>
              <p className='text-slate-400 text-right'>14/Jan/2023</p>
              <h5 className="font-medium text-sm">
                68 months left
              </h5>
            </div>
          </div>

          <div className="flex items-center justify-between py-3 px-8 rounded-lg border">
            <div>
              <p className='text-slate-400'>Energy</p>
              <h5 className="font-bold text-base">
                ₦572,605.00
              </h5>
            </div>
            <div>
              <p className='text-slate-400 text-right'>10/May/2020</p>
              <h5 className="font-medium text-sm">
                6 months left
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
