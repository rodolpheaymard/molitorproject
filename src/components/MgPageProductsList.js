import React from 'react';
import MgComponent from './MgComponent';
import MgBlockHeader from './MgBlockHeader';
//import { Typography } from 'antd';
import { Col, Row } from 'antd';
import { withRouter } from './withRouter';
import { Me } from '../model/Me';
import MgBlockProductsList from './MgBlockProductsList';
//const { Title } = Typography;
  
 

 class MgPageProductsList extends MgComponent {
  constructor(props)
  {
    super(props);
    this.collection_id = props.router.params.id;
    this.catalog = props.catalog;
    this.collection = this.catalog.GetContentsList(this.collection_id);
    this.products = this.collection.GetObjectsList(Me.PRODUCT); 
  }

  
  GetBlockProducts(ctts) {
    return ( <> <MgBlockProductsList products={this.products}/> </> );
  }

  render() {
  
    let prds = this.GetBlockProducts();

     return ( <><Row><Col span={24}><MgBlockHeader /></Col></Row>
                {prds}</>);
  }

}

export default withRouter(MgPageProductsList);