import app from "./app.js"
import http from "http";
import dotenv from "dotenv"
import mongoose from "mongoose"


dotenv.config({ path: './config.env' })
process.on("uncaughtException", (error) => {
    console.log(error)
    process.exit(1)
})


const server = http.createServer(app)

// const DB = process.env.DBURI.replace("<PASSWORD>", process.env.DBPASSWORD)
// mongoose.connect(DB, {
//     // useNewUrlParser: true,
//     // useCreateIndex: true,
//     // useFindAndModify: false,
//     // useUnifiedTopology: true,
// }).then((connections) => {
//     console.log(`DB connction completed`)
// }).catch((error) => {
//     console.log(error)
// });

const port = process.env.PORT || 5000;

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

process.on("unhandledRejection", (error) => {
    console.log(error)
    server.close(() => {
        process.exit(1)
    })
});