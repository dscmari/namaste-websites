import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className='p-4 border-t-4 flex flex-col justify-center text-md md:flex-row md:text-lg'>
        <ul className='flex flex-col gap-1 md:w-1/2 p-4'>
            <li className='mx-auto md:m-0'>Impressum</li>
            <li>Marian Nökel</li>
            <li>Schlierseestrasse 10</li>
            <li>81541 München</li>
            <li>Mail: noekel@namaste-websites.de</li>
            <li>Tel.: 01523-1432433</li>
            <li>
            Hinweis zu § 36 VSBG: Wir nehmen an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle nicht teil und sind dazu auch nicht verpflichtet.
            </li>
        </ul>
        <ul className='mt-4 md:mt-0 p-4 flex flex-col items-center gap-4 underline'>
            <li><Link href="/Datenschutz">Datenschutz</Link></li>
            <li><Link href="/AGBs">Allgemeine Geschäftsbedingungen</Link></li>
        </ul>
    </div>
  )
}
