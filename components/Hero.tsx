"use client"
import Lucide, { Icon, ArrowBigUp } from "lucide-react";
import {Menu} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import img from '../app/assets/hero.jpg';

export default function Hero() {

    return(
        <>
        <div className="text-black text-center flex flex-col items-center space-y-8 mt-16 px-6">
  <h1 className="text-3xl sm:text-4xl lg:text-8xl font-extrabold tracking-loose max-w-xl">
    From the Chicago Art Sanctuary
  </h1>

  <p className="text-gray-600 max-w-xl text-lg lg:text-2xl">
    A curated collection of the most beautiful artworks at your fingertips.
  </p>

  <Link href="/answers">
    <button
      className="
        bg-black text-white
        px-8 py-4
        rounded-full
        flex items-center gap-4
        text-xl font-bold
        hover:bg-gray-900
        transition-all duration-300
        hover:scale-105
        active:scale-95
        shadow-lg
      "
    >
      Gallery
      <ArrowBigUp size={32} />
    </button>
  </Link>

  <div className="mt-12 relative">
    <div className="absolute inset-0 bg-black/10 rounded-2xl blur-2xl"></div>

    <Image
      src={img}
      alt="this is the hero image"
      width={400}
      height={400}
      className="
        relative
        rounded-2xl
        shadow-2xl
        object-cover
      "
      priority
    />
  </div>
</div>
        </>
    )
}
