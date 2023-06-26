import React from "react";
// Icons
import { RiMailFill, RiSmartphoneFill, RiMacFill, RiInstagramLine, RiMailLine, RiFacebookBoxFill, RiTwitterFill, } from "react-icons/ri";
import { Col, Row } from 'react-bootstrap';

const Services = () => {
  return (
    <div
      id="services"
      className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 p-8 md:p-12 xl:p-20 bg-back"
    >
      <div className="flex flex-col gap-4">
        <h1 className="text-[40px] font-bold text-third">Entérate de lo nuevo!</h1>
        <p className="text-[20px] text-gray-500">
          Ingresa tu correo para enterarte de nuestros próximos lanzamientos.
        </p>
        <form className="w-full">
          <div className="relative">
            <RiMailFill className="absolute top-1/2 -translate-y-1/2 left-2 text-gray-500 text-xl" />
            <input
              type="text"
              className="w-full bg-gray-100 py-4 pl-10 pr-36 rounded-xl outline-none"
              placeholder="Email"
            />
            <button
              type="submit"
              className="absolute font-semibold py-2 px-6 bg-prim text-white rounded-xl top-1/2 -translate-y-1/2 right-2"
            >
              Suscribirse
            </button>
          </div>
        </form>
      </div>
      <img
          src="bell.png"
          className="text-2xl font-bold relative p-1" 
        />
      <div className="bg-back p-8 rounded-tl-lg rounded-tr-lg grid grid-cols-1 md:grid-cols-2 items-center p-8">
        <h1 className="text-3xl mb-8 text-third font-bold">Encuéntranos en:</h1>
        <div className='text-third font-bold'>
        <Row>
              <Col>
                <RiMailLine/>
              </Col>
              <Col>
                contacto@AquaCare.cl
              </Col>
            </Row>

            <Row>
              <Col>
                <RiInstagramLine/>
              </Col>
              <Col>
                @AquaCare.TICS
              </Col>
            </Row>

            <Row>
              <Col>
                <RiFacebookBoxFill/>
              </Col>
              <Col>
                @AquaCare.FB
              </Col>
            </Row>

            <Row>
              <Col>
                <RiTwitterFill/>
              </Col>
              <Col>
                @AquaCare.TW
              </Col>
            </Row>
        </div>

      </div>
  
    </div>
  );
};

export default Services;
