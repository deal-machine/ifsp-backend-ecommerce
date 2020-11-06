import express from "express";
import routes from "./routes";

import "./database/index";

const app = express();

app.use(routes);

app.listen(3333, () => {
  console.log("Server is started on port 3333");
});
