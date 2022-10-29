import React from 'react';
//import { Typography } from 'antd';
import { Col, Row } from 'antd';
import MgComponent from './MgComponent';
import MgBlockHeader from './MgBlockHeader';
import MgBlockArtist from './MgBlockArtist';
import MgBlockArtistDetails from './MgBlockArtistDetails';
import MgBlockFooter from './MgBlockFooter';
import { withRouter } from './withRouter';

//const { Title } = Typography;


class MgPageArtist extends MgComponent {
  constructor(props)
  {
    super(props);
    this.artist_id = props.router.params.id;
    this.catalog = props.catalog;
    this.artist = this.catalog.GetArtist(this.artist_id);
  }

  render() {
    let pgArtist = null;
    
    if (this.IsDesktop())
    {
      pgArtist = this.desktopRender();
    }
    else if (this.IsMobile())
    {
      pgArtist = this.mobileRender();
    }

    return (<>{pgArtist}</>);
  }

  desktopRender() {
    return (<><Row><Col span={24}><MgBlockHeader /></Col></Row>
    <Row><Col span={6}><MgBlockArtist artist={this.artist}/> </Col>
        <Col span={18}> <MgBlockArtistDetails artist={this.artist}/> </Col>  </Row>
    <Row><Col span={24}><MgBlockFooter /></Col></Row></> );
  }

  mobileRender() {
    return (<><Row><Col span={24}><MgBlockHeader /></Col></Row>
    <Row><Col span={24}><MgBlockArtist artist={this.artist}/> </Col></Row>
    <Row><Col span={24}><MgBlockArtistDetails artist={this.artist}/> </Col>  </Row>
    <Row><Col span={24}><MgBlockFooter /></Col></Row></> );
  }
}
export default withRouter(MgPageArtist);