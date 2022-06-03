import React, { useEffect, useState } from 'react'
import * as API from '../Servicios/Peticiones'
import { Link, useParams } from 'react-router-dom'
import { MDBCarousel,MDBCarouselInner,MDBCarouselItem,MDBCarouselElement,MDBCarouselCaption } from 'mdb-react-ui-kit';
import Loading from '../Assets/Loading.png'

export default function DatoAnime() {

    const { id } = useParams();
    const DirAnime = "anime/" + id;
    const [DatosAnime, Datos] = useState([]);

    useEffect(() => {
        API.BusquedaAnime(DirAnime).then(Datos);
    }, []);

    function DescripcionAnime() {
        return {
           __html: DatosAnime[0].descripcion
        };
    };

    if(DatosAnime.length == 0){
        return (
            <div className="album py-5 bg-dark">
                <div className="container Prueba">
                    <h2 className="featurette-heading TituloOscuro">❤   Cargando Contenido   ❤</h2>
                    <img className="BannerIMGLoading" src={Loading} />
                </div>
            </div>
        )
    }

    return (
        <div>
            {DatosAnime.map((Dato) =>(
                <div key={Dato.url}> 
                    <div>
                        <div className="" >
                        <div className="album py-0 ImagenSerie" style={{backgroundImage: `url(${Dato.imgfondo})`}}>
                            <div className="container Datos">
                            <br/>
                            <hr className="featurette-divider"/>
                            <br/><br/><br/>
                            <div className="row">
                                <p className="TituloPrincipal"> {Dato.nombre} </p> 
                                <div className="col col-4 ContenedorImagen">  
                                    <img className="ImagenPortada" src={Dato.imgportada}/>
                                </div>
                                <div className="col col-7 ContenedorDescripcion"> 
                                    <p className="DescripcionSub " dangerouslySetInnerHTML={DescripcionAnime()} />
                                </div>
                            </div>
                            <br/><br/><br/>
                            <p className="TituloSerie"> Informacion del Anime </p>
                            <p className="Informacion"> Nombre : {Dato.nombre} </p>
                            <p className="Informacion"> Cantidad de Episodios : {Dato.numerodecapitulos} </p>
                            <p className="Informacion"> Emision: {Dato.fechainicioemision} Al {Dato.fechafinemision} </p>
                            <p className="Informacion"> Generos : {Dato.generos} </p>
                            <p className="Informacion"> Calificacion : {Dato.puntuacion} </p>       
                            <br/><br/><br/>
                                <p className="TituloSerie"> Capturas de Pantalla </p>
                                <div className="GaleriaFIN">
                                    <div className="col col-md-8 Contenedor">
                                        <MDBCarousel showControls showIndicators fade>
                                            <MDBCarouselInner>
                                                <MDBCarouselItem className='active'>
                                                    <MDBCarouselElement src={Dato.imgopening} alt='...' />
                                                    <MDBCarouselCaption>
                                                        <h5 className="CapturasInfo">Opening</h5>
                                                    </MDBCarouselCaption>
                                                </MDBCarouselItem>
                                                <MDBCarouselItem>
                                                    <MDBCarouselElement src={Dato.imgcapitulo} alt='...' />
                                                    <MDBCarouselCaption>
                                                        <h5 className="CapturasInfo">Episodio</h5>
                                                    </MDBCarouselCaption>
                                                </MDBCarouselItem>
                                                <MDBCarouselItem>
                                                    <MDBCarouselElement src={Dato.imgending} alt='...' />
                                                    <MDBCarouselCaption>
                                                        <h5 className="CapturasInfo">Ending</h5>
                                                    </MDBCarouselCaption>
                                                </MDBCarouselItem>
                                            </MDBCarouselInner>
                                        </MDBCarousel>
                                    </div>
                                    </div>
                                    <br/><br/><br/>
                                    <p className="TituloSerie"> Datos de la Descarga </p>
                                    <p className="Informacion"> Calidad : {Dato.resolucion} </p>
                                    <p className="Informacion"> Tipo de Archivo : {Dato.extension} </p>
                                    <p className="Informacion"> Karaoke : {Dato.karaoke} </p>
                                    <p className="Informacion"> Uploader : {Dato.uploader} </p> 
                                    <p className="Informacion"> Contraseña : www.IchiMonogatari.com </p>
                                    <br/><br/><br/>
                                    <div className="ContenedorFolder">
                                        <a href={Dato.linkdescarga}  target="_blank"> 
                                            <img className="Folder" src={Dato.imgfolder} />
                                            <br/>
                                            <p className="Descarga"> Descargar </p>
                                        </a>
                                    </div>
                            <br/><br/><br/>
                            <hr className="featurette-divider"/>
                            <br/>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
