import  CatalogData   from '../assets/data/sample_catalog';
import { MeArtist } from './MeArtist';
import { MeContent } from './MeContent';
import { MeContentsList } from './MeContentsList';
import { MeProduct } from './MeProduct';
import { MeProductVariant } from './MeProductVariant';
import { MeMedia } from './MeMedia';
import { MeCategory } from './MeCategory';
import { MtIsNotNull , MtIsNull , MtToDate} from '../utils/MtTools';
import { MeCollectionDetail } from './MeCollectionDetail';
import { Me } from './Me';



export class MeCatalog
{
   constructor() 
   {
     this.data = CatalogData;
     
     this.Init();
   }

   Init()
   {
     this.allartists = new Map();
     this.allcategories = new Map();
     this.allproducts = new Map();
     this.allcontents = new Map();
     this.allvariants = new Map();
     this.allcontents_lists = new Map();
  

     this.data.artists.forEach( elem => { 
       let art = new MeArtist(elem.id);
       this.allartists.set(elem.id, art);

       art.first_name = elem.first_name;
       art.last_name = elem.last_name;
       art.country = elem.country;
       art.address1 = elem.address1;
       art.address2 = elem.address2;
       art.zipcode = elem.zipcode;
       art.city = elem.city;
       art.state = elem.state;
       art.short_description = elem.short_description;
       art.unknown = false;
     });

     this.data.products.forEach( elem => { 
      let prd = new MeProduct(elem.id);
      this.allproducts.set(elem.id,prd);
      prd.title = elem.title;
      prd.author_id = elem.author_id;
      prd.category_name = elem.category;      

      prd.category = this.GetCategory(elem.category);  
      prd.category.AddProduct(prd);

      prd.author = this.GetArtist(elem.author_id);      
    });
    
    this.data.contents.forEach( elem => { 
     let cont = new MeContent(elem.id);
     this.allcontents.set(elem.id, cont);
     cont.object_id = elem.object_id;
     cont.object_type = elem.object_type;  
     cont.template = elem.template;
     cont.startdate = MtToDate(elem.startdate);
     cont.enddate = MtToDate(elem.enddate);
     cont.data = elem.data;
     cont.Init(this);
    });

    this.data.variants.forEach( elem => { 
      let pv = new MeProductVariant(elem.id)
      this.allvariants.set(elem.id, pv);
      pv.product_id = elem.product_id;
      pv.product_type = elem.product_type;
      pv.physical_size = elem.physical_size;
      pv.price_amount = elem.price_amount;      
      pv.price_currency = elem.price_currency;      
      pv.stock_current = elem.stock_current;      
      pv.stock_total = elem.stock_total;      
      pv.owner = elem.owner;      

      pv.product = this.GetProduct(elem.product_id);     
      if (MtIsNotNull(pv.product))     
      {
        pv.product.AddVariant(pv);
      } 
    });

    this.data.contents_lists.forEach( elem => { 
      let cl = new MeContentsList(elem.id);
      this.allcontents_lists.set(elem.id,cl);
      cl.title = elem.title;
      cl.type = elem.type;
    });

    this.data.collection_details.forEach( elem => { 
      let coll = this.GetContentsList(elem.contents_list_id);
      if (MtIsNotNull(coll))
      {
        var n = new MeCollectionDetail(elem.id);
        n.contents_list_id = elem.contents_list_id;
        coll.AddCollectionDetail(n);
        n.object_type = elem.object_type;
        n.object = this.GetObject(elem.object_id,elem.object_type);
        n.order = elem.order;
        n.timing_begin = elem.timing_begin;
        n.timing_end = elem.timing_end;
      }
     });


     this.data.medias.forEach( elem => { 
      let obj = this.GetObject(elem.object_id, elem.object_type);
      if (MtIsNotNull(obj))
      {
        let medium = new MeMedia(elem.id);
        medium.object = obj;
        obj.AddMedia(medium);
        medium.type = elem.type;
        medium.object_type = elem.object_type;
        medium.media_type = elem.media_type;
        medium.media_file = elem.media_file.trim();
        medium.media_path = elem.media_path.trim();
        medium.media_url = elem.media_url.trim();
        medium.alt_text = elem.alt_text;      
      }
    });

   }

   GetArtist(id)
   {
    var result = this.allartists.get(id);
    if (MtIsNull(result))
    {
      result = new MeArtist("cat-"+id);
      result.unknown = true;
      result.first_name = "unknown";
      result.last_name = "unknown";
      //this.allartists[id] = result;
    }
    return result;
   }
   
   GetObject(id, typ)
   {
    switch(typ)
    {
      case Me.ARTIST: return this.GetArtist(id);
      case Me.PRODUCT: return this.GetProduct(id);
      case Me.VARIANT : return this.GetVariant(id);
      case Me.CONTENT : return this.GetContent(id);
      case Me.CONTENTS_LIST : return this.GetContentsList(id);
      case Me.CATEGORY : return this.GetCategory(id);
      default : return null;
    }
   }
   GetProduct(id)
   {
     return this.allproducts.get(id);
   }
   
   GetVariant(id)
   {
     return this.allvariants.get(id);
   }
   
   GetContent(id)
   {
     return this.allcontents.get(id)
   }
   
   GetContentsList(id)
   {
     return this.allcontents_lists.get(id);
   }

   GetCategory(name)
   {
     var result = this.allcategories.get(name);
     if (MtIsNull(result))
     {
      result = new MeCategory("cat-"+name);
      result.name = name;
      this.allcategories.set(name, result);
     }
     return result;
   }
   
   GetArtistsList()
   {
    let result= [];
    this.allartists.forEach(  (c) => {   result.push(c); });
    return result;
   }

   GetCollections()
   {
    let result= [];
    this.allcontents_lists.forEach(  (c) => { 
      if (c.type === Me.COLLECTION
          && c.id !== Me.HOME_ID)
      {
        result.push(c);
      }
    });

    return result;
   }
   
   GetObjectsList(collectionId)
   {
       let result  = [];   
       this.allcontents_lists.forEach( (val, id) => { 
        if (val.id === collectionId)
         {
           result = val.GetObjectsList(Me.ANY) 
          } 
       });
       return result;
   }
}


const singleCatalog = Object.freeze(new MeCatalog());
export default singleCatalog;
