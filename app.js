const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const path = require("path");
const nodeMailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000;

app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(expressLayouts);
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.set("layout", "./layouts/default-layout");
app.set("view engine", "ejs");
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

app.get("/", (req, res) => {
    res.render("index", {
        title: "Ana Sayfa",
        styles: ""
    });
})

app.get("/hakkimda", (req, res) => {
    res.render("hakkimda", {
        title: "Hakkımda",
        styles: ""
    });
})

app.get("/yetenekler", (req, res) => {
    res.render("yetenekler", {
        title: "Yetenekler",
        styles: ""
    });
})

app.get("/projeler", (req, res) => {
    res.render("projeler", {
        title: "Projeler",
        styles: ""
    });
})

app.get("/iletisim", (req, res) => {
    res.render("iletisim", {
        title: "İletişim",
        formStatus: "",
        styles: ""
    });
})

app.post('/send', async (req, res) => {
    const output = `
        <p>Yeni mesaj</p>
        <h3>Mesaj Detayları</h3>
        <ul>
            <li>E-Posta: ${req.body.email}</li>
            <li>Konu: ${req.body.konu}</li>
        </ul>
        <h3>Mesaj</h3>
        <p>${req.body.text}</p>
    `

    let transporter = nodeMailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: process.env.USER,
          pass: process.env.PASS,
        },
      });
    
    let mailOptions = {
        from: '"Nodemailer" <aykutsakigarbage@gmail.com>',
        to: "aykutsakibusiness@gmail.com",
        subject: "Portfoli Mesaj",
        html: output
    }
    
    await transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            res.render("iletisim", {
                title: "İletişim",
                formStatus: "Gönderilemedi!",
                styles: `
                    <style>
                        .form-text {
                            color: #ff0033;
                        }
                    </style>    
                `
            });
            return console.log(err);
        }

        res.render("iletisim", {
            title: "İletişim",
            formStatus: "Gönderildi!",
            styles: `
                <style>
                    .form-text {
                        color: #4BB543;
                    }
                </style>    
            `
        });
        
        console.log("Message sent: %s", info.messageId);
        
        console.log("Preview URL: %s", nodeMailer.getTestMessageUrl(info));
    });
})

app.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Uygulama ${port} portunda başlatıldı.`);
    }
})