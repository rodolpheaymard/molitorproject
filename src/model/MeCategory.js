import { Me } from "./Me";


export class MeCategory extends Me
{
    constructor(id)
    {
        super(id);
        this.products = new Map();
    }

    AddProduct(product)
    {
        if (this.products.has(product.id) === false)
        {
          this.products.set(product.id,product);
        }
    }
}