var Welcome = function(Context){
    Context.assistant
        .say("Hello!")
        .pause("400ms")
        .say("Welcome to Fridge Friend, your food inventory manager. You can add and remove items from your inventory, or ask if you have an item")
        .finish()
}

module.exports = Welcome;