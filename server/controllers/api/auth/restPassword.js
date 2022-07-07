const { customError } = require("../../error");
const nodeMailer = require("nodemailer");
const { emailValidate, signToken } = require("../../../utils");
const { checkEmailQuery } = require("../../../database/queries");

module.exports = ({ body }, res, next) => {
  const { email } = body;
  let user;
  emailValidate
    .validateAsync(body)
    .then(() => checkEmailQuery(email))
    .then(({ rowCount, rows }) => {
      if (!rowCount) throw customError("Wrong Email", 400);
      [user] = [rows[0]];
      return user;
    })
    .then(async (user) => {
      const transporter = nodeMailer.createTransport({
        service: "Gmail",
        // debug: true,
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: process.env.EMAIL,
          pass: process.env.EMAIL_PASSWORD,
        },
        tls: {
          rejectUnauthorized: false,
        },
      });

      const token = await signToken(user);
      const mailOptions = {
        // from: account.user,
        from: process.env.EMAIL,
        to: user.email,
        subject: "Rest Password",
        html: `<h1>Hello ${user.name}</h1>,
          <p>You have requested to reset your password. Please click on the link below to reset your password.</p>
          <a href="http://localhost:5000/rest-password/${token}">Reset Password</a>`,
      };

      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          console.log("Error occurred. " + err);
          // return process.exit(1);
        } else {
          console.log("Message sent: %s", info);
          // Preview only available when sending through an Ethereal account
          // res.redirect(nodeMailer.getTestMessageUrl(info));
          // console.log("Preview URL: %s", nodeMailer.getTestMessageUrl(info));
        }
      });
    })
    // .then((data) => {
    //   console.log("data", data);
    // })
    .catch((err) =>
      err.details ? next(customError(err.details[0].message, 400)) : next(err)
    );
};
