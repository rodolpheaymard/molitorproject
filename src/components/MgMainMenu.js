
import React from 'react';
import { Menu } from 'antd';
import { withRouter } from "./withRouter";
import MgComponent from './MgComponent';

// import { Layout } from 'antd';
// import Sider from 'antd/lib/layout/Sider';


class MgMainMenu extends MgComponent {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (event) {
    this.props.router.navigate("/"+ event.key);   
  };
  
  render() {  
    let menu = null;
     
    if (this.IsDesktop())
    {
      menu = this.desktopRender();
    }
    else if (this.IsMobile())
    {
      menu = this.mobileRender();
    }
   return (<>{menu}</>);
  }

  
  desktopRender()
  {
  
    const items = [
      {
        label: 'Menu',
        key: 'submenu',
        style: {textAlign: 'right'},
        children: [ { label: 'Home', key: 'home' , style: {textAlign: 'right'}},
        { label: 'Exhibition', key: 'exhibition'  , style: {textAlign: 'right'}},
        { label: 'Collections', key: 'collections'  , style: {textAlign: 'right'}},
        { label: 'Artists', key: 'artists'   , style: {textAlign: 'right'}}]
      }
    ];
    return <Menu items={items} mode="horizontal" onClick={this.handleClick} className="MgRightAlign"/>;
  }
  


  mobileRender() 
  {    
    const items = [ { label: 'Home', key: 'home' , style: {textAlign: 'right'}},
        { label: 'Exhibition', key: 'exhibition'  , style: {textAlign: 'right'}},
        { label: 'Collections', key: 'collections'  , style: {textAlign: 'right'}},
        { label: 'Artists', key: 'artists'   , style: {textAlign: 'right'}}];

    return    <Menu items={items} mode="horizontal" onClick={this.handleClick} className="MgRightAlign"/>;
     
    //return <Layout>
    //  <Sider collapsible>
    //  <Menu items={items} mode="horizontal" onClick={this.handleClick} className="MgRightAlign"/>
    //  </Sider>
    //</Layout>

  }
}

export default withRouter(MgMainMenu)



