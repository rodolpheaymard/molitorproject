import React from 'react';
import { withRouter } from "./withRouter";
import MgComponent from './MgComponent';
import { MtIsNull } from '../utils/MtTools';
import MgBlockArtistNews from './MgBlockArtistNews';


class MgBlockArtistNewsList extends MgComponent {
  constructor(props) {
    super(props);
    this.artist = props.artist;
    this.artists_contents = this.artist.GetContents();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (event) {
   // this.props.router.navigate("/"+ this.artist.id);   
  };

  render() {
    
    if (MtIsNull(this.artist))
      return <></>;

     let newsBlock = this.artists_contents.map((content) =>  { return <MgBlockArtistNews artist={this.artist} content={content} /> ;});

    return ( <div className='MgBlockArtistNews MgVertical'>
              {newsBlock}
             </div>  );
  }
}

export default withRouter(MgBlockArtistNewsList)
