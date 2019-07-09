import axios from "axios";

export default {
    // REF APIS
    // Gets all saved refs
    getAllRefs: function () {
        return axios.get("/api/books");
    },
    // This will be used for populating a posting form
    getSingleRef: function (id) {
        return axios.get("/api/refs" + id);
    },
    // Deletes the saved ref with the given id
    deleteRef: function (id) {
        return axios.delete("/api/refs/" + id);
    },
    // Saves an ref to the database
    saveChangedRef: function (refData) {
        return axios.post("/api/refs/" + id, refData);
    },
    saveNewRef: function (refData) {
        return axios.post("/api/refs", refData)
    },


    // USER APIS
    getSingleUser: function (id) {
        return axios.get("/api/users" + id);
    },
    deleteUser: function (id) {
        return axios.delete("/api/users/" + id);
    },
    saveChangedUser: function (userData) {
        return axios.post("/api/users/" + id, userData);
    },
    saveNewUser: function (userData) {
        return axios.post("/api/users", userData)
    },


};

