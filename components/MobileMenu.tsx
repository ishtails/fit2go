import React, { useEffect, useRef, useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Transition } from '@headlessui/react'
import { Link } from "react-scroll"

const MobileMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const menuRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        }

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className="">
            <button aria-label="Menu" onClick={() => {
                setIsMenuOpen((prevState) => !prevState)
            }}>
                <GiHamburgerMenu className="text-primary w-8 h-8" />
            </button>

            <Transition
                show={isMenuOpen}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
            >
                <ul ref={menuRef} className="absolute right-0 p-6 shadow-lg rounded-md flex flex-col space-y-4 w-[40vw] bg-[#e1f3ed] border border-[#bbe2d5] max-w-[180px] font-medium">
                    <Link
                        to="objectives"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={700}
                    >
                        <p className="transition cursor-pointer hover:text-primary">About Us</p>
                    </Link>
                    <Link to="services"
                        spy={true}
                        smooth={true}
                        offset={-10}
                        duration={700}>
                        <p className="transition cursor-pointer hover:text-primary">Services</p>
                    </Link>
                    <Link
                        to="gallery"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={700}
                    >
                        <p className="transition cursor-pointer hover:text-primary">Gallery</p>
                    </Link>
                    <Link to="footer"
                        spy={true}
                        smooth={true}
                        offset={-10}
                        duration={700}>
                        <p className="transition cursor-pointer hover:text-primary">Contact</p>
                    </Link>
                </ul>
            </Transition>
        </div>
    )
}

export default MobileMenu
