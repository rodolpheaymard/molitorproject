import  CatalogData   from '../assets/data/sample_catalog';
import { MeArtist } from './MeArtist';
import { MeContent } from './MeContent';
import { MeContentsList } from './MeContentsList';
import { MeProduct } from './MeProduct';
import { MeProductVariant } from './MeProductVariant';
import { MeMedia } from './MeMedia';
import { MeCategory } from './MeCategory';
import { MtIsNotNull , MtIsNull , MtToArray } from '../utils/MtTools';
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
     this.allartists = {};
     this.data.artists.forEach( elem => { 
       this.allartists[elem.id] = new MeArtist(elem.id);
       this.allartists[elem.id].first_name = elem.first_name;
       this.allartists[elem.id].last_name = elem.last_name;
       this.allartists[elem.id].country = elem.country;
       this.allartists[elem.id].address1 = elem.address1;
       this.allartists[elem.id].address2 = elem.address2;
       this.allartists[elem.id].zipcode = elem.zipcode;
       this.allartists[elem.id].city = elem.city;
       this.allartists[elem.id].state = elem.state;
       this.allartists[elem.id].short_description = elem.short_description;
       this.allartists[elem.id].unknown = false;
     });

     this.allcategories = {};

     this.allproducts = {};
     this.data.products.forEach( elem => { 
      this.allproducts[elem.id] = new MeProduct(elem.id);
      this.allproducts[elem.id].title = elem.title;
      this.allproducts[elem.id].author_id = elem.author_id;
      this.allproducts[elem.id].category_name = elem.category;      

      this.allproducts[elem.id].category = this.GetCategory(elem.category);  
      this.allproducts[elem.id].category.AddProduct(this.allproducts[elem.id]);

      this.allproducts[elem.id].author = this.GetArtist(elem.author_id);      
    });

    
    this.allcontents = {};
    this.data.contents.forEach( elem => { 
     this.allcontents[elem.id] = new MeContent(elem.id);
     this.allcontents[elem.id].object_id = elem.object_id;
     this.allcontents[elem.id].object_type = elem.object_type;  
     this.allcontents[elem.id].template = elem.template;
     this.allcontents[elem.id].data = elem.data;
   });

     this.allvariants = {};
     this.data.variants.forEach( elem => { 
      this.allvariants[elem.id] = new MeProductVariant(elem.id);
      this.allvariants[elem.id].product_id = elem.product_id;
      this.allvariants[elem.id].product_type = elem.product_type;
      this.allvariants[elem.id].physical_size = elem.physical_size;
      this.allvariants[elem.id].price_amount = elem.price_amount;      
      this.allvariants[elem.id].price_currency = elem.price_currency;      
      this.allvariants[elem.id].stock_current = elem.stock_current;      
      this.allvariants[elem.id].stock_total = elem.stock_total;      
      this.allvariants[elem.id].owner = elem.owner;      

      this.allvariants[elem.id].product = this.GetProduct(elem.product_id);     
      if (MtIsNotNull( this.allvariants[elem.id].product ))     
      {
        this.allvariants[elem.id].product.variants[elem.id] = this.allvariants[elem.id];
      } 
    });

     this.allcontents_lists = {};
     this.data.contents_lists.forEach( elem => { 
      this.allcontents_lists[elem.id] = new MeContentsList(elem.id);
      this.allcontents_lists[elem.id].title = elem.title;
      this.allcontents_lists[elem.id].type = elem.type;
    });

    this.data.collection_details.forEach( elem => { 
      let coll = this.GetContentsList(elem.contents_list_id);
      if (MtIsNotNull(coll))
      {
        var n = new MeCollectionDetail(elem.id);
        n.contents_list_id = elem.contents_list_id;
        coll.contents[elem.id] = n;
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
        if (MtIsNotNull(obj.medias))
        {
          obj.medias[elem.id] = medium;
        }
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
    var result = this.allartists[id];
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
     return this.allproducts[id];
   }
   
   GetVariant(id)
   {
     return this.allvariants[id];
   }
   
   GetContent(id)
   {
     return this.allcontents[id];
   }
   
   GetContentsList(id)
   {
     return this.allcontents_lists[id];
   }

   GetCategory(name)
   {
     var result = this.allcategories[name];
     if (MtIsNull(result))
     {
      result = new MeCategory("cat-"+name);
      result.name = name;
      this.allcategories[name] = result;
     }
     return result;
   }
   
   GetArtistsList()
   {
     return this.allartists;
   }

   GetCollections()
   {
    let result= [];
    MtToArray(this.allcontents_lists).forEach(  (c) => { 
      if (c.type === Me.COLLECTION
          && c.id !== Me.HOME_ID)
      {
        result.push(c);;
      }
    });

    return result;
   }
   
   GetObjectsList(collectionId)
   {
       let result  = [];   
       MtToArray(this.allcontents_lists).forEach( elem => { 
        if (elem.id === collectionId)
         {
           MtToArray(elem.contents).forEach( e => {
            if (MtIsNotNull(e.object))
            {
              result.push(e.object);
            }});
          } 
       });
       return result;
   }
}


const singleCatalog = Object.freeze(new MeCatalog());
export default singleCatalog;
