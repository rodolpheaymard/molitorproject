import 'antd/dist/antd.css';
import React from 'react';
import { Col, Row } from 'antd';
import img_waiting from '../assets/images/img_cheeta.JPG';

export class MgHomeBlock extends React.Component {
 
    render() {
      return ( <><Row><Col span={24}> <div><p></p>Hello World</div> </Col></Row>
                  <Row><Col span={24}> <div align="center"><img src={img_waiting} alt="coming soon"  width="70%"></img> </div></Col></Row>
                  <Row><Col span={24}> <div height="300px">Another block</div> </Col></Row></> 
      );
    }
  }
