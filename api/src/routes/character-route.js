const express = require('express');
const router = express.Router();
const catchErrors = require('../utils/catch-errors');

const CharacterController = require('../controllers/character-controller');
const Permissions = require('../middleware/permissions');
const HasPermissions = require('../middleware/has-permission');
const UserController = require('../controllers/user-controller');

router.get('/', [UserController.authorized, HasPermissions(Permissions.View_Characters)], catchErrors(CharacterController.search));

router.get('/', [UserController.authorized, HasPermissions(Permissions.View_Characters)], catchErrors(CharacterController.getById));

module.exports = router;
