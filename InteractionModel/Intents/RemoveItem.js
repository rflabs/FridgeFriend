var RemoveItem = {
    name: 'RemoveItem',
    utterances: [
        "Remove {'item':'pickles'}",
        "Remove {'item:'ketchup'} from my refrigerator",
        "Remove a {'item': 'soda'} from my refrigerator",
        "Remove {'item:'ketchup'} from my fridge",
        "Remove a {'item': 'soda'} from my fridge",
        "Remove an {'item':'apple'}"
    ],
    slots: [
        {
            name: "item",
            dataType: "GroceryItem",
            required: true,
            prompts: ["Please tell me the item you want to remove from your refrigerator"]
        }
    ]
}

module.exports = RemoveItem