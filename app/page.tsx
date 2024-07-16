import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col align-center items-center">
        <div className="mb-24">
          <h1 className="text-4xl font-bold">¡Bienvenido a la página oficial del CFS Futsal Ibi!</h1>
        </div>
        <div className="mb-12">
          <p className= "text-xl">Por el momento, este sitio web se encuentra en desarrollo.</p>
        </div>
        <div className="mb-5">
          <p>
            Contacta con nosotros a través de nuestro Instagram:
          </p>
        </div>
        <div className="
            p-2
            bg-gradient-to-bl
            from-green-400 to-blue-400
            hover:from-blue-400
            hover:to-pink-400">
          <a className="" href="https://instagram.com/futsal_ibi">Futsal Ibi - Instagram</a>
        </div>
        
      </div>
    </main>
  );
}
