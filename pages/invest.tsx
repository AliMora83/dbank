import React from 'react'
import UserInfo from './components/userInfo';
import WalletInfo from './components/walletInfo';
import InvestMarket from './components/investMarket';
import ActiveInvest from './components/activeInvest';


export default function Invest() {
  return (
    <div className="md:w-[50%] w-[90%] mx-auto">
      <p className="text-center mt-10 text-slate-600 text-lg">
        Investment Wallet
      </p>
      <UserInfo />
      <WalletInfo />
      <InvestMarket />
      <ActiveInvest />
    </div>
  );
}
