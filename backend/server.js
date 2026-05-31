require("dotenv").config();

const express = require("express");
const cors = require("cors");

const leadsRoute = require("./routes/leads");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/leads", leadsRoute);

app.get("/", (req, res) => {
  res.send("Backend Running");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});