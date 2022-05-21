
const Spotify = () => {

    const userpic = 'https://ps.w.org/wp-user-avatar/assets/icon-128x128.png?rev=1755722'
    const userbanner = 'https://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero.jpg'

    const headerBanner = {
		backgroundImage:`url(${userbanner})`,
		height:'150px',
		backgroundSize:'cover',
		borderRadius:'20px 20px 0 0'
	}
    
    function toThousands(nb)
	{
		return (nb / 1000) + 'K';
	}

	const userpicPositionning = {
		position:'relative',
		top:'-60px',
		marginBottom: '-30px'
	}
    return ( 
        <div class="container mt-5 mb-5 bg-blue">
            <div className="row justify-content-center align-items-center">
                <div className="col-xl-6 col-md-8 col-lg-6 col-sm-10 ">

                    {   /* De Aquí para abajo se importa como componente */}
                    <div className='card shadow'>
                    <div style={headerBanner}></div>
                    
                    <div className="border-bottom">
                        <div
                            style={userpicPositionning}
                            className="text-center ">
                            <img src={userpic} 
                                className="rounded-circle" 
                                />
                        </div>
                        
                        <p className="h4 text-center">
                            <span className="font-weight-bold">Introducción Programación de Videojuegos</span>
                            {' '}
                        </p>
                        <p className="text-center grey mb-4">Barranquilla</p>
                    </div>
                    
                    <div className="row justify-content-around text-center">
                        <div class="col-md-4 py-2">
                            <p>
                                <span className="h4 font-weight-bold ">3,7.B</span>
                                <br />
                                <span className="small-txt grey">Followers</span>
                            </p>
                        </div>
                        <div class="col-md-4 py-2">
                            <p>
                                <span className="h4 font-weight-bold ">1.M</span>
                                <br />
                                <span className="small-txt grey">Likes</span>
                            </p>
                        </div>
                        <div class="col-md-4 py-2">
                            <p>
                                <span className="h4 font-weight-bold ">100k</span>
                                <br />
                                <span className="small-txt grey">Photos</span>
                            </p>
                        </div>
                    </div>
                    
                    </div>
                    {   /* Fin Del Componente */}
                </div>
            </div>
        </div>


    );
}
 
export default Spotify;