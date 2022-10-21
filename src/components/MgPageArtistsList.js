import React from 'react';
import MgPage from './MgComponent';
import { Typography  } from 'antd';
import { Col, Row } from 'antd';
import MgBlockHeader from './MgBlockHeader';
import { withRouter } from './withRouter';
const { Title } = Typography;
  
 

class MgPageArtistsListPage extends MgPage {
 
  render() {
    return (<><Row><Col span={24}><MgBlockHeader /></Col></Row>
    <Row><Col span={24}> <Title> Artists List Page</Title></Col></Row></> );
  }
}

export default withRouter(MgPageArtistsListPage);