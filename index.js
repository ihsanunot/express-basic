const express = require('express');
const app = express();
const path = require('path');

// import data json
const tagsData = require('./data.json')

// panggil ejs
app.set('view engine','ejs');
// router utk views
app.set('views', path.join(__dirname,'/views'));
// buat static file
app.set(express.static(path.join(__dirname, '/public')));

app.get('/', (req,res) =>{
    res.render('home.ejs');
});

app.get('/t/:tag', (req,res) => {
    const {tag} = req.params;
    const data = tagsData[tag];

    if(data){
        res.render('tag.ejs', { data })
    } else {
        res.render('notfound', { tag })
    }

});

app.get('/random', (req,res) => {
    const angka = Math.floor(Math.random() * 10) + 1;
    res.render('random.ejs', { angka });
});


app.get('/cats', (req,res) => {
    const kucing = [
        'Belti','Cimot','Bubu','Garfild','Putih','Kucing Oren'
    ]
    res.render('cats', {kucing} )
});

app.listen(8080, () => {
    console.log(`listen on http://localhost:8080`)
});