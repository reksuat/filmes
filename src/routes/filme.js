const express = require('express');
const router = express.Router();
const filmeController = require('../controllers/filme.js');

router.post('/', filmeController.createFilme);
router.get('/', filmeController.getFilme);
router.get('/:id', filmeController.getFilmeById);
router.put('/:id', filmeController.updateFilme);
router.delete('/:id', filmeController.deleteFilme);

module.exports = router;