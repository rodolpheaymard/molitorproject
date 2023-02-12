import React from 'react';
import { withRouter } from "./withRouter";
import MgComponent from './MgComponent';
import { Col, Row , Button} from 'antd';
import { MtIsNull } from '../utils/MtTools';
import { Me } from '../model/Me';
import parse from 'html-react-parser';

class MgBlockContent extends MgComponent {
  constructor(props) {
    super(props);
    this.state = {  content : props.content,                    
                    showMore : props.showMore,
                    showMoreOnOff : false,
                    showMoreBtn : <></>,
                    smallContent : "" };
                    
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount()
  {
    this.calcShowMore(this.state.showMoreOnOff);
  }
  
  componentDidUpdate(prevProps) {
    if (this.props.content !== prevProps.content) 
    {
      this.calcShowMore(this.state.showMoreOnOff);
    }
  }
  
  
  calcShowMore(newShow)
  {
    if (this.state.showMore === true)
    {
      let txtStr = this.state.content.data;
      if (txtStr.length > 150)
      {
        if (newShow === false)
        {
          if (this.state.content.template === Me.TPL_HTML)
          {
            // html reduction   
            let  bits = txtStr.split('>');
            let  str = "";
            for(let i=0 ; i< bits.length && str === ""; i++)
            {
               if (bits[i].length > 3 )
               {
                 str = bits[i].slice(0,100) + "...";
               }
            }
            txtStr = "<p>"+str+"</p>";
          }
          else
          {
            // "simple_text"

            txtStr = txtStr.slice(0,100) + "...  " ;
          }
          this.setState( { showMoreBtn : <Button type="link" onClick={this.handleClick}> See More </Button> } );
        }
        else 
        {
          this.setState( { showMoreBtn : <Button type="link" onClick={this.handleClick}> See Less </Button> } );
        }   
      }  
      this.setState({smallContent : txtStr});
    }
  }

  handleClick (event) {
    let newShow = !this.state.showMoreOnOff;
    this.setState( { showMoreOnOff : newShow});
    this.calcShowMore(newShow);
  }

  render() {
    if (MtIsNull(this.state.content))
      return <></>;
    
    
    let rdrContent = null;
     switch(this.state.content.template)
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
    if (this.state.showMore === true)
    {
      return <div className='MgBlockContent' key={this.state.content.id}>{this.state.smallContent}{this.state.showMoreBtn}</div>  ;
    }

    return <div className='MgBlockContent' key={this.state.content.id}>{this.state.content.data}</div>  ;
  }

  rdrHtml()
  {
    if (this.state.showMore === true)
    {
      return <div className='MgBlockContent' key={this.state.content.id}>{parse(this.state.smallContent)}{this.state.showMoreBtn}</div>  ;
    }

    return <div className='MgBlockContent' key={this.state.content.id} >{parse(this.state.content.data)}</div>  ;
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
    let cnt = this.state.content;
    let imgurl = cnt.GetMediaUrl();
    let imgalt = cnt.GetMediaAltText();
 
    return <div className='MgBlockContent' key={cnt.id}>
      <Row><Col span={6}><img src={imgurl} alt={imgalt}/></Col>
      <Col span={18}>{this.content.data}</Col></Row></div>  ;
  }

  mobileImg6Text18() {
    let cnt = this.state.content;
    let imgurl = cnt.GetMediaUrl();
    let imgalt = cnt.GetMediaAltText();
    return <div className='MgBlockContent' key={cnt.id}>
      <Row><Col><img src={imgurl} alt={imgalt}/></Col></Row>
      <Row><Col>{this.content.data}</Col></Row></div>  ;
  }
}

export default withRouter(MgBlockContent)
