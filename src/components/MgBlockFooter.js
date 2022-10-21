import React from 'react';
import { Col, Row } from 'antd';
import MgComponent from './MgComponent';
import { withRouter } from './withRouter';

class MgBlockFooter extends MgComponent {
 
  render() {
    return (<> <Row className="MgBlockFooter">
                <Col span={6}>
                  <br/> 
                  <br/> Suivre MEGALART
                  <br/> instagram twitter pinterest
                  </Col>
                <Col span={12}>
                  <br/> 
                  <br/> 
                  <br/> CGU, CGV and copyright all rights reserved 2022
                  </Col>
                <Col span={6}>
                  MegalArt 
                  <br/>123, rue du Louvre
                  <br/>Paris, France
                  <br/>
                  <br/>nous contacter
                  </Col>
                </Row></>);
  }
}
export default withRouter(MgBlockFooter);
