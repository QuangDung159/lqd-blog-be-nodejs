const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://quangdunglu159:CAcICxTgrIYfzkpb@dunglu-beckend-nodejs.v3vs5so.mongodb.net/dunglu-beckend-nodejs?retryWrites=true&w=majority', {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log('DB connect successfully')
    } catch (err) {
        console.log('Err :>> ', err);
        process.exit(1);
    }
};

module.exports = { connectDB };

