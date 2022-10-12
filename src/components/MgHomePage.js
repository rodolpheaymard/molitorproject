import 'antd/dist/antd.css';
import React from 'react';
import { Col, Row } from 'antd';
import { MgHeader } from './MgHeader';
import { MgHomeBlock } from './MgHomeBlock';
import { MgFooter } from './MgFooter';
  
 
export class MgHomePage extends React.Component {
 
    render() {
      return ( <><Row><Col span={24}><MgHeader /></Col></Row>
                  <Row><Col span={24}><MgHomeBlock /></Col></Row>
                  <Row><Col span={24}><MgFooter /></Col></Row></> 
      );
    }
  }
