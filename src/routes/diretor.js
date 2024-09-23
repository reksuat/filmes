const express = require('express');
const router = express.Router();
const diretorController = require('../controllers/diretor.js');
const cep = require('../middlewares/cep.js');

router.post('/', cep, diretorController.createDiretor);
router.get('/', diretorController.getDiretor);
router.get('/:id', diretorController.getDiretorById);
router.put('/:id', diretorController.updateDiretor);
router.delete('/:id', diretorController.deleteDiretor);

module.exports = router;