import {useNavigate} from 'react-router-dom';
import logo from '../Materia/binary-code.png';
import Badge from "react-bootstrap/Badge";
import ProgressBar from 'react-bootstrap/ProgressBar'

const Materia = ({DtaMaterias, percentDta}) => {




    const userpic = 'https://ps.w.org/wp-user-avatar/assets/icon-128x128.png?rev=1755722'
    const userbanner = 'https://image.shutterstock.com/image-illustration/hitech-3d-rendering-some-digita-600w-691233466.jpg'

    const headerBanner = {
		backgroundImage:`url(${userbanner})`,
		height:'60px',
		backgroundSize:'cover',
		borderRadius:'20px 20px 0 0'
	}
    
    const now = 60

	const userpicPositionning = {
		position:'relative',
		top:'-60px',
		marginBottom: '-30px'
	}

    // Variables de uso React y Estados UseState
    const history = useNavigate();



    return (
        <div className="row portfolio-container filter-container" >
        {percentDta.map((percentDta)=>{
                return(
            <div className="col-md-4 py-2" key={percentDta._id} >
            <div className='card shadow' onClick={() => history(`/Tasks/${percentDta.IDMongo}`)}>
                    <div style={headerBanner}></div>
                    
                    <div className="">
                        <div
                            style={userpicPositionning}
                            className="text-center ">
                            <img src={logo} 
                                className="rounded-circle" 
                                />
                        </div>
                        
                        <p className="h4 text-center">
                            <span className="font-weight-bold">{percentDta.name}</span>
                            {' '}
                        </p>
                        <p className="text-center grey mb-4">{percentDta.teacher}
                            <Badge className='offset-md-1' bg="primary">{percentDta.day_week}</Badge>
                        </p>
                    </div>
                    
                    <div className="container text-center py-3">

                        <div class="progress">
                            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: `${percentDta.porcentaje}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{percentDta.porcentaje}%</div>
                        </div>

                    </div>
                    </div>
                </div>
            )
            })}  
        </div>
     );
}
 
export default Materia;