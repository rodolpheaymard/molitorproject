import React from 'react';
import { Col, Row } from 'antd';
import  MgMainMenu  from './MgMainMenu';
import { MgLogo } from './MgLogo';


export class MgHeader extends React.Component {
 
  render() {
    return (<> <Row className="MgHeader"><Col span={6} align="middle"><MgLogo/></Col>
                    <Col span={12}></Col>
                    <Col span={6}><MgMainMenu/></Col>
                </Row></>);
  }
}
