const express = require('express');
const router = express.Router();
const materielController = require('../controllers/materielController');

router.get('/read', materielController.getAllMateriels);
router.get('/footer', materielController.getFooter);
router.post('/create', materielController.createMateriel);
router.put('/update/:id', materielController.updateMateriel);
router.delete('/delete/:id', materielController.deleteMateriel);

module.exports = router;
