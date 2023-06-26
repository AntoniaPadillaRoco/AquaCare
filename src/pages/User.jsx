import React from 'react'

import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

const User = () => {
  return (
    
    <div>
        <div className="flex items-center justify-between mb-10 bg-back">
            <h1 className="text-4xl font-bold text-third">Bienvenido!</h1>
        </div>

        <div className="text-2xl text-third my-10"> 
         <h1>Como ya adquiriste nuestro producto, cuentas con la posibilidad de ver un gráfico en el que se encuentran los valores de temperatura
         y pH por las que ha ido pasando tu pecera.  </h1>
         <br></br>
         <h1> Además, cuentas con el apartado de 'Consejos' donde puedes encontrar las mejores recomendaciones para el cuidado de tus queridos amigos acuáticos.</h1>
         <br></br>
         <h1 className='font-bold'> Gracias por preferirnos.</h1>
         <br></br>
         <h1 className='font-bold'> Atte:  El equipo de AquaCare ＼(^o^)／</h1>
        </div>
        <img
          src="AquaCare-logo.png"
          className="text-2xl font-bold relative p-1 bg-back"
        />

    
    

    </div>
    
  )
}

export default User