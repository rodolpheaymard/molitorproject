import React from 'react';
import { withRouter } from "./withRouter";
import MgComponent from './MgComponent';
import { MtIsNull } from '../utils/MtTools';
import MgBlockArtistNewsList from './MgBlockArtistNewsList';


class MgBlockArtistDetails extends MgComponent {
  constructor(props) {
    super(props);
    this.artist = props.artist;
  }


  render() {
    if (MtIsNull(this.artist))
      return <></>;

    return ( <div className='MgBlockArtistDetails MgVertical'>
                <div className='MgVertical MgAlignLeft MgTitle'>{this.artist.GetFullName()}</div>
                <br/>
                <br/>
                <div className='MgBlockArtistDescription MgVertical MgAlignLeft'>{this.artist.short_description}</div>
                <br/>
                <br/>
                <br/>
                <div className='MgVertical MgAlignLeft'><MgBlockArtistNewsList  artist={this.artist}/> </div>
            </div>  );
          }
}

export default withRouter(MgBlockArtistDetails)
