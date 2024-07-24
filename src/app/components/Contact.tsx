'use client'

import React from 'react'
import { useForm } from 'react-hook-form';
import { sendEmail } from '../utils/send-email';
import Link from 'next/link';

export type FormData = {
    name: string;
    number: string;
    email: string;
    message: string;
  };

export default function Contact() {

    const { register, handleSubmit } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        sendEmail(data);
    }

    return (
        <div className='p-4 max-w-3xl md:mx-auto'>
            <p className='py-6'>Introtext zu Kontaktformular</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mb-5'>
                    <label htmlFor='name' className='mb-3 block'>Name</label>
                    <input
                    type='text'
                    placeholder='Name'
                    className='w-full rounded-md border border-gray-300 py-3 px-6 text-gray-700 outline-none focus:border-cadedBlue focus:shadow-md'
                    {...register('name', { required: true })}
                    />
                </div>
                <div className='mb-5'>
                    <label htmlFor='email'className='mb-3 block'>Emailadresse</label>
                    <input
                    type='email'
                    placeholder='example@domain.com'
                    className='w-full rounded-md border border-gray-300 py-3 px-6 text-gray-700 outline-none focus:border-cadedBlue focus:shadow-md'
                    {...register('email', { required: true })}
                    />
                </div>
                <div className='mb-5'>
                    <label htmlFor='number'className='mb-3 block'>Telefonnummer (optional)</label>
                    <input
                    type='text'
                    placeholder='Telefonnummer'
                    className='w-full rounded-md border border-gray-300 py-3 px-6 text-gray-700 outline-none focus:border-cadedBlue focus:shadow-md'
                    {...register('number', { required: true })}
                    />
                </div>
                <div className='mb-5'>
                    <label htmlFor='message'className='mb-3 block'>Nachricht</label>
                    <textarea
                    rows={4}
                    placeholder='Ihre Nachricht'
                    className='w-full rounded-md border border-gray-300 py-3 px-6 text-gray-700 outline-none focus:border-cadedBlue focus:shadow-md'
                    {...register('message', { required: true })}
                    ></textarea>
                </div>
                <div>
                    <div>
                        <label className=''>
                            <input type='checkbox' className='form-checkbox' required />
                            <span className='ml-2 text-sm text-gray-700'>
                                Ich habe die <Link href="/Datenschutz" className='text-blue-500 underline'>Datenschutzerklärung</Link> zur Kenntnis genommen.
                            </span>
                        </label>
                    </div>
                    <div className='text-center'>
                        <button className='hover:shadow-form rounded-md bg-cadedBlue py-3 px-8 m-6 font-semibold text-white outline-none'>
                            Senden
                        </button>
                    </div>
                </div>
            </form>
        </div>
      
      );
}
