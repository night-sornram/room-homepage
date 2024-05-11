"use client"

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
    const [menu, setMenu] = useState(false)
    return(
        <nav className=" z-50  absolute top-0 left-0 w-screen flex flex-row space-x-7 bg-transparent md:justify-normal justify-center items-center h-[10%] ">
            {
                menu && (
                    <div className=" md:hidden flex flex-row items-center px-7 space-x-14 bg-white absolute top-0 left-0 w-screen h-[10vh] ">
                        <Link href={""}>
                            <Image src={
                                "/images/icon-close.svg"
                            } alt="close" width={20} height={20} onClick={()=>{setMenu(false)}
                            } />
                        </Link>
                        <div className=" flex flex-row space-x-7 font-bold">
                            <Link href={""} onClick={()=>{setMenu(false)}} >
                                home
                            </Link>
                            <Link href={""} onClick={()=>{setMenu(false)}}>
                                shop
                            </Link>
                            <Link href={""} onClick={()=>{setMenu(false)}}>
                                about
                            </Link>
                            <Link href={""} onClick={()=>{setMenu(false)}}>
                                contact
                            </Link>
                        </div>

                    </div>
                )
            }
            <div className=" md:hidden flex absolute top-10 left-7 ">
                <Link href={""} onClick={()=>{setMenu(true)}}>
                    <img src="/images/icon-hamburger.svg" alt="hamburger" />
                </Link>
            </div>
            <h1 className=" text-white text-5xl px-10">
                room
            </h1>
            <div className=" hidden md:flex text-white text-xl flex-row space-x-5">
                <Link href={""}>
                    home
                </Link>
                <Link href={""}>
                    shop
                </Link>
                <Link href={""}>
                    about
                </Link>
                <Link href={""}>
                    contact
                </Link>

            </div>

        </nav>
    )
}