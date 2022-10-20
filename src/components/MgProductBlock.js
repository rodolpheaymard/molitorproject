import React from 'react';
import { MtIsNull } from '../utils/MtTools';
import 'antd/dist/antd.css';
import { Typography , Space } from 'antd';
const { Title } = Typography;


export class MgProductBlock extends React.Component {
  constructor(props) {
    super(props);
    this.product = props.product;
    this.legend = {};
    this.legend.vertical = props.vlegend;
    this.legend.horizontal = props.hlegend;
  }

  render() {
    if (MtIsNull(this.product))
      return <></>;
      
      let blk1 = <img src={this.product.GetMediaUrl()} alt={this.product.title}></img>;
      let blk2 = <div className={"MgLegend " + (this.legend.horizontal ==="left"? "MgAlignLeft" : "MgAlignRight")}>
        <Space direction="vertical" size="0">
          <Title level={4}><strong>{this.product.title}</strong></Title>
          <Title level={5}>{this.product.author.first_name} &nbsp;{this.product.author.last_name}</Title>
        </Space>
                 </div>;
      if (this.legend.vertical === "above")
      {
        let blk3 = blk1;
        blk1=blk2;
        blk2 = blk3;
      }

    return ( <div className='MgProductBlock MgVertical'>{blk1}{blk2}</div>  );
  }
}
