'use client';

import Textbox from '@/components/Textbox'
import React, { useEffect, useState } from 'react'
import foto_club from "../../public/s_valenciana.jpg";
import foto_club_lg from "../../public/s_valenciana_lg.jpg";

import lv_club_1 from "../../public/liga_valenciana_1.jpg";
import lv_club_2 from "../../public/liga_valenciana_2.jpg";
import lv_club_3 from "../../public/liga_valenciana_3.jpg";
import lv_club_4 from "../../public/liga_valenciana_4.jpg";
import { StaticImageData } from 'next/image';

const LigaValenciana = () => {
  const [imgSrc, setImgSrc] = useState(foto_club_lg);

  useEffect(() => {
    const actualizarImagen = () => {
      const anchoPantalla = window.innerWidth;
      if (anchoPantalla < 768) {
        setImgSrc(foto_club); // Imagen para móviles
      } else if (anchoPantalla < 992) {
        setImgSrc(foto_club_lg); // Imagen para tablets
      } else {
        setImgSrc(foto_club_lg); // Imagen para escritorios
      }
    };

    actualizarImagen(); // Configuración inicial
    window.addEventListener("resize", actualizarImagen); // Listener para cambios de tamaño

    return () => window.removeEventListener("resize", actualizarImagen); // Limpieza
  }, []);

  const textContent: { type: "text" | "image"; content: string | StaticImageData; caption?: string }[] = [
    { type: 'text', content: "Por suerte, en Ibi contamos con un gran talento de jugadores y jugadoras y aquí podemos observar algunos ejemplos como son Sandra Navarro (Convocada con la Sub-14 y jugó el campeonato de España), Valerio Rico y Martina Picó (Convocadas con la Sub-12) o Adrián Company (Convocado con la Sub-10)." },
    { type: 'image', content: lv_club_1, caption: 'LigaValenciana del club - Foto 1' },
    { type: 'image', content: lv_club_4, caption: 'LigaValenciana del club - Foto 2' },
    { type: 'image', content: lv_club_3, caption: 'LigaValenciana del club - Foto 2' },
    { type: 'text', content: "Por otra parte, también hemos llevado a cabo Clínics de la Federación en nuestras instalaciones." },
    { type: 'image', content: lv_club_2, caption: 'LigaValenciana del club - Foto 3' },
  ];

  return (
    <div className="flex flex-col align-center items-center">
      <div className="">
        <Textbox title="LigaValenciana del Club" imageSrc={imgSrc} content={textContent} />
      </div> 
    </div>
  )
}

export default LigaValenciana