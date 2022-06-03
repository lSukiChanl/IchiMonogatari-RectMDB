import React, { useEffect, useState } from 'react'
import * as API from '../Servicios/Peticiones'
import { Link } from 'react-router-dom'

export default function Inicio() {

    const [ListaCompleta, Series] = useState([]);

    useEffect(() => {
        API.PedirListaCompleta().then(Series);
    }, []);

  return (
    <div>  
        <div className="Tarjetas">
            <div className="Condicion">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {ListaCompleta.map((Serie) =>(
                        <div key={Serie.url}> 
                            <div className="" >
                                <div className="card BrilloOscuro" >
                                    <Link className="bg-image hover-overlay ripple Tarjeta" data-mdb-ripple-color="light" to={"/"+Serie.url}>
                                        <img src={Serie.imggif} className="img-fluid Imagen" />
                                        <div className="mask"></div>
                                    </Link>
                                    <div className="card-body">
                                        <h5 className="Nombre"> { Serie.nombre } </h5>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <small className="text-muted Extra"> { Serie.categorias } | { Serie.resolucion } </small>
                                            <small className="text-muted Extra"> { Serie.fechasubida } </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}