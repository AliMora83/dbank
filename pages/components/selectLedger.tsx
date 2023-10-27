import React from 'react'

export default function SelectLedger() {
  return (
    <div>
      <div className="my-10 p-5 bg-slate-100 rounded-2xl shadow-md border-4 border-white ">
        <div
          id="selectLedger"
          className="text-center space-y-4"
        >
          <div className="flex flex-col">
            <h3 className="mb-4 text-sm font-medium">
              Choose your ledger instance
            </h3>
            <div className="flex flex-row justify-around border border-slate-300 p-3 rounded-2xl">
              <div>
                <input
                  type="radio"
                  id="tn"
                  name="server"
                  value="wss://s.altnet.rippletest.net:51233"
                  checked
                />
                <label
                  className="ml-2 uppercase text-sm font-medium text-slate-700"
                  htmlFor="testnet"
                >
                  Testnet
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="dn"
                  name="server"
                  value="wss://s.devnet.rippletest.net:51233"
                />
                <label
                  className="ml-2 uppercase text-sm font-medium text-slate-700"
                  htmlFor="devnet"
                >
                  Devnet
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <button
              type="button"
              className="text-sm font-medium text-slate-700"
              // onClick="getAccountsFromSeeds()"
            >
              Get Accounts From Seeds
            </button>
            <textarea
              id="seeds"
              cols={30}
              rows={2}
              className="rounded-xl p-2 text-sm"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  )
}
