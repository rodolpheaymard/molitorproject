import { MtIsNotNull, MtToArray } from "../utils/MtTools";
import { Me } from "./Me";
import { MeMedia } from "./MeMedia";


export class MeArtist extends Me
{
    constructor(id)
    {
        super(id);
        this.products = {};
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

    GetFullName()
    {
        return this.first_name + " " + this.last_name;
    }
}