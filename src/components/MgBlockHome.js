import React from 'react';
import { withRouter } from './withRouter';
import 'antd/dist/antd.css';
//import { Col, Row } from 'antd';
import MgBlockProductsList  from './MgBlockProductsList';
import MgComponent from './MgComponent';


class MgBlockHome extends MgComponent {
  constructor(props) {
    super(props);
    
    this.catalog = props.catalog;
  }

  GetProducts() {
    this.products = this.catalog.GetProductsList("home");
  }

  render() {
    this.GetProducts();

     return ( <> <MgBlockProductsList products={this.products}/> </> 
    );
  }
}

export default withRouter(MgBlockHome);