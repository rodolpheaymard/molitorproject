import React from 'react';
import { withRouter } from './withRouter';
import MgPage from './MgComponent';
import MgBlockFooter from './MgBlockFooter';
import MgBlockHeader from './MgBlockHeader';
import MgBlockHome  from './MgBlockHome';
import { Col, Row } from 'antd';
import 'antd/dist/antd.css';
  
 
class MgPageHome extends MgPage {
 
  constructor(props)
  {
    super(props);
    this.catalog = props.catalog;    
  }

    render() {
      return ( <><Row><Col span={24}><MgBlockHeader /></Col></Row>
                  <Row><Col span={24}><MgBlockHome catalog={this.catalog} /></Col></Row>
                  <Row><Col span={24}><MgBlockFooter /></Col></Row></> 
      );
    }
}

export default withRouter(MgPageHome);