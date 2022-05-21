

const Target = () => {

    const track = 'https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/1.jpg'

    return ( 
        <div className=" wrapper"  id="app">
        <div class="player">
          <div class="player__top my-3">
            <div class="player-cover">
                  <div class="player-cover__item "  style={{backgroundImage: "url(" + track + ")"}}></div>
            </div>
            {/* <div class="player-controls">
              <div class="player-controls__item -favorite" >
              </div>
              <a href="currentTrack.url" target="_blank" class="player-controls__item">
              </a>
              <div class="player-controls__item" >

                
              </div>
              <div class="player-controls__item" >
              </div>
              <div class="player-controls__item -xl js-play">
              </div>
            </div> */}
          </div>
              <div class="album-info text-center" v-if="currentTrack">
                <div class="album-info__name py-3">José Manuel Serge</div>
                <div class="album-info__track parrafoReact">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda animi consequuntur adipisci aspernatur mollitia, quibusdam totam ullam aut architecto. Aliquam ducimus ratione fugiat illo, provident incidunt minus. Doloremque, modi molestiae!</div>
              </div>
          </div>
      </div>

     );
}
 
export default Target;