const mongoose = require("mongoose");

const File = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    fileName: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
});

File.virtual('url').get(function(){
    const url = process.env.URL || 'http://localhost:8000'; 

    return `${url}/files/${encodeURIComponent(this.fileName)}`;
});

module.exports = mongoose.model("File", File);