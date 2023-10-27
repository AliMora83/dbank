import React from "react";

export default function WalletInfo() {
  return (
    <div>
      {/* Wallet Info */}
      <div className="p-5 text-center rounded-lg text-xs bg-slate-100 my-6 space-y-2 shadow-md border-4 border-white ">
        <p>Total Balance</p>
        <h5 className="font-bold text-lg text-slate-600">
          ₦234,890.00
        </h5>
      </div>
    </div>
  );
}
