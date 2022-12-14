import { MtIsNotNull, MtToArray } from "../utils/MtTools";
import { Me } from "./Me";
import { MeMedia } from "./MeMedia";

export class MeContentsList extends Me
{
    constructor(id)
    {
        super(id);
        this.contents = {};
    }

    GetObjectsList(typp) 
    {
      let result = [];
      let objs = MtToArray(this.contents);
      objs.forEach( (val) => {
        if (MtIsNotNull(val) 
             && (typp === Me.ANY || val.object_type === typp))
        {
            result.push(val.object);
        } 
      });
      return result;
    }

    GetFirstPosition(typp)
    {
      let result = -1;
      let objs = MtToArray(this.contents);
      for( let i=0; i < objs.length; i++ )
      {
        let val = objs[i];
        if (MtIsNotNull(val) 
             && (typp === Me.ANY || val.object_type === typp))
        {
          result = i;
          break;
        } 
      }
      return result;
    } 

    GetLastPosition(typp)
    {
      let result = -1;
      let objs = MtToArray(this.contents);
      for( let i=0; i < objs.length; i++ )
      {
        let val = objs[i];
        if (MtIsNotNull(val) 
             && (typp === Me.ANY || val.object_type === typp))
        {
          result = i;  
        } 
      }
      return result;
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

}