const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.set("views", "views");
app.set("view engine", "ejs");

app.use(require("./routes/index"));
app.use(require("./routes/albums"));
app.use(require("./routes/album"));
app.use(require("./routes/mixtapes"));
app.use(require("./routes/mixtape"));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})