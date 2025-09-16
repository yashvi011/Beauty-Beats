import nodemailer from "nodemailer";
import dotenv, { config } from "dotenv";
dotenv.config();

function createTransporter(congig) {
    const transporter = nodemailer.createTransport(config);
    return transporter;
}

let configuration = {
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    reqireTls: true,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
}


const sendMail = async (messageoption) => {
    const transporter = await createTransporter(configurations);
    await transporter.verify();
    await transporter.sendMail(messageoption, (error, info) => {
        if (error) {
            console.log(error);
        }
        console.log(info.response);
    });
}

export default sendMail;