"use client"

import {MoveUpRight} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import img from '../app/assets/hero.jpg';

export default function Hero() {

    return(
        <>
        <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 text-black text-center flex flex-col items-center justify-start pt-12 px-4 sm:px-6 lg:px-8 overflow-y-auto">
  {/* Headline Section */}
  <div className="space-y-6 max-w-3xl">
    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight text-gray-900">
      From the Chicago Art Sanctuary
    </h1>

    <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed">
      A curated collection of the most beautiful artworks at your fingertips.
    </p>
  </div>

  {/* CTA Button */}
  <div className="mt-10">
    <Link href="/answers">
      <button
        className="
          bg-black text-white
          px-8 py-4
          rounded-full
          inline-flex items-center gap-3
          text-lg sm:text-xl font-bold
          hover:bg-gray-800
          transition-all duration-300
          hover:scale-105
          active:scale-95
          shadow-xl
          hover:shadow-2xl
          cursor-pointer
        "
      >
        Gallery
        <MoveUpRight size={24} />
      </button>
    </Link>
  </div>

  {/* Image Section */}
  <div className="mt-16 w-full flex justify-center pb-12">
    <div className="relative overflow-hidden rounded-3xl shadow-2xl max-h-[80vh] flex items-center justify-center">
      <Image
        src={img}
        alt="Chicago Art Sanctuary hero image"
        width={1200}
        height={600}
        className="
          object-cover
          w-full
          max-w-[90vw]
          max-h-[80vh]
          rounded-3xl
          transition-transform duration-500
          hover:scale-105
        "
        priority
      />
    </div>
  </div>
</div>
        </>
    )
}
