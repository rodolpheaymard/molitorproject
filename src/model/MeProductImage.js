import { Me } from "./Me";


export class MeProductImage extends Me
{
    static GetImageRootDir()
    {
       return "/images/catalog";
    }
    
    static GetDefaultImageUrl()
    {
       return MeProductImage.GetImageRootDir() + "/default.png";
    }

    constructor(id)
    {
        super(id);
        this.product = null;
    }

    GetImageUrl()
    {
       return MeProductImage.GetImageRootDir() + "/" + this.image_path + "/" + this.image_file;      
    }

    
}