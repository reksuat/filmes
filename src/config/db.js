const mongoose = require('mongoose');

const connectDB = async () => {
try {
    await mongoose.connect('mongodb+srv://reksuat:pJqMvPVL2PP5ZlVA@cluster0.tou9m.mongodb.net/filme');
    console.log('MongoDB conectado');
} catch (error) {
    console.error('Erro ao conectar ao MongoDB', error);
    process.exit(1);
}
};

connectDB();

module.exports = mongoose;