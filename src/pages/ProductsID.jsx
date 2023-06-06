import React from 'react'
import Footer from '../components/Footer'


const ProductsID = () => {
  return (
    <div>

    <div className="flex items-center justify-between xl:justify-start w-full py-4 px-8 h-[10vh] z-50 bg-back">
      <div className="xl:w-1/6 text-center -mt-4 ">
        <img
          src="AquaCare-logo.png"
          className="text-2xl font-bold relative p-1 bg-back"
        />
      </div>

      <nav
        className={`fixed bg-back w-[80%] md:w-[40%] xl:w-full h-full top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 transition-all duration-500 z-50`}
      >

        <a href="/" className="">
          Inicio
        </a>
        <a href="/#aboutUs" className="">
          Sobre nosotros
        </a>
        <a href="/#services" className="">
          Servicios
        </a>
        <a href="/#aboutUs" className="">
          Contacto
        </a>
      </nav>

      <nav className='font-bold text-third'>
          GRACIAS POR PREFERIRNOS!
        </nav>
      
    </div>


   
    <div className="min-h-screen flex items-center justify-center bg-back p-6">
    
      <div className="bg-ran p-8 rounded-lg w-full md:w-96">
          
          <div className="mb-10">
            <h1 className="text-3xl uppercase font-bold text-center text-secondary">
              Ingresa tu ID
            </h1>
          </div>

          <form>
            <input
              type ="email"
              className="w-full border border-gray-200 outline-none py-2 px-4 rounded-lg"
              placeholder="ID de producto . . . "
            />

            <button className = "mt-6 bg-primary text-white w-full py-2 px-6 rounded-lg">
              Ver mis datos
            </button>
          </form>
      
      </div>

    </div>

    <Footer/>
    </div>
  )
}

export default ProductsID