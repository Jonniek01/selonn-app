const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
 
app.get('/auth/signin', async (req, res)=>{

   res.send('This route is currently under maintenance. Please check later');
});
app.get('/auth/signup', async (req,res)=>{
    res.send('This route is currently under maintenance. Please check later');
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>console.log(`server running on port ${PORT}`))