import React from 'react';
import { withRouter } from "./withRouter";
import MgComponent from './MgComponent';
import { Typography , Col, Row } from 'antd';
import { MtIsNull } from '../utils/MtTools';
const { Title } = Typography;


class MgBlockArtist extends MgComponent {
  constructor(props) {
    super(props);
    this.artist = props.artist;

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (event) {
    this.props.router.navigate("/artist/"+ this.artist.id);   
  };

  render() {
    if (MtIsNull(this.artist))
      return <></>;
      
      let blk1 = <img src={this.artist.GetMediaUrl()} alt={this.artist.GetFullName()} onClick={this.handleClick} ></img>;
      let blk2 = <div className={"MgArtistLegend "}>
                <Row gutter={[0,0]}><Col><Title level={5}>{this.artist.GetFullName()}</Title></Col></Row>
                </div>;
 
    return ( <div className='MgBlockArtist MgVertical'>{blk1}{blk2}</div>  );
  }
}

export default withRouter(MgBlockArtist)
