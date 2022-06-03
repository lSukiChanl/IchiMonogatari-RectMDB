import React from 'react'
import Cry from '../Assets/E404.png'

export default function E404() {
    return (
        <div className="album py-5 bg-dark">
            <div className="container Prueba">
            
                <h1 className="featurette-heading TituloOscuro">❤ ERROR 404 ❤</h1>
                    <img className="BannerIMGSad" src={Cry} />
                <h2 className="featurette-heading TituloOscuro">❤ PAGINA NO ENCONTRADA ❤</h2>

            </div>
        </div>
    )
}
