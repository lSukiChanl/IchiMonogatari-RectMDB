import React, { useEffect, useState } from 'react'
import * as API from '../Servicios/Peticiones'
import { Link } from 'react-router-dom'

export default function Hentais() {

    const [ListaHentais, Hentais] = useState([]);

    

    useEffect(() => {
        API.PedirListaHentais().then(Hentais);
    }, []);

    return (
        <div>       
            <div className="Tarjetas">
                <div className="Condicion">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {ListaHentais.map((Hentai) =>(
                            <div key={Hentai.url}> 
                                <div className="" >
                                    <div className="card BrilloOscuro">
                                        <Link className="bg-image hover-overlay ripple Tarjeta" data-mdb-ripple-color="light" to={"/"+Hentai.url}>
                                            <img src={Hentai.imggif} className="img-fluid Imagen" />
                                            <div className="mask"></div>
                                        </Link>
                                        <div className="card-body">
                                            <h5 className="Nombre"> { Hentai.nombre } </h5>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <small className="text-muted Extra"> { Hentai.categorias } | { Hentai.resolucion } </small>
                                                <small className="text-muted Extra"> { Hentai.fechasubida } </small>
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
