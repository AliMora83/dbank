import History from "./components/history";
import QuickService from "./components/quickService";
import WalletInfo from "./components/walletInfo";
import UserInfo from "./components/userInfo";

export default function Home() {
  return (
    <div className="md:w-[50%] w-[90%] mx-auto">
      <UserInfo />
      <WalletInfo />
      <QuickService />
      <History /> 
    </div>
  );
}
