const createError = require('http-errors');

const optionService = require('./solveIssue.service');
const {CollectorIssues} = require("../collectorIssues/collectorIssues");

const createIssue = async (req, res, next) => {
  try {
    const { name } = req.body
    if (!name) return next(createError(400, 'Name is required field!'))
    const createdIssue = await optionService.createIssue(name)
    await CollectorIssues.letsSolveTheIssue()
    return res.json({
        message:
          `Your issue is pending free agent and will be solved within 5 second. Please send request to /solveIssue/${createdIssue?.id} for get response of the issue.`
      });
  } catch(error) {
    console.log('error: ', error.message)
    next(createError(400, error));
  }
}

const getIssue = async (req, res, next) => {
  try{
    const { id } = req.params;
    const responseStatus = await optionService.getIssue(id)
    return res.json(responseStatus)
  } catch (error) {
    console.log('error: ', error.message)
    next(createError(400, error));
  }
}

module.exports = {
  createIssue,
  getIssue,
};
