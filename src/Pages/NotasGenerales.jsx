import Aos from "aos"; 
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


const NotasGenerales = () => {

    

        // Funcion que retorna la animación del portafolio
        useEffect(()=>{
            Aos.init({ duration: 1000 });
          }, []);
    
    return ( 
        <div>
            <section id="portfolio" className="portfolio">
            <div className="container" data-aos="fade-up">
                <div className="section-title py-5">
                    <h2>Notas Generales</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>
            </div>
            <div className='container py-4'>
                <div className="blog-slider">
                <div className="blog-slider__wrp ">
                <div className="blog-slider__item ">
                    <div className="blog-slider__img">
                    
                    <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759872/kuldar-kalvik-799168-unsplash.webp" alt=""/>
                    </div>
                    <div className="">
                    <span className="blog-slider__code">26 December 2019</span>
                    <div className="blog-slider__title">Lorem Ipsum Dolor</div>
                    <div className="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi? </div>
                    <a href="#" className="blog-slider__button">Nota Elaborada</a>
                    </div>
                </div>            
                </div>
                </div>
            </div>
            <div className='container py-4'>
                <div className="blog-slider">
                <div className="blog-slider__wrp ">
                <div className="blog-slider__item ">
                    <div className="blog-slider__img">
                    
                    <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759872/kuldar-kalvik-799168-unsplash.webp" alt=""/>
                    </div>
                    <div className="">
                    <span className="blog-slider__code">26 December 2019</span>
                    <div className="blog-slider__title">Lorem Ipsum Dolor</div>
                    <div className="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi? </div>
                    <a href="#" className="blog-slider__button">Nota Elaborada</a>
                    </div>
                </div>            
                </div>
                </div>
            </div>


            </section>
        </div>
        );
}
 
export default NotasGenerales;