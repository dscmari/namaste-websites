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
        setBurgermenu(window.innerWidth < 860);
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
                    <img className='m-4' src="#" alt="namaste-websites logo" />
                    <div className="burgermenu" id='burger-menu' onClick={toggleMenu}>
                        <span className="top"></span>
                        <span className="middle"></span>
                        <span className="bottom"></span>
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
    } else {
        return(
            <div className='border-b-4 flex justify-around p-12 items-center'>
                <img src="#" alt="namaste-websites logo" />
                <ul className='flex gap-4'>
                    <li className='p-4 hover:underline hover:cursor-pointer'>
                        Website-Erstellung
                    </li>
                    <li className='p-4 hover:underline hover:cursor-pointer'>
                        Preise
                    </li >
                    <li className='p-4 hover:underline hover:cursor-pointer'>
                        Referenzen
                    </li>
                    <li className='p-4 hover:underline hover:cursor-pointer'>
                        Tipps
                    </li>
                    <li className='p-4 hover:underline hover:cursor-pointer'>
                        Über mich
                    </li>
                    <li className='p-4 hover:underline hover:cursor-pointer'>
                        Kontakt
                    </li>
                </ul>
            </div>
        )
    }
  
  
}
