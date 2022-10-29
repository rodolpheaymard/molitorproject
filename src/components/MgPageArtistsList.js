import React from 'react';
import { withRouter } from './withRouter';
import MgComponent from './MgComponent';
import MgBlockHeader from './MgBlockHeader';
import MgBlockFooter from './MgBlockFooter';
import { Col, Row } from 'antd';
import MgBlockArtistsList from './MgBlockArtistsList';

 

class MgPageArtistsList extends MgComponent {
  constructor(props)
  {
    super(props);
    this.catalog = props.catalog;    
  }

  render() {
    return (<><Row><Col span={24}><MgBlockHeader /></Col></Row>
    <Row><Col span={24}><MgBlockArtistsList artists={this.catalog.GetArtistsList()} /></Col></Row>
    <Row><Col span={24}><MgBlockFooter /></Col></Row></> 
     );
  }
}  

export default withRouter(MgPageArtistsList);