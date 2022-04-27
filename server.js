const app = require('./app');
const config = require('./app/config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//connect toDB
mongoose.connect(config.db.uri)
    .then(() => {
        console.log('Connect to the database success')
    })
    .catch((error) => {
        console.log("cannot connect to the database!!!!", error);
        process.exit();
    });
    



//start server
const PORT = config.app.port;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});