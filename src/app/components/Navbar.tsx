'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import Image from "next/image";
import monkey from "../../../public/images/monkey.jpg"


export default function Navbar() {

    const [burgermenu, setBurgermenu] = useState(false)
    const [showMenu, setShowMenu] = useState(false)

    const toggleMenu = () => {
        toggleX()
        setShowMenu(!showMenu)
    }

    const handleResize = () => {
        setBurgermenu(window.innerWidth < 769);
        if(window.innerWidth > 860) {
            setShowMenu(false)
        }
    };
    


    useEffect(() => {
        window.addEventListener("resize", handleResize);
        handleResize();
      }, []);

 
    const toggleX = () => {
        const burgerMenu = document.getElementById("burger-menu");
        const spans = burgerMenu?.getElementsByTagName('span');

        if (spans) {
            Array.from(spans).forEach((span) => {
                span.classList.toggle('open');
            });
        }
    }

    if(burgermenu) {
        return(
            <div className='p-4 border-b-4'>
                <div className='flex justify-between items-center'>
                <Link href="/"><Image src={monkey} alt="Logo" width={100} height={100} /></Link>
                    <div className="burgermenu" id='burger-menu' onClick={toggleMenu}>
                        <span className="top"></span>
                        <span className="middle"></span>
                        <span className="bottom"></span>
                    </div>
                </div>
                <div className={showMenu ? 'block' : 'hidden'} onClick={toggleMenu}>
                    <ul className='flex flex-col items-end gap-4 mr-6 text-xl py-4'>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/Website-Erstellung">Website-Erstellung</Link></li>
                        <li><Link href="/Preise">Preise</Link></li>
                        <li><Link href="/Referenzen">Referenzen</Link></li>
                        <li><Link href="/UeberMich">Über mich</Link></li>
                        <li><Link href="/Kontakt">Kontakt</Link></li>
                    </ul>
                </div>
            </div>
        )
    } else {
        return(
            <div>
                <div className='border-b-4 flex justify-around py-12 items-center'>
                    <Link href="/"><Image src={monkey} alt="Logo" width={100} height={100} /></Link>
                    <ul className='flex gap-4 lg:text-lg'>
                        <li><Link href="/Website-Erstellung">Website-Erstellung</Link></li>
                        <li><Link href="/Preise">Preise</Link></li>
                        <li><Link href="/Referenzen">Referenzen</Link></li>
                        <li><Link href="/Tipps">Tipps</Link></li>
                        <li><Link href="/UeberMich">Über mich</Link></li>
                        <li><Link href="/Kontakt">Kontakt</Link></li>
                    </ul>
                </div>
            </div>
         
        )
    }
  
  
}
