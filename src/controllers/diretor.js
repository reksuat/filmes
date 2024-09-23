const Diretor = require('../models/diretor.js');

exports.createDiretor = async (req, res) => {
try {
    const diretor = new Diretor(req.body);
    await diretor.save();
    res.status(201).json(diretor);
} catch (error) {
    res.status(400).json({ error: 'Erro ao criar diretor' });
}
};

exports.getDiretor = async (req, res) => {
try {
    const diretor = await Diretor.find();
    res.status(200).json(diretor);
} catch (error) {
    res.status(400).json({ error: 'Erro ao buscar diretors' });
}
};

exports.getDiretorById = async (req, res) => {
try {
    const diretor = await Diretor.findById(req.params.id);
    res.status(200).json(diretor);
} catch (error) {
    res.status(404).json({ error: 'Diretor não encontrado' });
}
};

exports.updateDiretor = async (req, res) => {
try {
    const diretor = await Diretor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(diretor);
} catch (error) {
    res.status(400).json({ error: 'Erro ao atualizar diretor' });
}
};

exports.deleteDiretor = async (req, res) => {
try {
    await Diretor.findByIdAndDelete(req.params.id);
    res.status(204).json();
} catch (error) {
    res.status(400).json({ error: 'Erro ao deletar diretor' });
}
};