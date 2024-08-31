/* GOOGLE_CLIENT_ID=23132053156-ghvrhpcj2bi4k4gk5pbb6fju1u3i4oqi.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=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 */

/* 
send mail */

/* let config = {
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  };
  let transporter = nodeMailer.createTransport(config);
  let MailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "mailgen",
      link: "https://mailgen.mjs",
    },
  });
  let reponse = {
    body: {
      name: "Dave",
      intro: "your bill has arrive",
      table: {
        data: [
          {
            item: "Nodemailer stack book",
            description: "A Backend stack application",
            price: "$10.99",
          },
        ],
      },
      outro: "looking forward to do more businness",
    },
  };

  let mail = MailGenerator.generate(reponse);
  let message = {
    from: process.env.EMAIL,
    to: email,
    subject: "place order",
    html: mail,
  };
  transporter
    .sendMail(message)
    .then(() => {
      return res.status(201).json("you should receive an email");
    })
    .catch((err) => {
      return res.status(500).json(err);
    });
} */

/// testing email

// test account
/* 
export async function sendTestingEmail(req, res) {
    let testAccount = await nodeMailer.createTestAccount();
    // transporter
    let transporter = nodeMailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // Use `true` for port 465, `false` for all other ports
      auth: {
        user: "maddison53@ethereal.email",
        pass: "jn7jnAPss4f63QBp6D",
      },
    });
    // send mail with defined transport object
    let message = {
      from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
      to: "bar@example.com, baz@example.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    };
  
    transporter
      .sendMail(message)
      .then((info) => {
        return res.status(201).json({
          msg: "you should receie an Email",
          info: info.messageId,
          preview: nodeMailer.getTestMessageUrl(info),
        });
      })
      .catch((err) => {
        return res.status(500).json(err);
      });
  } */
