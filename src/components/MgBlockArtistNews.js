import React from 'react';
import { withRouter } from "./withRouter";
import MgComponent from './MgComponent';
import { MtIsNotNull } from '../utils/MtTools';
import {  Card  } from 'antd';
import MgBlockContent from './MgBlockContent';



class MgBlockArtistNews extends MgComponent {
  constructor(props) {
    super(props);
    this.state = { artist : props.artist,
                   content : props.content,
                   title : "" };
  }

  
  calcTitle()
  {
    if (MtIsNotNull(this.state.content.startdate))
    {
      this.setState( { title : this.state.content.startdate.toDateString()} );
    }
  }

  render() {
    
    let titleStr = "...";
    if (MtIsNotNull(this.state.content.startdate))
    {
      titleStr = this.state.content.startdate.toDateString();
    }


    return (  <Card title={titleStr} key={this.state.content.id} className='MgBlockArtistNews MgVertical'>
                   <MgBlockContent content={this.state.content} showMore={true} />
              </Card>                
            );
  }
}

export default withRouter(MgBlockArtistNews)
