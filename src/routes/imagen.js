import express from 'express';
import multer from 'multer';
import { storage } from '../config/multer';
import Imagen from '../models/imagen';

const router = express.Router();

const uploader = multer({
    storage
}).single('file');

router.post('/upload', uploader, async (req, res) => {
    const { name } = req.body;
    const file = req.file;

    if(name && file){
        const newImage = new Imagen({
            fileName: name,
            fileUrl: `http://localhost:3000/${file.filename}`
        })
        await newImage.save()
        res.status(201).json({ok: 'true', image: newImage})
    }
    else{
        res.status(400).json({ok: 'false', err: 'Campos requeridos'})
    }
})

router.get('/download', async (req, res) => {
    const images = await Imagen.find();
    res.status(200).json({ok:'true', images: images})
})

export default router;