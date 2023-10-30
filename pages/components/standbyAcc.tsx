import React, { useState } from 'react';
const xrpl = require("xrpl");

export default function StandbyAcc() {
  const [standbyAccount, setStandbyAccount] = useState('');
  const [standbyPubKey, setStandbyPubKey] = useState('');
  const [standbyPrivKey, setStandbyPrivKey] = useState('');
  const [standbySeed, setStandbySeed] = useState('');
  const [standbyBalance, setStandbyBalance] = useState('');

  const getAccount = async () => {
    const SERVER_URL = "wss://s.altnet.rippletest.net:51233/";
    const client = new xrpl.Client(SERVER_URL);

    try {
      await client.connect();

      const fund_result = await client.fundWallet();
      const test_wallet = fund_result.wallet;

      const response = await client.request({
        "command": "account_info",
        "account": test_wallet.address,
        "ledger_index": "validated"
      });

      setStandbyAccount(test_wallet.address);
      setStandbyPubKey(test_wallet.publicKey);
      setStandbyPrivKey(test_wallet.privateKey);
      setStandbySeed(test_wallet.seed);
      setStandbyBalance(await client.getXrpBalance(test_wallet.address));

      client.disconnect();
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = () => {
    getAccount();
    alert('Button clicked')
  };
  return (
    <div>
      <div className="my-10 p-5 bg-slate-100 rounded-2xl">
        <div id="standbyApp" className="">
          <button
          id="createStandbyAccountBtn"
            className="py-2 px-4 mx-auto bg-white rounded-xl text-sm font-medium flex items-center"
            type="button"
            onClick={handleClick}
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
                  
                </div>
              </div>
              <div className="">
                Public Key
                <br />
                <div
                  id="standbyPubKeyField"
                  className="bg-white py-1 px-3 rounded-md"
                >
                  
                </div>
              </div>
              <div className="">
                Private Key
                <br />
                <div
                  id="standbyPrivKeyField"
                  className="bg-white py-1 px-3 rounded-md"
                >
                  
                </div>
              </div>
              <div className="">
                Seed
                <br />
                <div
                  id="standbySeedField"
                  className="bg-white py-1 px-3 rounded-md"
                >
                  
                </div>
              </div>
              <div className="">
                XRP Balance
                <div
                  id="standbyBalanceField"
                  className="bg-white py-1 px-3 rounded-md"
                >
                  
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
              
            </div></div>
          </div>
        </div>
      </div>
    </div>
  )
}
function getAccount(arg0: string) {
  throw new Error('Function not implemented.');
}

