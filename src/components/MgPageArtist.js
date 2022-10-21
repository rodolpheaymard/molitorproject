import React from 'react';
import MgPage from './MgPage';
import { Typography } from 'antd';
import { Col, Row } from 'antd';

const { Title } = Typography;


class MgPageArtist extends MgPage {
 
  render() {
    return (<><Row><Col span={24}><MgHeader /></Col></Row>
    <Row><Col span={24}> <Title>Artist Page </Title></Col></Row>
    <Row><Col span={24}><MgFooter /></Col></Row></> );
  }
}

export default withRouter(MgPageArtist);