import React from "react"
import Isotope from "isotope-layout"
import Aos from "aos"; 
import "aos/dist/aos.css";
import Task from "../Components/Task/Task";
import Target from "../Components/Target/Target";
import {useState, useEffect} from 'react'
import axios from 'axios'

const CollectionTasks = () => {

    const [DtaTasks , setDtaTasks] = useState([])
    const [loadData, setLoadData] = useState(false)

    const CargarDta = () =>{
        axios.get('http://localhost:5000/Task/GetTasksAlls').then((response)=>{
            setDtaTasks(response.data.data)
            setLoadData(true)
        }).catch((error)=>{
            console.log(error)
        })
    }

    useEffect(()=>{
        CargarDta()
    }, []);

    React.useEffect(()=>{
        Aos.init({ duration: 3000 });
      }, []);
    
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
                <div className="container" >
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
                    <ul className="filter-container">

                        <div className="filter-item Tasks">
                            
                            <Task DtaTasks={DtaTasks}/>
                                <div class="card " style={{width: '18rem'}}>
                                    <div class="card-body ">
                                        <div className="d-flex flex-row align-items-center">
                                            <div class="iconProgress">
                                                <img className='iconProgress' src='https://cdn-icons-png.flaticon.com/512/7007/7007089.png'/>
                                            </div>
                                            <div class="ms-2 c-details">
                                                <h5 class="card-title">Card title</h5>
                                            </div>
                                        </div>
                                        <h6 class="card-subtitle mb-2 text-muted py-2">Card subtitle</h6>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <div class="d-flex flex-row align-items-center">
                                            <h6 class=" font-italic text-muted ">1 Mayo/ 2022</h6>
                                            <div class="ms-2 c-details">
                                                <p class=" mx-3 card-title text-primary">Entregado</p>
                                            </div>
                                        </div>
                                        <a  class="card-link">Eliminar</a>
                                        <a  class="card-link">Editar</a>


                                    </div>

                                </div>
                            {/* { loadData === true ? <h1>cargó la Data</h1> : <h2>Please, wait one moments</h2>} */}

                        </div>
                        <div className="filter-item Notes">
                            
                            <Target />

                        </div>
                    </ul>
                    
                </div>
            </section>
        </div>
     );
}
 
export default CollectionTasks;