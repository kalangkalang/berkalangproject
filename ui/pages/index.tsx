import Head from 'next/head'
import Image from "next/image"

import flower from "../public/flower.png";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center flex-grow px-20">
      <div className='flex'>
        <div className='flex flex-col justify-center'>
          <h1 className='font-Lato font-bold text-5xl'>Berkalang</h1>
          <h1 className='font-Lato font-medium text-3xl underline'>Project</h1>
        </div>
        <div>
          <Image width={100} height={100} src={flower} />
        </div>
      </div>

      <div></div>
    </div>
  )
}
