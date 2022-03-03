const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));

app.get('/', (req, res)=>{
    res.send("Hello there, welcome to Selonn server api. <.(._.).>...<.(._.).>...<.(._.).>");
})
app.get('/auth/signin', async (req, res)=>{

   res.send('This route is currently under maintenance. Please check later');
});
app.get('/auth/signup', async (req,res)=>{
    res.send('This route is currently under maintenance. Please check later');
})
app.get('/test',(req,res,next)=>{
    res.send("Yeah. I am working fine.....<.(._.).>...<.(._.).>...<.(._.).>")
});

app.use('/users', require('./routes/users'));
app.use('/products', require('./routes/products'));
app.use('/images', require('./routes/images'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>console.log(`server running on port ${PORT}`))