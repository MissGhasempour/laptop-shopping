export const GRAPHQL_QUERY = `query getProducts($diplay:String , $brandName:String[] , $displayedItem :Function, $setDisplay:Function, $setBrandName : Function, $setDisplayedItem:Function ){
   {    display : $ display,
        brandName : $brandName,
        displayedItem  : $displayedItem ,
        setDisplay : $setDisplay ,
        setBrandName : $setBrandName,
        setDisplayedItem  : $setDisplayedItem
   }
}`;
