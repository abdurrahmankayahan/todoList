const express = require("express")
const mysql = require("mysql")
const bodyParser = require("body-parser")
const cors = require("cors")
const nodeMailer = require("nodemailer")


const app = express();
const port = 3000;

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "todoDB",
})

db.connect(err => {
    if (err) {

        console.error("Database Connection Error:" + err.stack)
        return;
    }
    console.log("Connected to database")
})

app.use(cors());
app.use(bodyParser.json())








//#region  User Querry


app.get("/users", (req, res) => {
    db.query("SELECT * FROM users", (error, result) => {
        if (error) {
            console.error("Error getting UsersData from Db", error);
            return res.status(500).send("Error")
        }
        res.send(result);

    })

})

app.post("/users", (req, res) => {
    const { name, eMail, password } = req.body
    db.query("INSERT INTO users (name,eMail,password) values(?,?,?)", [name, eMail, password], (err, result) => {
        if (err) {
            console.error("Error Set users data ", err)
            return res.status(101).send("Error")
        }
        res.send(result)
    })
})

app.put("/users:id", (req, res) => {
    const id = req.params.id;
    const { name, eMail, password } = req.body
    db.query("UPDATE users SET name=?, eMail=?, password=? WHERE id=?", [name, eMail, password, id], (err, result) => {
        if (err) {
            console.error("Güncelleme sırasında hata:", err)
            return res.status(100).send("Error");
        }
        res.status(202).send(true)
    })

})

app.delete("/users:id", (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM users WHERE id=?", [id], (err, result) => {
        if (err) {
            console.error("Kullanıcı silme sırasında hata :", err)
            return res.status(101).send("Error");
        }
        res.status(202).send(true)
    })
})


//#endregion











app.listen(port, () => {
    console.log(`server running  http://localhost:${port}`)
})