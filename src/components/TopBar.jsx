'use client';
import useTopBarMessages from '@/hooks/useTopBarMessages';
import Carousel from './Carousel';
import { generate } from 'randomstring';

export default function TopBar() {
    const { messages } = useTopBarMessages();

    return (
        <section className='relative flex items-center justify-between h-14 px-4 md:px-8 py-2 bg-primary-blue-500 z-20'>
            <div className='hidden w-24 lg:w-48 md:flex flex-shrink-0 items-center text-white text-sm font-light'>
                <a href='/en'>EN</a>
                <span className='inline-block mx-1'>|</span>
                <a href='/fr'>FR</a>
            </div>
            <div className='w-full'>
                <div className='flex items-center'>
                    <Carousel>
                        {messages.map((message) => (
                            <div key={generate()} className="flex justify-center items-center w-full text-center text-white text-sm font-bold space-y-4">
                                {message}
                            </div>
                        ))}
                    </Carousel>

                    <div className='embla relative flex-auto overflow-hidden'>
                        <div className='embla__container flex items-center'></div>
                    </div>
                </div>
            </div>
            <a
                className='hidden w-24 lg:w-48 md:flex flex-shrink-0 items-center text-white text-sm justify-end font-light'
                href='https://stores.casper.ca/en'
            >
                Find a store
                <svg
                    width='40'
                    height='40'
                    viewBox='0 0 40 40'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M19.3991 29.3906C19.5396 29.5807 19.7626 29.6922 19.9991 29.6906C20.2464 29.704 20.4835 29.591 20.6291 29.3906C25.4491 23.0706 27.7891 18.6506 27.7891 15.9006C27.7891 11.6204 24.3193 8.15063 20.0391 8.15063C15.7589 8.15063 12.2891 11.6204 12.2891 15.9006C12.2891 18.6506 14.6291 23.0706 19.3991 29.3906ZM13.7896 15.8997C13.8005 12.4745 16.5744 9.70063 19.9996 9.68965C21.658 9.67635 23.2534 10.3238 24.4336 11.489C25.6138 12.6541 26.2816 14.2412 26.2896 15.8997C26.2896 18.1697 24.1896 22.1397 20.0396 27.6897C15.8896 22.1397 13.7896 18.1697 13.7896 15.8997Z'
                        fill='white'
                    ></path>
                    <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M17.25 15.4392C17.25 16.958 18.4812 18.1892 20 18.1892C21.5188 18.1892 22.75 16.958 22.75 15.4392C22.75 13.9204 21.5188 12.6892 20 12.6892C18.4812 12.6892 17.25 13.9204 17.25 15.4392ZM18.7507 15.4399C18.7507 14.7495 19.3104 14.1899 20.0007 14.1899C20.3323 14.1899 20.6502 14.3216 20.8846 14.556C21.119 14.7904 21.2507 15.1083 21.2507 15.4399C21.2507 16.1302 20.6911 16.6899 20.0007 16.6899C19.3104 16.6899 18.7507 16.1302 18.7507 15.4399Z'
                        fill='white'
                    ></path>
                </svg>
            </a>
        </section>
    );
}
