import React from 'react';
//import { Typography } from 'antd';
//import { Col, Row } from 'antd';
//const { Title } = Typography;

export const appendScript = (scriptToAppend) => {
  const script = document.createElement("script");
  script.src = scriptToAppend;
  script.type = 'text/javascript';
  script.src = scriptToAppend;  
  script.async = true;
  document.body.appendChild(script);
}

export class MgExhibitionPage extends React.Component {
 
  componentDidMount () {
    appendScript(process.env.PUBLIC_URL + '/scripts/MgPlayer.js');
  }  

  render() {
    return ( <>       
               <div className="MgExhibitionPlayer" id="mgPlayer">     
               <img className="MgExhibitionPlayerImage"  id="mgPlayerImage" alt="work of art currently on air"/>
               <div className="MgExhibitionPlayerStart" id="mgPlayerOverlay">
                press anywhere to go full screen</div> 
               </div>
              </>
  );
  }
}