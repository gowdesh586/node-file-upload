const express = require("express");
const multer = require("multer");
const upload = multer({dest: "uploads/", filename: "sample.json"});

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.post('/upload_files', upload.single("files"), uploadFiles);

function uploadFiles(req, res){
    console.log(req.files);
    res.send("File uplaoded");
}

app.listen(5000, () => {
    console.log('server is started');
});
