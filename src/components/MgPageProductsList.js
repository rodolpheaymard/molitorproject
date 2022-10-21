import React from 'react';
import MgPage from './MgComponent';
import MgBlockHeader from './MgBlockHeader';
import { Typography } from 'antd';
import { Col, Row } from 'antd';
import { withRouter } from './withRouter';
const { Title } = Typography;
  
 

 class MgPageProductsList extends MgPage {
 
  render() {
    return (<><Row><Col span={24}><MgBlockHeader /></Col></Row>
    <Row><Col span={24}> <Title> Work of Art List Page</Title></Col></Row> </>);
  }
}

export default withRouter(MgPageProductsList);