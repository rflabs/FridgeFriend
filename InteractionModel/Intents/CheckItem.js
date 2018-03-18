var CheckItem = {
    name: 'CheckItem',
    utterances: [
        "Check to see if I have any {'item':'pickles'}",
        "Do I have {'item':'lettuce'}",
        "Do I have any {'item':'onions'}",
        "Check for {'item':'bread'}"
    ],
    slots: [
        {
            name: "item",
            dataType: "GroceryItem",
            required: true,
            prompts: ["What should I look for?", "What can I find for you?"]
        }
    ]
}

module.exports = CheckItem