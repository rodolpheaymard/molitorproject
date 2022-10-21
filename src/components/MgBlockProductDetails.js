import React from 'react';
import { withRouter } from "./withRouter";
import MgComponent from './MgComponent';
import { MtIsNull } from '../utils/MtTools';
//import { Typography , Col, Row } from 'antd';
//const { Title } = Typography;


class MgBlockProductDetails extends MgComponent {
  constructor(props) {
    super(props);
    this.product = props.product;
    this.legend = {};
    this.legend.vertical = props.vlegend;
    this.legend.horizontal = props.hlegend;

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (event) {
   // this.props.router.navigate("/product/"+ this.product.id);   
  };

  render() {
    if (MtIsNull(this.product))
      return <></>;

    return ( <div className='MgBlockProductDetails MgVertical'>
        <div className='MgVertical MgAlignRight MgTitle'>{this.product.title}</div>
        <div className='MgVertical MgAlignRight'>{this.product.author.first_name + " " + this.product.author.last_name }</div>
        <div className='MgVertical MgAlignRight'>-</div>
        <div className='MgVertical MgAlignRight'>Painting</div>
        <div className='MgVertical MgAlignRight'>Dimensions : 60x42 cms</div>
        <div className='MgVertical MgAlignRight'>-</div>
        <button className='MgButton'>Acquire this Work of Art</button>
    </div>  );
  }
}

export default withRouter(MgBlockProductDetails)
