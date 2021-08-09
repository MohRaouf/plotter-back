const mongoose = require("mongoose");
// const MONGODB_URL = "mongodb://localhost:27017/plotter";
const MONGODB_URL = "mongodb+srv://dbUser:dntTp5bOhZeYHtua@cluster0.yudeb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    auto_reconnect: true,
    autoIndex: false // recommended in production if using another field as index 
});
var db = mongoose.connection;
db.on("error", function(err) {
    console.error("Failed to connect to database!");
    console.error(err);
    mongoose.disconnect();
});
db.once("open", function() {
    console.info("MongoDB Connected!");
});
db.on("reconnected", function() {
    console.log("MongoDB reconnected!");
});
db.on("disconnected", function() {
    console.log("MongoDB disconnected!");
});