const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
const PORT=process.env.PORT || 5000;

app.listen(PORT, (error) => {
    if (error) {
        console.log(`Error starting server + ${error}`);
    }
    else {
        console.log(`Backend Server At Port No : ${PORT}`);
    }
});