const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/chat", (req, res) => {

    const { prompt } = req.body;
    console.log("promopt:",prompt)

    res.json({
        reply: `You said: ${prompt}`
    });

});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});










