import { Me } from "./Me";
import { MtIsNotNull } from "../utils/MtTools";


export class MeArtist extends Me
{
    constructor(id)
    {
        super(id);
        this.products = new Map();
        this.contents = new Map();
    }

    GetFullName()
    {
        return this.first_name + " " + this.last_name;
    }

    AddContent(content)
    {
      if (this.contents.has(content.id) === false)
      {
        this.contents.set(content.id,content);
      }
    }

    GetContents()
    {
        let result = [];
        this.contents.forEach( (element, id) => {
            result.push(element);
         });
        result.sort(function(a, b) { 
                                      if (MtIsNotNull(a.startdate) && MtIsNotNull(b.startdate) )
                                      {
                                        if ( a.startdate > b.startdate)
                                          return 1;
                                        else 
                                          return -1;
                                      }
                                      if (MtIsNotNull(a.startdate))
                                      {
                                        return 1;
                                      }
                                      if (MtIsNotNull(b.startdate))
                                      {
                                        return -1;
                                      }
                                      return 0;
                                    });
        return result;
    }
}