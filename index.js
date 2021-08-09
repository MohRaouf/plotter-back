require("./boot/dbConnection");
const cors = require("cors");
const express = require('express');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/columns', require("./routes/columns"));
app.use('/data', require("./routes/data"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server Started on Port " + PORT));