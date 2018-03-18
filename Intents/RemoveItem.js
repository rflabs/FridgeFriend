var Inventory = require('../DataStores/InventoryDataStore')

var RemoveItem = function(Context){
    Inventory.removeItem(Context.args.item);
    Context.assistant
        .say(`Ok, ${Context.args.item} has been removed`)  //This is the same 'item' from our slots in our Interaction Model
        .finish({'exit': true})
}

module.exports = RemoveItem;