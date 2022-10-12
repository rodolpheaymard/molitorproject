import React from 'react';
import { Typography , Space } from 'antd';
import { Col, Row } from 'antd';
const { Title } = Typography;


export class MgWorkOfArtPage extends React.Component {
 
  render() {
    return (<><Row><Col span={24}><MgHeader /></Col></Row>
    <Row><Col span={24}> <Title> Work of Art Page</Title></Col></Row>
    <Row><Col span={24}><MgFooter /></Col></Row></> );
  }
}