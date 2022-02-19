const express = require('express');
const router = express.Router();
const CharacterController = require('../controllers/character-controller');

router.get('/', CharacterController.search);

router.get('/:id', CharacterController.getById);

module.exports = router;
