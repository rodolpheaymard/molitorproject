import React from 'react';
import { withRouter } from './withRouter';
import 'antd/dist/antd.css';
import MgComponent from './MgComponent';
import { Typography, Col, Row } from 'antd';
import MgBlockCollection from './MgBlockCollection';
const { Title } = Typography;

class MgBlockCollections extends MgComponent {
  constructor(props) {
    super(props);
    
    this.collections = props.collections;  
  }



  render() {
    
    let listCollections = null;
     
    if (this.IsDesktop())
    {
        listCollections = this.desktopRender();
    }
    else if (this.IsMobile())
    {
        listCollections = this.mobileRender();
    }

   return (<>{listCollections}</>);

  }

  desktopRender() {
    return this.mobileRender();
  }

  mobileRender() {
        // rendu sur 1 colonne    
        const listCollections = this.collections.map((collec) => {
            return  <Row key={collec.id}><Col span={24}><MgBlockCollection key={collec.id} collection={collec}/></Col></Row>
          });
          return (<div className='MgBlockCollections'><Title level={3} >Collections</Title>
                     {listCollections}
                  </div>  );
     
}

}

export default withRouter(MgBlockCollections);