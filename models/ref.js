const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId

const refSchema = new Schema({
    // Will be lpopulated by logged in user
    linkedRepo: ObjectId,

    // These will be user-defined
    relationship: {},
    dateMet: { type: String, required: true },


    prefix: String,
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    suffix: String,
    pronouns: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },

    lastContacted: String,
    prefAddr: String,
    twitters: String,
    linkedIn: String,
    facebook: String,
    location: String,

    workHistory: String,
    traits: String,
    stories: String,
    network: String,

    // These fields will be created by default but can be overwritten
    lastUpdated: { type: Date, default: Date.now },

});

const Ref = mongoose.model("Ref", refSchema);

module.exports = Ref;
