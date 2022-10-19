import 'antd/dist/antd.css';
import React from 'react';
//import { Col, Row } from 'antd';
//import img_waiting from '../assets/images/img_cheeta.JPG';

export class MgProductBlock extends React.Component {
  constructor(props) {
    super(props);
    this.product = props.product;
  }

  render() {
    return ( <div className='MgProductBlock MgVertical'>
     
     <img src={this.product.GetImageUrl()} alt={this.product.title} ></img>
    
    <div className='MgHorizontal'>
      <strong>{this.product.title}</strong>
      &nbsp; by &nbsp;{this.product.author.first_name} &nbsp;{this.product.author.last_name}
     </div>
    </div> 
    );
  }
}
