'use client'
import React, { useEffect, useState } from 'react'
import BurgerMenu from './BurgerMenu';

export default function Navbar() {

    const [burgermenu, setBurgermenu] = useState(false)

    const handleResize = () => {
        setBurgermenu(window.innerWidth < 860);
    };
    


    useEffect(() => {
        window.addEventListener("resize", handleResize);
        handleResize();
      }, []);


    if(burgermenu) {
        return(
            <div>
                <BurgerMenu/>
            </div>
        )
    } else {
        return(
            <div className='flex justify-around p-16 border-'>
                <img src="#" alt="namaste-websites logo" />
                <ul className='flex gap-4'>
                    <li className='p-4 hover:underline hover:cursor-pointer'>
                        Leistungen
                    </li>
                    <li className='p-4 hover:underline hover:cursor-pointer'>
                        Referenzen
                    </li >
                    <li className='p-4 hover:underline hover:cursor-pointer'>
                        Über mich
                    </li>
                    <li className='p-4 hover:underline hover:cursor-pointer'>
                        Kontakt
                    </li>
                    <li className='p-4 hover:underline hover:cursor-pointer'>
                        Datenschutzerklärung
                    </li>
                </ul>
            </div>
        )
    }
  
  
}
