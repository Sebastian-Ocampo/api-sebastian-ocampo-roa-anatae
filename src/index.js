const express = require("express");
const dontenv = require("dotenv");
const discountsRouter = require("./routes/discounts");

dontenv.config();

const app = express();

app.use(express.json());
app.use(discountsRouter);

app.listen(3000, () => {
  console.log("sisirve");
});
