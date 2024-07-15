'use client'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'

export default function BurgerMenu() {

    const [showMenu, setShowMenu] = useState(false)

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <div>
            <div className="block" onClick={toggleMenu}>
                <div className="js-navbar-toggle flex items-center border-black hover:text-grey hover:border-grey">
                    <div className="js-burgermenu w-9 h-7 relative m-12 mr-6 transform rotate-0 transition ease-in-out duration-500 cursor-pointer">
                        <span className="upper block absolute h-[3px] w-full bg-black rounded opacity-100 right-0 transform rotate-0 transition ease-in-out duration-250 top-0"></span>
                        <span className="middle block absolute h-[3px] w-full bg-black rounded opacity-100 right-0 transform rotate-0 ease-in-out duration-250 top-3"></span>
                        <span className="lower block absolute h-[3px] w-full bg-black rounded opacity-100 right-0 transform rotate-0 transition ease-in-out duration-250 top-6"></span>
                    </div>
                </div>
            </div>
            <div className={showMenu ? 'block' : 'hidden'}>
                <ul className='flex flex-col items-end gap-4 mr-6 text-2xl py-4'>
                    <li><Link href="#">Home</Link></li>
                    <li><Link href="#">Leistungen</Link></li>
                    <li><Link href="#">Referenzen</Link></li>
                    <li><Link href="#">Über mich</Link></li>
                    <li><Link href="#">Kontakt</Link></li>
                </ul>
            </div>
        </div>
    )
}