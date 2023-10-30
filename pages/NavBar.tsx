import Link from 'next/link';
import { useRouter } from 'next/router';

const NavBar = () => {
  const router = useRouter();

  return (
    <nav>
  <div className='fixed bottom-0 left-0 w-full mx-auto px-10'>
    <div className='flex sm:w-[60%] mx-auto p-4 items-center justify-around my-4 bg-slate-100 rounded-xl text-sm text-slate-600 border-4 border-white shadow-md'>
      <button className="align-bottom">
        <div className="flex flex-col items-center justify-center">
          <Link href="/">
            <i
              className={`fa-solid fa-house-chimney-window hover:text-slate-600 transform hover:scale-110 transition-transform ease-in-out duration-300 ${
                router.pathname === '/' ? 'text-primary-100 text-2xl' : 'text-slate-400'
              }`}
            ></i>
            <p>home</p>
          </Link>
        </div>
      </button>
      <button className="align-bottom">
        <div className="flex flex-col justify-center">
          <Link href="/wallet">
            <i
              className={`fa-solid fa-wallet hover:text-slate-600 transform hover:scale-110 transition-transform ease-in-out duration-300 ${
                router.pathname === '/wallet' ? 'text-primary-100 text-2xl' : 'text-slate-400'
              }`}
            ></i>
            <p>wallet</p>
          </Link>
        </div>
      </button>
      <button className="align-bottom">
        <div className="flex flex-col justify-center">
          <Link href="/transact">
            <i
              className={`fa-solid fa-money-bill-trend-up hover:text-slate-600 transform hover:scale-110 transition-transform ease-in-out duration-300 ${
                router.pathname === '/transact' ? 'text-primary-100 text-2xl' : 'text-slate-400'
              }`}
            ></i>
            <p>transact</p>
          </Link>
        </div>
      </button>
      <button className="align-bottom">
        <div className="flex flex-col justify-center">
          <Link href="/invest">
            <i
              className={`fa-solid fa-piggy-bank hover:text-slate-600 transform hover:scale-110 transition-transform ease-in-out duration-300 ${
                router.pathname === '/invest' ? 'text-primary-100 text-2xl' : 'text-slate-400'
              }`}
            ></i>
            <p>invest</p>
          </Link>
        </div>
      </button>
    </div>
  </div>
</nav>


  );
};

export default NavBar;
