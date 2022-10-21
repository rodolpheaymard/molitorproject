import React from 'react';
import MgPage from './MgPage';
import { Typography } from 'antd';
import { Col, Row } from 'antd';
import MgComponent from './MgComponent';

const { Title } = Typography;


class MgPageArtist extends MgComponent {
 
  render() {
    return (<><Row><Col span={24}><MgHeader /></Col></Row>
    <Row><Col span={24}> <Title>Artist Page </Title></Col></Row>
    <Row><Col span={24}><MgFooter /></Col></Row></> );
  }
}

export default withRouter(MgPageArtist);