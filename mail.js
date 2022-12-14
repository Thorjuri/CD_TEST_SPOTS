const nodemailer = require('nodemailer');
require("dotenv").config();

const sendEmail = (email, contents, teamName)=> {
    var transporter = nodemailer.createTransport({
        service: process.env.SERVICE,   // 메일 보내는 곳
        // port: 587,
        // host: process.env.HOST,  
        // secure: false,  //true 시 SSL 인증된 https 통신 필요
        // requireTLS: true ,
        auth: {
          user: process.env.MAIL_ID,  // 보내는 메일의 주소
          pass: process.env.MAIL_PASS   // 보내는 메일의 비밀번호
        }
        });
      // 메일 옵션
    var mailOptions = {
        from: process.env.MAIL_ID, // 보내는 메일의 주소
        to: email, // 수신할 이메일
        subject: "SPOTS 매칭 예약 내역 안내", // 메일 제목
        text: `🏸안녕하세요! 생활 체육시설 매칭 서비스 입니다! 제발 좀 돼라 아.. 서버에서는 되는데 왜 안 되죠?? 불굴의 한국인⚽`  // 메일 내용
        };
      // 메일 발송    
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
        console.log(error);
        } else {
        console.log('Email sent: ' + info.response);
        }
    });
}

module.exports = sendEmail;
