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
    
    constructor(id){
        this.id = id;     
        this.medias = {}; 
    }    
}