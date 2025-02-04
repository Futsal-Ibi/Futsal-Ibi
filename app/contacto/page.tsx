'use client';

import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Header from '@/components/Header';

const Contacto = () => {
  return (
    <div className="flex flex-col align-center items-center mt-24 w-full">
      <div className="bg-white shadow-md rounded-lg p-4 mb-4 mx-auto w-full lg:w-4/5">
        <Header title="Contacto" backgroundImage="https://i.postimg.cc/FsSvVJGZ/historia-del-club-72-x-20-in.png" />
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 p-8">
          <button className="bg-white border border-blue-500 text-blue-500 py-4 px-8 rounded-lg flex items-center gap-2 transition-all hover:bg-blue-500 hover:text-white hover:shadow-lg w-full sm:w-auto">
            <FaEnvelope size={24} /> <span className="text-lg">cfsfutsalibi2021@gmail.com</span>
          </button>
          <button className="bg-white border border-blue-500 text-blue-500 py-4 px-8 rounded-lg flex items-center gap-2 transition-all hover:bg-blue-500 hover:text-white hover:shadow-lg w-full sm:w-auto">
            <FaPhone size={24} /> <span className="text-lg">747 793 799 - 671 125 197</span>
          </button>
          <button className="bg-white border border-blue-500 text-blue-500 py-4 px-8 rounded-lg flex items-center gap-2 transition-all hover:bg-blue-500 hover:text-white hover:shadow-lg w-full sm:w-auto">
            <FaMapMarkerAlt size={24} /> <span className="text-lg">Calle Jaén, Ibi, 03440, Alicante</span>
          </button>
        </div>
        <div className="w-full h-64 sm:h-96 mt-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3110.123456789!2d-0.123456789!3d38.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd123456789abcdef%3A0x123456789abcdef!2sCalle%20Ja%C3%A9n%2C%2003440%20Ibi%2C%20Alicante%2C%20Spain!5e0!3m2!1sen!2sus!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
