import React from 'react';
import { withRouter } from './withRouter';
import { Fragment } from 'react';
import 'antd/dist/antd.css';
import { MtIsNotNull, MtToNupletArray } from '../utils/MtTools';
import { Col, Row } from 'antd';
import MgBlockProduct from './MgBlockProduct';
import MgComponent from './MgComponent';

class MgBlockProductsList extends MgComponent {
  constructor(props) {
    super(props);
    this.products = props.products;
  }

  render() {
     let listProducts = null;
     
     if (this.IsDesktop())
     {
       listProducts = this.desktopRender();
     }
     else if (this.IsMobile())
     {
       listProducts = this.mobileRender();
     }

    return (<>{listProducts}</>);
  }  



  desktopRender() {
   // rendu sur 2 colonnes  alternées
   let tabprds = MtToNupletArray(this.products, 4);
    const listProducts = tabprds.map((nuplet) => {
      let prd1 = <Col span={12}><MgBlockProduct key={nuplet.val[0].id} product={nuplet.val[0]} vlegend="below" hlegend="left" /></Col>;
      let prd2;
      if (MtIsNotNull(nuplet.val[1])) {
        prd2 = <Col span={12}><MgBlockProduct key={nuplet.val[1].id} product={nuplet.val[1]} vlegend="above" hlegend="right" /></Col>;
      }
      let prd3;
      if (MtIsNotNull(nuplet.val[2])) {
        prd3 = <Col span={12}><MgBlockProduct key={nuplet.val[2].id} product={nuplet.val[2]} vlegend="above" hlegend="left" /></Col>;
      }
      let prd4;
      if (MtIsNotNull(nuplet.val[3])) {
        prd4 = <Col span={12}><MgBlockProduct key={nuplet.val[3].id} product={nuplet.val[3]} vlegend="below" hlegend="right" /></Col>;
      }
      return <Fragment key={nuplet.val[0].id + "_group"}><Row>{prd1}{prd2}</Row><Row>{prd3}{prd4}</Row></Fragment>;
    });
    return listProducts;
  }

  
  mobileRender() {
    // rendu sur 1 colonne    
     const listProducts = this.products.map((prd) => {
       return  <Row><Col span={24}><MgBlockProduct key={prd.id} product={prd} vlegend="below" hlegend="left" /></Col></Row>
     });
     return listProducts;
    } 
}

export default withRouter(MgBlockProductsList);