import db from "../config/db"

const Schema = db.Schema;

const diretorSchema = new Schema({
    nome: {type: String, required: true},
    endereco : {type: Object, required: true,  minLength: 8, maxLength: 8},
    telefone: {type: Number, required: true}
})

const Produtora = db.model("Produtora", produtoraSchema)
module.exports = Produtora