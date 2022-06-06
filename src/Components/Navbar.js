import { Link, useNavigate } from 'react-router-dom'

export default function NavBar() {
    const navigate = useNavigate();

    function handleOnClick (){
        let Direcccion = document.getElementById("Busqueda").value;
        navigate('/Busqueda/'+Direcccion, {replace: true}), [navigate]
    }

    return (
        <div >
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand TituloNav" to="/Inicio"> ❤ IchiMonogatari ❤ </Link>
                    <button className="navbar-toggler"type="button" aria-expanded="false"aria-label="Toggle navigation">
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <Link className="nav-link Navegacion Subs" to='/Inicio' >Inicio</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link Navegacion Subs" to='/Animes' >Animes</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link Navegacion Subs" to='/Peliculas' >Peliculas</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link Navegacion Subs" to='/Hentais' >Hentai</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link Navegacion Subs" to='/Bots' >Discord&Bots</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link Navegacion Subs" to='/Comandos'>Comandos </Link>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <input className="form-control Buscador" id="Busqueda" type="text" placeholder="Nombre del Anime" onChange={handleOnClick}/> 
                            <Link className="btn btn-outline-pink BuscadorButtom" to='/Subir'><i className="fas fa-upload"></i> </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}