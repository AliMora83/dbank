import React from 'react'

export default function StandbyAcc() {
  return (
    <div>
      <div className="my-10 p-5 bg-slate-100 rounded-2xl">
        <div id="standbyApp" className="">
          <button
            className="py-2 px-4 mx-auto bg-white rounded-xl text-sm font-medium flex items-center"
            type="button"
            // onClick="getAccount('standby')"
          >
            Create Standby Account
          </button>
          <div className="text-slate-500">
            <h2 className="my-2 text-center uppercase tracking-wider text-xs">
              -  Standby Account Info  -
            </h2>
            <div className="flex flex-col justify-between my-5 space-y-4 w-[80%] mx-auto text-xs">
              <div className="">
                Standby Acc
                <div
                  id="standbyAccountField"
                  className="bg-white py-1 px-3 rounded-md"
                >
                  .
                </div>
              </div>
              <div className="">
                Public Key
                <br />
                <div
                  id="standbyPubKeyField"
                  className="bg-white py-1 px-3 rounded-md"
                >
                  .
                </div>
              </div>
              <div className="">
                Private Key
                <br />
                <div
                  id="standbyPrivKeyField"
                  className="bg-white py-1 px-3 rounded-md"
                >
                  .
                </div>
              </div>
              <div className="">
                Seed
                <br />
                <div
                  id="standbySeedField"
                  className="bg-white py-1 px-3 rounded-md"
                >
                  .
                </div>
              </div>
              <div className="">
                XRP Balance
                <div
                  id="standbyBalanceField"
                  className="bg-white py-1 px-3 rounded-md"
                >
                  .
                </div>
              </div>
            </div>
          </div>

          {/* Send XRP */}
          <div
            id="standbyTransact"
            className="flex flex-col p-8 bg-white rounded-xl space-y-4 text-sm text-slate-500"
          >
            <p className="text-center font-medium text-slate-700">
              Send XRP
            </p>
            <div className="flex flex-col text-xs">
              Amount
              <input
                id="standbyAmountField"
                className="bg-slate-100 py-1 px-3 rounded-md"
              ></input>
            </div>
            <div className="flex flex-col text-xs">
              Destination Account
              <input
                id="standbyDestinationField"
                className="bg-slate-100 py-1 px-3 rounded-md"
              ></input>
            </div>
            <p className="text-center font-medium p-3 bg-slate-800 rounded-lg text-slate-300 hover:text-slate-100 cursor-pointer">
              <button
                type="button"
                // onClick="sendXRP()"
              >
                Send XRP &#8594;
              </button>
            </p>
            <div>
            <p className="text-center mb-2 font-medium text-slate-700">
              Transaction Log
            </p>
            <div
              id="standbyResultField"
              className="bg-slate-100 py-1 px-3 rounded-md"
            >
              .
            </div></div>
          </div>
        </div>
      </div>
    </div>
  )
}
