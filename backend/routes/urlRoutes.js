import express from 'express';
import {shortenUrl,redirectUrl} from '../controllers/urlcontroller.js';
const router=express.Router();

router.post("/shorten",shortenUrl);
router.get('/shorten',(req,res)=>{
    console.log('hello');
    res.send('hello');
});
router.get('/:shortUrl',redirectUrl);

export default router;