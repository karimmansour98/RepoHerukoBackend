const mongoose = require("mongoose")


//const DB_URL = "mongodb://localhost:27017/test"
const DB_URL = "mongodb+srv://admin:admin@cluster0.3av2c.mongodb.net/workdb"

function DB(){
    return mongoose.connect(DB_URL, (err) => {
            if (err) 
                throw new Error("db error")
            
            console.log("db start")
        })

}


module.exports = DB