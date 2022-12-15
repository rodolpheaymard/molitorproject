import { Me } from "./Me";

export class MeProductVariant extends Me
{
    constructor(id)
    {
        super(id);     
        this.product = null;
    }

    isPhysical()
    {
      return this.product_type === "physical";
    }

    isDigital()
    {
      return this.product_type === "digital";
    }
    
   
}