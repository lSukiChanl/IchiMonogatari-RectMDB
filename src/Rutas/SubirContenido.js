import { MDBCarousel,MDBCarouselInner,MDBCarouselItem,MDBCarouselElement,MDBCarouselCaption } from 'mdb-react-ui-kit';
import ImagenDeFondo from '../Assets/ImgFondo.png'
import ImagenDePortada from '../Assets/ImgPortada.png'
import ImagenDeOpening from '../Assets/ImgCaptura1.png'
import ImagenDeCapitulo from '../Assets/ImgCaptura2.png'
import ImagenDeEnding from '../Assets/ImgCaptura3.png'
import ImagenFolder from '../Assets/ImgFolder.png'


function VerContenido (){

    var ImagendeFondo = ''

    var Usuario = document.getElementById("User").value;
    var Password = document.getElementById("Password").value;

    if (Usuario != '1' && Password != '2'){
        document.getElementById("LogIn").style.display = 'none';
        document.getElementById("ContenidoSubir").style.display = '';
    }else{
        var Mensaje = document.getElementById("snackbar");
        Mensaje.className = "show";
        setTimeout(function(){ Mensaje.className = Mensaje.className.replace("show", ""); }, 3000);
    }
}

function CambiarIMGFondo (){
    var ArchivoCargado = document.getElementById("NuevaIMGFondo").files;

    if (ArchivoCargado.length > 0) {
        var fileToLoad = ArchivoCargado[0];
        var fileReader = new FileReader();
        fileReader.onload = function(fileLoadedEvent) {
          var srcData = fileLoadedEvent.target.result;
          var imagen = document.getElementById("FondoSubirContenido");
            imagen.style.backgroundImage = "url("+srcData+")";
        }
        fileReader.readAsDataURL(fileToLoad);
    }
}

function CambiarIMGPortada (){
    var ArchivoCargado = document.getElementById("NuevaIMGPortada").files;
    
    if (ArchivoCargado.length > 0) {
        var fileToLoad = ArchivoCargado[0];
        var fileReader = new FileReader();
        fileReader.onload = function(fileLoadedEvent) {
          var srcData = fileLoadedEvent.target.result; // <--- data: base64
          document.getElementById("IMGPortada").src = srcData;
        }
        fileReader.readAsDataURL(fileToLoad);
    }
}

function CambiarIMGOpening (){
    var ArchivoCargado = document.getElementById("NuevaIMGOpening").files;
    
    if (ArchivoCargado.length > 0) {
        var fileToLoad = ArchivoCargado[0];
        var fileReader = new FileReader();
        fileReader.onload = function(fileLoadedEvent) {
          var srcData = fileLoadedEvent.target.result; // <--- data: base64
          document.getElementById("IMGOpening").src = srcData;
        }
        fileReader.readAsDataURL(fileToLoad);
    }
}

function CambiarIMGCapitulo (){
    var ArchivoCargado = document.getElementById("NuevaIMGCapitulo").files;
    
    if (ArchivoCargado.length > 0) {
        var fileToLoad = ArchivoCargado[0];
        var fileReader = new FileReader();
        fileReader.onload = function(fileLoadedEvent) {
          var srcData = fileLoadedEvent.target.result; // <--- data: base64
          document.getElementById("IMGCapitulo").src = srcData;
        }
        fileReader.readAsDataURL(fileToLoad);
    }
}

function CambiarIMGEnding (){
    var ArchivoCargado = document.getElementById("NuevaIMGEnding").files;
    
    if (ArchivoCargado.length > 0) {
        var fileToLoad = ArchivoCargado[0];
        var fileReader = new FileReader();
        fileReader.onload = function(fileLoadedEvent) {
          var srcData = fileLoadedEvent.target.result; // <--- data: base64
          document.getElementById("IMGEnding").src = srcData;
        }
        fileReader.readAsDataURL(fileToLoad);
    }
}

function CambiarIMGGif (){
    var ArchivoCargado = document.getElementById("NuevaIMGGif").files;
    
    if (ArchivoCargado.length > 0) {
        var fileToLoad = ArchivoCargado[0];
        var fileReader = new FileReader();
        fileReader.onload = function(fileLoadedEvent) {
          var srcData = fileLoadedEvent.target.result; // <--- data: base64
          document.getElementById("IMGGif").src = srcData;
        }
        fileReader.readAsDataURL(fileToLoad);
    }
}

function CambiarIMGFolder (){
    var ArchivoCargado = document.getElementById("NuevaIMGFolder").files;
    
    if (ArchivoCargado.length > 0) {
        var fileToLoad = ArchivoCargado[0];
        var fileReader = new FileReader();
        fileReader.onload = function(fileLoadedEvent) {
          var srcData = fileLoadedEvent.target.result; // <--- data: base64
          document.getElementById("IMGFolder").src = srcData;
        }
        fileReader.readAsDataURL(fileToLoad);
    }
}

