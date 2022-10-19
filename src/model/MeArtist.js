import { Me } from "./Me";


export class MeArtist extends Me
{
    constructor(id)
    {
        super(id);
        this.products = {};
    }
}