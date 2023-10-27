import Link from 'next/link';
import { useRouter } from 'next/router';

const NavBar = () => {
  const router = useRouter();

  return (
    <nav>
      <div className='fixed bottom-0 left-0 w-full mx-auto px-10'>
        <ul className='flex sm:w-[60%] mx-auto p-4 items-center justify-around my-4 bg-slate-100 rounded-xl text-sm text-slate-600 border-4 border-white shadow-md'>
          <li>
            <Link href="/">
              <i
                className={`fa-solid fa-house-chimney-window hover:text-slate-600 transform hover:scale-110 transition-transform ease-in-out duration-300 ${
                  router.pathname === '/' ? 'text-primary-100 text-2xl' : 'text-slate-400'
                }`}
              ></i>
            </Link>
          </li>
          <li>
            <Link href="/wallet">
              <i
                className={`fa-solid fa-wallet hover:text-slate-600 transform hover:scale-110 transition-transform ease-in-out duration-300 ${
                  router.pathname === '/wallet' ? 'text-primary-100 text-2xl' : 'text-slate-400'
                }`}
              ></i>
            </Link>
          </li>
          <li>
            <Link href="/transact">
              <i
                className={`fa-solid fa-money-bill-trend-up hover:text-slate-600 transform hover:scale-110 transition-transform ease-in-out duration-300 ${
                  router.pathname === '/transact' ? 'text-primary-100 text-2xl' : 'text-slate-400'
                }`}
              ></i>
            </Link>
          </li>
          <li>
            <Link href="/invest">
              <i
                className={`fa-solid fa-piggy-bank hover:text-slate-600 transform hover:scale-110 transition-transform ease-in-out duration-300 ${
                  router.pathname === '/invest' ? 'text-primary-100 text-2xl' : 'text-slate-400'
                }`}
              ></i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
