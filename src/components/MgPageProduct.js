import React from 'react';
import { withRouter } from "./withRouter";
import MgComponent from './MgComponent';
import { Col, Row } from 'antd';
import MgBlockHeader from './MgBlockHeader';
import MgBlockFooter from './MgBlockFooter';
import MgBlockProduct from './MgBlockProduct';
import MgBlockProductDetails from './MgBlockProductDetails';




class MgPageProduct extends MgComponent {
  constructor(props)
  {
    super(props);
    this.product_id = props.router.params.id;
    this.catalog = props.catalog;
    this.product = this.catalog.GetProduct(this.product_id);
  }

  render() {
    let pgProduct = null;
     
     if (this.IsDesktop())
     {
      pgProduct = this.desktopRender();
     }
     else if (this.IsMobile())
     {
      pgProduct = this.mobileRender();
     }

    return (<>{pgProduct}</>);
  }

  desktopRender() {
    return (<><Row><Col span={24}><MgBlockHeader /></Col></Row>
    <Row><Col span={18}><MgBlockProduct product={this.product}/> </Col>
         <Col span={6}> <MgBlockProductDetails product={this.product}/> </Col>  </Row>
    <Row><Col span={24}><MgBlockFooter /></Col></Row></> );
  }

  mobileRender() {
    return (<><Row><Col span={24}><MgBlockHeader /></Col></Row>
    <Row><Col span={24}><MgBlockProduct product={this.product}/> </Col></Row>
    <Row><Col span={24}><MgBlockProductDetails product={this.product}/> </Col>  </Row>
    <Row><Col span={24}><MgBlockFooter /></Col></Row></> );
  }
}

export default withRouter(MgPageProduct);
 