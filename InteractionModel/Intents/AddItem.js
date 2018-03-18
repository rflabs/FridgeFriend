var AddItem = {
    name: 'AddItem',
    utterances: [
        "Add {'item':'pickles'}",
        "Add {'item:'ketchup'} to my refrigerator",
        "Add a {'item': 'soda'} to the refrigerator",
        "Add {'item:'ketchup'} to my fridge",
        "Add a {'item': 'soda'} to the fridge",
        "Add an {'item':'apple'}"
    ],
    slots: [
        {
            name: "item",
            dataType: "GroceryItem",
            required: true,
            prompts: ["Please tell me the item you want to add to your refrigerator"]
        }
    ]
}

module.exports = AddItem