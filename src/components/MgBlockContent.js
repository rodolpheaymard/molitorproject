import React from 'react';
import { withRouter } from "./withRouter";
import MgComponent from './MgComponent';
import 'antd/dist/antd.css';
import { Col, Row } from 'antd';
import { MtIsNull, MtToArray } from '../utils/MtTools';
import { Me } from '../model/Me';
import { MeMedia } from '../model/MeMedia';
import ReactHtmlParser from 'react-html-parser'; 

class MgBlockContent extends MgComponent {
  constructor(props) {
    super(props);
    this.content = props.content;
  }

  render() {
    if (MtIsNull(this.content))
      return <></>;
    
    
    let rdrContent = null;
     switch(this.content.template)
     {
      case Me.TPL_SIMPLE_TEXT : rdrContent = this.rdrSimpleText(); break;
      case Me.TPL_HTML :  rdrContent = this.rdrHtml(); break;
      case Me.TPL_IMAGE6_TEXT18 : rdrContent = this.rdrImg6Text18();  break;
      default : rdrContent = this.rdrSimpleText(); 
     }

     return (<>{rdrContent}</>);
  }

  rdrSimpleText()
  {
    return <div className='MgBlockContent' key={this.content.id} >{this.content.data}</div>  ;
  }

  rdrHtml()
  {
    return <div key={this.content.id}> {ReactHtmlParser(this.content.data) } </div>  ;
  }


  rdrImg6Text18()
  {
    if (this.IsDesktop())
    {     
       return this.desktopImg6Text18();
    }
    else if (this.IsMobile())
    {
       return this.mobileImg6Text18();
    }
    return <></>;
  }

  desktopImg6Text18() {
    return <div className='MgBlockContent' key={this.content.id}>
      <Row><Col span={6}><img src={this.GetMedia(0).GetMediaUrl()} alt={this.GetMedia(0).alt_text}/></Col>
      <Col span={18}>{this.content.data}</Col></Row></div>  ;
  }

  mobileImg6Text18() {
    return <div className='MgBlockContent' key={this.content.id}>
    <Row><Col>{this.GetMedia(0)}</Col></Row>
    <Row><Col span={18}>{this.content.data}</Col></Row></div>  ;
  }

  
  GetMedia(idx)
  {
    let imgs = MtToArray(this.medias);
    if (imgs.length > 0)
    {
      return imgs[idx];
    }
    return MeMedia.GetDefaultImage();
  }
}

export default withRouter(MgBlockContent)
