//logic for shortening URLs and redirecting short URLs

import Url from '../models/Url.js';
import shortid from 'shortid';

//Post /shorten
export const shortenUrl = async (req,res) => {
    const {originalUrl} = req.body;
    console.log(originalUrl);
    
    if(!originalUrl){
        console.log("original url is empty");
        
    }
    try {
        const shortUrl=shortid.generate();
        const newUrl = new Url({originalUrl,shortUrl});
        await newUrl.save();

        res.json({originalUrl,shortUrl});
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Error creating new URL'});
        
    }
};


// GET  /:shortUrl
export const redirectUrl =async(req,res) => {
    try {
        const {shortUrl} = req.params;
        const url = await Url.findOne({shortUrl});
        if(url){
            return res.redirect(url.originalUrl);
        }
        else{
            return res.status(404).json(`url not found`);
        }
    } catch (error) {
        console.error( error);
        res.status(500).json("server error");

        
    }
};


