const functions = require('firebase-functions');
const cors = require('cors')({origin: true});
const sgHelper = require('sendgrid').mail;
const sg = require('sendgrid')('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')

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.contactForm = functions.https.onRequest((req, res) => {
  cors(req, res, () => { 
    try {
      let {email, service, displayName, comments} = req.query,
          from_email = new sgHelper.Email(email),
          to_email = new sgHelper.Email("contacto@volartech.com"),
          subject = `Formulario de contacto: ${displayName}`,
          content = new sgHelper.Content(
            "text/plain",
            `
              -- FORMULARIO DE CONTACTO --
              FECHA
              ${new Date().toString()}

              INFORMACIÓN DE LA PERSONA 
              Nombre completo: ${displayName}
              Servicio: ${service}
              Email: ${email}

              COMENTARIOS
              ${comments}`
          ),
          mail = new sgHelper.Mail(from_email, subject, to_email, content),
          emailReq = sg.emptyRequest({
            method: 'POST',
            path: '/v3/mail/send',
            body: mail.toJSON()
          });
        sg.API(emailReq, function(error, response) {
          if (error) {
            console.log(error);
            res.status(500).end(error);
          } else {
            res.status(200).end();
          }
        });
    } catch (e) {
      console.log(e);
      res.status(500).end(e.toString());
    }
  });
});
