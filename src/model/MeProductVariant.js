import { Me } from "./Me";

export class MeProductVariant extends Me
{
    constructor(id)
    {
        super(id);
        this.product = null;
    }
}