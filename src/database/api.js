const express = require("express")
const mysql = require("mysql")
const bodyParser = require("body-parser")
const cors = require("cors")
const nodeMailer = require("nodemailer")


const app = express();
const port = 3000;

const MAİL = "todolist350@gmail.com"
const PASS = "todolist1998"




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
app.use(express.json());



//#region 

app.post("/authCode", async(req, res) => {

    const { eMail, code } = req.body
    let name;
    db.query("SELECT name FROM users where eMail=?", [eMail], (error, result) => {
        if (error) {
            console.error("Error getting UsersData from Db", error);
            return res.status(100).send("Error")
        }
        name = result[0]
    })




    // SMTP ayarları ile bir taşıyıcı (transporter) oluşturun
    const transporter = nodeMailer.createTransport({
        service: "gmail",
        auth: {
            user: MAİL, // E-posta adresiniz
            password: PASS
        },
    });


    const mailOptions = {
        from: MAİL, // Gönderen adresi
        to: eMail, // Alıcının e-posta adresi
        subject: 'Şifre Yenileme Talebi', // E-posta konusu
        text: ` Merhaba ${name},

        TODO LİST hesabınızın  Şifresini  değiştirmek  için gerekli olan kod aşağıda yer almaktadır:

        Doğrulama Kodu: ${code}

        Bu kod 2 dakika boyunca geçerlidir. Eğer bu isteği siz yapmadıysanız, lütfen güvenliğiniz için hemen bizimle iletişime geçin.

        Teşekkürler,
        TODO LİST Ekibi `
    };


    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('E-posta gönderme hatası:', error);
            return res.status(100).send("Error")
        }
        console.log('E-posta başarıyla gönderildi:', info.response);
        res.status(200).send(true)
    });

})


//#endregion





//#region  User Querry
app.post("/login", (req, res) => {

    console.log(req.body)

    const { eMail, password } = req.body


    db.query("SELECT * FROM users Where eMail=? and password=?", [eMail, password], (error, result) => {
        if (error) {
            console.error("Error getting UsersData from Db", error);
            return res.status(500).send("Error")
        }

        res.send(result[0])

    })

})

app.get("/users", (req, res) => {
    db.query("SELECT * FROM users", (error, result) => {
        if (error) {
            console.error("Error getting UsersData from Db", error);
            return res.status(500).send("Error")
        }
        console.log(result)
        res.send(result);

    })

})

app.post("/users", (req, res) => {
    const { name, eMail, password } = req.body
    console.log(eMail, "-", password)
    db.query("INSERT INTO users (name,eMail,password) values(?,?,?)", [name, eMail, password], (err, result) => {
        if (err) {
            console.error("Error Set users data ", err)
            return res.status(101).send(false)
        }
        res.status(200).send(true)
    })
})

app.put("/users:id", (req, res) => {
    const id = req.params.id;
    const { name, eMail, password } = req.body
    console.log(id, " ", name)
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