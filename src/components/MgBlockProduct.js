import React from 'react';
import { withRouter } from "./withRouter";
import MgComponent from './MgComponent';
import 'antd/dist/antd.css';
import { Typography , Col, Row } from 'antd';
import { MtIsNull } from '../utils/MtTools';
const { Title } = Typography;


class MgBlockProduct extends MgComponent {
  constructor(props) {
    super(props);
    this.product = props.product;
    this.legend = {};
    this.legend.vertical = props.vlegend;
    this.legend.horizontal = props.hlegend;
    this.legend.hide= props.nolegend;

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (event) {
    this.props.router.navigate("/product/"+ this.product.id);   
  };

  render() {
    if (MtIsNull(this.product))
      return <></>;
      
      let blk1 = <img src={this.product.GetMediaUrl()} alt={this.product.title} onClick={this.handleClick} ></img>;
      let blk2 = <div className={"MgLegend " + (this.legend.horizontal ==="left"? "MgAlignLeft" : "MgAlignRight")}>
        <Row gutter={[0,0]}><Col><Title level={4}><strong>{this.product.title}</strong></Title></Col></Row>          
        <Row gutter={[0,0]}><Col><Title level={5}>{this.product.author.first_name} &nbsp;{this.product.author.last_name}</Title></Col></Row>
        </div>;
      if (this.legend.vertical === "above")
      {
        let blk3 = blk1;
        blk1=blk2;
        blk2 = blk3;
      }

      if (this.legend.hide === true)
      {
        return ( <div className='MgBlockProduct MgVertical'> {blk1} </div>  );
      }
      return ( <div className='MgBlockProduct MgVertical'> {blk1} {blk2}</div>  );
  }
}

export default withRouter(MgBlockProduct)
