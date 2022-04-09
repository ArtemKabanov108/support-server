const express = require('express');

const solveIssueController = require('./solveIssue.controller');
const collectorMiddleware = require("../../middlewares/collector.middleware");

const router = express.Router();

router.post('/', collectorMiddleware, solveIssueController.createIssue);
router.get('/:id', solveIssueController.getIssue);

module.exports = router;