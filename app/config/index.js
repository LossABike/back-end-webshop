const config = {
    app: {
        port: process.env.PORT || 6969,
    },
    db: {
        uri: process.env.MONGODB_URI || "mongodb://localhost:27017/Azure"
    }
};

module.exports = config;