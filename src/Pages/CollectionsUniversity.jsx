import Aos from "aos"; 
import "aos/dist/aos.css";
import { useEffect, useState} from 'react';
import NavBar from "../Components/NavBar/NavBar";
import {useNavigate} from 'react-router-dom';
import React from "react";
import Isotope from "isotope-layout";
import axios from 'axios';
import University from '../Components/University/University';
import {useParams} from 'react-router-dom';

const CollectionsUniversity = () => {

    // Variables de React y UseState
    const [DtaUniversidades, setDtaUniversidades] = React.useState([])
    const _idUser = useParams();

    const ObtenerUniversitys = async () =>{
        console.log('cargando Universidades')
        await axios.get(`http://localhost:5000/University/Collection_idUser/${_idUser.id}`)
        .then((response)=>{
            console.log(response.data.data)
            setDtaUniversidades(response.data.data)
        }).catch((error)=>{
            console.log(error)
        })
    }

    useEffect(()=>{
        ObtenerUniversitys()
    }, []);

    const history = useNavigate();

    // Funcion que retorna la animación del portafolio
    React.useEffect(()=>{
        Aos.init({ duration: 3000 });
    }, []);


    return ( <div>
        {/* <NavBar/> */}
        <section id="portfolio" className="portfolio">
        <div className="container" data-aos="fade-up">
            <div className="section-title py-5">
                <h2>Universidades</h2>
                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>

            <div className="row">
                <div className="col-lg-12 d-flex justify-content-center">
                    <ul id="portfolio-flters">
                        <li className="filter-active" >Universidades</li>
                    </ul>
                </div>
            </div>
            <div className="portfolio-item filter-app filter-item University">
                <University DtaUniversidades={DtaUniversidades}/>
            </div>

            <div className="portfolio-item  filter-item Special">
                <div className="card img-fluid">
                    <div className='card-body'>
                        Create a New University
                    </div>
                
                </div>
            </div>


            {/* <div className="col-lg-4 col-md-6 portfolio-item filter-app filter-item University">
                <div className="portfolio-wrap">
                <img src="https://www.las2orillas.co/wp-content/uploads/2016/01/Universidad-Atlantico.jpg" className="img-fluid" alt=""/>
                <div className="portfolio-info">
                    <h4>Universidad Del Atlántico</h4>
                    <p> <i className="bi bi-geo-fill"></i> Barranquilla</p>
                </div>
                <div className="portfolio-links">
                    <a href="https://www.las2orillas.co/wp-content/uploads/2016/01/Universidad-Atlantico.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bi bi-plus"></i></a>
                    <a href="portfolio-details.html" title="More Details"><i className="bi bi-link"></i></a>
                </div>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-app filter-item University">
                <div className="portfolio-wrap">
                <img src="https://www.upb.edu.co/es/imagenes/img-interna-benificios-acreditacion-upbgga-1464190197299.jpg" className="img-fluid" alt=""/>
                <div className="portfolio-info">
                    <h4>Universidad Pontificia Bolivariana</h4>
                    <p> <i className="bi bi-geo-fill"></i> Medellin</p>
                </div>
                <div className="portfolio-links">
                    <a href="https://www.upb.edu.co/es/imagenes/img-interna-benificios-acreditacion-upbgga-1464190197299.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><i className="bi bi-plus"></i></a>
                    <a href="portfolio-details.html" title="More Details"><i className="bi bi-link"></i></a>
                </div>
                </div>
            </div> */}
            {/* </div> */}
      </div>
    </section>
    </div> );
}
 
export default CollectionsUniversity;