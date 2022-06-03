import { MDBContainer } from "mdb-react-ui-kit"
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import { DiscussionEmbed } from 'disqus-react';

// Componentes 
import Banner from "./Components/Banner"
import Banner18 from "./Components/Banner18";
import NavBar from "./Components/Navbar"
import Copyright from "./Components/Copyright"

//Paginas
import Inicio from "./Rutas/Inicio"
import Animes from "./Rutas/Animes"
import DatoAnime from "./Rutas/DatoAnime"
import Peliculas from "./Rutas/Peliculas"
import DatoPelicula from "./Rutas/DatoPelicula"
import Hentais from "./Rutas/Hentais"
import DatoHentai from "./Rutas/DatoHentai"
import Comandos from "./Rutas/Comandos"
import Busqueda from "./Rutas/Busqueda"
import DiscordBots from "./Rutas/DiscordBots"

import SubirContenido from "./Rutas/SubirContenido";


function App() {

    return (
      <Router>
        <div>
            <NavBar></NavBar>
            <div className='bg-dark' id='DiaNoche'>
              <Routes>
                  <Route path="/" element={<Banner></Banner>}/>
                  <Route exact path="/Inicio" element={<Banner></Banner>}/>
                  <Route path="/Animes" element={<Banner></Banner>}/>
                  <Route path="/Peliculas" element={<Banner></Banner>}/>
                  <Route path="/Hentais" element={<Banner18></Banner18>}/>
                  <Route path="/DiscordBots" element={<Banner></Banner>}/>
                  <Route path="/Comandos" element={<Banner></Banner>}/>
                  <Route path="/Busqueda/" element={<Banner></Banner>}/>
                  <Route path="/Busqueda/:id" element={<Banner></Banner>}/>
                  <Route path="/Anime/:id" element={<DatoAnime></DatoAnime>}/>
                  <Route path="/Pelicula/:id" element={<DatoPelicula></DatoPelicula>}/>
                  <Route path="/Hentai/:id" element={<DatoHentai></DatoHentai>}/>
                  <Route path="*" element={<Outlet></Outlet>}/>
                  <Route path="/Subir" element={<SubirContenido></SubirContenido>}/>
              </Routes>
            
              <MDBContainer>
                <Routes>
                    <Route path="/" element={<Inicio></Inicio>}/>
                    <Route path="/Inicio" element={<Inicio></Inicio>}/>
                    <Route path="/Animes" element={<Animes></Animes>}/>
                    <Route path="/Peliculas" element={<Peliculas></Peliculas>}/>
                    <Route path="/Hentais" element={<Hentais></Hentais>}/>
                    <Route path="/DiscordBots" element={<DiscordBots></DiscordBots>}/>
                    <Route path="/Comandos" element={<Comandos></Comandos>}/>
                    <Route path="/Busqueda/" element={<Inicio></Inicio>}/>
                    <Route path="/Busqueda/:id" element={<Busqueda></Busqueda>}/>
                    <Route path="/Anime/:id" element={<Outlet></Outlet>}/>
                    <Route path="/Pelicula/:id" element={<Outlet></Outlet>}/>
                    <Route path="/Hentai/:id" element={<Outlet></Outlet>}/>
                    <Route path="/Subir" element={<Outlet></Outlet>}/>
                </Routes>
              </MDBContainer>
              </div>
  
            <div className='bg-dark'>
            <MDBContainer>
              <DiscussionEmbed shortname='ichimonogatari' config={{identifier: '/IchiMonogatari'}}/>
                <Copyright></Copyright>
            </MDBContainer>
            </div>
        </div>
      </Router>
    );
  }
  
  export default App;