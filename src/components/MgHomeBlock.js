import 'antd/dist/antd.css';
import React from 'react';
//import { Col, Row } from 'antd';
//import img_waiting from '../assets/images/img_cheeta.JPG';
import { MgProductListBlock } from './MgProductListBlock';
//import { MeCatalog } from '../model/MeCatalog';


export class MgHomeBlock extends React.Component {
  constructor(props) {
    super(props);
    
    this.catalog = props.catalog;
  }

  GetProducts() {
    this.products = this.catalog.GetProductsList("home");
  }

  render() {
    this.GetProducts();

     return ( <> <MgProductListBlock products={this.products}/> </> 
    );
  }
}
