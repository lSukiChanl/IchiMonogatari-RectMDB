export async function  PedirListaCompleta (){
    const ListaCompleta = "https://www.ichimonogatari.com/php/BuscarTodoObservable.php";
    try{
        const response = await fetch(ListaCompleta);
        const data = await response.json();
        return data;
    }catch(error){
        console.log(error);
    }
}

export async function PedirListaAnimes (){
    const ListaAnimes = "https://www.ichimonogatari.com/php/BuscarCategoriaObservable.php?categoria=Anime";
    try{
        const response = await fetch(ListaAnimes);
        const data = await response.json();
        return data;
    }catch(error){
        console.log(error);
    }
}

export async function PedirListaPeliculas (){
    const ListaPeliculas = "https://www.ichimonogatari.com/php/BuscarCategoriaObservable.php?categoria=Pelicula";
    try{
        const response = await fetch(ListaPeliculas);
        const data = await response.json();
        return data;
    }catch(error){
        console.log(error);
    }
}

export async function PedirListaHentais (){
    const ListaHentais = "https://www.ichimonogatari.com/php/BuscarCategoriaObservable.php?categoria=Hentai";
    try{
        const response = await fetch(ListaHentais);
        const data = await response.json();
        return data;
    }catch(error){
        console.log(error);
    }
}

export async function PedirBusqueda (Buscar){
    const Busqueda = "https://www.ichimonogatari.com/php/BuscarPorNombreObservable.php?busqueda="+Buscar;
    try{
        const response = await fetch(Busqueda);
        const data = await response.json();
        return data;
    }catch(error){
        console.log(error);
    }
}

export async function BusquedaAnime (Buscar){
    const Anime = "https://www.ichimonogatari.com/php/BuscarAnimeObservable.php?anime="+Buscar;
    try{
        const response = await fetch(Anime);
        const data = await response.json();
        return data;
    }catch(error){
        console.log(error);
    }
}

export async function BusquedaPelicula (Buscar){
    const Pelicula = "https://www.ichimonogatari.com/php/BuscarPeliculaObservable.php?pelicula="+Buscar;
    try{
        const response = await fetch(Pelicula);
        const data = await response.json();
        return data;
    }catch(error){
        console.log(error);
    }
}

export async function BusquedaHentai (Buscar){
    const Hentai = "https://www.ichimonogatari.com/php/BuscarHentaiObservable.php?hentai="+Buscar;
    try{
        const response = await fetch(Hentai);
        const data = await response.json();
        return data;
    }catch(error){
        console.log(error);
    }
}