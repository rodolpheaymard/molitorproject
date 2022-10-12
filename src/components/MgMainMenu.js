
import React from 'react';
import { Menu } from 'antd';
import {withRouter} from './withRouter'
//import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';



class MgMainMenu extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (event) {

    this.props.navigate("/"+ event.key); 
  
  };
  
  render() {
     // const [current, setCurrent] = React.useState('mail');

      const items = [
      {
        label: 'Menu',
        key: 'submenu',
        children: [ { label: 'Home', key: 'home' },
                    { label: 'Exhibition', key: 'exhibition' },
                    { label: 'Collections', key: 'workofart' },
                    { label: 'Artists', key: 'artists'  }]
      }
    ];
    return <Menu items={items} mode="horizontal" onClick={this.handleClick} />;
    // return <Menu items={items} selectedKeys={[current]} mode="horizontal" onClick={this.handleClick} />;
  }
}

export default withRouter(MgMainMenu)



