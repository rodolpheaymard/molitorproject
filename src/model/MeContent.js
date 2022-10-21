import { Me } from "./Me";
import singleCatalog from "./MeCatalog";

export class MeContent extends Me
{
    constructor(id)
    {
        super(id);
        this.product = null;
        this.content = null;
    }

    Init()
    {
        if (this.object_type === Me.PRODUCT)
        {
          this.product = singleCatalog.GetProduct(this.object_id);      
        } 
        else if (this.object_type === Me.CONTENT)
        {
          this.content = singleCatalog.GetContent(this.object_id);      
        }
    }
}