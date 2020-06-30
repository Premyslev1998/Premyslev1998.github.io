const express = require('express');
const nodemailer = require('nodemailer');
const logger = require('morgan');
const BodyParser = require('body-parser');
const app = express();

const cors = require('cors');

app.use(cors({
   origin: "http://localhost:3000",
   credentials: true
}));
const apiRouter = require('./routes/apiRoutes');

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended: true}));

app.use(logger('dev'));
apiRouter(app);

/* Mail */
const transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: true,
    port: 25,
    auth: {
        user: 'pomelovmail@gmail.com',
        pass: 'pomelov123'
    },
    tls: {
        rejectUnauthorized: false
    }
});
app.post('/mail', function (req, res) {
    const currentDate = new Date().toLocaleString();
    const HelperOptions = {
        from: `Заказ ${currentDate} ${req.body.email}`,
        to: 'pomelovmail@gmail.com',
        subject: `Заказ`,
        text: `====== Заказ ======
Время: ${currentDate}
Имя: ${req.body.name}
Телефон: ${req.body.telephone}
Почта: ${req.body.email}

====== Информация о заказе ======
${req.body.order}
`
    };
    transporter.sendMail(HelperOptions, (err, info) => {
        if(err) return console.error(err);
        console.log("Success!");
        console.log(info);
    });
    res.send(200);
});

app.listen(3012, function () {
    console.log("listen port: 3012")
});