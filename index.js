const express = require('express');
const app = express();
const port = 4001;
const authRouter = require('./Routes/auth');
const models = require('./models');

app.use(express.json());
app.use(express.static('Challange'));
app.use(express.static('ChallengeChapter4'));
app.use(express.static('Public'))

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/Challange/index.html");
});

app.get("/minigame", (req, res) => {
    res.sendFile(__dirname + "/ChallengeChapter4/Chapter4.html");
});

app.get("/Dashboard", async (req, res) => {
    const dataUser = await models.User_Game.findAll()
    res.render('dashboard', {Data: dataUser})
})



app.post("/userGame", async (req, res) => {
    try {
        const dataUser = await models.User_Game.create({
            userName: req.body.userName,
            password: req.body.password
        })
        res.status(201).send(dataUser)
    } catch (error) {
        res.status(422).send('Unable to insert data')
    }
})

app.get("/userGame", async (req, res) => {
    const dataUser = await models.User_Game.findAll()
    res.json(dataUser)
})

app.put("/userGame/:id", async(req, res) => {
    try {
        const id = req.params.id
        const dataUser = await models.User_Game.update({
            userName: req.body.userName,
            password: req.body.password

        }, {
            where: {
                id: id
            }
        })
        res.status(202).json(dataUser)
    } catch (error) {
        res.status(422).send('Uneble to update data')
    }
})

app.delete("/userGame/:id", async (req, res) => {
    try {
        const id = req.params.id
        const dataUser = await models.User_Game.destroy({
            where: {
                id: id
            }
        })
        res.status(202).send('Data has been deleted')
    } catch(error) {
        res.status(422).send('Unprocessable')
    }
})


app.use("/auth", authRouter);


app.listen(port, () => {
    console.log(`listening on port ${port}`);
});