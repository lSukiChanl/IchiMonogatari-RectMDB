import React, { useEffect, useState } from 'react'
import * as API from '../Servicios/Peticiones'
import { Link } from 'react-router-dom'

export default function Animes() {

    const [ListaAnimes, Animes] = useState([]);

    useEffect(() => {
        API.PedirListaAnimes().then(Animes);
    }, []);

  return (
    <div id='FondoTarjetas' id="CuerpoPagina">       
        <div className="Tarjetas">
            <div className="Condicion">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {ListaAnimes.map((Anime) =>(
                        <div key={Anime.url}> 
                            <div className="" >
                                <div className="card BrilloOscuro" >
                                    <Link className="bg-image hover-overlay ripple Tarjeta" data-mdb-ripple-color="light" to={"/"+Anime.url}>
                                        <img src={Anime.imggif} className="img-fluid Imagen" />
                                        <div className="mask"></div>
                                    </Link>
                                    <div className="card-body">
                                        <h5 className="Nombre"> { Anime.nombre } </h5>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <small className="text-muted Extra"> { Anime.categorias } | { Anime.resolucion } </small>
                                            <small className="text-muted Extra"> { Anime.fechasubida } </small>
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