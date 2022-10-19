import { Me } from "./Me";


export class MeCategory extends Me
{
    constructor(id)
    {
        super(id);
        this.products = {};
    }

    AddProduct(product)
    {
        this.products[product.id] = product;
    }
}