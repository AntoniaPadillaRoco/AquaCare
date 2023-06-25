import React from 'react'
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



const Consejos = () => {
  return (
    <div>

        <div className="flex items-center justify-between mb-10 bg-back">
            <h1 className="text-4xl font-bold text-third">Consejos 🐟</h1>
            <div className="flex items-center gap-2 text-3xl">
                <RiArrowLeftSLine className="hover:cursor-pointer hover:text-white transition-colors" />
                <RiArrowRightSLine className="hover:cursor-pointer hover:text-white transition-colors" />
            </div>
        </div>
            
        <Row>
            <Col> 
            <div className ='grid grid-cols-1 bg-back rounded-md'>
                <img src="\espacio-pez.jpg" className='rounded-md rounded-b-none'/>
                <div className='p-4'>
                    <h2 className='font-semibold text-third'>Espacio</h2>
                    <p className='text-xm mt-1 text-secondary'>Asegúrate de proporcionar un acuario amplio y adecuado para tus peces.
                    </p>
                </div>
        
            </div>
            </Col>
            <Col> 
            <div className ='grid grid-cols-1 bg-back rounded-md'>
                <img src="\vet_pez.jpg" className='rounded-md rounded-b-none'/>
                <div className='p-4'>
                    <h2 className='font-semibold text-third'>Salud</h2>
                    <p className='text-xm mt-1 text-secondary'>Acude a tu clínica veterinaria siempre que sea necesario. Resuelve todas las dudas
                    que tengas y cuida de tu amigo acuático evitando que se enferme.</p>
                </div>
        
            </div>
            </Col>
            <Col> 
            <div className ='grid grid-cols-1 bg-back rounded-md'>
                <img src="\limpieza.acuario.jpg" className='rounded-md rounded-b-none'/>
                <div className='p-4'>
                    <h2 className='font-semibold text-third'>Limpieza</h2>
                    <p className='text-xm mt-1 text-secondary'>Manten el agua lo más limpia posible. Renueva el agua con una frecuencia de 14 días. 
                    No lo dejes para después.</p>
                </div>
        
            </div>
            </Col>
        </Row>
            <br></br>
        <Row>
            <Col>
            <div className ='grid grid-cols-1 bg-back rounded-md'>
                <img src="\comida-pezz.jpg" className='rounded-md rounded-b-none'/>
                <div className='p-4'>
                    <h2 className='font-semibold text-third'>Comida</h2>
                    <p className='text-xm mt-1 text-secondary'>
                        Busca la comida de mejor calidad y proporciónales la cantidad adecuada.
                    </p>
                </div>
        
            </div> 
            </Col>
            <Col>
            <div className ='grid grid-cols-1 bg-back rounded-md'>
                <img src="\estres.pecs.jpg" className='rounded-md rounded-b-none'/>
                <div className='p-4'>
                    <h2 className='font-semibold text-third'>Salud</h2>
                    <p className='text-xm mt-1 text-secondary'>
                        Evita cambios bruscos en el entorno del acuario, de esta forma evitas el estrés.
                        El estrés puede debilitar el sistema inmunológico de los peces y hacerlos más susceptibles a enfermedades.
                    </p>
                </div>
        
            </div>
            </Col>
            <Col>
            <div className ='grid grid-cols-1 bg-back rounded-md'>
                <img src="\sobrepoblacion.pez.jpg" className='rounded-md rounded-b-none'/>
                <div className='p-4'>
                    <h2 className='font-semibold text-third'>Espacio</h2>
                    <p className='text-xm mt-1 text-secondary'>
                        Evita sobrepoblar el acuario. Demasiados peces en un espacio limitado genera un estrés excesivo, competencia
                        por recrsos y problemas en la calidad del agua. Asegúrate de mantener un equilibrio adecuado en la población.
                    </p>
                </div>
        
            </div>
            </Col>
        </Row>

           
    </div>

        



    
  )
}

export default Consejos