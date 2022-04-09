const createError = require('http-errors');
const {CollectorIssues} = require("../modules/collectorIssues/collectorIssues");

const collectorMiddleware = async (req, res, next) => {
  try {
    await CollectorIssues.letsSolveTheIssue()
    return next();
  } catch (error) {
    console.error('Error collectorMiddleware: ', error);
    next(createError(400, 'BadRequest'));
  }
}

module.exports = collectorMiddleware;
