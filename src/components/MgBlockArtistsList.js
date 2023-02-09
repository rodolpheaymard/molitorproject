import React, { Fragment } from 'react';
import { withRouter } from './withRouter';
import MgComponent from './MgComponent';
import { MtIsNotNull, MtToArray, MtToPairArray } from '../utils/MtTools';
import { Col, Row } from 'antd';
import MgBlockArtist from './MgBlockArtist';


class MgBlockArtistsList extends MgComponent {
  constructor(props) {
    super(props);
    
    this.artists = props.artists;  
  }



  render() {
    
    let listArtists = null;
     
    if (this.IsDesktop())
    {
        listArtists = this.desktopRender();
    }
    else if (this.IsMobile())
    {
        listArtists = this.mobileRender();
    }

   return (<>{listArtists}</>);

  }

  desktopRender() {
    let tabarts = MtToPairArray(this.artists);
    const listArtists = tabarts.map((pair) => {
      let art1 = <Col span={12}><MgBlockArtist key={pair.left.id} artist={pair.left} /></Col>;
      let art2;
      if (MtIsNotNull(pair.right)) {
        art2 = <Col span={12}><MgBlockArtist key={pair.right.id} artist={pair.right} /></Col>;
      }
      return <Fragment key={pair.left.id + "_group"}><Row>{art1}{art2}</Row></Fragment>;
    });
    return listArtists;
  }

  mobileRender() {
        // rendu sur 1 colonne    
        let tabarts = MtToArray(this.artists);
        const listArtists = tabarts.map((art) => {
            return  <Row><Col span={24}><MgBlockArtist key={art.id} artist={art}/></Col></Row>
          });
          return listArtists;
     
}

}

export default withRouter(MgBlockArtistsList);