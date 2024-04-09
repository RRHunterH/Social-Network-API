const express = require('express');
const router = express.Router();
const { getAllThoughts, createThought, deleteThought } = require('../../controllers/thoughtController');

router.get('/', getAllThoughts);
router.post('/', createThought);
router.delete('/:id', deleteThought);

module.exports = router;
