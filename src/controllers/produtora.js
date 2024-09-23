const Produtora = require('../models/produtora.js');

exports.createProdutora = async (req, res) => {
try {
    const produtora = new Produtora(req.body);
    await produtora.save();
    res.status(201).json(produtora);
} catch (error) {
    res.status(400).json({ error: 'Erro ao criar produtora' });
}
};

exports.getProdutora = async (req, res) => {
try {
    const produtora = await Produtora.find();
    res.status(200).json(produtora);
} catch (error) {
    res.status(400).json({ error: 'Erro ao buscar Produtoras' });
}
};

exports.getProdutoraById = async (req, res) => {
try {
    const produtora = await Produtora.findById(req.params.id);
    res.status(200).json(produtora);
} catch (error) {
    res.status(404).json({ error: 'Produtora não encontrado' });
}
};

exports.updateProdutora = async (req, res) => {
try {
    const produtora = await Produtora.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(produtora);
} catch (error) {
    res.status(400).json({ error: 'Erro ao atualizar produtora' });
}
};

exports.deleteProdutora = async (req, res) => {
try {
    await Produtora.findByIdAndDelete(req.params.id);
    res.status(204).json();
} catch (error) {
    res.status(400).json({ error: 'Erro ao deletar produtora' });
}
};