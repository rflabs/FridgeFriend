var InventoryDataStore = function(){
    var Inventory = {};

    return {
        addItem: function(groceryItem) {
            Inventory[groceryItem] = true;
        },
        removeItem: function(groceryItem) {
            delete Inventory[groceryItem];
        },
        containsItem: function(groceryItem) {
            return Object.keys(Inventory).includes(groceryItem);
        }
    }
}()

module.exports = InventoryDataStore