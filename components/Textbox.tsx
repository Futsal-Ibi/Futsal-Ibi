import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Header from './Header';

interface TextBlockContent {
  type: 'text' | 'image';
  content: string | StaticImageData; // Puede ser un texto o una imagen
  caption?: string;
}

interface TextBlockProps {
  title: string;
  imageSrc: StaticImageData; // Imagen principal
  imageAlt?: string;
  content: TextBlockContent[]; // Cambiado a un arreglo de contenido
}

const TextBlock: React.FC<TextBlockProps> = ({ title, imageSrc, imageAlt, content }) => {
  // Función para renderizar el contenido
  const renderContent = (item: TextBlockContent, index: number) => {
    if (item.type === 'text') {
      return (
        <div
          key={index}
          className="text-gray-600 text-justify mb-4 ml-4 mr-4 regular-20"
          dangerouslySetInnerHTML={{ __html: (item.content as string).replace(/\n/g, '<br />') }}
        />
      );
    } else if (item.type === 'image') {
      return (
        <div key={index} className="mb-4 flex justify-center">
          <div className="w-full sm:w-4/5 lg:w-3/5 p-4">
            <Image
              src={item.content as StaticImageData}
              alt="Imagen entre párrafos"
              layout="responsive"
              objectFit="cover"
              className="rounded-lg"
            />
            {item.caption && (
              <p className="mt-2 text-sm text-gray-500 italic text-center">
                {item.caption}
              </p>
            )}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 mx-auto w-full lg:w-4/5 mt-24">
      <Header title={title} backgroundImage="https://i.postimg.cc/FsSvVJGZ/historia-del-club-72-x-20-in.png" />
      {content.map((item, index) => renderContent(item, index))}
    </div>
  );
};

export default TextBlock;
