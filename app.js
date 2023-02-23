const express = require("express");
const morgan = require("morgan");
const userRoutes = require("./routes/user.routes");

const app = express();
const port = 4500;

app.use(morgan("tiny"));
app.use(userRoutes);
app.use(express.json());

app.listen(port, () => {
  console.log(`Run App, the port this server is: ${port}`);
});
