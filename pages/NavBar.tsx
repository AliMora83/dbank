import Link from 'next/link';

const NavBar = () => {
  return (
    <nav>
      <div className='mt-8'>
       <p className='text-center'>Diaspora Bank</p>
      </div>
      <ul className='flex sm:w-[60%] mx-auto p-5 items-center justify-around my-4 bg-slate-100 rounded-lg text-sm text-slate-600 '>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/transact">Transact</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
