const express = require('express');
const router = express.Router();
const produtoraController = require('../controllers/produtora.js');
const cep = require('../middlewares/cep.js');

router.post('/', cep, produtoraController.createProdutora);
router.get('/', produtoraController.getProdutora);
router.get('/:id', produtoraController.getProdutoraById);
router.put('/:id', produtoraController.updateProdutora);
router.delete('/:id', produtoraController.deleteProdutora);

module.exports = router;