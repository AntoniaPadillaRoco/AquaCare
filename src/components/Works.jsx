import React from "react";

const Works = () => {
  return (
    <div id="aboutUs" className="p-8 xl:p-20 bg-ran">
      <div className="mb-8">
        <h1 className="text-[40px] font-black text-third">
          Lo que ofrecemos
        </h1>
        <p className="text-xl text-gray-500">
          Nuestro es objetivo es ayudarte a ti y a tus amigos acuáticos!
        </p>
      </div>
      {/* Works */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 text-third">
        <div className="flex flex-col gap-2">
          <img
            src="pez-lindo.jpg"
            className="w-full h-[600px] object-cover rounded-3xl"
          />
          <h3 className="text-2xl font-bold">AquaCare</h3>
          <p className="text-gray-500">
          Un dispositivo que te entrega los datos de temperatura y pH de tu pecera. Además, ingresando en la aplicación web el ID de tu producto,
            puedes acceder a las estadísticas de tu pecera, junto con consejos y servicio técnico las 24 horas.
            Todo al alcance de tu mano!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <img
              src="dispositivo-1.jpg"
              className="w-full h-56 object-cover rounded-3xl"
            />
            <p className="text-gray-500">¡Un producto all-in-one económico!</p>
            
          </div>
          <div className="flex flex-col gap-4">
            <img
              src="consejitos.png"
              className="w-full h-56 object-cover rounded-3xl"
            />
            <p className="text-gray-500">¡Incluye consejos en la aplicación!</p>
            
          </div>
          <div className="flex flex-col gap-4">
            <img
              src="work4.png"
              className="w-full h-56 object-cover rounded-3xl"
            />
            <p className="text-gray-500">¡Incluye estadísticas!</p>
            
          </div>
          <div className="flex flex-col gap-4">
            <img
              src="dispositivo-2.jpg"
              className="w-full h-56 object-cover rounded-3xl"
            />
            <p className="text-gray-500">¡Un diseño único!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
