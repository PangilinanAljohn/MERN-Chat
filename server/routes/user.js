const express = require('express');
const protectRoute = require('../middleware/protectRoute');
const { getUserList } = require('../controllers/user');

const router = express.Router();

router.get("/", protectRoute, getUserList);

module.exports = router;