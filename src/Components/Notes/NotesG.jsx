import Aos from "aos"; 
import "aos/dist/aos.css";
import { useEffect } from 'react';

const NotesG = ({DtaNotesGenerales, CompletedNoteG, UnCompletedNoteG}) => {


    // Funcion que retorna la animación del portafolio
    useEffect(()=>{
        Aos.init({ duration: 1000 });
        }, []);
    
    
    return ( 
        <div className="row portfolio-container filter-container" >
        {DtaNotesGenerales.map((DtaNotesGenerales)=>{
            return(
            <div className='container col-md-12 py-2' key={DtaNotesGenerales._id}>
                <div className="blog-slider">
                <div className="blog-slider__wrp ">
                <div className="blog-slider__item ">
                    <div className={DtaNotesGenerales.estado === true ? 'blog-slider__img' : 'blog-slider__imgFinal'}>
                    
                    </div>
                    <div className="">
                    <span className="blog-slider__code">{DtaNotesGenerales.fecha}</span>
                    <div className="blog-slider__title">{DtaNotesGenerales.titulo}</div>
                    <div className="blog-slider__text">{DtaNotesGenerales.descripcion} </div>
                    <div className={DtaNotesGenerales.estado === true ? 'blog-slider__button' : 'blog-slider__buttonFinal'} onClick={DtaNotesGenerales.estado == true ? ()=>UnCompletedNoteG(DtaNotesGenerales._id, DtaNotesGenerales.titulo, DtaNotesGenerales.estado, DtaNotesGenerales.descripcion, DtaNotesGenerales.fecha, DtaNotesGenerales.collectionUniversity) : ()=>CompletedNoteG(DtaNotesGenerales._id, DtaNotesGenerales.titulo, DtaNotesGenerales.estado, DtaNotesGenerales.descripcion, DtaNotesGenerales.fecha, DtaNotesGenerales.collectionUniversity )}>
                        {DtaNotesGenerales.estado === true ? 'Activo' : 'Finalizado'}</div>
                    </div>
                </div>            
                </div>
                </div>
            </div>
            )
        })}  
        </div>
     );
}
 
export default NotesG;