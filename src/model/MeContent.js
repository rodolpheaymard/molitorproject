import { MtIsNotNull } from "../utils/MtTools";
import { Me } from "./Me";

export class MeContent extends Me
{
    constructor(id)
    {
        super(id);
        this.product = null;
        this.content = null;
        this.artist = null;
    }

    Init(ctlg)
    {
      if (MtIsNotNull(this.object_id) && MtIsNotNull(this.object_type))
      {
        if (this.object_type === Me.PRODUCT)
        {
          this.product = ctlg.GetProduct(this.object_id);      
        } 
        else if (this.object_type === Me.CONTENT)
        {
          this.content = ctlg.GetContent(this.object_id);      
        }
        else if (this.object_type === Me.ARTIST)
        {
          this.artist = ctlg.GetArtist(this.object_id);
          this.artist.AddContent(this);
        }
      }
    }
}