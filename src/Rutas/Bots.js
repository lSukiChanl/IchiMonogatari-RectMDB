import IMGDISCORD from '../Assets/DiscordC.png'
import IMGMENHERA from '../Assets/MenheraC.png'
import IMGLITTLE from '../Assets/MenheraLittleGirlC.png'
import IMDCAFE from '../Assets/CafecitoC.png'

export default function Bots() {
    return (
        <div id="PaginaBots">
            <hr className="featurette-divider"/>

            <div className="row featurette">
                <div className="col-md-7 ">
                    <h2 className="featurette-heading TituloOscuro" >❤ Unete a Nuestro Discord ❤</h2>
                    <p className="lead SubtituloOscuroA" >Conoce personas con tus mismos intereses, enterate de las ultimas actualizaciones de IchiMonogatari, Realiza pedidos de animes y los subire en brevedad si los tengo a mi disposicion.</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <button type="button" className="btn btn-lg px-4 gap-3 btn-DiscordOscuro" >Unirte</button> 
                    </div><br/>
                </div>
                <div className="col-md-5 ">
                    <div className="Discord" style={{ backgroundImage:`url(${IMGDISCORD})` }}> </div>
                </div>
            </div>

            <hr className="featurette-divider"/>

            <div className="row featurette">
                <div className="col-md-7">
                    <h2 className="featurette-heading TituloOscuro" >❤ Menhera-Chan ❤ </h2>
                    <p className="lead SubtituloOscuroAM" >Con Menhera-Chan podras interactuar en el servidor de discord o puedes invitarlos a tu propio servidor los bots tienen funciones de (Interacion, Reacciones,  Reproduccion de Musica y otros Secretos)</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <button type="button" className="btn btn-lg px-4 gap-3 btn-MenheraOscuro"  >Invitar</button>
                        <button type="button" className="btn btn-lg px-4 btn-MenheraOscuro-secondary" >Comandos</button>
                    </div><br/>
                </div>
                <div className="col-md-5 ">
                    <div className="Menhera" style={{ backgroundImage:`url(${IMGMENHERA})` }}> </div>
                </div>
            </div>

            <hr className="featurette-divider"/>

            <div className="row featurette">
                <div className="col-md-7">
                    <h2 className="featurette-heading TituloOscuro" >❤ Menhera Little Girl ❤</h2>
                    <p className="lead SubtituloOscuroA" >Con Menhera Little Girl podras interactuar en el servidor de discord o puedes invitarlos a tu propio servidor los bots tienen funciones de (Interacion, Reacciones,  Reproduccion de Musica y otros Secretos)</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <button type="button" className="btn btn-MenheraLG btn-lg px-4 gap-3 btn-MenheraLGOscuro"  >Invitar</button>
                        <button type="button" className="btn btn-MenheraLG-secondary btn-lg px-4 btn-MenheraLGOscuro-secondary"  >Comandos</button>
                    </div><br/>
                </div>
                <div className="col-md-5 ">
                    <div className="MenheraLG" style={{ backgroundImage:`url(${IMGLITTLE})` }}> </div>
                </div>
            </div>

            <hr className="featurette-divider"/>

            <div className="row featurette">
                <div className="col-md-7">
                    <h2 className="featurette-heading TituloOscuro" >❤Apoyame Donandome un Cafecito❤</h2>
                    <p className="lead SubtituloOscuroAM" >Si te gusta mi trabajo, por favor apoyame con un cafecito, para poder seguir manteniendo el Sitio Web y seguir subiendo contenido todos los dias.</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <button type="button" className="btn btn-lg px-4 gap-3 btn-CafeOscuro" >Donar un Cafecito</button>
                    </div><br/>
                </div>
                <div className="col-md-5 ">
                    <div className="Cafecito" style={{ backgroundImage:`url(${IMDCAFE})` }}>  </div>
                </div>
            </div>

            <hr className="featurette-divider"/>
        </div>
    )
}