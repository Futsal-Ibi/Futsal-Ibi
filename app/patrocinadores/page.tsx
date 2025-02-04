import Textbox from '@/components/Textbox';
import React, { useEffect, useState } from 'react'
import sponsors from "../../public/sponsors.jpg";
import Image, { StaticImageData } from 'next/image';


const patrocinadores = () => {

  const textContent = [
    { type: 'text', content: "💙 ¡MUCHAS GRACIAS POR VUESTRA AYUDA! 💙" },
    { type: 'text', content: "¡Tú también puedes ayudar al Fútbol Sala de Ibi!" },
    { type: 'text', content: "No dudes en contactarnos para ver los diferentes tipos de patrocinio." },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 mx-auto w-full lg:w-4/5">
      <div className="flex flex-col align-center items-center">
        <div className="text-center">
          <div className='mt-28 mb-8'>
            <h1 className='text-4xl mt-16 font-bold'>{textContent[0].content}</h1>
            <div className='mt-10'>
              <Image className='mt-4 mb-4'
                src={sponsors} 
                alt={"Sponsors"} 
                sizes="100vw"
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
            </div>
            <h2 className='text-2xl mt-6 mb-2 font-semibold'>{textContent[1].content}</h2>
            <h3 className='text-xl'>{textContent[2].content}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default patrocinadores