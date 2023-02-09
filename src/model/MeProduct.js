import { Me } from "./Me";


export class MeProduct extends Me
{
   constructor(id) 
   {  
    super(id);
    this.variants = new Map();
   }
   

   AddVariant(prodVar)
   {
     if (this.variants.has(prodVar.id) === false)
     {
       this.variants.set(prodVar.id,prodVar);
     }
   }

   tabPhysicalVariants()
   {
     let result = [];
     this.variants.forEach( (element, id) => {
      if (element.isPhysical() && element.stock_current > 0)
        result.push(element);
     });

     return result;
   }

   tabDigitalVariants()
   {
      let result = [];
      this.variants.forEach( (element, id) =>  {
       if (element.isDigital()&& element.stock_current > 0)
         result.push(element);
      });
 
      return result;
      
   }
   
}