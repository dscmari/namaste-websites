'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link';


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
                <p className='p-4 text-md flex flex-col items-end'>
                    <span>01523 1432433</span>
                    <span>noekel@namaste-websites.de</span>
                </p>
                <div className='flex justify-between items-center'>
                    <img className='m-4' src="#" alt="namaste-websites logo" />
                    <div className="burgermenu" id='burger-menu' onClick={toggleMenu}>
                        <span className="top"></span>
                        <span className="middle"></span>
                        <span className="bottom"></span>
                    </div>
                </div>
                <div className={showMenu ? 'block' : 'hidden'} onClick={toggleMenu}>
                    <ul className='flex flex-col items-end gap-4 mr-6 text-2xl py-4'>
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
                <p className='p-12 pb-4 text-md flex flex-col items-end'>
                    <span>01523 1432433</span>
                    <span>noekel@namaste-websites.de</span>
                </p>
                <div className='border-b-4 flex justify-around pb-12 pt-6 items-center'>
                    <img src="#" alt="namaste-websites logo" />
                    <ul className='flex gap-4'>
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
