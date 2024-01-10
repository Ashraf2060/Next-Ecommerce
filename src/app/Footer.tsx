
'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Footer = () => {
  return (
    <div className='bg-[#060608] text-[#fffbe0] pt-8 flex  max-w-full   flex-col '>

<div className='up flex justify-around mb-10 '>

<div className='box1'>
<h1 className='font-semibold text-2xl'> Contact Us</h1>

<ul className='flex flex-col gap-4 mt-8'>
<Link href=''>Adress / 12 Al-Gomhuria St- 254569</Link>
<Link href=''>Telephone- 0215639865</Link>
<Link href=''>Find Us </Link>
<Link className='flex items-center gap-2' href=''><span><Image width={200} height={200}  className='w-10 ' src='/f1.png' alt='twitter' /></span> <span><Image width={200} height={200} className='w-10' src='/121.png' alt='facebook' /></span> <span><Image width={200} height={200} className='w-12 rounded-full' src='/251.png' alt='instgram' /></span> <span className='border-white bordered border-2 rounded-full w-[36px]'><Image width={500} height={500} className='w-[36px] rounded-full' src='/s.png' alt='snapchat' /></span> </Link>
</ul>

</div>
<div className='box2'>
<h1 className='font-semibold text-2xl'> Our Services</h1>

<ul className='flex flex-col gap-4 mt-8'>
<Link href=''>Accounts</Link>
<Link href=''>Transactions</Link>
<Link href=''> Deposits </Link>
<Link href=''> Requested loans </Link>

</ul>

</div>
<div className='Newslatter flex flex-col gap-4'>
<h1 className='font-semibold text-2xl'> Be In Touch</h1>

<h2>Subscribe Newslatter</h2>

<div>  <input className='w-full p-2 rounded-lg' type='text' placeholder='email adress'  /></div>
<button className='p-2 bg-gradient-to-r from-blue-800 to-red-300 max-w-fit rounded-3xl font-semibold self-center'> Subscribe....</button>

</div>

</div>


    </div>
  )
}

export default Footer
