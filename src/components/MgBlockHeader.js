import React from 'react';
import { Col, Row } from 'antd';
import  MgMainMenu  from './MgMainMenu';
import { MgLogo } from './MgLogo';
import MgComponent from './MgComponent';
import { withRouter } from './withRouter';

class MgBlockHeader extends MgComponent {
 
  render() {
    return (<> <Row className="MgBlockHeader"><Col span={6} align="middle"><MgLogo/></Col>
                    <Col span={12}></Col>
                    <Col span={6}><MgMainMenu/></Col>
                </Row></>);
  }
}

export default withRouter(MgBlockHeader);