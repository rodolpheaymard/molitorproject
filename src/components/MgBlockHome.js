import React from 'react';
import { withRouter } from './withRouter';
import MgBlockProductsList  from './MgBlockProductsList';
import MgComponent from './MgComponent';
import { Me } from '../model/Me';
import { MtIsNotNull, MtToArray } from '../utils/MtTools';
import MgBlockContent from './MgBlockContent';


class MgBlockHome extends MgComponent {
  constructor(props) {
    super(props);
    
    this.catalog = props.catalog;
  }

  GetContents(ctrs, idx1,idx2) {
    let contentstoshow = ctrs.GetObjectsList(Me.CONTENT); 
    
    let tabctts = MtToArray(contentstoshow);
    let blockcontents = [];
    for(let idx = 0; idx < tabctts.length; idx++ )
    {
      let val = tabctts[idx];
      if (MtIsNotNull(val) && idx>=idx1 && idx<idx2)
      {
        blockcontents.push(val);
      } 
    }
    return blockcontents;
  }

  GetBlockProducts(ctts) {
    this.products = ctts.GetObjectsList(Me.PRODUCT); 
    return ( <> <MgBlockProductsList products={this.products}/> </> );
  }

  render() {
    let ctts = this.catalog.GetContentsList("home");

    let prds = this.GetBlockProducts(ctts);

    let before = ctts.GetFirstPosition(Me.PRODUCT); 
    let last = ctts.GetLastPosition(Me.ANY); 
    let contentsbefore = this.GetContents(ctts, 0, before);
    let contentsafter = this.GetContents(ctts, before , last);

    const listContentsBefore = contentsbefore.map((val) => <MgBlockContent key={val.id} content={val} />);
    const listContentsAfter = contentsafter.map((val) => <MgBlockContent key={val.id} content={val} />);
    

     return ( <>{listContentsBefore}{prds}{listContentsAfter}</> );
  }
}

export default withRouter(MgBlockHome);