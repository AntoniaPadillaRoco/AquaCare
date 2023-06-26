import React from 'react'
import { Link } from "react-router-dom";
import {
  RiFilter2Fill,
  RiSearch2Line,
  RiInstagramLine,
  RiMailLine,
  RiFacebookBoxFill,
  RiTwitterFill,
  
} from "react-icons/ri";
import { Col, Row } from 'react-bootstrap';
import Formulario from '../components/Formulario';

const Ayuda = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-y-4 mb-10">
        <div>
          <h1 className="font-bold text-prim text-xl">Ayuda</h1>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>Bienvenido al centro de soporte.</span>
          </div>
        </div>
        
      </div>
      <div className="bg-back p-8 rounded-tl-lg rounded-tr-lg grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="p-8">
          <h1 className="text-3xl mb-8 text-third font-bold">¿Tienes alguna duda? <span className='text-prim'>Cuéntanos.</span></h1>
          <Formulario className="text-prim"/>
          <br></br>
          <br></br>
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
        {/* Image */}
        <div className="flex justify-center">
          <img src="/soporte.png" className="w-72 h-72 object-cover" />
        </div>
      </div>



    </div>
  )
}


export default Ayuda