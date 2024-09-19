import db from "../config/db"

const Schema = db.Schema;

const filmeSchema = new Schema({
    titulo : {type: String, required: true},
    ano: {type: Number, required: true, length: 4},
    genero: {type: String, required: true}
})

const Filme = db.model("Filme", filmeSchema)
module.exports = Filme