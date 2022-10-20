import 'antd/dist/antd.css';
import React from 'react';
import {Fragment} from 'react';
import { MtIsNotNull, MtToNupletArray } from '../utils/MtTools';
import { Col, Row } from 'antd';
//import img_waiting from '../assets/images/img_cheeta.JPG';
import { MgProductBlock } from './MgProductBlock';

export class MgProductListBlock extends React.Component {
  constructor(props) {
    super(props);
    this.products = props.products;
  }

  render() {
    // rendu sur 2 colonnes
    let tabprds = MtToNupletArray(this.products,4);

    const listProducts = tabprds.map((nuplet) => {          
        let prd1 = <Col span={12}><MgProductBlock key={nuplet.val[0].id} product={nuplet.val[0]} vlegend="below" hlegend="left" /></Col>;
        let prd2 ;
        if (MtIsNotNull(nuplet.val[1]))
        {
          prd2 = <Col span={12}><MgProductBlock key={nuplet.val[1].id} product={nuplet.val[1]} vlegend="above" hlegend="right" /></Col> ;         
        } 
        let prd3 ;
        if (MtIsNotNull(nuplet.val[2]))
        { 
          prd3 = <Col span={12}><MgProductBlock key={nuplet.val[2].id} product={nuplet.val[2]} vlegend="above" hlegend="left" /></Col> ;
        }
        let prd4 ;
        if (MtIsNotNull(nuplet.val[3]))
        { 
          prd4 = <Col span={12}><MgProductBlock key={nuplet.val[3].id} product={nuplet.val[3]} vlegend="below" hlegend="right" /></Col> ;
        }              
       return <Fragment key={nuplet.val[0].id+"_group"}><Row >{prd1}{prd2}</Row><Row>{prd3}{prd4}</Row></Fragment>;               
      });

    return (<>{listProducts}</>);
  }  

}
