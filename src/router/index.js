const express = require('express');

const solveIssueRouter = require('../modules/solveIssue/solveIssue.router')

const router = express.Router();

router.use('/solveIssue', solveIssueRouter);

module.exports = router;