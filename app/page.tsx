import Textbox from "@/components/Textbox";
import foto_club from "../public/landing.png";


import Image from "next/image";
import ImageGallery from "@/components/ImageGallery";

export default function Home() {

  return (
    <div className="flex flex-col align-center items-center animate-fadeIn">
      <div className='flex items-center mt-24 animate-slideIn'>
        <Image 
            src={foto_club} 
            alt={"Foto de club"} 
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
      </div>
      <div className=" bg-white p-24 text-center">
          <h3 className="text-xl font-semibold">Con 13 equipos de base, entre ellos 8 federados, y dos sénior militando en 3ª División y en Regional Preferente, le damos la oportunidad a todo aquel que quiera jugar al fútbol sala en Ibi.</h3>
          <br />
          <br />
          <h4 className="text-xl">Adéntrate en nuestra página web o en redes sociales para conocernos mejor. Si tienes cualquier duda o quieres formar parte de la família Futsal Ibi, no dudes en ponerte en contacto con nosotros.</h4>
      </div>
      <div className="">
        <ImageGallery></ImageGallery>
      </div>
    </div>
  );
}
