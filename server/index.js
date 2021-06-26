const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const { initializeDB } = require('./mongoose');
const port = process.env.PORT || 5000;
const wordRoutes = require("./routes/word.route");

dotenv.config();
initializeDB(process.env.URI);

app.get("/", (req, res) => {
    res.send("server is running");
})

app.use(cors());
app.use(bodyParser.json());

app.use("/words",wordRoutes);

app.use("*",(req, res) => {
    res.send({ message:"route not found" })
});

app.listen(port,() => console.log(`listening on port ${port}`));