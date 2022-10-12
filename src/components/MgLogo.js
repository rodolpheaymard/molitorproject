import React from 'react';
import { Typography , Space } from 'antd';
import logo from '../assets/images/logo_megalart.png';

const { Title } = Typography;

export class MgLogo extends React.Component {
 
  render() {
    return ( <> <div  >
                  <Title level={2} >
                   <Space> <img src={logo} alt="MegalArt"  className="MgLogo" ></img>
                    <span className="MgLogoTitle">MegalArt</span>  </Space> 
                  </Title>
                </div>
             </>);
  }
}
