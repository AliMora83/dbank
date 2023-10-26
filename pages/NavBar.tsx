import Link from 'next/link';

const NavBar = () => {
  return (
    <nav>
      <div className='fixed bottom-0 left-0 w-full mx-auto px-10'>
     
      <ul className='flex sm:w-[60%] mx-auto p-4 items-center justify-around my-4 bg-slate-100 rounded-lg text-sm text-slate-600 '>
        <li>
          <Link href="/"><i className="fa-solid fa-house-chimney-window text-3xl text-slate-400 hover:text-slate-600 transform hover:scale-110 transition-transform ease-out duration-300"></i></Link>
        </li>
        <li>
          <Link href="/about"><i className="fa-solid fa-wallet text-3xl text-slate-400 hover:text-slate-600 transform hover:scale-110 transition-transform ease-out duration-300"></i></Link>
        </li>
        <li>
          <Link href="/transact"><i className="fa-solid fa-money-bill-trend-up text-3xl text-slate-400 hover:text-slate-600 transform hover:scale-110 transition-transform ease-out duration-300"></i></Link>
        </li>
        <li>
          <Link href="/contact"><i className="fa-solid fa-piggy-bank text-3xl text-slate-400 hover:text-slate-600 transform hover:scale-110 transition-transform ease-out duration-300"></i></Link>
        </li>
      </ul> 
      </div>
    </nav>
  );
};

export default NavBar;
