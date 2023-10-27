import Head from "next/head";
import NavBar from "./NavBar";
import History from "./components/history";
import QuickService from "./components/quickService";
import WalletInfo from "./components/walletInfo";
import UserInfo from "./components/userInfo";

export default function Home() {
  return (
    <div className="md:w-[50%] w-[90%] mx-auto">
      <Head>
        <title>XRPL Token App</title>
        <meta
          name="description"
          content="Diaspora Bank - Ripple Hackathon"
        />
        <link rel="icon" href="/db-logo.png" />		
      </Head>
      <NavBar />

      <UserInfo />
      <WalletInfo />
      <QuickService />
      <History />
      
    </div>
  );
}
