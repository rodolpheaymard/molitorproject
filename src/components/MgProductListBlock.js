import 'antd/dist/antd.css';
import React from 'react';
//import { Col, Row } from 'antd';
//import img_waiting from '../assets/images/img_cheeta.JPG';
import { MgProductBlock } from './MgProductBlock';

export class MgProductListBlock extends React.Component {
  constructor(props) {
    super(props);
    this.products = props.products;
  }

  render() {
    const listProducts = this.products.map((prd) => <MgProductBlock key={prd.id} product={prd}/>);

    return ( <>{listProducts}</> 
    );
  }
}
