const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Repos collection and inserts the Repos below
// Then it adds a sample reference to each repo

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/sampledatabase"
);

const repoSeed = [
    {
        email:"highschoolme@dkraft.net",
        password: "neato",
        dateAdded: new Date(Date.now())
    },
    {
        email: "guest@dkraft.net",
        password: "guest",
        dateAdded: new Date(Date.now())
    },
    {
        email: "dk@dkraft.net",
        password: "password",
        dateAdded: new Date(Date.now())
    }
];

db.Repo
    .remove({})
    .then(() => db.Repo.collection.insertMany(repoSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

const refSeed = [
    {
        linkedRepo: "highschoolme@dkraft.net",
        relationship: "Instructor",
        dateMet: "Fall 2002",
        firstName: "Kevin",
        lastName: "Ward",
        pronouns: "He, him, his",
        email: "kevin@avalonschool.org",
        phone: "651-555-1234"
    }, {
        linkedRepo: "guest@dkraft.net",
        relationship: "Peer",
        dateMet: "Fall 2002",
        firstName: "Steve",
        lastName: "Martin",
        pronouns: "He, him, his",
        email: "stevem@celebrity.com",
        phone: "651-555-1234"
    }, {
        linkedRepo: "dk@dkraft.net",
        relationship: "Supervisor",
        dateMet: "Fall 2002",
        firstName: "Kevin",
        lastName: "Ward",
        pronouns: "He, him, his",
        email: "ghartley@migizi.org",
        phone: "651-555-1234"
    },
]

db.Ref
    .remove({})
    .then(() => db.Repo.collection.insertMany(repoSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });