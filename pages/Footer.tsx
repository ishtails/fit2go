import React from 'react'
import Image from "next/image"
import logo_2 from "@/assets/logo_2.png"
import logo from "@/assets/logo.svg"

const Footer = () => {
    return (
        <div className="flex flex-col-reverse items-center pt-8 pb-6 mt-24 sm:flex-row justify-evenly bg-Slate-darker">
            <p className="sm:hidden mt-5 text-sm text-center text-zinc-400">
                Copyright © <span className="text-primary">Fit2Go 2023</span>
            </p>

            <div>
                <div className="flex items-center space-x-2">
                    <Image src={logo_2} alt="Fit2Go" className="object-cover w-8 p-1 rounded-full bg-primary aspect-square" />
                    <h1 className="text-2xl font-bold text-white">Fit2Go</h1>
                </div>
                <p className="text-[#BCBCBC] text-sm mt-2">Contact Details</p>
                <div className="bg-Slate mt-2 text-[#BCBCBC] p-10 flex flex-col border border-zinc-600">
                    <span>
                        <p className="font-bold text-primary">Phone:</p>
                        <p>+919318339977</p>
                        <p>+919015768338</p>
                    </span>

                    <span className="mt-4">
                        <p className="font-bold text-primary">E-mail:</p>
                        <p>shukianush@gmail.com</p>
                    </span>
                </div>
            </div>

            <div className="hidden sm:flex flex-col justify-center">
                <Image src={logo} alt="logo" className="mb-4"/>
                <p className="text-sm text-center text-zinc-400">Copyright © <span className="text-primary">Fit2Go 2023</span> </p>
            </div>
        </div>
    )
}

export default Footer