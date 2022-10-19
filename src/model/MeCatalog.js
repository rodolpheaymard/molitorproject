import  CatalogData   from '../assets/data/sample_catalog';
import { MeArtist } from './MeArtist';
import { MeContent } from './MeContent';
import { MeContentsList } from './MeContentsList';
import { MeProduct } from './MeProduct';
import { MeProductVariant } from './MeProductVariant';
import { MeProductImage } from './MeProductImage';
import { MeCategory } from './MeCategory';
import { MtIsNotNull , MtIsNull } from '../utils/MtTools';

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

    this.data.product_images.forEach( elem => { 
      let prd = this.GetProduct(elem.product_id);
      if (MtIsNotNull(prd))
      {
        let prdimg = new MeProductImage(elem.id);
        prdimg.product = prd;
        prd.product_images[elem.id] = prdimg;
        prdimg.type = elem.type;
        prdimg.image_type = elem.image_type;
        prdimg.image_file = elem.image_file.trim();
        prdimg.image_path = elem.image_path.trim();
        prdimg.alt_text = elem.alt_text;      
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
   
   GetProduct(id)
   {
     return this.allproducts[id];
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

   GetProductsList(collectionId)
   {
       let result  = [];   
       this.data.collection_details.forEach( elem => { 
        if (elem.contents_list_id === collectionId)
         {
           let prd = this.GetProduct(elem.product_id);
           if (prd !== null)
           {
             result.push(prd);
           }
         }
       });
       return result;
   }
}