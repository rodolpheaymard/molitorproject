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
import { MeExhibitionStep } from './MeExhibitionStep';

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
        medium.alt_text = elem.alt_text;      
      }
    });


     this.allcontents = {};
     this.data.contents.forEach( elem => { 
      this.allcontents[elem.id] = new MeContent(elem.id);
      this.allcontents[elem.id].product_id = elem.product_id;
      this.allcontents[elem.id].text = elem.text;
      this.allcontents[elem.id].image_url = elem.image_url.trim();   

      this.allcontents[elem.id].product = this.GetProduct(elem.product_id);      
    });

     this.allvariants = {};
     this.data.variants.forEach( elem => { 
      this.allvariants[elem.id] = new MeProductVariant(elem.id);
      this.allvariants[elem.id].product_id = elem.product_id;
      this.allvariants[elem.id].product_type = elem.product_type;
      this.allvariants[elem.id].physical_size = elem.physical_size;
      this.allvariants[elem.id].price_amount = elem.price_amount;      
      this.allvariants[elem.id].price_currency = elem.price_currency;      

      this.allvariants[elem.id].product = this.GetProduct(elem.product_id);     
      if (MtIsNotNull( this.allvariants[elem.id].product ))     
      {
        this.allvariants[elem.id].product.variants[elem.id] = this.allvariants[elem.id];
      } 
    });

     this.allcontents_lists = {};
     this.data.contents_lists.forEach( elem => { 
      this.allcontents_lists[elem.id] = new MeContentsList(elem.id);
      this.allcontents_lists[elem.id].type = elem.type;
      this.allcontents_lists[elem.id].title = elem.title;
    });

    this.data.collection_details.forEach( elem => { 
      let coll = this.GetContentsList(elem.contents_list_id);
      if (MtIsNotNull(coll))
      {
        var n = new MeCollectionDetail(elem.id);
        n.contents_list_id = elem.contents_list_id;
        coll.contents[elem.id] = n;
        n.product = this.GetProduct(elem.product_id);
        n.text = elem.text;
        n.order = elem.order;
      }
     });

     this.data.exhibition_steps.forEach( elem => { 
      let exhibition = this.GetContentsList(elem.exhibition_id);
      if (MtIsNotNull(exhibition))
      {
        var n = new MeExhibitionStep(elem.id);
        n.exhibition_id = elem.exhibition_id;
        exhibition.contents[elem.id] = n;
        n.order = elem.order;
        n.duration = elem.duration;     
        n.content = this.GetContent(elem.content_id);        
        n.text_before = elem.text_before;
        n.text_after = elem.text_after;
      }
     });

   }

   GetArtist(id)
   {
    var result = this.allartists[id];
    if (MtIsNull(result))
    {
      result = new MeArtist("cat-"+id);
      result.first_name = "unknown";
      result.last_name = "unknown";
      this.allartists[id] = result;
    }
    return this.allartists[id];
   }
   
   GetObject(id, typ)
   {
    switch(typ)
    {
      case "product" : return this.GetProduct(id);
      case "variant" : return this.GetVariant(id);
      case "content" : return this.GetContent(id);
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
   GetProductsList(collectionId)
   {
       let result  = [];   
       MtToArray(this.allcontents_lists).forEach( elem => { 
        if (elem.id === collectionId)
         {
           MtToArray(elem.contents).forEach( e => {
            if (MtIsNotNull(e.product))
            {
              result.push(e.product);
            }});
          } 
       });
       return result;
   }
}