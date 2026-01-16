import { Bird} from 'lucide-react';
import React from 'react';
import Link from 'next/link';


export default function Nav() {
  return (
    <nav className="w-full bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      <h2 className="text-6xl font-bold text-gray-900 tracking-tight">
        Art.ine
      </h2>
 
      <Link href="/answers">
      <button className='bg-black text-white p-5 hover:bg-gray-800 font-bold text-xl'>
        See me
        <Bird size={20} className="inline-block mr-3" />
      </button>
      </Link>
    </nav>
  );
}