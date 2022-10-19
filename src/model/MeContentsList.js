import { Me } from "./Me";

export class MeContentsList extends Me
{
    constructor(id)
    {
        super(id);
        this.contents = {};
    }
}