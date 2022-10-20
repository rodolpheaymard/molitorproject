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

    constructor(id)
    {
        super(id);
        this.product = null;
        this.content = null;
    }

    GetMediaUrl()
    {
       return MeMedia.GetRootDir() + "/" + this.media_path + "/" + this.media_file;      
    }

    
}