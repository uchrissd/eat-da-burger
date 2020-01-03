var connection = require("../config/connection");

selectAll();
insertOne();
updateOne();

// Export the orm object for the model (cat.js).
module.exports = orm;
