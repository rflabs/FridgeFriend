var Inventory = require('../DataStores/InventoryDataStore')

var AddItem = function(Context){
    Inventory.addItem(Context.args.item);
    Context.assistant
        .say(`Ok, I've added ${Context.args.item}`)  //This is the same 'item' from our slots in our Interaction Model
        .finish()
}

module.exports = AddItem;