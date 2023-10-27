import React from "react";
import NavBar from "./NavBar";
import QuickService from "./components/quickService";
import WalletInfo from "./components/walletInfo";
import InvestInfo from "./components/investInfo";
import History from "./components/history";
import Head from "next/head";

export default function Wallet() {
  return (
    <div className="md:w-[50%] w-[90%] mx-auto text-slate-500">
      <Head>
        <title>XRPL Token App</title>
        <meta
          name="description"
          content="Diaspora Bank - Ripple Hackathon"
        />
        <link rel="icon" href="/db-logo.png" />
      </Head>
      <NavBar />
      <p className="text-center mt-10 text-slate-600 text-lg">
        My Wallet
      </p>
      <WalletInfo />
      <InvestInfo />
      <QuickService />
      <History />
    </div>
  );
}
