import express from 'express';
const app = express()

app.use(express.static('build'));

app.get('/', function (req, res) {
    //res.send('Hello World2222ddd')
    res.sendFile(__dirname+'/build/index.html');
})

const PORT = process.env.PORT || 3000;

console.log("server start");
app.listen(PORT, ()=>{
    console.log("server is running on 3000");
});