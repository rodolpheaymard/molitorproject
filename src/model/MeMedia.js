import { MtIsNotNull, MtIsNull } from "../utils/MtTools";
import { Me } from "./Me";


export class MeMedia extends Me
{
    static GetRootDir()
    {
       return "/images/catalog";
    }
    
    static GetDefaultImageUrl()
    {
       return MeMedia.GetRootDir() + "/default.png";
    }

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
         return MeMedia.GetRootDir() + "/" + this.media_file;               
      }

      return MeMedia.GetRootDir() + "/" + this.media_path + "/" + this.media_file;     
    }

    
}