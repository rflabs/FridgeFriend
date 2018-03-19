var CheckItem = {
    name: 'CheckItem',
    utterances: [
        "Check to see if I have any {'item':'pickles'}",
        "Do I have {'item':'lettuce'}",
        "Do I have any {'item':'onions'}",
        "Check for {'item':'bread'}",
        "Check {'item':'bagels'}"
    ],
    slots: {
        "item": {
            dataType: "GroceryItem",
            required: true,
            prompts: ["Please tell me the item you want to add to your refrigerator"]
        }
    }
}

module.exports = CheckItem