import { MtIsNotNull,MtToArray } from "../utils/MtTools";
import { Me } from "./Me";
import { MeProductImage } from "./MeProductImage";

export class MeProduct extends Me
{
   constructor(id) 
   {  
    super(id);
    this.variants = {};
    this.product_images = {};
   }
   
   GetImageUrl()
   {
      let result = MeProductImage.GetDefaultImageUrl();

      let imgs = MtToArray(this.product_images);
      if (MtIsNotNull(imgs) && imgs.length > 0 )
      {         
         result = imgs[0].GetImageUrl();
      }
      return result;      
   }
}