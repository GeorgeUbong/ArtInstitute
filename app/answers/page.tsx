"use client"
import { useEffect } from "react";
import React, { useState, } from 'react';
import Link from "next/link";
import ImageModal from "@/components/ImageModal";

interface Arts {
    id: number;
    title: string;
    image_id: string;
}


export default function Answers() {
    const [art, setArt] = useState<Arts[]>([]);
    const [loading, setLoading] = useState(true);
    const refetchTime = 6*60*60*1000; //six hours variable
    const [elapsed, setElapsed] = useState(''); //for the estimated time
    const [selectedImage, setSelectedImage] = useState<Arts | null>(null);
    
    

  //new api hook
  const fetchArt = async (page: number) => {
    setLoading(true);
    try {
        const response = await fetch(
            `https://api.artic.edu/api/v1/artworks?page=${page}&limit=32`
        );
        const data = await response.json();
        setArt(data.data);
        
    } catch (error){
        console.error('error ', error);
    } finally {
        setLoading(false);
    }
};

    //after 6 hours
    useEffect(() => {
        const lastFetch = localStorage.getItem('lastFetch');
        const prevPage = localStorage.getItem('page');

        const now = Date.now();

        if (
            !lastFetch ||
            now - Number(lastFetch) > refetchTime
        ){
            //get a new page if true
            const newPage = Math.floor(Math.random() * 100) + 1;

            localStorage.setItem('page', newPage.toString());
            localStorage.setItem('lastFetch', now.toString());

            fetchArt(newPage);
        } else {
            fetchArt(Number(prevPage))
        }
        }, [refetchTime])

        //Elapsed time effect
        useEffect(() => {
            const calculateDifference = () => {
                const bTime = localStorage.getItem('lastFetch') || Date.now();
                const diff = Date.now() - Number(bTime);

                //units calculation
        const h = Math.floor(diff / 3600000).toString().padStart(2, '0');
        const m = Math.floor((diff % 3600000) / 60000).toString().padStart(2, '0');

        setElapsed(`${h}:${m}`);
            };
            //run on mounting the website then every
            calculateDifference();
            const timer = setInterval(calculateDifference, 60000);
            return () => clearInterval(timer);
        })

    return (
        <div className='min-h-screen bg-white p-4 text-black text-center '>
            {loading ? (
            <div className="flex justify-center items-center min-h-[300px] gap-6">
                <span className="loader"></span>
                <p className="">Getting artworks...</p>
            </div>
            ): (
            <main>
                <h1 className="text-6xl font-bold pb-6">Todays Top Picks</h1>
                <p className="pb-8 ">Time until Next Refresh <br/> {elapsed} of 6 hours</p>
                <Link href={'/'}>
                <button className="text-white p-3 bg-black mb-8">Back to home</button></Link>

                {/**Images */}

                <div className="grid grid-cols-1 sm:grid-cols-2
                
                lg:grid-cols-4 gap-6">
                    {art.map((artwork) => (
                    <div key={artwork.id}
                    onClick={() => setSelectedImage(artwork)}
                    className="bg-white rounded-lg border border-gray-400 p-4 flex flex-col"
                    >
                        {artwork.image_id && (
    <img
        src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/600,/0/default.jpg`}
        alt={artwork.title}
            className="w-full h-[300px] object-cover rounded-m
            hover:cursor-pointer
                hover:shadow-2xl"
            loading="lazy"
        />
    )}
    <p className="font-semibold mb-2 text-center">{artwork.title.slice(0, 40)}</p>
                    </div>
                ))}
                </div>

                {/**Data to modal */}
                {selectedImage && (
                    <ImageModal
                    image={selectedImage}
                    onClose={() => setSelectedImage(null)}
                    />
                )}
            </main>
            )}
        </div>
    )
}