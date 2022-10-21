import { Me } from "./Me";


export class MeCollectionDetail extends Me
{
    constructor(id)
    {
        super(id);
        this.object_type = null;
        this.object = null;
    }    
}