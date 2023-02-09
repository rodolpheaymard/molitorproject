import React from 'react';
import { withRouter } from "./withRouter";
import MgComponent from './MgComponent';
import { MtIsNull } from '../utils/MtTools';
import MgBlockArtistNewsList from './MgBlockArtistNewsList';


class MgBlockArtistDetails extends MgComponent {
  constructor(props) {
    super(props);
    this.artist = props.artist;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (event) {
   // this.props.router.navigate("/"+ this.artist.id);   
  };

  render() {
    if (MtIsNull(this.artist))
      return <></>;

    return ( <div className='MgBlockArtistDetails MgVertical'>
        <div className='MgVertical MgAlignLeft MgTitle'>{this.artist.GetFullName()}</div>
        <div className='MgVertical MgAlignRight'>-</div>        
        <div className='MgVertical MgAlignLeft'>{this.artist.short_description}</div>
        <br/>
        <br/>
        <br/>
        <div className='MgVertical MgAlignLeft'><MgBlockArtistNewsList  artist={this.artist}/> </div>
    </div>  );
  }
}

export default withRouter(MgBlockArtistDetails)
