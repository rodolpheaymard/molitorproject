import React from 'react';
import { Col, Row } from 'antd';
import  MgMainMenu  from './MgMainMenu';
import { MgLogo } from './MgLogo';
import MgComponent from './MgComponent';
import { withRouter } from './withRouter';

class MgBlockHeader extends MgComponent {
 
  render() {
    return (<> <Row className="MgBlockHeader"><Col span={8} align="left"><MgLogo/></Col>
                    <Col span={14}></Col>
                    <Col span={2}><MgMainMenu /></Col>
                </Row></>);
  }
}

export default withRouter(MgBlockHeader);