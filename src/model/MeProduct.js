import { MtIsNotNull,MtToArray } from "../utils/MtTools";
import { Me } from "./Me";
import { MeMedia } from "./MeMedia";

export class MeProduct extends Me
{
   constructor(id) 
   {  
    super(id);
    this.variants = {};
   }
   
   GetMediaUrl()
   {
      let result = MeMedia.GetDefaultImageUrl();

      let imgs = MtToArray(this.medias);
      if (MtIsNotNull(imgs) && imgs.length > 0 )
      {         
         result = imgs[0].GetMediaUrl();
      }
      return result;      
   }

   tabPhysicalVariants()
   {
     let result = [];
     MtToArray(this.variants).forEach(element => {
      if (element.isPhysical() && element.stock_current > 0)
        result.push(element);
     });

     return result;
   }

   tabDigitalVariants()
   {
      let result = [];
      MtToArray(this.variants).forEach(element => {
       if (element.isDigital()&& element.stock_current > 0)
         result.push(element);
      });
 
      return result;
      
   }
   
}