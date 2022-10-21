import React from 'react';
import MgPage from './MgComponent';
import { Typography  } from 'antd';
import { Col, Row } from 'antd';
import MgBlockHeader from './MgBlockHeader';
import MgBlockFooter from './MgBlockFooter';
import MgBlockProduct from './MgBlockProduct';
import { withRouter } from "./withRouter";


const { Title } = Typography;



class MgPageProduct extends MgPage {
  constructor(props)
  {
    super(props);
    this.product_id = props.router.params.id;
    this.catalog = props.catalog;
    this.product = this.catalog.GetProduct(this.product_id);
  }

  render() {
    return (<><Row><Col span={24}><MgBlockHeader /></Col></Row>
    <Row><Col span={24}> <Title> {this.product.title} </Title></Col></Row>
    <Row><Col span={24}> <MgBlockProduct product={this.product}/> </Col></Row>
    <Row><Col span={24}><MgBlockFooter /></Col></Row></> );
  }
}

export default withRouter(MgPageProduct);
 