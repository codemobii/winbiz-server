module.exports = (app) => {
  const user = require("../controllers/user.controller");

  // Get all the user
  app.get("/getUser", user.getUser);

  app.post("/addUser", user.create);
};
