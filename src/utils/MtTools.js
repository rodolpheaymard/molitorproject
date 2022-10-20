


export function MtIsNotNull(obj)
{
   return obj !== null  &&  typeof obj !== 'undefined' ;
}

export function MtIsNull(obj)
{
   return obj === null  || typeof  obj === 'undefined' ;
}

export function MtToArray(obj)
{
   let result = [];
   Object.keys(obj).map( key => { result.push(obj[key]); return 0; } );

   return result;
}

export function MtToPairArray(obj)
{ 
   let result = [];
   Object.keys(obj).map( (key,idx) => { 
      if (idx % 2 === 0)
      {
         let newpair = {};
         result.push(newpair);
         newpair.left = obj[key];  
         newpair.right = null;  
      }  
      else
      {
         result[result.length -1].right = obj[key];  
      }
      return 0;
    } );

   return result;
}

export function MtToNupletArray(obj, nb)
{ 
   let result = [];
   Object.keys(obj).map( (key,idx) => { 
      if (idx % nb === 0)
      {
         let newnuplet = {};
         result.push(newnuplet);
         newnuplet.val = {};
         newnuplet.val[0] = obj[key];  
         for(let ii = 1 ; ii < nb ; ii++)
         {
            newnuplet.val[ii] = null;
         }
      }  
      else
      {
         result[result.length -1].val[idx % nb] = obj[key];  
      }
      return 0;
    } );

   return result;
}

