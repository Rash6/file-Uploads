const mongoose = require('mongoose');

const gallerySchema = mongoose.Schema({
	
	profilepic: [{ type: String, require: true }],
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    }
});

module.exports = mongoose.model('gallery', gallerySchema);