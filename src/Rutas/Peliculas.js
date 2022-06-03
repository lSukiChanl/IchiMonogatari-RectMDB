import React, { useEffect, useState } from 'react'
import * as API from '../Servicios/Peticiones'
import { Link } from 'react-router-dom'

export default function Peliculas() {

    const [ListaPeliculas, Peliculas] = useState([]);

    useEffect(() => {
        API.PedirListaPeliculas().then(Peliculas);
    }, []);

    return (
        <div>       
            <div className="FondoTarjetas" id="CuerpoPagina">
                <div className="Condicion">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {ListaPeliculas.map((Pelicula) =>(
                            <div key={Pelicula.url}> 
                                <div className="" >
                                    <div className="card BrilloOscuro">
                                        <Link className="bg-image hover-overlay ripple Tarjeta" data-mdb-ripple-color="light" to={"/"+Pelicula.url}>
                                            <img src={Pelicula.imggif} className="img-fluid Imagen" />
                                            <div className="mask"></div>
                                        </Link>
                                        <div className="card-body">
                                            <h5 className="Nombre"> { Pelicula.nombre } </h5>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <small className="text-muted Extra"> { Pelicula.categorias } | { Pelicula.resolucion } </small>
                                                <small className="text-muted Extra"> { Pelicula.fechasubida } </small>
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