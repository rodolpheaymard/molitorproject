import React from 'react';
import { withRouter } from './withRouter';
import MgComponent from './MgComponent';
import MgBlockHeader from './MgBlockHeader';

import { Typography  } from 'antd';
import { Col, Row } from 'antd';
const { Title } = Typography;
  
 

class MgPageArtistsListPage extends MgComponent {
 
  render() {
    return (<><Row><Col span={24}><MgBlockHeader /></Col></Row>
    <Row><Col span={24}> <Title> Artists List Page</Title></Col></Row></> );
  }
}

export default withRouter(MgPageArtistsListPage);