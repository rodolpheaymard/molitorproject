

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