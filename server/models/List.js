const { Schema } = require("mongoose");

const listSchema = new Schema ({
    list: {
        type: String,
        required: true,
    },
    description: {
        type: String,

    },
    assigned: {
        type: String,
    },
    important: {
        type: String,
        required: true,
    },
    user_id: {
        type: String,
    }
})

const List = model("List", listSchema);

module.exports = List;