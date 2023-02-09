import { Me } from "./Me";
import { MtIsNotNull, MtIsNull } from "../utils/MtTools";


export class MeMedia extends Me
{
  

   static GetDefaultImage()
   {
      var result = {};
      result.media_url  = null;
      result.media_path  = null;
      result.media_file  = "default.png";
      result.alt_text  = "empty image";
      
      return result;
   }

   constructor(id)
   {
      super(id);
      this.product = null;
      this.content = null;
   }

   GetMediaUrl()
   {
      if(MtIsNotNull(this.media_url)&& this.media_url.length > 0 )
      {
         return this.media_url;
      }
      if(MtIsNull(this.media_path))
      {
         return Me.GetRootDir() + "/" + this.media_file;               
      }

      return Me.GetRootDir() + "/" + this.media_path + "/" + this.media_file;     
   }
}