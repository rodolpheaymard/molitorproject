import { Me } from "./Me";


export class MeExhibitionStep extends Me
{
    constructor(id)
    {
        super(id);
        this.product = null;
        this.content = null;
    }    
}