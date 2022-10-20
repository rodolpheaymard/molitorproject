import React from 'react';
import { Typography  } from 'antd';
import { Col, Row } from 'antd';
import { MgHeader } from './MgHeader';
import { MgFooter } from './MgFooter';
import MgProductBlock  from './MgProductBlock';
import { withRouter } from "./withRouter";


const { Title } = Typography;



class MgProductPage extends React.Component {
  constructor(props)
  {
    super(props);
    this.product_id = props.router.params.id;
    this.catalog = props.catalog;
    this.product = this.catalog.GetProduct(this.product_id);
  }

  render() {
    return (<><Row><Col span={24}><MgHeader /></Col></Row>
    <Row><Col span={24}> <Title> {this.product.title} </Title></Col></Row>
    <Row><Col span={24}> <MgProductBlock product={this.product}/> </Col></Row>
    <Row><Col span={24}><MgFooter /></Col></Row></> );
  }
}

export default withRouter(MgProductPage)
 