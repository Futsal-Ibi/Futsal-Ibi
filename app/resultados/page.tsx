'use client';

import React, { useEffect, useState } from 'react'
import sponsors from "../../public/resultados/resultados.jpg";
import Image, { StaticImageData } from 'next/image';

const Resultados = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 mx-auto w-full lg:w-4/5">
      <div className="flex flex-col align-center items-center">
        <div className="text-center w-full md:w-3/4 lg:w-2/3">
          <div className='mt-28 mb-8'>
            <div className='mt-10'>
              <Image className='mt-4 mb-4 w-full'
                src={sponsors} 
                alt={"Sponsors"} 
                sizes="100vw"
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resultados