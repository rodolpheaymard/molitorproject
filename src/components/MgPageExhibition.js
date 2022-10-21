import React from 'react';
import MgComponent from './MgComponent';
import { withRouter } from './withRouter';


export const appendScript = (scriptToAppend) => {
  const script = document.createElement("script");
  script.src = scriptToAppend;
  script.type = 'text/javascript';
  script.src = scriptToAppend;  
  script.async = true;
  document.body.appendChild(script);
}

 class MgPageExhibition extends MgComponent {
 
  componentDidMount () {
    appendScript(process.env.PUBLIC_URL + '/scripts/MgPlayer.js');
  }  

  render() {
    return ( <>       
               <div className="MgExhibitionPlayer" id="mgPlayer">     
               <img src="/images/site/exhibition_start.jpg" 
                    id="mgPlayerImage" alt="work of art currently on air" />
               <div className="MgExhibitionPlayerStart" id="mgPlayerOverlay">
                press anywhere to go full screen</div> 
               </div>
              </>
  );
  }
}

export default withRouter(MgPageExhibition);