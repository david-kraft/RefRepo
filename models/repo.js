const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new RepoSchema object
const RepoSchema = new Schema({
    // `email` is required and of type String
    email: { type: String, required: true },
    // `password` is required and of type String
    password: { type: String, required: true },
    // `ref` is an object that stores a Ref id
    // The ref property links the ObjectId to the Ref model
    // This allows us to populate the Repo with an associated Ref
});

// This creates our model from the above schema, using mongoose's model method
const Repo = mongoose.model("Repo", RepoSchema);

// Export the Article model
module.exports = Repo;
