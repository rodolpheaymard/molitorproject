
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
        children: [ { label: 'Home', key: 'home' },
                    { label: 'Exhibition', key: 'exhibition' },
                    { label: 'Collections', key: 'collections' },
                    { label: 'Artists', key: 'artists'  }]
      }
    ];
    return <Menu items={items} mode="horizontal" onClick={this.handleClick} />;
  }
}

export default withRouter(MgMainMenu)



