const express = require('express');
//const path=require('path')
const Users = require('../models/user.model');
const Gallery= require('../models/gallery.model')

const router = express.Router();

const upload = require('../middelwares/uploads');

const fs = require('fs');

const path = require('path');

router.get('/', async (req, res) => {
	try {
		const gallery = await Gallery.find({}).lean().exec();

		return res.status(200).send({ gallery: gallery });
	} catch (error) {
		return res.status(500).send({ error: error.message });
	}
});



router.post('/multiple', upload.array('profilepic', 5), async (req, res) => {
	try {
		const filsepaths = req.files.map((file) => {
			return file.path;
		});

		const gallery = await Gallery.create({
			
			profilepic: filsepaths,
            user_id:req.body
        }).lean().exec();

		return res.status(200).send({ gallery: gallery  });
	} catch (error) {
		return res.status(500).send({ error: error.message });
	}
});



module.exports = router;
