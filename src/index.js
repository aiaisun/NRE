const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const multer = require('multer');


app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const storage = multer.diskStorage({
    destination: 'public/', //save path
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage: storage });//single image Key:myImage

app.listen(3001, function () {
    console.log('Server Starts')
})

app.get('/', (req, res) => {
    // const data = req.userData;
// res.json('123')
    res.render('home');
});
app.get('/home2', (req, res) => {
    // const data = req.userData;
// res.json('123')
    res.render('home2');
});
app.get('/home3', (req, res) => {
    // const data = req.userData;
// res.json('123')
    res.render('home3');
});
app.post('/home3/generate', upload.single(), (req, res) => {
console.log(req.body.date);
console.log('JI')
res.json(req.body)
});

app.use((req, res) => {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Page cannot found.');
});