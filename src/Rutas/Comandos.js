import React, { useState } from 'react'

export default function Comandos () {

    const [ComandosHentai, setComandosHentai] = useState(false);
    const [BotonHentai, setBotonHentai] = useState(true);
    
    const MayorEdad = () => {
        setComandosHentai(current => !current);
        setBotonHentai(current => !current);
    }

    return (
    
        <div className="album py-5">
            <div className="container">
                <hr className="featurette-divider"/>
                    <h2 className="featurette-heading TituloOscuro"  >❤ Comandos de Menhera-Chan y Menhera Little Girl ❤</h2>
                    <p className="lead SubtituloOscuro" > Ohayo, minna-san! ~~ A continuación les voy a describir cada una de mis funciones detalladamente. Presten atención, onegai-shimasu  ~~</p>
                <hr className="featurette-divider"/>
                    <h2 className="featurette-heading TituloOscuro"  >❤ Comandos Principales ❤</h2>
                    <div className="row">
                        <div className="col-md-auto PrefixOscuro PrefijoParaCambiar" id="Prefix"> +/- </div>
                        <div className="col col-lg-2 ComandoOscuro" > Help </div>
                        <div className="col-md-auto PrefixOscuro" id="Prefix"> = </div>
                        <div className="col RespuestaOscuro" > Menhera Mostrara una lista de sus comandos </div>
                    </div>
                    <div className="row">
                        <div className="col-md-auto PrefixOscuro" > +/- </div>
                        <div className="col col-lg-2 ComandoOscuro" > Say </div>
                        <div className="col-md-auto PrefixOscuro" > = </div>
                        <div className="col RespuestaOscuro" > Menhera Escribira por ti y borrara tu mensaje escrito </div>
                    </div>
                    <div className="row">
                        <div className="col-md-auto PrefixOscuro" > +/- </div>
                        <div className="col col-lg-2 ComandoOscuro" > Info </div>
                        <div className="col-md-auto PrefixOscuro" > = </div>
                        <div className="col RespuestaOscuro" > Menhera Mostrara informacion acerca del usuario proporcionado </div>
                    </div>
                    <div className="row">
                        <div className="col-md-auto PrefixOscuro" > +/- </div>
                        <div className="col col-lg-2 ComandoOscuro" > Avatar </div>
                        <div className="col-md-auto PrefixOscuro" > = </div>
                        <div className="col RespuestaOscuro" > Menhera Mostrara el Avatar del usuario proporcionado </div>
                    </div>
                    <div className="row">
                        <div className="col-md-auto PrefixOscuro" > +/- </div>
                        <div className="col col-lg-2 ComandoOscuro" > RadioAnime </div>
                        <div className="col-md-auto PrefixOscuro" > = </div>
                        <div className="col RespuestaOscuro" > Menhera Comenzara  a reproducir una Radio Anime disponible las 24 horas del dia </div>
                    </div>
                    <div className="row">
                        <div className="col-md-auto PrefixOscuro" > +/- </div>
                        <div className="col col-lg-2 ComandoOscuro" > Privado </div>
                        <div className="col-md-auto PrefixOscuro" > = </div>
                        <div className="col RespuestaOscuro" > Comando Sorpresa </div>
                    </div>
                    <div className="row">
                        <div className="col-md-auto PrefixOscuro" > +/- </div>
                        <div className="col col-lg-2 ComandoOscuro" > Menhera </div>
                        <div className="col-md-auto PrefixOscuro" > = </div>
                        <div className="col RespuestaOscuro" > Sticker aleatorio de menhera </div>
                    </div>
                    <div className="row">
                        <div className="col-md-auto PrefixOscuro" > +/- </div>
                        <div className="col col-lg-2 ComandoOscuro" > Meme </div>
                        <div className="col-md-auto PrefixOscuro" > = </div>
                        <div className="col RespuestaOscuro" > Meme Aleatorio </div>
                    </div>
                    <div className="row">
                        <div className="col-md-auto PrefixOscuro" > +/- </div>
                        <div className="col col-lg-2 ComandoOscuro" > URL  </div>
                        <div className="col-md-auto PrefixOscuro" > = </div>
                        <div className="col RespuestaOscuro" > Menhera pondra una imagen por ti en el canal, aunque no sea posible enviar imagenes en el canal </div>
                    </div>
                    <div className="row">
                        <div className="col-md-auto PrefixOscuro" > +/- </div>
                        <div className="col col-lg-2 ComandoOscuro" > Server </div>
                        <div className="col-md-auto PrefixOscuro" > = </div>
                        <div className="col RespuestaOscuro" >Menhera Muestra informacion acerca del nuestro servidor oficial</div>
                    </div>
                    <div className="row">
                        <div className="col-md-auto PrefixOscuro" > +/- </div>
                        <div className="col col-lg-2 ComandoOscuro" > Donate </div>
                        <div className="col-md-auto PrefixOscuro" > = </div>
                        <div className="col RespuestaOscuro" > Apoya a Menhera con este Comando </div>
                    </div>
                    <div className="row">
                        <div className="col-md-auto PrefixOscuro" > +/- </div>
                        <div className="col col-lg-2 ComandoOscuro" > Vote </div>
                        <div className="col-md-auto PrefixOscuro" > = </div>
                        <div className="col RespuestaOscuro" > Vota por Menhera con este Comando </div>
                    </div>
                <hr className="featurette-divider"/>
                    <h2 className="featurette-heading TituloOscuro" >❤ Comandos de Interaccion ❤</h2>
                    <div className="row">
                        <div className="col-md-auto PrefixOscuro" > +/- </div>
                        <div className="col RespuestaOscuro" > Baka, BirthDay, Bite, Cheeks, Clap, Cuddle, Feed, Haha, HandHolding, Hi, HighFive, Hug, Kick, Kill, Kiss, Laugh, Lick, Love, Pat, Poke, Punch, Revive, Scared, Slap, Spit, Splas, Spray, Spy, Thanks, Tickle, Wasted </div>
                    </div>
                <hr className="featurette-divider"/>
                    <h2 className="featurette-heading TituloOscuro" >❤ Comandos de Interaccion ❤</h2>
                    <div className="row">
                        <div className="col-md-auto PrefixOscuro" > +/- </div>
                        <div className="col RespuestaOscuro" > Angry, BangHead, Bluch, Boom, Bored, Confused, Cook, Cry, Dab, Dance, Disgust, Facepalm, Fail, Nope, Pout, Pray, Relax, Run, Sad, Shrug, Sick, Sing, Sip, Sleep, Smile, Smug, Suicide, Teehee, Think, Tired, Vomit, Wow, WTF </div>
                    </div>
                <hr className="featurette-divider"/>
                    <h2 className="featurette-heading TituloOscuro"  >❤ Comandos de Extras ❤</h2>
                    <div className="row">
                        <div className="col-md-auto PrefixOscuro" > +/- </div>
                        <div className="col RespuestaOscuro" > Dandere, Dere, JPose, Kuudere, Loli, NekoGirl, Secret, Shota, Trap, Tsundere, Yandere, Yaoi, Yuri </div>
                    </div>
                <hr className="featurette-divider"/>
                    <h2 className="featurette-heading TituloOscuro"  >❤ Comandos con Stickers de Menhera-Chan (Dog) ❤</h2>
                    <div className="row">
                        <div className="col-md-auto PrefixOscuro" > +/- </div>
                        <div className="col RespuestaOscuro" > Angry, Blush, Bow, Bye, Chesse, Cry, Depress, Die, Excited, Furious, Glad, Grim, Haha, Happy, Hee, Hi, Jojo, Kiss, Like, Love, Mmm, Nervous, OMG, Peace, Really, Sad, Shame, Sleep, Smile, Sorry, Spy, You </div>
                    </div>
                <hr className="featurette-divider"/>
                    <h2 className="featurette-heading TituloOscuro"  >❤ Comandos con Stickers de Extras ❤</h2>
                    <div className="row">
                        <div className="col-md-auto PrefixOscuro" > +/- </div>
                        <div className="col RespuestaOscuro" > Crisis, No, Seen, Think, Yes </div>
                    </div>
                <hr className="featurette-divider"/>
                    <h2 className="featurette-heading TituloOscuro"  >❤ Comandos de Musica ❤</h2>
                    <div className="row">
                        <div className="col-md-auto PrefixOscuro" > +/- </div>
                        <div className="col col-lg-2 ComandoOscuro" > RadioAnime </div>
                        <div className="col-md-auto PrefixOscuro" > = </div>
                        <div className="col RespuestaOscuro" > Menhera Comenzara  a reproducir una Radio Anime disponible las 24 horas del dia </div>
                    </div>
                    <div className="row">
                        <div className="col-md-auto PrefixOscuro" > +/- </div>
                        <div className="col col-lg-2 ComandoOscuro" > Play </div>
                        <div className="col-md-auto PrefixOscuro" > = </div>
                        <div className="col RespuestaOscuro" > Menhera Comenzara a reproducir un video de youtube </div>
                    </div>
                    <div className="row">
                        <div className="col-md-auto PrefixOscuro" > +/- </div>
                        <div className="col col-lg-2 ComandoOscuro" > Skip </div>
                        <div className="col-md-auto PrefixOscuro" > = </div>
                        <div className="col RespuestaOscuro" > Sirve para salta de cancion </div>
                    </div>
                    <div className="row">
                        <div className="col-md-auto PrefixOscuro" > +/- </div>
                        <div className="col col-lg-2 ComandoOscuro" > Queue </div>
                        <div className="col-md-auto PrefixOscuro" > = </div>
                        <div className="col RespuestaOscuro" > Menhera Mostrara la cola de reproduccion </div>
                    </div>
                    <div className="row">
                        <div className="col-md-auto PrefixOscuro" > +/- </div>
                        <div className="col col-lg-2 ComandoOscuro" > Stop </div>
                        <div className="col-md-auto PrefixOscuro" > = </div>
                        <div className="col RespuestaOscuro" > Menhera Detendra la reproduccion </div>
                    </div>
                    <div className="row">
                        <div className="col-md-auto PrefixOscuro" > +/- </div>
                        <div className="col col-lg-2 ComandoOscuro" > Volume </div>
                        <div className="col-md-auto PrefixOscuro" > = </div>
                        <div className="col RespuestaOscuro" > Subir o Bajar el volumen de Menhera	 </div>
                    </div>
                    <div className="row">
                        <div className="col-md-auto PrefixOscuro" > +/- </div>
                        <div className="col col-lg-2 ComandoOscuro" > Reset </div>
                        <div className="col-md-auto PrefixOscuro" > = </div>
                        <div className="col RespuestaOscuro" > Si tienes problema con la reproduccion utilizar este comando </div>
                    </div>
                <hr className="featurette-divider"/>
                    <h2 className="featurette-heading TituloOscuro"  >❤ Comandos de Administracion ❤</h2>
                    <div className="row">
                        <div className="col-md-auto PrefixOscuro" > +/- </div>
                        <div className="col col-lg-2 ComandoOscuro" > Clear </div>
                        <div className="col-md-auto PrefixOscuro" > = </div>
                        <div className="col RespuestaOscuro" > Comando para Borrar cierta cantidad de mensajes </div>
                    </div>
                    <div className="row">
                        <div className="col-md-auto PrefixOscuro" > +/- </div>
                        <div className="col col-lg-2 ComandoOscuro" > SetPrefix </div>
                        <div className="col-md-auto PrefixOscuro" > = </div>
                        <div className="col RespuestaOscuro" > Comando para cambiar el prefijo que utilizan los bots por defecto es (+) para Menhera-Chan y  (-) para Menhera LIttle Girl </div>
                    </div>
                <hr className="featurette-divider"/>
                    <h2 className="featurette-heading TituloOscuro"  >❤ Comandos NSFW ❤</h2>
                    <div>
                        <br/>
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center"  >
                            <button type="button" className="btn btn-outline-Hentai btn-lg px-4 gap-3" onClick={MayorEdad} style={{ display: BotonHentai ? 'block' : 'none' }} >Soy Mayor de Edad</button> 
                        </div>
                        <br/>
                    </div>
                    <div className="row" style={{ display: ComandosHentai ? '' : 'none' }} >
                        <div className="col-md-auto PrefixOscuro" > +/- </div>
                        <div className="col RespuestaOscuro" > Armpit, BoobJob, Cum, Foot, Fuck, Futanari, HandJob, Hentai, Loli18, Masturbate, Shota18, Socks, Suck, Thighs, Yaoi18, Yuri18 </div>
                        <br/><br/><br/><br/>
                    </div>
                <hr className="featurette-divider"/>
            </div>
        </div>
    )
}