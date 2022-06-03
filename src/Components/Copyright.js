import IMGLogo from '../Assets/Leyenda.png'

export default function Copyright() {
  return (
      
    <div className="bg-dark EspaciadoX EspaciadoY">
        <div className="container centrar">  
            <div className="row">
                <div className="col col1 Leyenda text">  
                    <img className="Img" src={IMGLogo} alt='Imagen de CopyRight' />
                </div>
                <div className="col col2 creditos"> 
                    <p className="creditos1">Copyright © 2021 IchiMonogatari. All Rights Reserved</p>
                    <p className="creditos1"> Disclaimer </p>
                    <p className="creditos2">The site IchiMonogatari does not store any files on its server.</p>
                    <p className="creditos2">All contents are provided by non-affiliated third parties.</p>
                </div>
            </div>
        </div>
    </div>
  )
}