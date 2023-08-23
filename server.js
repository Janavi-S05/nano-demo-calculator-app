const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

const baseUrl = '/calculator'

app.use(express.json());

const baseRouter = express.Router();

baseRouter.get('/greeting', (req, res) => {
    return res.send('hello');
});

baseRouter.post('/add', (req, res) => {
    const {first, second} = req.body;
    res.json({ "res": first+second })
});


baseRouter.post('/subtract', (req, res) => {
    const{num1,num2}=req.body;
    res.json({ "ans": num1-num2 });
});

app.use(baseUrl, baseRouter);
app.listen(PORT, () => {
    console.log("Server running at PORT", PORT);
});