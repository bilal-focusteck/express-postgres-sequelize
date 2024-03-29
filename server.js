const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser');
require("./src/database/models/index")
const { PORT } = require("./src/dbConfig/config")
const userRoutes = require("./src/modules/users/users.routes");
const rolesRoutes = require("./src/modules/roles/roles.routes");
const user_rolesRoutes = require("./src/modules/users_roles/users_roles.routes");

const app = express();

app.use(cors());

// Using cookie-parser middleware to parse cookies
app.use(cookieParser());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ status: 200, message: "Welcome to backend boilerplate" });
});

//routes for the user API
app.use('/api/users', userRoutes)
app.use('/api/roles', rolesRoutes)
app.use('/api/users_roles', user_rolesRoutes);



app.listen(PORT, () => {
  // dbConnection.dbConnection();
  //creating model if not created already, if created then do nothing
  // db.db.sequelize.sync();

  console.log(`Server is running on port ${PORT}.`);
});