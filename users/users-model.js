const db = require("../data/dbConfig.js");

module.exports = {
  add,
  get,
  getBy,
  getById
};

function get() {
  return db("users").select("id", "username", "password");
}

function getBy(filter) {
  return db("users").where(filter);
}

function getById() {
  return db("users")
    .where("iser.id", id)
    .first();
}

async function add(user) {
  const [id] = await db("users").insert(user);
}
