import express from "express";
import { urlencoded } from "body-parser";
import routes from "./routes";
import "reflect-metadata";

import "./database/index";

const app = express();

app.use(express.json());
app.use(urlencoded({ extended: true }));

app.use(routes);

const port = 3334;
app.listen(port, () => {
  console.log(`Server is started on port ${port}`);
});
