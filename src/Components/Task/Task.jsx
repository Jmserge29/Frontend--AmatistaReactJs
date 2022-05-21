

const Task = ({DtaTasks}) => {
    return ( 
        <div>
        <div class="container mt-5 mb-3">
            <div class="row">
            {DtaTasks.map((DtaTasks)=>{ 
                    return(
                        <div class="col-md-4">
                                <div class="card " style={{width: '20rem'}}>
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
                                            <div class="ms-2 c-details ">
                                                <p class=" mx-3 card-title text-primary">Entregado</p>
                                            </div>
                                        </div>
                                        <a  class="card-link">Eliminar</a>
                                        <a  class="card-link">Editar</a>


                                    </div>

                                </div>
                        </div>
                    )
                })}                           
            </div>
        </div>
    </div>     );
}
 
export default Task;