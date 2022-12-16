import React from 'react';
import { withRouter } from "./withRouter";
import MgComponent from './MgComponent';
import { MtIsNull } from '../utils/MtTools';
import { Cascader } from 'antd';
//import { Typography , Col, Row } from 'antd';
//const { Title } = Typography;


class MgBlockProductDetails extends MgComponent {
  constructor(props) {
    super(props);
    this.product = props.product;
    this.legend = {};
    this.legend.vertical = props.vlegend;
    this.legend.horizontal = props.hlegend;

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (event) {
   // this.props.router.navigate("/product/"+ this.product.id);   
  };

  render() {
    if (MtIsNull(this.product))
      return <></>;
    
    const digital_variants = this.product.tabPhysicalVariants();
    let nftBlock = "NFT is not available";
    //let isnftavailable = false;
    
    if (digital_variants.length > 0)
    {
      //isnftavailable = true;
      nftBlock = <> NFT is available 
                    <button className='MgButton'>Acquire the NFT</button>
                 </>;
    }
  
    
    const physical_variants = this.product.tabPhysicalVariants();
    let dimensionBlock = "";
    let isavailable = false;
    if (physical_variants.length > 0)
    {
      isavailable = true;
      let options = physical_variants.map( v => {return {value : v.id , label : v.physical_size};})
      dimensionBlock = <>Available Exists in <Cascader options={options} /></>;
    }


    return ( <div className='MgBlockProductDetails MgVertical'>
      <div>
        <div className='MgVertical MgAlignRight MgTitle'>{this.product.title}</div>
        <div className='MgVertical MgAlignRight'>{this.product.author.first_name + " " + this.product.author.last_name }</div>
        <div className='MgVertical MgAlignRight'>Painting</div>
      </div>
      <div className='MgBlockProductBlockNFT'>
        <div className='MgVertical MgAlignRight'>{nftBlock}</div>
      </div>
      <div className='MgBlockProductBlockVariants'>
        <div className='MgVertical MgAlignRight'>{dimensionBlock}</div>
      </div>

      <div className='MgBlockProductBlockBuy'>
        <button className='MgButton' disabled={isavailable ? false : true} >Acquire this Work of Art</button>
      </div>
    </div>  );
  }
}

export default withRouter(MgBlockProductDetails)
