
import React from 'react';
import { Menu } from 'antd';
import { withRouter } from "./withRouter";


class MgMainMenu extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (event) {

    this.props.router.navigate("/"+ event.key); 
  
  };
  
  render() {

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
}

export default withRouter(MgMainMenu)



