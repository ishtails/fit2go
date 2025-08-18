'use client'
import React from 'react'
import Image from "next/image"
import logo_2 from "@/assets/logo_2.png"
import logo from "@/assets/logo.png"
import { MAIL_STRING } from "../constants"
import NextLink from "next/link"
import { Link } from "react-scroll"
import { BiLogoInstagramAlt } from "react-icons/bi"

const Footer = () => {
    return (
        <div className="flex flex-col-reverse items-center pt-8 px-12 pb-6 mt-24 sm:flex-row justify-evenly bg-Slate-darker">
            <p className="mt-5 text-sm text-center sm:hidden text-zinc-400">
                Copyright © <span className="text-primary">Fit2Go! 2023</span>
            </p>

            <div className="flex flex-col max-w-[70vw]">
                <div className="flex items-center space-x-2">
                    <Image src={logo_2} alt="Fit2Go" className="object-cover w-8 p-1 rounded-full bg-primary aspect-square" />
                    <h1 className="text-2xl font-bold text-white">Fit2Go!</h1>
                </div>
                <p className="text-[#BCBCBC] text-sm mt-2">To book an appointment, contact us at</p>
                <div className="bg-Slate mt-2 text-[#BCBCBC] p-10 flex flex-col border border-zinc-600">
                    <span>
                        <p className="font-bold text-primary">Phone:</p>
                        <p>+919318339977</p>
                        <p>+919015768338</p>
                    </span>

                    <span className="mt-4">
                        <p className="font-bold text-primary">E-mail:</p>
                        <NextLink className="transition-all hover:text-white" href={MAIL_STRING} target="_blank">admin@fit2gosports.com</NextLink>
                    </span>

                    <span className="mt-4">
                        <p className="font-bold text-primary">Office Location:</p>
                        <NextLink className="transition-all hover:text-white" href='https://maps.app.goo.gl/ALx96uJi6EgHHFKh6' target="_blank" aria-label="address">Fit2Go, H-20 basement, Block H, Lajpat Nagar II, Lajpat Nagar, New Delhi, Delhi 110024</NextLink>
                    </span>

                    <NextLink href="https://www.instagram.com/fit2gosports/" target="_blank" className="flex items-center mt-4 space-x-1 transition-all hover:text-white">
                        <BiLogoInstagramAlt className="-ml-1 w-[32px] h-10 text-primary" />
                        <p className="font-semibold">@fit2gosports</p>
                    </NextLink>
                </div>
            </div>

            <Link to="home" offset={-140} spy={true}
                smooth={true} duration={1200} className="ml-12 flex-col justify-center hidden cursor-pointer md:flex">
                <Image src={logo} alt="logo" className="mb-4" width={200} height={200} />
                <p className="text-sm text-center text-zinc-400">Copyright © <span className="text-primary">Fit2Go! 2023</span> </p>
            </Link>
        </div>
    )
}

export default Footer
