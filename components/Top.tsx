"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Top() {
    const [index, setIndex] = useState(0)

    type Data = {
        image : string,
        title : string,
        description : string
    }

    const data :Data[] = [
        {
            image : "/images/desktop-image-hero-1.jpg",
            title : "Discover innovative ways to decorate",
            description : "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
        },
        {
            image : "/images/desktop-image-hero-2.jpg",
            title : "We are available all across the globe",
            description : "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
        },
        {
            image : "/images/desktop-image-hero-3.jpg",
            title : "Manufactured with the best materials",
            description : "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
        }
    ]

    return(
        <div className=" flex flex-col md:flex-row w-screen h-4/6 bg-white ">
            <div className=" w-full md:w-7/12 h-full">
                <Image src={data[index].image} priority alt="hero" width={500} height={1000} className=" w-full h-full object-cover " />
            </div>
            <div className=" relative h-full md:py-0 py-7 w-full md:w-5/12 px-10 md:px-4 lg:px-20 xl:px-32 h-full flex flex-col justify-center space-y-5">
                <h1 className=" text-2xl md:text-2xl lg:text-4xl font-bold text-gray-800">{data[index].title}</h1>
                <p className=" text-gray-500 md:text-sm lg:text-base ">{data[index].description}</p>
                <button className=" flex group flex-row space-x-0 md:space-x-7">
                    <h1 className="  tracking-[.75rem] group-hover:text-gray-400 flex flex-row">
                        SHOP NOW 
                    </h1>
                    <Image src="/images/icon-arrow.svg" alt="arrow" width={60} height={5} className=" group-hover:opacity-40 object-contain"   />
                </button>
                <div className=" hidden md:flex  absolute w-[calc(8.33vw)]  flex-row items-center bg-black bottom-0 left-0 ">
                    <button className=" w-20 h-20 flex justify-center items-center " onClick={() => setIndex((index - 1 + 3) % 3) }>
                        <Image src="/images/icon-angle-left.svg" alt="left" width={15} height={15}  />
                    </button>
                    <button className=" w-20 h-20 flex justify-center items-center  " onClick={() => setIndex((index + 1) % 3)}>
                        <Image src="/images/icon-angle-right.svg" alt="right" width={15} height={15}  />
                    </button>

                </div>
            </div>

        </div>
    )
}