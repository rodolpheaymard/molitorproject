import React from 'react';
import { Typography  } from 'antd';
import { Col, Row } from 'antd';
import { MgHeader } from './MgHeader';
const { Title } = Typography;
  
 

export class MgArtistsListPage extends React.Component {
 
  render() {
    return (<><Row><Col span={24}><MgHeader /></Col></Row>
    <Row><Col span={24}> <Title> Artists List Page</Title></Col></Row></> );
  }
}