const Filme = require('../models/filme.js');

exports.createFilme = async (req, res) => {
try {
    const filme = new Filme(req.body);
    await filme.save();
    res.status(201).json(filme);
} catch (error) {
    res.status(400).json({ error: 'Erro ao criar filme' });
}
};

exports.getFilme = async (req, res) => {
try {
    const filme = await Filme.find();
    res.status(200).json(filme);
} catch (error) {
    res.status(400).json({ error: 'Erro ao buscar filme' });
}
};

exports.getFilmeById = async (req, res) => {
try {
    const filme = await Filme.findById(req.params.id);
    res.status(200).json(filme);
} catch (error) {
    res.status(404).json({ error: 'Filme não encontrado' });
}
};

exports.updateFilme = async (req, res) => {
try {
    const filme = await Filme.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(filme);
} catch (error) {
    res.status(400).json({ error: 'Erro ao atualizar filme' });
}
};

exports.deleteFilme = async (req, res) => {
try {
    await Filme.findByIdAndDelete(req.params.id);
    res.status(204).json();
} catch (error) {
    res.status(400).json({ error: 'Erro ao deletar filme' });
}
};