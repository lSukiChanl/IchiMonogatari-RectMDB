import React, { useEffect, useState } from 'react'
import * as API from '../Servicios/Peticiones'
import { Link, useParams } from 'react-router-dom'

export default function Busqueda() {

    const { id } = useParams();
    const [ListaBusqueda, Busquedas] = useState([]);

    useEffect(() => {
        console.log(id);
        API.PedirBusqueda(id).then(Busquedas);
    }, [id]);
    
    return (
        <div>       
            <div className="FondoTarjetas" id="CuerpoPagina">
                <div className="Condicion">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {ListaBusqueda.map((Busqueda) =>(
                            <div key={Busqueda.url}> 
                                <div className="" >
                                    <div className="card BrilloOscuro" >
                                        <Link className="bg-image hover-overlay ripple Tarjeta" data-mdb-ripple-color="light" to={"/"+Busqueda.url}>
                                            <img src={Busqueda.imggif} className="img-fluid Imagen" />
                                            <div className="mask"></div>
                                        </Link>
                                        <div className="card-body">
                                            <h5 className="Nombre"> { Busqueda.nombre } </h5>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <small className="text-muted Extra"> { Busqueda.categorias } | { Busqueda.resolucion } </small>
                                                <small className="text-muted Extra"> { Busqueda.fechasubida } </small>
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
