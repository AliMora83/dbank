import React from "react";
import NavBar from "./NavBar";
import SelectLedger from "./components/selectLedger";
import StandbyAcc from "./components/standbyAcc";
import Head from "next/head";

export default function Transact() {
  return (
    <div className="md:w-[50%] w-[90%] mx-auto mb-40">
      <div className=" bg-slate-100 my-10 p-5 rounded-2xl">
        <header className="flex flex-row justify-around items-center text-xs text-slate-600">
          <p>Standby Acc</p>
          <p>Operational Acc</p>
        </header>
      </div>
      <SelectLedger />
      <StandbyAcc />
    </div>
  );
}
