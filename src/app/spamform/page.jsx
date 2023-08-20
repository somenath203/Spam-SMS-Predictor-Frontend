'use client';

import { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { AiOutlineLoading } from 'react-icons/ai';


import SpamPageImg from './../../../public/assets/spamform_page_img.svg';


const MySwal = withReactContent(Swal);


const Page = () => {

    const [text, setText] = useState();

    const [loading, setLoading] = useState();


    const onSubmitForm = async (e) => {

        e.preventDefault();

        try {

            setLoading(true);

            const { data } = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}`, {
                smsText: text
            });

            setLoading(false);

            if (data.pred_value === 1) {

                MySwal.fire({
                    title: `The following SMS message is SPAM.`,
                    icon: 'success'
                });

            } else if (data.pred_value === 0) {

                MySwal.fire({
                    title: `The following SMS message is not SPAM.`,
                    icon: 'success'
                });

            }

        } catch (error) {

            setLoading(false);

            MySwal.fire({
                title: `OOPS!! Something went wrong. Please try again!`,
                icon: 'error'
            });

            console.log(error);

        }

    };

    return (

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-14 w-4/5 lg:w-2/3 items-center m-auto'>

            <div className='mt-40'>
                <Image src={SpamPageImg} alt="welcome page image" className='w-full hidden lg:block h-60' />
            </div>

            <div className='flex flex-col gap-4 lg:mt-40'>

                <p className='text-xl lg:text-2xl text-violet-800 font-semibold'>SMS Spam Prediction</p>

                <form className='flex flex-col mt-3' onSubmit={onSubmitForm}>

                    <input type="text" className='p-2 shadow-lg rounded-xl' onChange={(e) => setText(e.target.value)} required />

                    {loading ? <>
                        <AiOutlineLoading className='text-3xl lg:text-4xl mt-5 animate-spin text-violet-700' />
                    </> : <>
                        <button className='bg-violet-600 w-2/4 py-2 px-2 text-white rounded-lg shadow-xl mt-5 text-lg lg:text-xl tracking-wide'>PREDICT</button>
                    </>}

                </form>

            </div>

        </div>

    )
};

export default Page;