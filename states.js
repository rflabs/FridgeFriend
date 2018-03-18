var States = {
    'default': {
        activeIntents: ['Welcome', 'AddItem', 'RemoveItem', 'CheckItem'],
        middleware: ['logInput']
    }
}

module.exports = States
