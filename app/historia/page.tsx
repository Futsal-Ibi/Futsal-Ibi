'use client';

import Textbox from '@/components/Textbox'
import React, { useEffect, useState } from 'react'
import foto_club from "../../public/historia_club.jpg";
import foto_club_lg from "../../public/historia_club_lg.jpg";

import h_club_1 from "../../public/historia_club1.jpg";
import h_club_2 from "../../public/historia_club2.jpg";
import h_club_3 from "../../public/historia_club3.jpg";

const Historia = () => {
  const textContent = [
    { type: 'text', content: "Ibi es un pueblo enmarcado en la comarca de la <strong>Foia de Castalla</strong> con una gran tradición heladera y juguetera. Es más que evidente que muchos niños y jóvenes se han dedicado a jugar por sus numerosos parques, pero lo que está claro, es que de la plaza a la pista, han sabido mantener esa ilusión por chutar un balón. <br><br>Indagando en los libros y en los recuerdos de la gente, nos remontamos al <strong>1994</strong> donde comienza la edad dorada del fútbol sala en Ibi. Comienza así, la andadura en 2º División del <strong>Intersa Ibi FS</strong>. Durante esta época, contamos con grandes jugadores que hoy en día residen en nuestro club como entrenadores como son <strong>Ángel Pastor</strong>, <strong>Moisés Barba</strong>, <strong>Juan Carrión</strong>, <strong>Daniel Sánchez (Pina)</strong> y <strong>Jose Gutiérrez (Guti)</strong> quien es patrocinador del club." },
    { type: 'image', content: h_club_1, caption: 'Historia del club - Foto 1' }, // Imagen entre párrafos
    { type: 'text', content: "A lo largo del tiempo, nace un nuevo club en el pueblo el cuál recibe el nombre de <strong>Unión Deportiva Ibense</strong>. Dicho club junto con el <strong>Marquetería Peinado</strong>, llegaron a convivir durante muchos años en <strong>Nacional A</strong> (actual 2ºB) por lo que Ibi era uno de los pocos pueblos, por no decir el único, con dos grandes potencias de fútbol sala. <br><br>Hemos hablado de clubes, por lo que es momento de mencionar a algunos de los protagonistas y grandes jugadores que han defendido el escudo del pueblo el 40x20. Por un lado contamos con <strong>Vicentín</strong> quien llegó a ser nombrado mejor jugador europeo de fútbol sala por la UEFA tras conquistar la Eurocopa con la Selección. Recaló en las filas del equipo del pueblo en el <strong>2002</strong>, cerca de su retirada profesional que se confirmó en <strong>2006</strong>. También debemos mencionar a <strong>David Baca</strong> quien fue uno de los causantes del ascenso del <strong>CFS Futsal Ibi</strong> a 2ºB. Posteriormente, Baca había jugado en <strong>Jumilla</strong> en 1º División. <strong>Adolfo Bony</strong> quien estuvo en el <strong>Caja Segovia</strong>, también estuvo en las filas ibenses. Centrándonos en jugadores que hoy en día siguen en activo, nuestro capitán <strong>Jorge Peinado</strong> recaló en el <strong>Pozo B</strong> y debutó en 2º División de igual manera que hoy en día juegan en esta liga <strong>Carlos Vilaplana (Charly)</strong> o <strong>Rubén Sánchez (Rubi)</strong> quien estuvo el año pasado en 1º División. Pasado y presente se mezclan en las pistas del polideportivo, pero la ilusión y el amor por el fútbol sala sigue intacto desde el primer día." },
    { type: 'image', content: h_club_2, caption: 'Historia del club - Foto 2' }, // Otra imagen
    { type: 'text', content: "Echando la vista un poco más cerca en el tiempo, nació en <strong>2012</strong> el <strong>Kiwibi FS</strong> como un club de fútbol sala femenino. Durante las temporadas <strong>2012/2013</strong> y <strong>2013/2014</strong> el futsal ibense se jugaba por parte de los chicos en el <strong>UD Ibense</strong> mientras que las chicas tenían su lugar en el <strong>Kiwibi</strong>. En <strong>2014</strong>, nace el <strong>CFS Futsal Ibi</strong> como una solución para todos aquellos que quieren jugar a este apasionante deporte en nuestro pueblo, juntando a chicos y chicas. Durante la temporada <strong>2017/2018</strong> se logra la hazaña de ascender de <strong>Tercera</strong> a <strong>Segunda División B</strong> ganando la liga. Pudimos disfrutar de esta categoría en el pueblo e incluso durante la temporada <strong>2019/2020</strong> nos plantamos en el <strong>PlayOff de ascenso</strong> a 2º División en <strong>Leganés</strong>. Al igual que en la temporada actual, entre <strong>2018</strong> y <strong>2021</strong> pudimos vivir partidos de la <strong>Copa del Rey</strong> en nuestra localidad. Finalmente, en la temporada <strong>2020/2021</strong> el equipo descendió a <strong>3º División</strong> donde hoy en día lucha por volver a demostrar que Ibi, merece estar más arriba.<br><br>A día de hoy, contamos con <strong>12 equipos</strong> de los cuales <strong>8 están federados</strong> con jugadores que van desde los 3-4 años hasta seniors. El fútbol sala sigue vivo, y estamos dispuestos a demostrar que Ibi fue, es y será fútbol sala." },
    { type: 'image', content: h_club_3, caption: 'Historia del club - Foto 3' }, // Otra imagen
  ];

  return (
    <div className="flex flex-col align-center items-center">
      <div className="">
        <Textbox title="Historia del Club" imageSrc={foto_club_lg} content={textContent} />
      </div> 
    </div>
  )
}

export default Historia