import React from 'react';
import { withRouter } from "./withRouter";
import MgComponent from './MgComponent';
import { MtIsNotNull } from '../utils/MtTools';
import {  Card , Button } from 'antd';



class MgBlockArtistNews extends MgComponent {
  constructor(props) {
    super(props);
    this.state = { artist : props.artist,
                   content : props.content,
                   showMore : false };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (event) {
    this.setState( { showMore : !this.state.showMore });
  };

  render() {
    
    let titleStr = "...";
    if (MtIsNotNull(this.state.content.startdate))
    {
      titleStr = this.state.content.startdate.toDateString();
    }

    let txtStr = this.state.content.data;
    let showMore = <></>;
    if (txtStr.length > 150)
    {
      if (this.state.showMore === false )
      {
        txtStr = txtStr.slice(0,100) + "...  " ;
        showMore = <Button type="link" onClick={this.handleClick}> See More </Button>;
       }
      else 
      {
       showMore = <Button type="link" onClick={this.handleClick}> See Less </Button>;
      }
    }

    return (  <Card title={titleStr} key={this.state.content.id} className='MgBlockArtistNews MgVertical'>
                   <p> {txtStr}{showMore}
                   </p>
                </Card>                
            );
  }
}

export default withRouter(MgBlockArtistNews)
