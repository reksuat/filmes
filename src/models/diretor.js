const db = require("../config/db")

const Schema = db.Schema;

const diretorSchema = new Schema({
    endereco : {type: Object, required: true,  minLength: 8, maxLength: 8},
    telefone: {type: Number, required: true}
})

const Diretor = db.model("Diretor", diretorSchema)
module.exports = Diretor