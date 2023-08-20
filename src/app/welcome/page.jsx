'use client';

import WelcomePage from './../../../public/assets/welcome_page_img.svg';
import { Typewriter } from 'react-simple-typewriter';
import Link from 'next/link';

import Image from 'next/image';


const Page = () => {
  return (

    <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 w-2/3 items-center m-auto'>

      <div className='flex flex-col gap-4 mt-44 text-center lg:text-left'>

        <p className='text-2xl  text-violet-800 font-semibold'>Welcome to Spam SMS Classifier</p>

        <p className='text-xl'>The website where you can predict whether a SMS message is <span className='font-semibold text-violet-600'><Typewriter words={['Spam', 'or', 'Not Spam']} loop={false} cursor={true} /></span></p>

        <Link href='/spamform'>
          <button className='bg-violet-600 w-3/4 py-4 px-4 text-white rounded-lg shadow-xl mt-5 lg:mt-4 text-lg lg:text-xl'>Get Started</button>
        </Link>

      </div>

      <div className='mt-40'>
        <Image src={WelcomePage} alt="welcome page image" className='hidden lg:block w-full h-60 animate-bounce' />
      </div>

    </div>

  )
};

export default Page;