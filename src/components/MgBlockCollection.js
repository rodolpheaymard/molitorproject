import React from 'react';
import { withRouter } from "./withRouter";
import MgComponent from './MgComponent';
import 'antd/dist/antd.css';
import { Row, Col, Typography  } from 'antd';
import { MtIsNull } from '../utils/MtTools';
const { Title } = Typography;


class MgBlockCollection extends MgComponent {
  constructor(props) {
    super(props);
    this.collection = props.collection;

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (event) {
    this.props.router.navigate("/collection/"+ this.collection.id);   
  };

  render() {
    if (MtIsNull(this.collection))
      return <></>;
      
    //  let blk1 = <img src={this.collection.GetMediaUrl()} alt={this.collection.GetFullName()} onClick={this.handleClick} ></img>;
    //  let blk2 = <div className={"MgArtistLegend "}>
    //    <Row gutter={[0,0]}><Col><Title level={5}>{this.collection.title}</Title></Col></Row>
    //    </div>;
 
    return (<div className='MgBlockCollection MgAlignCenter'>
             <Row className='MgBlockCollectionsRow'>
                <Col span={4}>
                <Title level={2} onClick={this.handleClick} >
                <img src={this.collection.GetMediaUrl()} alt={this.collection.title}></img></Title>
                </Col>
                 <Col span={8} className='MgBlockCollectionText'>
                 <Title level={2} onClick={this.handleClick}>{this.collection.title}</Title>                 
                 </Col>
                 </Row>
            </div>   );
  }
}

export default withRouter(MgBlockCollection)
