import React from "react";
import Isotope from "isotope-layout"
import Aos from "aos"; 
import "aos/dist/aos.css";
import Task from "../Components/Task/Task";
import NotesM from '../Components/Notes/NotesM';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Swal from "sweetalert2";
import {useParams} from 'react-router-dom';


const CollectionTasks = () => {
    // @ Section Variables
    const [DtaNotesMaterias, setDtaNotesMaterias] = useState([])
    const [DtaTasks , setDtaTasks] = useState([])
    const [name, setName] = useState([])
    const [fechaEntrega, setFechaEntrega] = useState([])
    const [difficulty, setDifficulty] = useState([])
    const [estado, setEstado] = useState([])
    const [description, setDescription] = useState([])
    const [category, setCategory] = useState([])
    const materias = useParams();


    // Variables para Modal
    const [show, setShow] = useState(false);
    // Funciones para Modal
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // @ Section Funciones React

    const CreateTasks=async (e)=>{
        e.preventDefault();
        axios.post('http://localhost:5000/Task/createTasks', {
        name,
        fechaEntrega,
        difficulty,
        estado: false,
        description,
        category,
        materias: materias.id
        }).then((respuesta)  => {
            CargarDta()
            Swal.fire(
                `Se ha creado la Task ${name} correctamente!`,
                'Buena suerte! Tu puedes con absolutamente todo.',
                'success'
            )
            CargarDta()
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
    

    const CompletedTask = async(_id, name, fechaEntrega, difficulty, estado, description, category, materias) =>{
        await axios.put(`http://localhost:5000/Task/GetTask/${_id}`,{
        _id,
        name,
        fechaEntrega,
        difficulty,
        estado: true,
        description,
        category,
        materias
    }).then((response)=>{
        CargarDta()
    }).catch((error)=>{
        console.log(error)
    })
}

    const UnCompletedTask = async(_id, name, fechaEntrega, difficulty, estado, description, category, materias) =>{
        await axios.put(`http://localhost:5000/Task/GetTask/${_id}`,{
        _id,
        name,
        fechaEntrega,
        difficulty,
        estado: false,
        description,
        category,
        materias
        }).then((response)=>{
            CargarDta()
        }).catch((error)=>{
            console.log(error)
        })
    }

    const DeleteTask = async(_id) =>{
        await axios.delete(`http://localhost:5000/Task/GetTask/${_id}`)
        .then((response)=>{
            CargarDta()
    }).catch((error)=>{
        console.log(error)
    })
    }

    const CompletedNote = async(_id, titulo, estado, descripcion, fecha, materia) =>{
        await axios.put(`http://localhost:5000/NoteM/NotesByMateria/${_id}`,{
        _id,
        titulo,
        estado: true,
        descripcion,
        fecha,
        materia,
    }).then((response)=>{
        ObtenerNotesMaterias()
    }).catch((error)=>{
        console.log(error)
    })
    }

    const UnCompletedNote = async(_id, titulo, estado, descripcion, fecha, materia) =>{
        await axios.put(`http://localhost:5000/NoteM/NotesByMateria/${_id}`,{
            _id,
            titulo,
            estado: false,
            descripcion,
            fecha,
            materia,
        }).then((response)=>{
            ObtenerNotesMaterias()
        }).catch((error)=>{
        console.log(error)
        })
    }

    const DeleteNote = async(_id) =>{
        await axios.delete(`http://localhost:5000/NoteM/NotesByMateria/${_id}`)
        .then((response)=>{
        ObtenerNotesMaterias()
    }).catch((error)=>{
        console.log(error)
    })
    }



    const CargarDta = () =>{
        axios.get('http://localhost:5000/Task/GetTasksAlls').then((response)=>{
            setDtaTasks(response.data.data)
        }).catch((error)=>{
            console.log(error)
        })
    }

    const ObtenerNotesMaterias=()=>{
        axios.get('http://localhost:5000/NoteM/GetNotesByMateria').then((response)=>{
            setDtaNotesMaterias(response.data.data)
        }).catch((error)=>{
            console.log(error)
        })
    }

    // @ Section UseEffect

    useEffect(()=>{
        CargarDta()
        ObtenerNotesMaterias()
    }, []);

    React.useEffect(()=>{
        Aos.init({ duration: 3000 });
      }, []);
    
    // @ Section Isotope

    // init one ref to store the future isotope object
    const isotope = React.useRef()
    // store the filter keyword in a state
    const [filterKey, setFilterKey] = React.useState('Tasks')
    
      // initialize an Isotope object with configs
    useEffect(() => {
    isotope.current = new Isotope('.filter-container', {
        itemSelector: '.filter-item',
        layoutMode: 'fitRows',
    })
    // cleanup
    return () => isotope.current.destroy()

    }, [])
    
    // handling filter key change
    useEffect(() => {
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
                        <h2>Tasks</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 d-flex justify-content-center">
                            <ul id="portfolio-flters">
                                <li onClick={handleFilterKeyChange('Tasks')}>Taks</li>
                                <li onClick={handleFilterKeyChange('Notes')}>Notas X Materia</li>
                                <li onClick={handleFilterKeyChange('*')}>Ver Todo</li>
                            </ul>
                        </div>
                    </div>

                <hr />
                    <ul className="filter-container" >

                        <div className="filter-item Tasks">
                            
                            <Task DeleteTask={DeleteTask} DtaTasks={DtaTasks} CompletedTask={CompletedTask} UnCompletedTask={UnCompletedTask}/>

                            <div className="container col-md-5 cardTaskMay my-2 CreateNoteMateriaUniversity " onClick={handleShow}>
                                <div className="card-text">
                                    <div className="portadaCreate">
                                    
                                    </div>
                                    <div className="title-total">   
                                    <h1>New Tasks</h1>
                                
                                <div className="desc">Crea una nueva Task, crece en tí mismo, podrás lograr todo lo que te propongas. Ánimo, tu puedes! </div>
                                <div className="actions">
                                </div>
                            </div>
                        
                        </div>
                    </div>

                        </div>
                        <div className="filter-item Notes">
                            
                            <NotesM DeleteNote={DeleteNote} DtaNotesMaterias={DtaNotesMaterias} CompletedNote={CompletedNote} UnCompletedNote={UnCompletedNote}/>

                        </div>
                    </ul>
                        <Modal className='' show={show} onHide={handleClose}>
                            <Modal.Body className=''>
                            <form className='sign-in-form formFormSign' onSubmit={CreateTasks}>
                                <h2 className='py-4'>Crea una Tasks</h2>
                                <div className="actual-form">
                                    <div className="input-wrap">
                                    <input
                                        type="text"
                                        className="input-field"
                                        value={name} onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                    <label className='labelFormSign'>Título</label>
                                    </div>

                                    <div className="input-wrap">
                                    <input
                                        type="date"
                                        className="input-field"
                                        value={fechaEntrega} onChange={(e) => setFechaEntrega(e.target.value)}
                                        required
                                        
                                    />
                                    <label className='labelFormSign'>Fecha Entrega</label>
                                    </div>
                                    <div className="input-wrap">
                                    <input
                                        type="text"
                                        className="input-field"
                                        value={category} onChange={(e) => setCategory(e.target.value)}
                                        required
                                    />
                                    <label className='labelFormSign py-2'>Categoría</label>
                                    </div>
                                    <div className="form-group py-2">
                                        <label for="exampleFormControlSelect1" >Seleccione dificultad</label>
                                        <select className="form-control my-2" id="exampleFormControlSelect1" value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
                                        <option>Fácil</option>
                                        <option>Normal</option>
                                        <option>Agotador</option>
                                        <option>Demasiado Complicado</option>
                                        </select>
                                    </div>
                                    {/* <div className="form-group py-2">
                                        <label for="exampleFormControlSelect1">Estado de la tarea</label>
                                        <select className="form-control my-2" id="exampleFormControlSelect1" value={estado} onChange={(e) => setEstado(e.target.value)}>
                                            <option>Completed</option>
                                            <option>Uncompleted</option>
                                        </select>
                                    </div> */}
                                    <div className="form-group py-2">
                                    <label for="exampleFormControlTextarea1">Example textarea</label>
                                    <textarea className="form-control my-2" value={description} onChange={(e) => setDescription(e.target.value)} id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>

                                    <input type="submit" value="Crear Task" className="sign-btn my-2" />
                                </div>
                            </form>
                            </Modal.Body>
                        </Modal>
                </div>
            </section>
        </div>
    );
}
 
export default CollectionTasks;