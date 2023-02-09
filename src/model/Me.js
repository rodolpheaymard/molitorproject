
export class Me
{
    static ANY= "any";
    static PRODUCT = "product";
    static VARIANT = "variant";
    static CONTENT = "content";
    static CONTENTS_LIST = "contents_list";
    static CATEGORY = "category";
    static MEDIA = "media";
    static ARTIST = "artist";
    static COLLECTION = "collection";
    static EXHIBITION = "exhibition";

    static HOME_ID = "home";
    static TPL_SIMPLE_TEXT = "text";
    static TPL_HTML = "html";
    static TPL_IMAGE6_TEXT18 = "img6_text18";

    static GetRootDir()
    {
       return "/images/catalog";
    }
    
    static GetDefaultImageUrl()
    {
       return Me.GetRootDir() + "/default.png";
    }

    constructor(id)
    {
        this.id = id;     
        this.medias = new Map(); 
    }    

    
    AddMedia(media)
    {
      if (this.medias.has(media.id) === false)
      {
        this.medias.set(media.id,media);
      }
    }
        
    GetMediaUrl()
    {
    let result = Me.GetDefaultImageUrl();

    if (this.medias.size > 0 )
    {         
        let img = this.medias.values().next().value;
        result = img.GetMediaUrl();
    }
    return result;      
    }

}