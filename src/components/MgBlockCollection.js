import React from 'react';
import { withRouter } from "./withRouter";
import MgComponent from './MgComponent';
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
 
    return (<div className='MgBlockCollection'>
             <Row className='MgBlockCollectionRow'>
             <Col span={8} className='MgAlignCenter'>
                <div className='MgImageEnlight'>
                <img width="100%" src={this.collection.GetMediaUrl()} onClick={this.handleClick} alt={this.collection.title} ></img>
                </div>
                </Col>
                 <Col span={16} className='MgBlockCollectionText'>
                 <Title level={3} onClick={this.handleClick}>{this.collection.title}</Title>                 
                 </Col>
                 </Row>
            </div>   );
  }
}

export default withRouter(MgBlockCollection)