export default function SubirContenido() {

    return (
        <div>
            <div className="album py-5" id="LogIn" >
                <div className="container">
                    <br/> <br/> 
                    <h2 className="featurette-heading LogInTituloOscuro">❤ Nombre de Usuario ❤</h2>
                    <input className="lead col-12 LogInInputOscuro" id="User" placeholder="❤ Nombre de Usuario ❤"/> 
                    <br/> <br/> <br/> <br/> <br/>
                    <h2 className="featurette-heading LogInTituloOscuro" >❤ Contraseña ❤</h2>
                    <input className="lead col-12 LogInInputOscuro" id="Password"  placeholder="❤ Contraseña ❤"/> 
                    <br/> <br/><br/> <br/><br/> <br/>
                    <h2 className="featurette-heading LogInBotonOscuro" onClick={VerContenido} >❤ Contraseña ❤</h2>
                </div>
            </div>
            
            <div id="ContenidoSubir" style={{ display : 'none' }}>
                <div className="album py-0" id="FondoSubirContenido" style={{backgroundImage: `url(`+ImagenDeFondo+`)`}}>
                    <div className="container Datos">
                        <br/>
                        <hr className="featurette-divider"/>
                        <br/><br/><br/>
                        <select className="CategoriaSelect" name="Categoria" id="Categoria">
                            <option value="Anime">Anime</option>
                            <option value="Pelicula">Pelicula</option>
                            <option value="Hentai">Hentai</option>
                        </select>
                <br/><br/>
                        <input className="Titulo" placeholder="Horimiya"/> <br/><br/><br/>
                        <div className="row">
                            <div className="col col-4 ContenedorImagen">
                                <div >
                                    <img className="Imagen" id="IMGPortada" src={ImagenDePortada} />
                                </div>
                            </div>
                            <div className="col col-7 ContenedorDescripcion"> 
                                <textarea className="DescripcionSub" placeholder="En la superficie, la idea de que Kyouko Hori e Izumi Miyamura se llevaran bien sería lo último en la mente de las personas. Después de todo, Hori tiene una combinación perfecta de belleza e inteligencia, mientras que Miyamura parece manso y distante con sus compañeros de clase. Sin embargo, un encuentro fatídico entre los dos deja al descubierto su yo oculto. Aunque es popular en la escuela, Hori tiene poco tiempo para socializar con sus amigos debido a las tareas del hogar. Por otro lado, Miyamura vive bajo las narices de sus compañeros, su cuerpo tiene tatuajes secretos y piercings que lo hacen parecer un delincuente amable.Teniendo personalidades opuestas pero compartiendo extrañas similitudes, los dos se hacen amigos rápidamente y, a menudo, pasan tiempo juntos en la casa de Hori. Cuando ambos emergen de sus caparazones, comparten un lado de sí mismos escondido del mundo exterior."></textarea>
                            </div>
                        </div>
                
                        <br/><br/><br/>
                
                        
                            <input className="Titulo" value="Informacion del Anime" disabled/> <br/><br/>
                            <input className="Informacion" placeholder="Nombre : Horimiya" value=""disabled /><br/><br/>
                            <input className="Informacion" placeholder="Cantidad de Episodios : 13"/><br/><br/>
                            <div className="row">
                                <div className="col col-6 ">
                                    <input className="Fecha1" placeholder="Emision: 2021-04-04 Al 2021-04-04" />
                                </div>
                                <div className="col col-6 ">
                                    <input className="Fecha2" placeholder="Emision: 2021-04-04 Al 2021-04-04" />
                                </div>
                            </div><br/>
                            <input  className="Informacion" placeholder="Generos : Slice of Life, Comedy, Romance, School, Shounen" /><br/><br/>
                            <input  className="Informacion" placeholder="Calificacion : 8.22" />
                            <div >
                                <br/><input className="Informacion" placeholder="Censura : No" /> 
                            </div>       
                            <br/><br/><br/>
                            <input className="Titulo" value="Capturas de Pantalla" disabled/> <br/><br/>
                                <div className="GaleriaFIN">
                                    <div className="col col-md-8 Contenedor">

                                        <MDBCarousel showControls showIndicators fade>
                                            <MDBCarouselInner>
                                                <MDBCarouselItem className='active'>
                                                    <MDBCarouselElement id="IMGOpening" src={ImagenDeOpening} alt='...' />
                                                    <MDBCarouselCaption>
                                                        <h5 className="CapturasInfo">Opening</h5>
                                                    </MDBCarouselCaption>
                                                </MDBCarouselItem>
                                                <MDBCarouselItem>
                                                    <MDBCarouselElement id="IMGCapitulo" src={ImagenDeCapitulo} alt='...' />
                                                    <MDBCarouselCaption>
                                                        <h5 className="CapturasInfo">Episodio</h5>
                                                    </MDBCarouselCaption>
                                                </MDBCarouselItem>
                                                <MDBCarouselItem>
                                                    <MDBCarouselElement id="IMGEnding" src={ImagenDeEnding} alt='...' />
                                                    <MDBCarouselCaption>
                                                        <h5 className="CapturasInfo">Ending</h5>
                                                    </MDBCarouselCaption>
                                                </MDBCarouselItem>
                                            </MDBCarouselInner>
                                        </MDBCarousel>

                                    </div>
                                </div>
                            <br/><br/><br/>
                            <input className="Titulo" value="Datos de la Descarga" disabled/> <br/><br/>
                            <input className="Informacion" placeholder="Calidad : 1080p"/> <br/><br/>
                            <input className="Informacion" placeholder="Tipo de Archivo : MKV"/> <br/><br/>
                            <input className="Informacion" placeholder="Karaoke : Opening y Ending"/> <br/><br/>
                
                            <input className="Informacion" disabled/> <br/><br/>
                            <input className="Informacion" value="Contraseña : www.IchiMonogatari.com" disabled/> <br/><br/>
                            <br/><br/><br/>
                            <div className="ContenedorFolder">
                                <a  target="_blank"> 
                                    <div >
                                        <img className="d-block w-100" alt=""/>
                                    </div>
                    
                                    <div>
                                        <img className="Folder" id="IMGFolder" src={ImagenFolder}/>
                                    </div>
                                </a>
                            </div>
                
                            <br/> <br/>
                            <input className="Informacion" placeholder="URL : https://ichimonogatari-lsukichanl.vercel.app/Horimiya"/> <br/><br/>
                        <br/><br/><br/>
                        <hr className="featurette-divider"/>
                
                        <div className="row">
                            <div className="col col-3">
                                <input className="Informacion" value="Portada" disabled/>
                                <input type="file" id="NuevaIMGPortada" onChange={CambiarIMGPortada}/>
                            </div>
                            <div className="col col-3">
                                <input className="Informacion" value="Opening" disabled/>
                                <input type="file" id="NuevaIMGOpening" onChange={CambiarIMGOpening}/>
                            </div>
                            <div className="col col-3">
                                <input className="Informacion" value="Capitulo" disabled/>
                                <input type="file" id="NuevaIMGCapitulo" onChange={CambiarIMGCapitulo}/>
                            </div>
                            <div className="col col-3">
                                <input className="Informacion" value="Ending" disabled/>
                                <input type="file" id="NuevaIMGEnding" onChange={CambiarIMGEnding}/>
                            </div>
                
                        </div>
                        <br/><br/><br/><br/><br/>
                        <div className="row">
                            <div className="col col-4">
                                <input className="Informacion" value="Fondo"  disabled/>
                                <input type="file" id="NuevaIMGFondo" onChange={CambiarIMGFondo}/>
                            </div>
                
                            <div className="col col-4">
                                <input className="Informacion" value="GIF" disabled/>
                                <input type="file" id="NuevaIMGGif" onChange={CambiarIMGGif}/>
                            </div>
                
                            <div className="col col-4">
                                <input className="Informacion" value="Folder" disabled/>
                                <input type="file" id="NuevaIMGFolder" onChange={CambiarIMGFolder}/>
                            </div>
                        </div>
                        <br/><br/><br/>
                
                
                        <div className="Condicion">
                            <div className="row-cols-md-3 Columnas">
                            <div className="PreviewGif">
                                    <div className="card BrilloClaro ">
                                    <div className="bg-image hover-overlay ripple Tarjeta" data-mdb-ripple-color="light">
                                        <div>
                                            <img className="d-block w-100" id="IMGGif" alt=""/>
                                        </div>
                                        <div className="mask"></div>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="Nombre">  </h5>
                                        <div className="d-flex justify-content-between align-items-center">
                                        <small className="text-muted Extra">  </small>
                                        <small className="text-muted Extra">  </small>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                
                        <br/><br/><br/>
                            <div className="Enviar">
                                <button type="button" className="btn btn-outline-secondary">
                                    Enviar
                                </button>
                            </div>
                
                        <hr className="featurette-divider"/>
                        <br/>
                    </div>
                </div>
            </div>
            <div id="snackbar"> Error : Datos Incorrectos </div>
        </div>
    )
}