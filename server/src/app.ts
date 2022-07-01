import express from 'express';
const app = express()

app.use(express.static('build'));

app.get('/', function (req, res) {
    //res.send('Hello World2222ddd')
    res.sendFile(__dirname+'/../dist/build/index.html');
})
console.log("server start");
app.listen(3000, ()=>{
    console.log("server is running on 3000");
});