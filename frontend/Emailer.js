const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const bot = express()

bot.use(bodyParser.json())
bot.use(bodyParser.urlencoded({extended:false}))

bot.post('/api/email', (req,res) => {
  console.log(req.body)

  nodemailer.createTestAccount((err, account) =>{
    const htmlEmail = `
      <h4> Messsage from Talent Exchange & Meet-Up dev team: </h3>
      <br></br>
      <h2>${req.body.msg}</h2>
      <br></br>
      <h2> Thanks,</h2>
      <h2> Talent Exchange & Meep-Up </h2>
    `

    let transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
        user: 'afe5yedgmbltjter@ethereal.email',
        pass: 'DYdeb7kEDdv6xt8xWc'
      }
    })

    let mailOptions = {
      from: 'afe5yedgmbltjter@ethereal.email',
      to: req.body.recipientEmail,
      replyTo: 'afe5yedgmbltjter@ethereal.email',
      subject: req.body.subject,
      html: htmlEmail
    }

    transporter.sendMail(mailOptions, (err, info) => {
      if(err){
        return console.log(err)
      }
      console.log('Message URL: %s', nodemailer.getTestMessageUrl(info))
    })

  })
})

const PORT = 3001

bot.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
