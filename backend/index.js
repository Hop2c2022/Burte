const express = require("express")
const UserRouter = require("./router/UserRouter")
const {connectDatabase} =require("./database/Database") 
const cors = require("cors");
const UrlRouter = require("./router/URIrouter");
const port = 8000;
const app = express();
app.use(cors());
app.use(express.json())
app.use(UserRouter, UrlRouter);
const startServer = async () =>{
    await connectDatabase();
    app.listen(port,()=>{
        console.log(`server is running at localhost:${port}`)
    })
}
app.get('/',(req ,res)=>{
    res.send('service is running')
})
startServer()