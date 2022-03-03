const {addProduct,getProduct, getProducts, updateProduct, deleteProduct} = require('../controllers/ProductController');

const express = require('express');
const router = express.Router();
let id,message;
/**GET */
router.get('/', async (req,res)=>{
    message = await getProducts();
    res.json(message);
})
router.get('/:id', async (req,res)=>{
    const { id } = req.params;
    message = await getProduct(id);
    res.json(message);
})

/**POST */
router.post('/', async (req,res)=>{
    message = await addProduct(req.body);
    res.json(message);
})
/**PUT */
router.put('/:id', async (req, res)=>{
    id=req.params.id;
    message = await updateProduct(id,req.body);
    res.json(message);
})
/**DELETE */
router.delete('/:id', async (req,res)=>{
    id=req.params.id;
    message = await deleteProduct(id);
    res.json(message);
})


module.exports=router;