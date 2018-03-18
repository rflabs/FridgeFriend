var Inventory = require('../DataStores/InventoryDataStore')

var CheckItem = function(Context){
    if(Inventory.containsItem(Context.args.item))
    {
        Context.assistant
            .say(`Yep, found some`)  //This is the same 'item' from our slots in our Interaction Model
            .finish({'exit': true})
    } else {
        Context.assistant
            .say("No, I wasn't able to find any")
            .finish({'exit': true})
    }
    
}

module.exports = CheckItem;