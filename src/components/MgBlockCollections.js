import React from 'react';
import { withRouter } from './withRouter';
import 'antd/dist/antd.css';
import MgComponent from './MgComponent';
import { Typography, Col, Row } from 'antd';
import MgBlockCollection from './MgBlockCollection';
import { MtToPairArray } from '../utils/MtTools';
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
    // rendu 2 colonnes
    let pairs = MtToPairArray(this.collections);
    const listCollections = pairs.map((pair) => {
      return  <Row key={pair.left.id} className='MgBlockCollectionsRow'>
               <Col span={12}><MgBlockCollection key={pair.left.id} collection={pair.left}/></Col>
               <Col span={12}><MgBlockCollection key={(pair.right!==null ? pair.right.id : "none")} collection={pair.right}/></Col>
              </Row>
    });
    return (<div className='MgBlockCollections'><Title level={3}>Collections</Title>
               {listCollections}
            </div>  );
  }

  mobileRender() {
        // rendu sur 1 colonne    
        const listCollections = this.collections.map((collec) => {
            return  <Row key={collec.id}><Col span={24}><MgBlockCollection key={collec.id} collection={collec}/></Col></Row>
          });
          return (<div className='MgBlockCollections'><Title level={3}>Collections</Title>
                     {listCollections}
                  </div>  );     
}

}

export default withRouter(MgBlockCollections);