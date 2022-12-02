const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb+srv://BHnikol:BHnikol10@goschool.wszulan.mongodb.net/goschool?authSource=admin&retryWrites=false');
        console.log('connect success fully!!!');
    } catch (error) {
        console.log('connect failure!!');
    }
}

module.exports = { connect };
