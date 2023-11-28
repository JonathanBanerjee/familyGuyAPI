const express = require("express");
const app = express();

const quotes = require("./routes/quotes");
app.use(express.json());
app.use("/quotes", quotes);

const PORT = process.env.PORT || 6001;
app.listen(PORT, () => {
  console.log("Server running", PORT);
});
