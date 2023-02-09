import { Me } from "./Me";
import { MtIsNotNull } from "../utils/MtTools";

export class MeContentsList extends Me
{
    constructor(id)
    {
        super(id);
        this.contents = new Map();
    }


    AddCollectionDetail(content)
    {
      if (this.contents.has(content.id) === false)
      {
        this.contents.set(content.id,content);
      }
    }

    GetObjectsList(typp) 
    {
      let result = [];
      this.contents.forEach( (val, id) => {
        if (MtIsNotNull(val) 
             && (typp === Me.ANY || val.object_type === typp))
        {
          result.push(val.object);
        }
       } );

      return result;
    }

    GetFirstPosition(typp)
    {
      let result = -1;
      let i = 0;
      this.contents.forEach( (val, id) => {
        if (MtIsNotNull(val) 
             && (typp === Me.ANY || val.object_type === typp))
        {
          if (result === -1)
          {
            result = i;
          }     
        }
        i++;    
      });

      return result;
    } 

    GetLastPosition(typp)
    {
      let result = -1;
      let i=0;
      this.contents.forEach( (val, id) => {
        if (MtIsNotNull(val) 
             && (typp === Me.ANY || val.object_type === typp))
        {
          result = i;
        }
        i++;
       } );
      return result;
    } 


}