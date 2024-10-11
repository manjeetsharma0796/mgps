const express = require("express")
const app = express()
const path = require('path')
const __path = path.resolve();
console.log(__dirname);

const PORT = process.env.PORT || 8000;

app.get('/', (req,res) => {
    res.sendFile(`${__path}/public/mgps.html`)
})


app.use(express.static('public'))
app.listen(PORT, () => {
    console.log(`LISTENING ON http://localhost:${PORT}`);  
})