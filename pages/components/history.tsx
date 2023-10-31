import React from 'react'

export default function History() {
  return (
    <div>
      {/* Recent Transactions */}
      <div className="text-slate-700 my-10">
        <p className="text-center text-sm  font-semibold mb-2">
          Recent Transactions
        </p>
        <div className="flex flex-col space-y-3 text-xs">
  
          <div className="flex items-center justify-between border py-3 px-8 rounded-lg">
            <div>
              <p className='text-slate-400'>Personal Acc</p>
              <h5 className="font-bold text-base">
                ₦31,140.00
              </h5>
            </div>
            <div>
              <p className='text-slate-400'>23/Oct/2023</p>
              <h5 className="font-medium text-sm">
                Shopping
              </h5>
            </div>
          </div>

          <div className="flex items-center justify-between py-3 px-8 rounded-lg border">
            <div>
              <p className='text-slate-400'>Family Acc</p>
              <h5 className="font-bold text-base">
                ₦72,205.00
              </h5>
            </div>
            <div>
              <p className='text-slate-400'>21/Oct/2023</p>
              <h5 className="font-medium text-sm">
                Family
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
