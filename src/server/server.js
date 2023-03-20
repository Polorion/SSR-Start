import express from "express";
import ReactDOM from "react-dom/server";
import { Header } from "../shared/Header.jsx";
import { indexTemplate } from "./indexTemplate";
const app = express();
const PORT = 3001;
app.use("/static", express.static("./dist/client"));
app.get("/", (req, res) => {
  res.send(indexTemplate(ReactDOM.renderToString(Header())));
});

app.listen(PORT, () => {
  console.log(`server started on port http://localhost:${PORT}/`);
});
