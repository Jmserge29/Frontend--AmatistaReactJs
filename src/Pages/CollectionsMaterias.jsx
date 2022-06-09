import React from "react"
import Isotope from "isotope-layout"
import NotesG from "../Components/Notes/NotesG"
import Materia from "../Components/Materia/Materia";
import Aos from "aos"; 
import "aos/dist/aos.css";
import axios from 'axios';
import { useState } from "react";
import {useParams} from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Swal from "sweetalert2";


const CollectionMaterias = () => {

    const [DtaMaterias, setDtaMaterias] = useState([])
    const collectionUniversity = useParams();
    const [DtaNotesGenerales, setDtaNotesGenerales] = useState([])
    const [percentDta, setPercentDta] = useState([])
    const [name, setName] = useState([])
    const [teacher, setTeacher] = useState([])
    const [day_week, setDay_week] = useState([])
    // variables para Modal
    const [show, setShow] = useState(false);
    // Funciones para Modal
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
    const ObtenerMaterias=()=>{
      axios.get('http://localhost:5000/Materia/GetMaterias').then((response)=>{
        setDtaMaterias(response.data.data)
      }).catch((error)=>{
        console.log(error)
      })
    }

    const DashboardMateria= async()=>{
      await axios.get(`http://localhost:5000/Materia/Dashboard/${collectionUniversity.id}`).then((response)=>{
        console.log(response.data.data)
        setPercentDta(response.data.data)
      }).catch((error)=>{
        console.log(error)
      })
    }



    const ObtenerNotesGenerales=()=>{
      axios.get('http://localhost:5000/NoteG/GetNotesGenerals').then((response)=>{
        setDtaNotesGenerales(response.data.data)
      }).catch((error)=>{
        console.log(error)
      })
    }

    const CompletedNoteG = async(_id, titulo, estado, descripcion, fecha, collectionUniversity) =>{
        await axios.put(`http://localhost:5000/NoteG/NotesGenerals/${_id}`,{
        _id,
        titulo,
        estado: true,
        descripcion,
        fecha,
        collectionUniversity
      }).then((response)=>{
          ObtenerNotesGenerales()
      }).catch((error)=>{
          console.log(error)
      })
    }

    const UnCompletedNoteG = async(_id, titulo, estado, descripcion, fecha, collectionUniversity) =>{
      await axios.put(`http://localhost:5000/NoteG/NotesGenerals/${_id}`,{
      _id,
      titulo,
      estado: false,
      descripcion,
      fecha,
      collectionUniversity
      }).then((response)=>{
        ObtenerNotesGenerales()
      }).catch((error)=>{
        console.log(error)
      })
    }

    const CreateMateria =async (e)=>{
      e.preventDefault();
      axios.post('http://localhost:5000/Materia/createMaterias', {
      name,
      collectionUniversity: collectionUniversity.id,
      teacher,
      day_week,
      }).then((respuesta)  => {
        DashboardMateria()
        Swal.fire(
              `Se ha Matrciulado la Materia ${name} correctamente!`,
              'Buena suerte! Tu puedes con absolutamente todo.',
              'success'
          )
          handleClose()
          }
        )
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Oops... Lo sentimos',
          text: 'Parece que ocurrió un error con los datos ingresados, inténtelo otra vez'
        })
      });
    }

    React.useEffect(()=>{
        Aos.init({ duration: 3000 });
        // ObtenerNotesMaterias()
        ObtenerMaterias()
        ObtenerNotesGenerales()
        DashboardMateria()
      }, []);
    
    
          // init one ref to store the future isotope object
      const isotope = React.useRef()
      // store the filter keyword in a state
      const [filterKey, setFilterKey] = React.useState('Materias')
    
      // initialize an Isotope object with configs
      React.useEffect(() => {
        isotope.current = new Isotope('.filter-container', {
          itemSelector: '.filter-item',
          layoutMode: 'fitRows',
        })
        // cleanup
        return () => isotope.current.destroy()
    
      }, [])
    
      // handling filter key change
      React.useEffect(() => {
        filterKey === '*'
          ? isotope.current.arrange({filter: `*`})
          : isotope.current.arrange({filter: `.${filterKey}`})
      })
    
      const handleFilterKeyChange = key => () => setFilterKey(key)
    
        
    return ( 
        <div>
          <section id="portfolio" className="portfolio">
          <div className="container" data-aos="fade-up">
            <div className="section-title py-5">
                <h2>Materias</h2>
                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>
            <div className="row">
                <div className="col-lg-12 d-flex justify-content-center">
                  <ul id="portfolio-flters">
                      <li onClick={handleFilterKeyChange('Materias')}>Materias</li>
                      {/* <li onClick={handleFilterKeyChange('Notes')}>Notas X Materia</li> */}
                      <li onClick={handleFilterKeyChange('NotesG')}>Notes</li>
                      {/* <li onClick={handleFilterKeyChange('*')}>Ver Todo</li> */}
                  </ul>
              </div>
            </div>

            <hr />
            <ul className="filter-container">
                {/* <div className="filter-item Notes">
                  <NotesM DtaNotesMaterias={DtaNotesMaterias}/>
                </div> */}
                <div className="filter-item Materias">
                    <Materia DtaMaterias={DtaMaterias} percentDta={percentDta}/>
                    <div className="container col-md-8 cardTaskMay my-2 CreateNoteMateriaUniversity " onClick={handleShow}>
                                <div className="card-text">
                                    <div className="portadaCreateMateria">
                                    </div>
                                    <div className="title-total">   
                                      <h1>Matricular Materia</h1>
                                        <div className="desc">Matricula una Materia y organízate lo mejor que puedas, comenzémos! 
                                        </div>
                                        <div className="actions">
                                        </div>
                                    </div>
                                </div>
                      </div>
                </div>
                <div className="filter-item NotesG">
                    <NotesG DtaNotesGenerales={DtaNotesGenerales} UnCompletedNoteG={UnCompletedNoteG} CompletedNoteG={CompletedNoteG}/>
                </div>

                <div>
                </div>


            </ul>
            <Modal className='' show={show} onHide={handleClose}>
                            <Modal.Body className=''>
                            <form className='sign-in-form formFormSign ' onSubmit={CreateMateria}>
                                <h2 className='py-4'>Matricula una Materia</h2>
                                <div className="actual-form">
                                    <div className="input-wrap">
                                    <input
                                        type="text"
                                        className="input-field"
                                        value={name} onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                    <label className='labelFormSign'>Materia</label>
                                    </div>
                                    <div className="input-wrap">
                                    <input
                                        type="text"
                                        className="input-field"
                                        value={teacher} onChange={(e) => setTeacher(e.target.value)}
                                        required
                                    />
                                    <label className='labelFormSign'>Profesor</label>
                                    </div>
                                    <div className="input-wrap py-2">
                                        <label for="exampleFormControlSelect1">Frecuencia Semanal</label>
                                        <select className="form-control my-2" id="exampleFormControlSelect1" value={day_week} onChange={(e) => setDay_week(e.target.value)}>
                                            <option>Lunes</option>
                                            <option>Martes</option>
                                            <option>Miércoles</option>
                                            <option>Jueves</option>
                                            <option>Vienes</option>
                                            <option>Sábado</option>
                                            <option>Extra</option>
                                        </select>
                                    </div>
                                    
                                    

                                    <input type="submit" value="Matricular Materia" className="sign-btn my-5" />
                                </div>
                            </form>
                            </Modal.Body>
            </Modal>
        </div>
        </section>
      </div>
     );
}
 
export default CollectionMaterias;